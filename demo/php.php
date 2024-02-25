<?php

// Declaring variables
$var = "Hello, World!";
$integer =  10;
$float =  10.5;
$boolean = true;
$array = array("one", "two", "three");
$nullVar = NULL;

// Arithmetic operators
$sum = $integer + $float;
$difference = $integer - $float;
$product = $integer * $float;
$quotient = $integer / $float;
$remainder = $integer % $float;

// Comparison operators
$isEqual = $integer == $float;
$isNotEqual = $integer != $float;
$isIdentical = $integer === $float;
$isNotIdentical = $integer !== $float;
$isGreaterThan = $integer > $float;
$isLessThan = $integer < $float;
$isGreaterThanOrEqual = $integer >= $float;
$isLessThanOrEqual = $integer <= $float;

// Logical operators
$and = $boolean && $isEqual;
$or = $boolean || $isNotEqual;
$not = !$boolean;

// Increment and decrement operators
$increment = ++$integer;
$decrement = --$integer;

// Assignment operators
$addAndAssign = $integer += $float;
$subtractAndAssign = $integer -= $float;
$multiplyAndAssign = $integer *= $float;
$divideAndAssign = $integer /= $float;
$modulusAndAssign = $integer %= $float;

// Control structures
if ($boolean) {
    echo "This is an if statement.\n";
} else {
    echo "This is an else statement.\n";
}

switch ($integer) {
    case  1:
        echo "Case  1.\n";
        break;
    case  2:
        echo "Case  2.\n";
        break;
    default:
        echo "Default case.\n";
}

for ($i =  0; $i < count($array); $i++) {
    echo "Array element: " . $array[$i] . "\n";
}

foreach ($array as $element) {
    echo "Foreach element: " . $element . "\n";
}

while ($integer >  0) {
    echo "While loop.\n";
    $integer--;
}

do {
    echo "Do-while loop.\n";
    $integer--;
} while ($integer >  0);

// Functions
function greet($name) {
    return "Hello, " . $name . "!";
}

echo greet("PHP");

// Classes and objects
class Person {
    public $name;
    public $age;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function introduce() {
        return "My name is " . $this->name . " and I am " . $this->age . " years old.";
    }
}

$person = new Person("John Doe",  30);
echo $person->introduce();

// Exceptions
try {
    throw new Exception("An error occurred.");
} catch (Exception $e) {
    echo "Caught exception: " . $e->getMessage() . "\n";
}

// Namespaces
namespace MyNamespace;

class MyClass {
    public function myFunction() {
        echo "This is a function in a namespace.\n";
    }
}

$myObject = new MyClass();
$myObject->myFunction();

// Using constants
define("CONSTANT_NAME", "Constant Value");
echo CONSTANT_NAME;

// Using inheritance
class ChildClass extends Person {
    public function introduce() {
        return parent::introduce() . " I am a child class.";
    }
}

$child = new ChildClass("Jane Doe",  25);
echo $child->introduce();

// Using interfaces
interface MyInterface {
    public function myMethod();
}

class MyClassWithInterface implements MyInterface {
    public function myMethod() {
        echo "Implementing an interface method.\n";
    }
}

$myObjectWithInterface = new MyClassWithInterface();
$myObjectWithInterface->myMethod();

// Using traits
trait MyTrait {
    public function myTraitMethod() {
        echo "Using a trait method.\n";
    }
}

class MyClassWithTrait {
    use MyTrait;
}

$myObjectWithTrait = new MyClassWithTrait();
$myObjectWithTrait->myTraitMethod();

// Using lists
list($var, $integer, $float) = array("New Value",  20,  20.5);
echo $var;

// Using associative arrays
$associativeArray = array("key1" => "value1", "key2" => "value2");
echo $associativeArray["key1"];

// Using multidimensional arrays
$multiDimensionalArray = array(
    "level1" => array(
        "level2" => array(
            "level3" => "value"
        )
    )
);
echo $multiDimensionalArray["level1"]["level2"]["level3"];

// Using arrays of objects
$objectArray = array(
    new Person("Alice",  25),
    new Person("Bob",  30)
);
foreach ($objectArray as $person) {
    echo $person->introduce();
}

// Using arrays of arrays
$arrayOfArrays = array(
    array("one", "two"),
    array("three", "four")
);
foreach ($arrayOfArrays as $subArray) {
    foreach ($subArray as $element) {
        echo $element . " ";
    }
    echo "\n";
}

// Using arrays of strings
$arrayOfStrings = array("one", "two", "three");
echo implode(", ", $arrayOfStrings);

// Uso de arrays de inteiros
$arrayOfIntegers = array(1,  2,  3);
echo array_sum($arrayOfIntegers);

// Uso de arrays de floats
$arrayOfFloats = array(1.1,  2.2,  3.3);
echo array_sum($arrayOfFloats);

// Uso de arrays de booleans
$arrayOfBooleans = array(true, false, true);
echo count(array_filter($arrayOfBooleans));

// Uso de arrays de null
$arrayOfNulls = array(null, null, null);
echo count(array_filter($arrayOfNulls, 'is_null'));

// Uso de arrays de objetos
$objectArray = array(
    new Person("Alice",  25),
    new Person("Bob",  30)
);
foreach ($objectArray as $person) {
    echo $person->introduce();
}

// Uso de arrays de arrays
$arrayOfArrays = array(
    array("one", "two"),
    array("three", "four")
);
foreach ($arrayOfArrays as $subArray) {
    foreach ($subArray as $element) {
        echo $element . " ";
    }
    echo "\n";
}