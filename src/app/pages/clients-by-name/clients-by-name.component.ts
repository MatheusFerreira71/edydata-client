import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from 'src/app/interfaces/Client';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-clients-by-name',
  templateUrl: './clients-by-name.component.html',
  styleUrls: ['./clients-by-name.component.scss']
})
export class ClientsByNameComponent {
  name: string = '';
  "clients$": Observable<Client[]>;
  constructor(private clientSrv: ClientService) { }

  getByName(form: NgForm): void {
    if (form.valid) {
      this.clients$ = this.clientSrv.findByName(this.name);
    }
  }
}
