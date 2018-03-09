import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  countries = ['United States', 'Singapore', 'Hong Kong', 'Australia'];
  myModel = new User('','','');
  submitted = false;
  
  constructor() { }

  onSubmit() {
    this.submitted = true;
  }

  onClear() {
    this.submitted = false;
    this.myModel.firstName = '';
    this.myModel.email = '';
    this.myModel.country = '';
  }

}
