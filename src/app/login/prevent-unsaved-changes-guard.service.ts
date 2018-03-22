import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Injectable()
export class PreventUnsavedChangesGuardService implements CanDeactivate<LoginComponent>{

  constructor() { }

  canDeactivate(component: LoginComponent){
    if(component.form.dirty)
      return confirm("You have unsaved changes. Are you sure you wish to leave this page?")

    return true;
  }

}
