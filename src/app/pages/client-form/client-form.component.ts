import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { ClientBody } from 'src/app/interfaces/Client';
import { Error } from 'src/app/interfaces/Error';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  token: string = '';
  clientBody: ClientBody = {
    nome: '',
    CPF: '',
    especie: '',
    estadoCivil: '',
    salario: 0,
    sexo: '',
    bairro: '',
    celular: '',
    cep: '',
    cidade: '',
    complemento: '',
    conjuge: '',
    dataNascimento: undefined,
    email: '',
    endereco: '',
    mae: '',
    numero: '',
    pai: '',
    rg: '',
    tituloEleitor: ''
  }
  "id": number;
  constructor(
    private dialog: MatDialog,
    private location: Location,
    private snackBar: MatSnackBar,
    private clientSrv: ClientService,
    private routes: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.token = String(window.localStorage.getItem('token'));
    this.id = Number(this.routes.snapshot.paramMap.get("id"));
    if (this.id) {
      this.getClient(this.id)
    }
  }

  getClient(id: number): void {
    this.clientSrv.findById(id).subscribe(client => {
      const {
        CPF,
        especie,
        estadoCivil,
        nome,
        salario,
        sexo,
        bairro,
        celular,
        cep,
        cidade,
        complemento,
        conjuge,
        dataNascimento,
        email,
        endereco,
        mae,
        numero,
        pai,
        rg,
        tituloEleitor
      } = client;

      this.clientBody = {
        CPF,
        especie,
        estadoCivil,
        nome,
        salario: Number(salario),
        sexo,
        bairro,
        celular,
        cep,
        cidade,
        complemento,
        conjuge,
        dataNascimento,
        email,
        endereco,
        mae,
        numero,
        pai,
        rg,
        tituloEleitor
      };
    })
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

  handleSubmit(f: NgForm) {
    if (this.id) {
      if (f.valid) {
        this.clientSrv.updateClient({ id: this.id, ...this.clientBody }, this.token).subscribe(() => {
          this.clearBody()
          this.snackBar.open('Cliente editado com sucesso', "Entendi", { duration: 5000 });
          this.location.back();
        }, (err: Error) => {
          this.snackBar.open(`${err.message}`, "Entendi", { duration: 5000 });
        })
      } else {
        this.snackBar.open('Preencha os campos obrigatórios', "Entendi", { duration: 5000 });
      }
    } else {
      if (f.valid) {
        this.clientSrv.createClient(this.clientBody, this.token).subscribe(() => {
          this.clearBody()
          this.snackBar.open('Cliente cadastrado com sucesso', "Entendi", { duration: 5000 })
        }, (err: Error) => {
          this.snackBar.open(`${err.message}`, "Entendi", { duration: 5000 });
        })
      } else {
        this.snackBar.open('Preencha os campos obrigatórios', "Entendi", { duration: 5000 });
      }
    }
  }

  clearBody(): void {
    this.clientBody = {
      nome: '',
      CPF: '',
      especie: '',
      estadoCivil: '',
      salario: 0,
      sexo: '',
      bairro: '',
      celular: '',
      cep: '',
      cidade: '',
      complemento: '',
      conjuge: '',
      dataNascimento: undefined,
      email: '',
      endereco: '',
      mae: '',
      numero: '',
      pai: '',
      rg: '',
      tituloEleitor: ''
    };
  }
}
