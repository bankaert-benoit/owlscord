import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth/auth.component';
import { ServerComponent } from './server/server.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: 'auth/register', component: RegisterComponent},
  {path: 'auth/login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    ServerComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
