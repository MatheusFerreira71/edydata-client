import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticatedUser, CreateUser, Login, UpdatePassword, UpdateUser, User } from 'src/app/interfaces/User';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findMe(token: string): Observable<User> {
    const apiUri = `${env.apiUrl}user`;
    return this.http.get<User>(apiUri, { headers: { ['Authorization']: `Bearer ${token}` } });
  }

  createUser(data: CreateUser): Observable<User> {
    const apiUri = `${env.apiUrl}user`;
    return this.http.post<User>(apiUri, data);
  }

  updateUser(data: UpdateUser, token: string): Observable<User> {
    const apiUri = `${env.apiUrl}user`;
    return this.http.put<User>(apiUri, data, { headers: { ['Authorization']: `Bearer ${token}` } });
  }

  delete(token: string): Observable<string> {
    const apiUri = `${env.apiUrl}user`;
    return this.http.delete<string>(apiUri, { headers: { ['Authorization']: `Bearer ${token}` } });
  }

  changePassword(data: UpdatePassword, token: string): Observable<string> {
    const apiUri = `${env.apiUrl}change-password`;
    return this.http.put<string>(apiUri, data,  { headers: { ['Authorization']: `Bearer ${token}` } });
  }

  authenticate(data: Login): Observable<AuthenticatedUser> {
    const apiUri = `${env.apiUrl}authenticate`;
    return this.http.post<AuthenticatedUser>(apiUri, data);
  }
}
