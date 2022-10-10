import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ClientContentComponent } from './pages/client-content/client-content.component';
import { ClientFormComponent } from './pages/client-form/client-form.component';
import { ClientsByDateComponent } from './pages/clients-by-date/clients-by-date.component';
import { ClientsByNameComponent } from './pages/clients-by-name/clients-by-name.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { HomeComponent } from './pages/home/home.component';
import { ImportClientsComponent } from './pages/import-clients/import-clients.component';
import { LoginComponent } from './pages/login/login.component';
import { SalaryAndCountComponent } from './pages/salary-and-count/salary-and-count.component';
import { CivilStatePipe } from './pipes/civil-state.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { UpdateAccountComponent } from './pages/update-account/update-account.component';



registerLocaleData(localePt);
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
    ClientFormComponent,
    TitleComponent,
    TableComponent,
    ClientContentComponent,
    ConfirmDialogComponent,
    GenderPipe,
    CivilStatePipe,
    UserFormComponent,
    ProfileComponent,
    ChangePasswordComponent,
    UpdateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatMenuModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
