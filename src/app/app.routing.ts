import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login/login.component';
import { ObservableSampleComponent } from './observable-sample/observable-sample.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ProductsComponent } from './products/products.component';
import { BsJumbotronClientComponent } from './bs-jumbotron-client/bs-jumbotron-client.component';
import { StuffComponent } from './stuff/stuff.component';
import { AuthGuardService } from './login/auth-guard.service';
import { PreventUnsavedChangesGuardService } from './login/prevent-unsaved-changes-guard.service';


export const Routing = RouterModule.forRoot([
    { path: '', component: HomeComponent, canActivate:[AuthGuardService] },
    { path: 'Login', component: LoginComponent, canDeactivate: [PreventUnsavedChangesGuardService] },
    { path: 'Observable', component: ObservableSampleComponent },
    { path: 'UserForm', component: UserFormComponent },
    { path: 'Products', component: ProductsComponent },
    { path: 'Jumbotron', component: BsJumbotronClientComponent },
    { path: 'Stuff', component: StuffComponent },
    { path: '**', component: NotFoundComponent }
]);