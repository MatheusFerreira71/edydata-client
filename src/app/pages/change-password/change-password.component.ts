import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { UpdatePassword } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  hide: boolean = true;
  passwordBody: UpdatePassword = {
    newPassword: '',
    oldPassword: ''
  }
  token: string = '';

  constructor(
    private dialog: MatDialog,
    private location: Location,
    private userSrv: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.token = String(window.localStorage.getItem('token'));
  }

  handleSubmit(f: NgForm) {
    if (f.valid) {
      this.userSrv.changePassword(this.passwordBody, this.token).subscribe(() => {
        this.snackBar.open('Senha alterada com sucesso', "Entendi", { duration: 5000 })
        this.router.navigate(['/profile']);
      }, (err: Error) => {
        this.snackBar.open(`${err.message}`, "Entendi", { duration: 5000 });
      })
    } else {
      this.snackBar.open('Preencha os campos obrigatórios', "Entendi", { duration: 5000 });
    }
  }

  voltar(f: NgForm) {
    if (f.dirty || f.touched) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: { question: "Há dados não salvos. Deseja realmente voltar?" },
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.location.back();
        }
      });
    } else {
      this.location.back();
    }
  }
}
