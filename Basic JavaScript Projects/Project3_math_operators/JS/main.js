//Math operations

//Addition
function basicAdd () {//Funtion for an HTML element
    var numOne, numTwo, sum;
    numOne = parseInt(document.getElementById("first").value);
    numTwo = parseInt(document.getElementById("second").value);
    sum = numOne + numTwo;
    document.getElementById("additionResult").value = sum;
}

//Subtraction
function basicSubtraction () {
    var Subtraction = 5 - 2;
    document.getElementById("mathSub").innerHTML = "5 - 2 = " + Subtraction;
}

//Multiplication
function basicMultiplication () {
    var Multiplication = 5 * 7;
    document.getElementById("mathMult").innerHTML = "5 * 7 = " + Multiplication;
}

//Division
function basicDivision () {
    var Division = 56 / 4;
    document.getElementById("mathDiv").innerHTML = "56 / 4 = " + Division;
}

//Multiple operations
function moreMath () {
    var simpleMath = (1 + 2) * 10 / 2 - 5;
    document.getElementById("multOp").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simpleMath;
}

//Modulus Operator
function modulusOp () {
    var modOperator = 25 % 6;
    document.getElementById("modOp").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modOperator;
}

//Unary Operator
function negationOp () {
    var negOperator = 10;
    document.getElementById("negOp").innerHTML = -negOperator;
}

//Increment and Decrement Operators
var I = 5;
I++;
document.write(I);
document.write("<br>");

var D = 5.25;
D--;
document.write(D);
document.write("<br>");

//Math Random
window.alert(Math.random() * 500);

//Math object method
document.write(Math.round(4.4));