import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user/user.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  "user": User;
  token: string = '';

  constructor(private userSrv: UserService, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.token = String(window.localStorage.getItem('token'));
    this.userSrv.findMe(this.token).subscribe(user => {
      this.user = user;
    });
  }

  deleteUser(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { question: "Deseja excluir sua conta?" },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userSrv.delete(this.token).subscribe(message => {
          this.snackBar.open(message, "Entendi", { duration: 5000 })
          window.localStorage.removeItem('token');
          window.location.href = env.clientUrl
        }, (err: Error) => {
          this.snackBar.open(`${err.message}`, "Entendi", { duration: 5000 });
        })
      }
    });
  }

}
