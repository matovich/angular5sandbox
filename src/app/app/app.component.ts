import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
})

export class AppComponent {
  title = 'Angular 5 Sandbox';
  imageUrl = 'https://www.w3schools.com/html/pic_mountain.jpg';
  onClickMe($event){
    console.log("Clicked", $event);
  }
}
