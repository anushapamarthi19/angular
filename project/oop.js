var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Object oriented programming
//classes in ts are some as other oop languages. they will allow
// you to define object blueprints with its properties/data and methods
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var obj1 = new Person("john", "doe");
obj1.getFullName(); //john doe
var SuperPerson = /** @class */ (function (_super) {
    __extends(SuperPerson, _super);
    function SuperPerson(p, f, l) {
        var _this = _super.call(this, f, l) || this;
        _this.power = p;
        return _this;
    }
    return SuperPerson;
}(Person)); //by default public, but if you declare something as private then it cannot be passed
var obj4 = new SuperPerson("fly", "raj", "shekhar");
console.log(obj4.getFullName());
//can i access class variables directly without object
//Acess modifiers
//default is public, can be accessed anywhere means within class and outside class
//private ...cannot be accessed outside of class
//protected can be accessed only by class and its subclass
var Rectangle = /** @class */ (function () {
    function Rectangle(w, h) {
        this.width = w;
        this.height = h;
    }
    Rectangle.prototype.getArea = function () {
        return "".concat(this.width, "*").concat(this.height);
    };
    return Rectangle;
}());
var shape1 = new Rectangle(40, 30);
console.log(shape1.getArea());
