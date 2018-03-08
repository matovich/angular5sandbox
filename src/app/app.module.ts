import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { ProductsComponent } from './products/products.component';
import { RatingComponent } from './rating/rating.component';
import { ProductComponent } from './product/product.component';
import { TruncatePipe } from './truncate.pipe';
import { BsJumbotronComponent } from './bs-jumbotron/bs-jumbotron.component';

@NgModule({
  declarations: [
    AppComponent, ProductsComponent, RatingComponent, ProductComponent, TruncatePipe, BsJumbotronComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
