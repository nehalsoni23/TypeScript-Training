var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// var declaraions with type
var companyName = "Cignex Datamatics";
var noOfEmployees = 500;
var canDevelope = true;
var anything = "Cat";
anything = 2;
document.getElementById("vars").innerHTML = companyName
    + " has " + noOfEmployees + " Employees" + "<br/>";
document.getElementById("typeof").innerHTML = "Type of anything: " + typeof (anything) + "<br/>";
// Class and Object
var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    Student.prototype.greeter = function () {
        return "Hello, " + this.fullName + "<br/>";
    };
    return Student;
}());
var student = new Student("Nehal", "Soni");
document.getElementById("constructor").innerHTML = student.greeter() + "<br/>";
// Abstract Class, super, inheritance, overriding
var abstract = $("#abstract");
var Employee = (function () {
    function Employee(name, experience) {
        this.name = name;
    }
    ;
    Employee.prototype.programmingSkill = function (technology) {
        abstract.append(technology + " is a key skill of " + this.name);
    };
    return Employee;
}());
var Developer = (function (_super) {
    __extends(Developer, _super);
    function Developer(name, experience) {
        return _super.call(this, name, experience) || this;
    }
    ;
    Developer.prototype.defineRole = function (input) {
        abstract.append("<strong>My Role in " + companyName + " is following: <br/></strong>");
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var kra_1 = input_1[_i];
            abstract.append("-&emsp;" + kra_1 + "<br>");
        }
    };
    ;
    Developer.prototype.programmingSkill = function () {
        _super.prototype.programmingSkill.call(this, "Angular JS");
    };
    return Developer;
}(Employee));
//class ProgramManager extends Employee {
//}
var kra = ["Zero defect development", "Master Angular 2", "Development in Liferay 6.2 and LR DXP"];
var developer = new Developer("Nehal", 1);
developer.defineRole(kra);
developer.programmingSkill();
var overload = $("#overload");
// Overloading
function reverse(input) {
    if (typeof input == "string") {
        var output = input.split("").reverse().join("");
        overload.append("Reverse of given " + "<strong>" + input + "</strong> is: " + output + "<br/>");
    }
    if (input instanceof Array) {
        var array = [];
        var len = input.length;
        for (var i = 0; i < input.length; i++) {
            array.push(input[--len]);
        }
        overload.append("Reverse of given array " + input + " is " + array + "<br/><br/>");
    }
}
reverse("string");
reverse([3, 4, 5]);
var PI = 3.14;
var int = $("#interface");
var Circle = (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        int.append("Area of Circle is: ");
        int.append(PI * Math.pow(this.radius, 2) + "<br/>");
    };
    return Circle;
}());
var circle = new Circle(4);
circle.calculateArea();
var Square = (function () {
    function Square(length) {
        this.length = length;
    }
    Square.prototype.calculateArea = function () {
        int.append("Area of Square is: " + (4 * this.length));
    };
    return Square;
}());
var square = new Square(10);
square.calculateArea();
// Access Modifiers
var AnimalPublic = (function () {
    function AnimalPublic(theName) {
        this.name = theName;
    }
    AnimalPublic.prototype.move = function (distanceInMeters) {
        $("#public").append((this.name + " moved " + distanceInMeters + "m."));
    };
    return AnimalPublic;
}());
new AnimalPublic("Sloth").move(5);
var AnimalPrivate = (function () {
    function AnimalPrivate(theName) {
        this.name = theName;
    }
    return AnimalPrivate;
}());
//new AnimalPrivate("Cat").name; // Error: 'name' is private;
var pro = $("#protected");
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var EmployeeNew = (function (_super) {
    __extends(EmployeeNew, _super);
    function EmployeeNew(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    EmployeeNew.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return EmployeeNew;
}(Person));
var nehal = new EmployeeNew("Nehal", "Liferay");
pro.append(nehal.getElevatorPitch());
//console.log(nehal.name); // error
pro.append("<br><strong>Error: </strong>Property 'name' is protected and only accessible within class 'Person' and its subclasses.");
var Octopus = (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var oct = new Octopus("Man with the 8 strong legs");
// oct.name = "Man with the 3-piece suit"; // error! name is readonly.
// Static Demo
var StudentStatic = (function () {
    function StudentStatic(r, n) {
        this.rollno = r;
        this.name = n;
    }
    StudentStatic.prototype.display = function () {
        $("#static").append("<br/>" + this.rollno + " " + this.name + " " + StudentStatic.college + "<br/>");
    };
    return StudentStatic;
}());
StudentStatic.college = "VGEC";
var s1 = new StudentStatic(111, "Stephen");
var s2 = new StudentStatic(222, "Micheal");
s1.display();
s2.display();
