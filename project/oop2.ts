
//Advanced typescript 
//Utilities
interface Person{
    name:String;
    age?:number;
}
let ob:Partial<Person> = {name:"raj"}
let ob2:Required<Person> = {name:"raj", age:20}
let ob3:Readonly<Person> = {name:"raj", age:20}
 

interface User
{
   id:Number,
   username:String,
   email:String,
   isAdmin:boolean
}
const userDetails:Pick<User,"username" | "email">={username:"raj",email:"abc@gmail.com"}
const myDetails:Omit<User, "id" | "isAdmin">={
    username:"raj", 
    email:"abc@gmail.com",
}
//Generics
//.d.ts==>declaration files



