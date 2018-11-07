var currentMovieIndex =  0;

 $(document).ready(function(){
  
  
  var game1 = new QuizGame(shuffle(movies));
 
  
 
   $( ".controlsContainer" ).append( $(
     `<div class="centered-container">
        <audio id="audio">
         <source src="${movies[currentMovieIndex].qouteFragment}" type="audio/mp3">     
       </audio>        
     </div>
   `));

        
  var barsRef;
       
  var farClickHandler = function(){ 
    if ($(this).hasClass("fa-play-circle")){
      $(this).toggleClass("fa-play-circle");
      $(this).toggleClass("fa-pause-circle");    
      let audio = document.getElementById("audio");    //JQuery not working here, only DOM as play() method is DOM
      audio.play();
      $(".equalizer").show()
      barsRef =  $('.equalizer').equalizerAnimation(180, barsHeight);                             
    }else if ($(this).hasClass("fa-pause-circle")){
      $(".equalizer").hide()
      clearInterval(barsRef)
      audio.pause();  
        $(this).toggleClass("fa-pause-circle");   
        $(this).toggleClass("fa-play-circle"); 
     }
    }

  $("#audio").on('ended',function(){    
    $(".far").toggleClass("fa-pause-circle");   
    $(".far").toggleClass("fa-play-circle");
    $(".equalizer").hide()
    clearInterval(barsRef)
  })
  $(".far").click(farClickHandler);

 
   $("#submit").click(function (){
    if (currentMovieIndex == 4 ){
      game1.checkTitle(movies[currentMovieIndex].title);
      game1.checkActors(movies[currentMovieIndex].actor);
      game1.checkDirector(movies[currentMovieIndex].director);
      game1.move('myBarTitleScore', game1.scoreTitles);
      game1.move('myBarDirectorScore', game1.scoreDirectors);
      game1.move('myBarActorScore', game1.scoreActors);

      ;} else  {
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
       game1.move('myBarActorScore', game1.scoreActors);}

     })
   }); 

 
