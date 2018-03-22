import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { LoginComponent }   from './login/login.component'; 
import { LoginService }   from './login.service'; 
import { PreventUnsavedChangesGuardService } from './prevent-unsaved-changes-guard.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [],
  providers: [
    LoginService,
    PreventUnsavedChangesGuardService,
    AuthGuardService
  ]
})
export class LoginModule { }
