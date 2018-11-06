var currentMovieIndex =  0;
 
 $(document).ready(function(){
   var game1 = new QuizGame(movies);
 
   
 
   $( ".controlsContainer" ).append( $(
     `<div class="centered-container">
        <audio id="audio">
         <source src="${movies[currentMovieIndex].qouteFragment}" type="audio/mp3">     
       </audio>        
     </div>
   `));
   

  $(".far").click(function(){    
    if ($(this).hasClass("fa-play-circle")){
      let audio = document.getElementById("audio");    //JQuery not working here, only DOM as play() method is DOM
      audio.play();                                   //Play audio excerpt on click          
      $('.equalizer').equalizerAnimation(180, barsHeight);                      //Play audio excerpt on click
      $("#audio").on('ended',function(){             //toggles pause button when done with playing
        $(this).toggleClass("fa-pause-circle");   
        $(this).toggleClass("fa-play-circle");
        $('.equalizer').equalizerAnimation(0, [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0]]);
      }.bind(this));                             
    }else {audio.pause();                     // if the button is toggled to pause, click gives pause of audio
    $(this).toggleClass("fa-play-circle");     //toggle play/pause on click
    $(this).toggleClass("fa-pause-circle");   //toggle play/pause on click
    }
    // if the button is toggled to pause, click gives pause of audio
    $(this).toggleClass("fa-play-circle"); 
       //toggle play/pause on click
    $(this).toggleClass("fa-pause-circle");
       //toggle play/pause on click
  });
  
  
 
 
   $("#submit").click(function (){
     if (currentMovieIndex == 4){
       console.log("The game is over");
     } 
     else {
       game1.checkTitle(movies[currentMovieIndex].title);
       game1.checkActors(movies[currentMovieIndex].actor);
       game1.checkDirector(movies[currentMovieIndex].director);
       currentMovieIndex++;
       $('source').attr("src", movies[currentMovieIndex].qouteFragment);
       document.getElementById("audio").load();
       if ($(".far").hasClass("fa-pause-circle")){ //if you submit before the audio has ended the pause button doesnt toggle, this fixes the bug.
       $(".far").toggleClass("fa-play-circle");     
       $(".far").toggleClass("fa-pause-circle");
       }
       $("input[type=text]").val("")
       
     game1.move('myBarTitleScore', game1.scoreTitles);
     game1.move('myBarDirectorScore', game1.scoreDirectors);
     game1.move('myBarActorScore', game1.scoreActors);
     }
   });
 });
 
