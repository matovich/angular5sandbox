import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {
  imageUrl = 'https://www.w3schools.com/html/pic_mountain.jpg';
  
  constructor() { }
  
  ngOnInit() {
  }

  onClickMe($event){
    console.log("Clicked", $event);
  }



}
