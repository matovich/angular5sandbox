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

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, RatingComponent, ProductComponent, TruncatePipe, BsJumbotronComponent, UserFormComponent, LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
