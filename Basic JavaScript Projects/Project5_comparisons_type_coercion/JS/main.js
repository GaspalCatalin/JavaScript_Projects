//Type of Operator
document.write(typeof "Word");
document.write("<br>");

document.write(typeof 3);
document.write("<br>");

//Type Coercion
document.write("15" + 10);
document.write("<br>");

//Boolean True
document.write(15 > 10);
document.write("<br>");

//Boolean False
document.write(15 < 10);
document.write("<br>");

//console.log method
console.log(2+2);
//console.log and boolean logic
console.log(2>3);

//Double equal signs
document.write(10 == 10);
document.write(3 == 10);
document.write("<br>");

//Triple equal signs
X = 12/11/1990;
Y = 12/11/1990;
document.write(X === Y);//True: same data type and same value

C = 34;
D = "Dogs";
document.write(C === D);//False:different data type and different value

E = 56;
F = "56";
document.write(E === F);//False:same value but different data type

G = 67;
H = 68;
document.write(G === H);//False: same data type but different value
document.write("<br>");

//AND logical operator
document.write(5>2 && 10>4);//True: both of them true
document.write(5>10 && 10>4);//False: one of them false
document.write("<br>");

//OR logical operator
document.write(5>10 || 10>4);//True: one of them true
document.write(5>10 || 10>20);//False: both of them false
document.write("<br>");

function no_No() {
    document.getElementById("testNaN").innerHTML = 0/0;//The result would be NaN because you can’t divide 0 by 0
}
function test_True() {
    document.getElementById("test1").innerHTML = isNaN("This is a string");//This would display the result “true” because 'This is a string' is not a number
}

function test_False() {
    document.getElementById("test0").innerHTML = isNaN("1903");//This would result in “false” because 1903 is a number
}

function infinityNo() {
    document.getElementById("infPos").innerHTML = (2E310);
}

function infinityNeg() {
    document.getElementById("infNeg").innerHTML = (-3E310);
}

//Not operator: False and Double negative
function notF_Function() {
    document.getElementById("notFalse").innerHTML = !(20 > 10);
}

function notDn_Function() {
    document.getElementById("notDneg").innerHTML = !(5 > 10);
}