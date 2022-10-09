import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { ClientsByNameComponent } from './pages/clients-by-name/clients-by-name.component';
import { ClientsByDateComponent } from './pages/clients-by-date/clients-by-date.component';
import { SalaryAndCountComponent } from './pages/salary-and-count/salary-and-count.component';
import { ImportClientsComponent } from './pages/import-clients/import-clients.component';
import { ClientFormComponent } from './pages/client-form/client-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateAccountComponent,
    ClientsByNameComponent,
    ClientsByDateComponent,
    SalaryAndCountComponent,
    ImportClientsComponent,
    ClientFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
