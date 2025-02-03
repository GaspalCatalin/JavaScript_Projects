function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}


//Object Constructor Functions
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;//In the constructor function, this has no value. The value of this will become the new object when a new object is created.
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Make + " " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

function Animal(Species, Breed, Age, Color) {
    this.Animal_Species = Species;
    this.Animal_Breed = Breed;
    this.Animal_Age = Age;
    this.Animal_Color = Color;
}
var Lucky = new Animal("Dog", "Labrador", 7, "Gold");
var Tom = new Animal("Cat", "Japanese Bobtail", 3, "White and Black");
var Roxy = new Animal("Cow", "Limousin", 10, "Red");
function myFunction1() {
    document.getElementById("New_and_This").innerHTML = "Tom is a " + Tom.Animal_Color + "-colored " + Tom.Animal_Breed + " " + Tom.Animal_Species + " and it is " + Tom.Animal_Age + " years old.";
}

//Nested funtion
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}//This is the nested function
        Plus_one();
        return Starting_point;
    }
}