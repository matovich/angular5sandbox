import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from'../password-validator';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(fb: FormBuilder, private _loginService: LoginService) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])]
    });
  }

  login() {
    console.log(this.form.value); // prints from values in json format

    var result = this._loginService.login(this.form.controls['username'].value, this.form.controls['password'].value);
    if(!result){
      this.form.controls['password'].setErrors({ invalidLogin: true});
    }

  }
}
