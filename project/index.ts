let a: number | string = 55//type annotation
let b:string = "raj"
let c:boolean = true
a="prasad"
let arr:(number|string)[]=[15,25,5,6,85,'raj123','raj']
let fruits:string[]=['banana','orangr','mango']
//Tuples
const details:[string,number,string]=["prasad",20000,"abc@gmail.com"]
details.push('raj')
console.log(details)
//Enums
enum Colors{
    Red=5,
    Yellow,
    Green,
    Blue,
}
let myColor:Colors=Colors.Green
console.log(Colors[myColor])
enum Days{
    sunday,
    monday,
    tuesday,
    wednesday,
    thrusday,
    friday,
    saturday,
}
let today:Days=Days.wednesday;
console.log(today)
//transfile== transform+compile
let d = '';//type inference
console.log(typeof(d))
//Arrays
//type assertion
let value:any="hellooo"
let lengt:number=(value as string).length;
const ele = document.getElementById('myelle')
const inp = ele as HTMLInputElement;

//functions
//same as js but add static typing to parameters and return type
//function sum(a:number,b:number):void{
//  console.log(a+b);
//}
//sum(11,12)
function greet(name:string,greeting:string="hai")
{
   console.log(`${greeting},${name}`);
}
greet("raj","hello")//hello,raj
greet("raj")//hai,raj
//rest parameters
function sum(numb:number,...numbers:number[])
{
    return numbers.reduce((total,sum)=>total+numb,0)
}
sum(2,3)
sum(2,3,5)
sum(2,3,5,7,9)
//functions expressions/arrow functions
const multiply = (a:number,b:number):number=>a*b;
function sub(a:number,b:number):never{
    throw Error;
}
//Interface
//Interface define the structure of objects and primary used for describing the shape of data structure
interface Car{
    model:string
    year:number
    manufacturer:string
}
const myCar:Car={model:"camry",manufacturer:"toyota",year:2022}
interface Employee{
    name:string,
    salary:number,
    id:number,
    phno?:number
}
interface Manager extends Employee{
    team:number
}
const employee1:Employee={name:"raj",salary:200,id:1526}
const m1:Manager={name:"ram",salary:50000,id:2345,team:5}
//class with interface
interface Shape{
    area():number,
    name:string
}
class Circle implements Shape{
    name="raj"
    constructor(public radius:number){}
    area(){
        return Math.PI*this.radius*this.radius
    }
}
const myCircle = new Circle(5)
console.log(myCircle.area())
interface Student{
    name:string
    rno:number
    phno:number
}
interface Topper extends Student{
    marks?:number
}
let obj:Student = {name:"raj",rno:25,phno:252525}
//everything is one object
//class is a collection of objects
//let obj = new Classname()
class School implements Student{
    name = "";
    rno = 25;
    phno = 5555;
    test():void{
        console.log("hello");
    }
}
let obj2  = new School()
/* type alias */
/*Type alias allow you create a custom name for any data type includes primitive,objects,functions and unions */
type prasad=number
let k:prasad=25
type MyObj = {
    name:string
    rno:number
    phno:number
}
let obj5:MyObj={name: "",rno:50,phno:52}

type Result="success"|"failure"
let value5:Result="success"

function fun(a:number):number
{
return a*5
}
type fun=(a:number)=>number
const fun2:fun=(a)=>a*5
const fun3:fun=(b)=>b*10

type mul2=(a:number,b:number)=>number
const m:mul2=(p,q)=>p*q












