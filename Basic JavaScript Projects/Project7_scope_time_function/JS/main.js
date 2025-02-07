//Assigning local and global variables

//Global variable
var X = 10;
function add_Numbers_1() {
    document.write(20 + X + "<br>");
}
function add_Numbers_2() {
    document.write(X + 100 + "<br>");
}
add_Numbers_1();
add_Numbers_2();

//Local variable
function add_Numbers_3() {
    var Y = 20;
    document.write(20 + Y + "<br>");
}
function add_Numbers_4() {//This function won't return anything because the variable is local – meaning it was written within the function Add_numbers_3 and couldn’t be accessed outside of it.
    document.write(Y + 120 + "<br>");
}
add_Numbers_3();
add_Numbers_4();

//Debugging using console.log
function add_Numbers_5() {
    var R = 15;
    console.log(20 + R + "<br>");
}
function add_Numbers_6() {//This function won't return anything because the variable is local – meaning it was written within the function Add_numbers_5 and couldn’t be accessed outside of it.
    console.log(R + 120 + "<br>");
}
add_Numbers_5();
add_Numbers_6();

//Basic if statement function
function get_Date() {
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?"
    }
}

function get_Chr() {
    if (new Date().getMonth() < 6) {
    document.getElementById("Christmas").innerHTML = "It's still a long way until Christmas."
    }
}

//Example of a "if/else function"
function Age_Check() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Drink = "Perfect. Now you can have your beer.";
    }
    else {
        Drink = "I'm sorry, but you're not old enough to drink."
    }
    document.getElementById("Age_Checked").innerHTML = Drink;
}

//Example of a "if/else if/else function"
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}


