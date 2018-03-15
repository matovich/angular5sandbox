import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitHubComponent } from './git-hub/git-hub.component';
import { LoginComponent } from './login/login.component';
import { ObservableSampleComponent } from './observable-sample/observable-sample.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ProductsComponent } from './products/products.component';
import { BsJumbotronClientComponent } from './bs-jumbotron-client/bs-jumbotron-client.component';
import { StuffComponent } from './stuff/stuff.component';
import { GitHubUserComponent } from './git-hub-user/git-hub-user.component';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'GitHub', component: GitHubComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'Observable', component: ObservableSampleComponent },
    { path: 'UserForm', component: UserFormComponent },
    { path: 'Products', component: ProductsComponent },
    { path: 'Jumbotron', component: BsJumbotronClientComponent },
    { path: 'Stuff', component: StuffComponent },
    { path: 'GitHub/user/:login/:score', component: GitHubUserComponent },
    { path: '**', component: NotFoundComponent }
]);