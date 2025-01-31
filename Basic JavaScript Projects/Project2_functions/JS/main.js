function My_First_Function() { //My first funtion for an HTML button
    var str1="This is", str2=" the button text!";
    document.getElementById("Button_Text").innerHTML=str1+str2;
}

function myFunction() { //Funtion for an HTML element
    var sentence="I am learning";
    sentence +=" a lot from this course!";
    document.getElementById("Concatenate").innerHTML=sentence;
}

function changeCol() {
    const myElement = document.getElementById("changeColor");
    myElement.style.color="red";
}

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32)/1.8;
}