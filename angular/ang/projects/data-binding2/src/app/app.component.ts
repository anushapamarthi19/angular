import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding2';
  name="something"
  inp!:string;
  imgUrl='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  isDark=true;
  isMain=true;
  something=true;
  prasad="uppercase";
  mycolor='blue';
  nocolor='';
  myMethod():void{
    console.log("helloooooo")
    if(this.isDark){
      this.isDark=false
    }
    else{
      this.isDark=true
    }
  }
  inputchange(e:Event){
    console.log(e)
    this.inp=(e.target as HTMLInputElement).value;
    console.log(this.inp);
  }
}
