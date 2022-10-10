import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Client, ClientBody, ClientUpdateBody, CountAndSalary } from 'src/app/interfaces/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  findById(id: number): Observable<Client> {
    const apiUri = `${env.apiUrl}client/${id}`;
    return this.http.get<Client>(apiUri);
  }

  findByName(name: string): Observable<Client[]> {
    const apiUri = `${env.apiUrl}client/name?name=${name}`;
    return this.http.get<Client[]>(apiUri);
  }

  findByDate(startDate: Date, endDate: Date): Observable<Client[]> {
    const apiUri = `${env.apiUrl}client/date?startDate=${startDate}&endDate=${endDate}`;
    return this.http.get<Client[]>(apiUri);
  }

  findSalaryAndCount(field: 'cidade' | 'sexo' | 'especie'): Observable<CountAndSalary[]> {
    const apiUri = `${env.apiUrl}client/count-and-salary?field=${field}`;
    return this.http.get<CountAndSalary[]>(apiUri);
  }

  createClient(data: ClientBody, token: string): Observable<Client> {
    const apiUri = `${env.apiUrl}client`;
    return this.http.post<Client>(apiUri, data, { headers: { ['Authorization']: `Bearer ${token}` } });
  }

  importClients(data: FormData, token: string): Observable<string> {
    const apiUri = `${env.apiUrl}client/import`;
    return this.http.post<string>(apiUri, data, { headers: { ['Authorization']: `Bearer ${token}` } });
  }

  updateClient(data: ClientUpdateBody, token: string): Observable<Client> {
    const apiUri = `${env.apiUrl}client`;
    return this.http.put<Client>(apiUri, data, { headers: { ['Authorization']: `Bearer ${token}` } });
  }

  deleteClient(id: number, token: string): Observable<string> {
    const apiUri = `${env.apiUrl}client/${id}`;
    return this.http.delete<string>(apiUri, { headers: { ['Authorization']: `Bearer ${token}` } });
  }
}
