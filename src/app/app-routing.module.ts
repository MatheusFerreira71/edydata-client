import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisconnectedGuard } from './guards/disconnected.guard';
import { LoggedGuard } from './guards/logged.guard';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ClientContentComponent } from './pages/client-content/client-content.component';
import { ClientFormComponent } from './pages/client-form/client-form.component';
import { ClientsByDateComponent } from './pages/clients-by-date/clients-by-date.component';
import { ClientsByNameComponent } from './pages/clients-by-name/clients-by-name.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { HomeComponent } from './pages/home/home.component';
import { ImportClientsComponent } from './pages/import-clients/import-clients.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SalaryAndCountComponent } from './pages/salary-and-count/salary-and-count.component';
import { UpdateAccountComponent } from './pages/update-account/update-account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [DisconnectedGuard] },
  { path: 'create-account', component: CreateAccountComponent, canActivate: [DisconnectedGuard] },
  { path: 'update-account', component: UpdateAccountComponent, canActivate: [LoggedGuard] },
  { path: 'clients-by-name', component: ClientsByNameComponent },
  { path: 'clients-by-date', component: ClientsByDateComponent },
  { path: 'salary-and-count', component: SalaryAndCountComponent },
  { path: 'client/create', component: ClientFormComponent, pathMatch: 'full', canActivate: [LoggedGuard] },
  { path: 'client/update/:id', component: ClientFormComponent, pathMatch: 'full', canActivate: [LoggedGuard] },
  { path: 'client/:id', component: ClientContentComponent,  pathMatch: 'full' },
  { path: 'import-clients', component: ImportClientsComponent, canActivate: [LoggedGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedGuard] },
  { path: 'change-password', component: ChangePasswordComponent, canActivate: [LoggedGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
