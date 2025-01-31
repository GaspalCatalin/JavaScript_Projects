//Dictionary
function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Light Brown",
        Breed:"Golden Retriever",
        Age:5,
        Sound:"Ham, ham!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Species;
}

//Delete operator and 'undefined' error
function catsDictionary() {
    var Cats = {
        Species:"Cat",
        Color:"White",
        Breed:"Persian",
        Age:3,
        Sound:"Meow!"
    };
    delete Cats.Sound; //this removes the Sound KVP from the catsDictionary before it is displayed
    document.getElementById("catDt").innerHTML = Cats.Sound;
}