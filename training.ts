// var declaraions with type
var companyName: string = "Cignex Datamatics";
var noOfEmployees: number = 500;
var canDevelope: boolean = true;
var anything: any = "Cat";

anything = 2;

document.getElementById("vars").innerHTML = companyName 
+ " has " + noOfEmployees + " Employees" + "<br/>";

document.getElementById("typeof").innerHTML = "Type of anything: " + typeof(anything) + "<br/>";

// Class and Object

class Student {
    fullName: string;
	firstName: string; lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
		this.lastName = lastName;
		this.fullName = firstName + " " + lastName;
    }
    
    greeter() {
		return "Hello, " + this.fullName + "<br/>";
    }
}

var student = new Student("Nehal", "Soni");
document.getElementById("constructor").innerHTML = student.greeter() + "<br/>";

// Abstract Class, super, inheritance, overriding
var abstract = $("#abstract");
abstract class Employee {
  	name: string;
	constructor(name: string, experience: number) { 
		this.name = name;
	};
	
	abstract defineRole(input : string[]) : void;
	
	programmingSkill(technology: string) {
		abstract.append(technology + " is a key skill of " + this.name);
	}
}

class Developer extends Employee {
	constructor(name: string, experience: number) { 
		super(name, experience);
	};
    
	defineRole(input : string[]): void {
	  abstract.append("<strong>My Role in " + companyName + " is following: <br/></strong>");
	  for(let kra of input) {
	    abstract.append("-&emsp;" + kra + "<br>"); 
	  }
	};
	
	programmingSkill() {
    	super.programmingSkill("Angular JS");
  	}
}

//class ProgramManager extends Employee {

//}

var kra : string[] = ["Zero defect development", "Master Angular 2", "Development in Liferay 6.2 and LR DXP"];
var developer = new Developer("Nehal", 1);
developer.defineRole(kra);
developer.programmingSkill();

var overload = $("#overload");
function reverse(input: string): void;

function reverse(input: number[]): void;

// Overloading
function reverse(input: any) {

	if(typeof input == "string") {
		var output = input.split("").reverse().join("");
		overload.append("Reverse of given " + "<strong>" + input + "</strong> is: " + output + "<br/>");
	}
    
	if(input instanceof Array) {
		var array: number[] = [];
		var len = input.length;
		for(var i = 0; i < input.length; i++) {
			array.push(input[--len]);
		}
		overload.append("Reverse of given array " + input + " is " + array + "<br/><br/>");
	}
}

reverse("string");

reverse([3, 4, 5]);

const PI: number = 3.14;

var int = $("#interface");
interface Shape {
	calculateArea(): void;
//	getPerimeter(): number;
}

class Circle implements Shape {
	radius: number;
	constructor(radius: number) {
		this.radius = radius;
	}
	
	calculateArea (): void {
		int.append("Area of Circle is: ");
		int.append(PI * this.radius ** 2 + "<br/>");
	}
}

var circle = new Circle(4);
circle.calculateArea();

class Square implements Shape {
	length : number;
	constructor(length : number) {
		this.length = length;
	}

	calculateArea (): void {
		int.append("Area of Square is: " + (4 * this.length));
	}
}

var square = new Square(10);
square.calculateArea();

// Access Modifiers
class AnimalPublic {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        $("#public").append((`${this.name} moved ${distanceInMeters}m.`));
    }
}
new AnimalPublic("Sloth").move(5);

class AnimalPrivate {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

//new AnimalPrivate("Cat").name; // Error: 'name' is private;

var pro = $("#protected");
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class EmployeeNew extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let nehal = new EmployeeNew("Nehal", "Liferay");
pro.append(nehal.getElevatorPitch());
//console.log(nehal.name); // error
pro.append("<br><strong>Error: </strong>Property 'name' is protected and only accessible within class 'Person' and its subclasses.");

class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let oct = new Octopus("Man with the 8 strong legs");
// oct.name = "Man with the 3-piece suit"; // error! name is readonly.

// Static Demo
class StudentStatic{
	rollno: number;  
	name: string;  
	static college:string = "VGEC";  
     
	constructor(r: number, n: string){  
		this.rollno = r;
		this.name = n;
	}  
	
	display(){
		$("#static").append("<br/>" + this.rollno + " " + this.name + " " + StudentStatic.college + "<br/>");
	}
}

 let s1 = new StudentStatic(111, "Stephen");  
 let s2 = new StudentStatic(222, "Micheal");
 s1.display();
 s2.display();