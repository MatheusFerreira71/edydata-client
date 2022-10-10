import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from 'src/app/interfaces/Client';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-clients-by-date',
  templateUrl: './clients-by-date.component.html',
  styleUrls: ['./clients-by-date.component.scss']
})
export class ClientsByDateComponent implements OnInit {
  "startDate": Date;
  "endDate": Date;
  "clients$": Observable<Client[]>;
  constructor(private clientSrv: ClientService) { }

  ngOnInit(): void {
  }

  getByDate(form: NgForm): void {
    if (form.valid) {
      this.clients$ = this.clientSrv.findByDate(this.startDate, this.endDate);
    }
  }
}
