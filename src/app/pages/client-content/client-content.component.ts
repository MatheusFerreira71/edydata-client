import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { Client } from 'src/app/interfaces/Client';
import { User } from 'src/app/interfaces/User';
import { ClientService } from 'src/app/services/client/client.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-client-content',
  templateUrl: './client-content.component.html',
  styleUrls: ['./client-content.component.scss']
})
export class ClientContentComponent implements OnInit {
  "client": Client;
  "id": number;
  token: string = '';
  "user": User;
  constructor(
    private routes: ActivatedRoute,
    private clientSrv: ClientService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private userSrv: UserService
  ) { }

  ngOnInit(): void {
    this.token = String(window.localStorage.getItem('token'));
    this.userSrv.findMe(this.token).subscribe(user => {
      this.user = user;
    })
    this.id = Number(this.routes.snapshot.paramMap.get("id"));
    this.getClient()
  }

  getClient(): void {
    this.clientSrv.findById(Number(this.id)).subscribe(client => {
      this.client = client;
    })
  }

  updateClient(): void {
    this.router.navigate([`/client/update/${this.id}`],);
  }

  deleteClient(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { question: "Deseja excluir este cliente?" },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clientSrv.deleteClient(this.id, this.token).subscribe(message => {
          this.router.navigate(['/']);
          this.snackBar.open(message, "Entendi", { duration: 5000 })
        }, (err: Error) => {
          this.snackBar.open(`${err.message}`, "Entendi", { duration: 5000 });
        })
      }
    });
  }
}
