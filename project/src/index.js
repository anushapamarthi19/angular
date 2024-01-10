let a = 55; //type annotation
let b = "raj";
let c = true;
a = "prasad";
let arr = [15, 25, 5, 6, 85, 'raj123', 'raj'];
let fruits = ['banana', 'orangr', 'mango'];
//Tuples
const details = ["prasad", 20000, "abc@gmail.com"];
details.push('raj');
console.log(details);
//Enums
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 5] = "Red";
    Colors[Colors["Yellow"] = 6] = "Yellow";
    Colors[Colors["Green"] = 7] = "Green";
    Colors[Colors["Blue"] = 8] = "Blue";
})(Colors || (Colors = {}));
let myColor = Colors.Green;
console.log(Colors[myColor]);
var Days;
(function (Days) {
    Days[Days["sunday"] = 0] = "sunday";
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wednesday"] = 3] = "wednesday";
    Days[Days["thrusday"] = 4] = "thrusday";
    Days[Days["friday"] = 5] = "friday";
    Days[Days["saturday"] = 6] = "saturday";
})(Days || (Days = {}));
let today = Days.wednesday;
console.log(today);
//transfile== transform+compile
let d = ''; //type inference
console.log(typeof (d));
//Arrays
//type assertion
let value = "hellooo";
let lengt = value.length;
const ele = document.getElementById('myelle');
const inp = ele;
//functions
//same as js but add static typing to parameters and return type
//function sum(a:number,b:number):void{
//  console.log(a+b);
//}
//sum(11,12)
function greet(name, greeting = "hai") {
    console.log(`${greeting},${name}`);
}
greet("raj", "hello"); //hello,raj
greet("raj"); //hai,raj
//rest parameters
function sum(numb, ...numbers) {
    return numbers.reduce((total, sum) => total + numb, 0);
}
sum(2, 3);
sum(2, 3, 5);
sum(2, 3, 5, 7, 9);
//functions expressions/arrow functions
const multiply = (a, b) => a * b;
function sub(a, b) {
    throw Error;
}
const myCar = { model: "camry", manufacturer: "toyota", year: 2022 };
const employee1 = { name: "raj", salary: 200, id: 1526 };
const m1 = { name: "ram", salary: 50000, id: 2345, team: 5 };
