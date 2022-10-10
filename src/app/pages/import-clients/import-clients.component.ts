import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-import-clients',
  templateUrl: './import-clients.component.html',
  styleUrls: ['./import-clients.component.scss']
})
export class ImportClientsComponent implements OnInit {
  "file": File;
  imgName: string = '';
  token: string = '';

  constructor(private snackBar: MatSnackBar, private clientSrv: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.token = String(window.localStorage.getItem('token'));
  }

  handleSubmit(f: NgForm) {
    if (f.valid && this.file) {
      const multipartForm = new FormData();
      multipartForm.append('file', this.file);
      this.clientSrv.importClients(multipartForm, this.token).subscribe(importedClients => {
        this.snackBar.open(importedClients, "Entendi", { duration: 5000 });
        this.router.navigate(['/']);
      }, (err: Error) => {
        this.snackBar.open(`${err.message}`, "Entendi", { duration: 5000 });
      })
    } else {
      this.snackBar.open('Preencha os campos obrigatórios', "Entendi", { duration: 5000 });
    }
  }

  handleFileInput(input: any) {
    if (input.target.files[0]) {
      const file: File = input.target.files[0];
      if (
        file.type === "text/xml"
      ) {
        this.file = file;
        this.imgName = file.name;
      } else {
        this.snackBar.open(
          "Selecione um arquivo XML",
          "Entendi",
          { duration: 5000 }
        );
      }
    }
  }
}
