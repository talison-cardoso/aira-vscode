// Importing modules
// import * as fs from '';

// Declaring variables
let varName: string = "Hello, TypeScript!";
let integer: number = 10;
let float: number = 10.5;
let boolean: boolean = true;
let array: string[] = ["one", "two", "three"];
let nullVar: null = null;

// Arithmetic operators
let sum: number = integer + float;
let difference: number = integer - float;
let product: number = integer * float;
let quotient: number = integer / float;
let remainder: number = integer % float;

// Comparison operators
let isEqual: boolean = integer == float;
let isNotEqual: boolean = integer != float;
let isIdentical: boolean = integer === float;
let isNotIdentical: boolean = integer !== float;
let isGreaterThan: boolean = integer > float;
let isLessThan: boolean = integer < float;
let isGreaterThanOrEqual: boolean = integer >= float;
let isLessThanOrEqual: boolean = integer <= float;

// Logical operators
let and: boolean = boolean && isEqual;
let or: boolean = boolean || isNotEqual;
let not: boolean = !boolean;

// Increment and decrement operators
let increment: number = ++integer;
let decrement: number = --integer;

// Assignment operators
let addAndAssign: number = (integer += float);
let subtractAndAssign: number = (integer -= float);
let multiplyAndAssign: number = (integer *= float);
let divideAndAssign: number = (integer /= float);
let modulusAndAssign: number = (integer %= float);

// Control structures
if (boolean) {
    console.log("This is an if statement.");
} else {
    console.log("This is an else statement.");
}

switch (integer) {
    case 1:
        console.log("Case  1.");
        break;
    case 2:
        console.log("Case  2.");
        break;
    default:
        console.log("Default case.");
}

for (let i = 0; i < array.length; i++) {
    console.log("Array element: " + array[i]);
}

array.forEach((element) => {
    console.log("Foreach element: " + element);
});

while (integer > 0) {
    console.log("While loop.");
    integer--;
}

do {
    console.log("Do-while loop.");
    integer--;
} while (integer > 0);

// Functions
function greet(name: string): string {
    return "Hello, " + name + "!";
}

console.log(greet("TypeScript"));

// Classes and objects
class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public introduce(): string {
        return "My name is " + this.name + " and I am " + this.age + " years old.";
    }
}

let person = new Person("John Doe", 30);
console.log(person.introduce());

// Exceptions
try {
    throw new Error("An error occurred.");
} catch (error) {
    console.log("Caught exception: " + error.message);
}

// Namespaces
namespace MyNamespace {
    export class MyClass {
        public myFunction(): void {
            console.log("This is a function in a namespace.");
        }
    }
}

let myObject = new MyNamespace.MyClass();
myObject.myFunction();

// Using constants
const CONSTANT_NAME: string = "Constant Value";
console.log(CONSTANT_NAME);

// Using inheritance
class ChildClass extends Person {
    public introduce(): string {
        return super.introduce() + " I am a child class.";
    }
}

let child = new ChildClass("Jane Doe", 25);
console.log(child.introduce());

// Using interfaces
interface MyInterface {
    myMethod(): void;
}

class MyClassWithInterface implements MyInterface {
    public myMethod(): void {
        console.log("Implementing an interface method.");
    }
}

let myObjectWithInterface = new MyClassWithInterface();
myObjectWithInterface.myMethod();

// Using traits (mixins in TypeScript)
class MyTrait {
    public myTraitMethod(): void {
        console.log("Using a trait method.");
    }
}

class MyClassWithTrait {
    public myTraitMethod(): void {
        console.log("Using a trait method.");
    }
}

let myObjectWithTrait = new MyClassWithTrait();
myObjectWithTrait.myTraitMethod();

// Using lists (array destructuring)
let [_varName, _integer, _float] = ["New Value", 20, 20.5];
console.log(varName);

// Using associative arrays (objects)
let associativeArray: { [key: string]: string } = {
    key1: "value1",
    key2: "value2",
};
console.log(associativeArray["key1"]);

// Using multidimensional arrays (nested objects)
let multiDimensionalArray: { [key: string]: any } = {
    level1: {
        level2: {
            level3: "value",
        },
    },
};
console.log(multiDimensionalArray["level1"]["level2"]["level3"]);

// Using arrays of objects
let _objectArray: Person[] = [new Person("Alice", 25), new Person("Bob", 30)];
_objectArray.forEach((person) => {
    console.log(person.introduce());
});

// Using arrays of arrays
let _arrayOfArrays: string[][] = [
    ["one", "two"],
    ["three", "four"],
];
_arrayOfArrays.forEach((subArray) => {
    subArray.forEach((element) => {
        console.log(element + " ");
    });
    console.log("\n");
});

// Using arrays of strings
let arrayOfStrings: string[] = ["one", "two", "three"];
console.log(arrayOfStrings.join(", "));

// Using arrays of integers
let arrayOfIntegers: number[] = [1, 2, 3];
console.log(arrayOfIntegers.reduce((a, b) => a + b, 0));

// Using arrays of floats
let arrayOfFloats: number[] = [1.1, 2.2, 3.3];
console.log(arrayOfFloats.reduce((a, b) => a + b, 0));

// Using arrays of booleans
let arrayOfBooleans: boolean[] = [true, false, true];
console.log(arrayOfBooleans.filter((value) => value).length);

// Using arrays of null
let arrayOfNulls: null[] = [null, null, null];
console.log(arrayOfNulls.filter((value) => value === null).length);

// Using arrays of objects
let ___objectArray: Person[] = [new Person("Alice", 25), new Person("Bob", 30)];
___objectArray.forEach((person) => {
    console.log(person.introduce());
});

// Using arrays of objects
let ____objectArray: Person[] = [
    new Person("Alice", 25),
    new Person("Bob", 30),
];
____objectArray.forEach((person) => {
    console.log(person.introduce());
});

// Using arrays of arrays
let ___arrayOfArrays: string[][] = [
    ["one", "two"],
    ["three", "four"],
];
___arrayOfArrays.forEach((subArray) => {
    subArray.forEach((element) => {
        console.log(element + " ");
    });
    console.log("\n");
});
