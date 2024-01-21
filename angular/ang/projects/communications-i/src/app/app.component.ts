import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'communications-i';
  inp=""
  inp2=""
  parentPerson={
    name:'john Doe',
    age:25
  }
}
