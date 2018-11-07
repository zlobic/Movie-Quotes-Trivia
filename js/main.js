function NewMovie(title, actor, director, qouteFragment){
    this.title = title 
    this.actor = actor 
    this.director = director
    this.qouteFragment = qouteFragment
  }

let QuizGame = function(moviesArray) {
    this.moviesArray = moviesArray
    this.scoreTitles = 0
    this.scoreActors = 0
    this.scoreDirectors = 0

    this.refQuestionIndex = 0
};

var scarFace = new NewMovie("Scarface","Tony Montana", "Brian De Palma", "./audio/say_hello.mp3");
var theShining = new NewMovie("The Shining","Jack Torrance", "Stanley Kubrick", "./audio/here_is_johnny.mp3");
var batMan = new NewMovie("Batman", "The Joker", "Tim Burton", "./audio/dance_with_the_devil_in_the_pale_moonlight.mp3");
var pulpFiction = new NewMovie("Pulp Fiction","Vincent Vega", "Quentin Tarantino", "./audio/royal_with_cheese.mp3");
var lorTheTwoTowers = new NewMovie("The Lord of the Rings", "Legolas", "Peter Jackson" , "./audio/blood_has_been_spilled.mp3");

var movies = [scarFace, theShining, batMan, pulpFiction,lorTheTwoTowers];

QuizGame.prototype.checkTitle = function (correctAnswer) {
    if ($('.titleInput').val().toLowerCase() === correctAnswer.toLowerCase()) {
        this.scoreTitles = this.scoreTitles + (100 / this.moviesArray.length);
        console.log(this.scoreTitles)
    } else { 
        console.log("not correct");
    }
}

QuizGame.prototype.checkActors = function(correctAnswer){
    if ($('.actorInput').val().toLowerCase() === correctAnswer.toLowerCase()) {
        this.scoreActors = this.scoreActors +(100 / this.moviesArray.length);   
    } else {
        console.log("not correct")
    }   
}

QuizGame.prototype.checkDirector = function(correctAnswer) {
    if ($('.directorInput').val().toLowerCase() === correctAnswer.toLowerCase()) {
        this.scoreDirectors = this.scoreDirectors + (100 / this.moviesArray.length);  
    } else {
        console.log("not correct");
    }
}

QuizGame.prototype.move = function(input, scoreMax) {
    var elem = document.getElementById(input); 
    var width = 10;
    var id = setInterval(frame, 10);
     function frame() {
         if (width >= scoreMax) {
             clearInterval(id);
         } else {
             width++; 
             elem.style.width = width + '%'; 
             elem.innerHTML = width * 1 + '%';
         }
    }
  }
