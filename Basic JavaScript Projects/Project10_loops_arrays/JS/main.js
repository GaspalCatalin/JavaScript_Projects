//Example of a while loop function
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 16) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//Example of a for loop function
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments"). innerHTML = Content;
}

//Example of an array function
function array_Function () {
    var Baby_Picture = [];
    Baby_Picture[0] = "spleeping";
    Baby_Picture[1] = "playing";
    Baby_Picture[2] = "eating";
    Baby_Picture[3] = "launghing";
    document.getElementById("Array").innerHTML = "In this picture, the baby is " + Baby_Picture[3] + ".";
}

//const keyword function
const Musical_Instrument = {type:"guitar", brand:"Epiphone", color:"dust"};
Musical_Instrument.color = "black";
Musical_Instrument.price = "$850";

//testing the immutability of the identifier with const keyword --> in this the next changes won't affect the function
Musical_Instrument = {type:"guitar", brand:"Fender", color:"blue"};
Musical_Instrument.type = "ukulele"

function constant_Function() {
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.brand + " " + Musical_Instrument.type + " was " + Musical_Instrument.price + "."; 
}

//let keyword, object properties and methods and return example
function car_Function () {
    let car = {
        make: "Dacia ",
        model: "Bigster",
        year: "2025 ",
        color: "orange ",
        description: function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("car_Object").innerHTML = car.description();
}
