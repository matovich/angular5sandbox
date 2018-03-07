import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <img alt='missing image' src="{{imageUrl}}" />
  <app-products></app-products>
  <button class="btn btn-primary" (click)="onClickMe($event)">Submit</button>`,
  providers: [ProductService]
})

export class AppComponent {
  title = 'Angular 5 Sandbox';
  imageUrl = 'https://www.w3schools.com/html/pic_mountain.jpg';
  onClickMe($event){
    console.log("Clicked", $event);
  }
}
