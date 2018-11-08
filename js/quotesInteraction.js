var currentMovieIndex =  0;

 $(document).ready(function(){
  
  
  var game1 = new QuizGame(shuffle(movies));
 
  
 
   $( ".controlsContainer" ).append( $(
     `<div class="centered-container">
        <audio id="audio">
         <source src="${movies[currentMovieIndex].qouteFragment}" type="audio/mp3">     
       </audio>        
     </div>`
  ));

  var barsRef;  

  function togglePlay(){
    $(".far").toggleClass("fa-play-circle");
    $(".far").toggleClass("fa-pause-circle"); 
  }

  var farClickHandler = function(){ 
    if ($(this).hasClass("fa-play-circle")){
      togglePlay();   
      let audio = document.getElementById("audio");    //JQuery not working here, only DOM as play() method is DOM
      audio.play();
      $(".equalizer").show()
      barsRef =  $('.equalizer').equalizerAnimation(180, barsHeight);                             
    }
    else if ($(this).hasClass("fa-pause-circle")){
      $(".equalizer").hide()
      clearInterval(barsRef)
      audio.pause();  
      togglePlay(); 
    }
  }

  $("#audio").on('ended',function(){    
    togglePlay();
    $(".equalizer").hide()
    clearInterval(barsRef)
  })

  $(".far").click(farClickHandler);
   
  function checkEverything (){
    game1.checkTitle(movies[currentMovieIndex].title);
    game1.checkActors(movies[currentMovieIndex].actor);
    game1.checkDirector(movies[currentMovieIndex].director);
  }

  function increaseBars (){
    game1.move('myBarTitleScore', game1.scoreTitles);
    game1.move('myBarDirectorScore', game1.scoreDirectors);
    game1.move('myBarActorScore', game1.scoreActors);
  }

  function scoresMili (){
    let score1 = 0;
    let score2 = 0;
    let score3 = 0;
    setTimeout(function(){
      setInterval(function(){
        if (score1 < game1.scoreTitles) {
         score1++
         $(".titleScore").text(score1.toString());
        }
        if (score2 < game1.scoreDirectors) {
         score2++
         $(".directorScore").text(score2.toString());
        }
        if (score3 < game1.scoreActors) {
         score3++
         $(".actorScore").text(score3.toString());
        }
      }, 35)
    }, 2000);
  }

  $("#submit").click(function (){
    $(".equalizer").hide()
    clearInterval(barsRef)
    if (currentMovieIndex === 4 ){
      checkEverything();
      increaseBars();
      $( "#scoreBoard" ).append( $(
        `<h1 id="scoreTitle">SCORES</h1>
        <div class="scoreContainer">  
          <div class="scoresColumn1">
            <p class="labelScore"> Title points:</p>
            <p class="labelScore"> Director points: </p>
            <p class="labelScore"> Actor points: </p>
            <p class="labelAverageScore"> Average: </p>
          </div>
          <div class="scoresColumn2">
            <p class="titleScore">0</p>
            <p class="directorScore">0</p>
            <p class="actorScore">0</p>
            <p class="averageScore">0</p>
          </div>
        </div>`
      ));
      $("#scoreBoard").animate({opacity: "1", top: "20.2%"}, 1500);
      scoresMili(); 
    } 
    else  {
       checkEverything();
       currentMovieIndex++;
       $('source').attr("src", movies[currentMovieIndex].qouteFragment);
       document.getElementById("audio").load();
       if ($(".far").hasClass("fa-pause-circle")){ //if you submit before the audio has ended the pause button doesnt toggle, this fixes the bug.
        togglePlay();
       }
       $("input[type=text]").val("");
       increaseBars();
    }
  })
}); 

 
