import { Component } from '@angular/core';
interface Item{
  id:number,
  name:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  m=false;
  g=true;
  x="red";
  y="blue";
  title = 'structure-for';
  item=[2,3,5,6,7,84,90]
  obj={
    name:"raj",
    age:25,
    salary:20000
  }
  items: Item[]=[
{id:1,name:"item 1"},
{id:2 ,name:"item 2"},
{id:3,name:"item 3"},
{id:4,name:"item 4"},

  ]
  fun(index:number,item:Item):number
  {
    return item.id
  }
}