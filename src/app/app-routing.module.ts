import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './pages/client-form/client-form.component';
import { ClientsByDateComponent } from './pages/clients-by-date/clients-by-date.component';
import { ClientsByNameComponent } from './pages/clients-by-name/clients-by-name.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { HomeComponent } from './pages/home/home.component';
import { ImportClientsComponent } from './pages/import-clients/import-clients.component';
import { LoginComponent } from './pages/login/login.component';
import { SalaryAndCountComponent } from './pages/salary-and-count/salary-and-count.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'clients-by-name', component: ClientsByNameComponent },
  { path: 'clients-by-date', component: ClientsByDateComponent },
  { path: 'salary-and-count', component: SalaryAndCountComponent },
  { path: 'client/create', component: ClientFormComponent, pathMatch: 'full' },
  { path: 'import-clients', component: ImportClientsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
