import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from 'src/app/auth/service/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers : [AuthService],
  exports : [
    LoginComponent,
    RegisterComponent,
    UserComponent
  ]
})
export class AuthModule { }
