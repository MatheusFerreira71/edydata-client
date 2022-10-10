import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/User';
import { UserService } from './services/user/user.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'edydata-client';
  token: string = '';
  "user": User;

  constructor(private userSrv: UserService) {}

  ngOnInit(): void {
    this.logIn()
  }

  logIn(): void {
    this.token = String(window.localStorage.getItem('token'));
    this.userSrv.findMe(this.token).subscribe(user => {
      this.user = user;
    })
  }

  logOut(): void {
    window.localStorage.removeItem('token');
    window.location.href = env.clientUrl
  }
}
