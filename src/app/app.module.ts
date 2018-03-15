import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { ProductsComponent } from './products/products.component';
import { RatingComponent } from './rating/rating.component';
import { ProductComponent } from './product/product.component';
import { TruncatePipe } from './truncate.pipe';
import { BsJumbotronComponent } from './bs-jumbotron/bs-jumbotron.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { ObservableSampleComponent } from './observable-sample/observable-sample.component';
import { GitHubService } from './git-hub.service';
import { GitHubComponent } from './git-hub/git-hub.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './app.routing';
import { BsJumbotronClientComponent } from './bs-jumbotron-client/bs-jumbotron-client.component';
import { StuffComponent } from './stuff/stuff.component';
import { GitHubUserComponent } from './git-hub-user/git-hub-user.component';

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, RatingComponent, ProductComponent, TruncatePipe, BsJumbotronComponent,
    UserFormComponent, LoginComponent, ObservableSampleComponent, GitHubComponent, HomeComponent, 
    NotFoundComponent, BsJumbotronClientComponent, StuffComponent, GitHubUserComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, ReactiveFormsModule, routing
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

