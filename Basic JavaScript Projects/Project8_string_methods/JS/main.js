//Concatenate string method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//slice() method
function slice_Method() {
    var Sentence_0 = "Norcia bacon makes special Carbonara pasta";
    var Section_0 = Sentence_0.slice(27,36);
    document.getElementById("Slice").innerHTML = Section_0
}

//UpperCase method
function upper_Case() {
    var Sentence_1 = "Hello, World!";
    var Section_1 = Sentence_1.toUpperCase();
    document.getElementById("upC").innerHTML = Section_1
}

//Search method
function go_Search() {
    var Sentence_2 = "The search() method searches a string for a string (or a regular expression) and returns the position of the match";
    var Section_2 = Sentence_2.search("for");
    document.getElementById("goGo").innerHTML = Section_2
}

//Number method
function string_Method() {
    var X_to = 134;
    document.getElementById("Numbers_to_string").innerHTML = X_to.toString();
}

//Precision method
function precision_Method() {
    var Xpre = 12938.3450985464139;
    document.getElementById("Precision").innerHTML = Xpre.toPrecision(10); 
}

//Numbers methods - toFixed
function fixed_Method() {//toFixed() returns a string, with the number written with a specified number of decimals
    var Xfix = 9.765;
    document.getElementById("fixMe").innerHTML = Xfix.toFixed(0) + "<br>" + Xfix.toFixed(2) + "<br>" + Xfix.toFixed(4) + "<br>" + Xfix.toFixed(6);
}

//Numbers methods - valueOf
function value_Method() {//The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
    var Xvalue = 345;
    document.getElementById("valueMe").innerHTML = Xvalue.valueOf() + "<br>" + (345).valueOf(); + "<br>" + (300 + 45).valueOf();
}