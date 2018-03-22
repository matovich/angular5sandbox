import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GitHubModule } from './github/git-hub.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app/app.component';
import { ProductsComponent } from './products/products.component';
import { RatingComponent } from './rating/rating.component';
import { ProductComponent } from './product/product.component';
import { TruncatePipe } from './truncate.pipe';
import { BsJumbotronComponent } from './bs-jumbotron/bs-jumbotron.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ObservableSampleComponent } from './observable-sample/observable-sample.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BsJumbotronClientComponent } from './bs-jumbotron-client/bs-jumbotron-client.component';
import { StuffComponent } from './stuff/stuff.component';

import { Routing } from './app.routing';
import { GitHubRouting } from './github/git-hub.routing';

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, RatingComponent, ProductComponent, TruncatePipe, BsJumbotronComponent,
    UserFormComponent, ObservableSampleComponent,  HomeComponent, 
    NotFoundComponent, BsJumbotronClientComponent, StuffComponent, 
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    ReactiveFormsModule, 
    GitHubModule,
    LoginModule,
    GitHubRouting, 
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

