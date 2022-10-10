import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreateUser, Login, UpdateUser, UserFormControl } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user/user.service';
import { environment as env } from 'src/environments/environment';

import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() "cadastro": boolean;
  @Input() "edicao": boolean;
  @Input() "login": boolean;
  hide: boolean = true;
  token: string = '';
  userBody: UserFormControl = {
    name: "",
    email: "",
    password: ""
  }

  constructor(
    private dialog: MatDialog,
    private location: Location,
    private userSrv: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.token = String(window.localStorage.getItem('token'));
  }

  handleSubmit(f: NgForm): void {
    if (this.cadastro) {
      if (f.valid) {
        const data: CreateUser = this.userBody as CreateUser
        this.userSrv.createUser(data).subscribe(() => {
          this.clearBody()
          this.snackBar.open('Usuário cadastrado com sucesso', "Entendi", { duration: 5000 })
          this.router.navigate(['/login']);
        }, (err: Error) => {
          this.snackBar.open(`${err.message}`, "Entendi", { duration: 5000 });
        })
      } else {
        this.snackBar.open('Preencha os campos obrigatórios', "Entendi", { duration: 5000 });
      }
    } else if (this.edicao) {
      if (f.valid) {
        const data: UpdateUser = { email: this.userBody.email, name: this.userBody.name }
        this.userSrv.updateUser(data, this.token).subscribe(() => {
          this.clearBody()
          this.snackBar.open('Usuário editado com sucesso', "Entendi", { duration: 1000 }).afterDismissed().subscribe(() => {
            window.location.href = env.clientUrl
          });
          window.location
        }, (err: Error) => {
          this.snackBar.open(`${err.message}`, "Entendi", { duration: 5000 });
        })
      } else {
        this.snackBar.open('Preencha os campos obrigatórios', "Entendi", { duration: 5000 });
      }
    } else if (this.login) {
      if (f.valid) {
        const data: Login = { email: this.userBody.email, password: this.userBody.password || '' }
        this.userSrv.authenticate(data).subscribe(loggedUser => {
          window.localStorage.setItem('token', loggedUser.token);
          this.clearBody()
          this.snackBar.open('Usuário autenticado com sucesso', "Entendi", { duration: 1000 }).afterDismissed().subscribe(() => {
            window.location.href = env.clientUrl
          });
        }, (err: Error) => {
          this.snackBar.open(`${err.message}`, "Entendi", { duration: 5000 });
        })
      } else {
        this.snackBar.open('Preencha os campos obrigatórios', "Entendi", { duration: 5000 });
      }
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

  clearBody(): void {
    this.userBody = {
      name: '',
      password: '',
      email: ''
    }
  }

}
