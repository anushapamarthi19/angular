import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'structure-for';
  items=[2,4,5,6,7,8]
  obj={
    name:"raj",
  age:25,
  salary:34340
}
item=Item[][
  {id:1,name:"items 1"},
  {id:2,name:"item 2"},
  {id:3,name:"item 3"}
]
fun(index:number,item):number
{
  return item:id
}
}