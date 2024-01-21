import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'summary';
  name="shekar"
  isdisabled=false;
  isCenter=true;
  input=""
  na=""
  display()
  {
    console.log("hello world")
  }
  inp(e:any)
  {
        this.input=e.target.value;
  }
  
}
