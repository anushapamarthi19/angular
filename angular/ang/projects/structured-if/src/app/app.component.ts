import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'structured-if';
  showDiv=true;
  isLogin=true;  
  afterloginmessage='';
  show=false;
  x=3;
  days=0
  constructor(){
    enum Days{
    sunday,
    monday,
    tuesday,
    wednesday,
    thrusday,
    friday,
    saturday,
    }
    this.days=Days.thrusday
  }
  items=[2,5,6,4,7]
  }

