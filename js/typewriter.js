
    $(document).ready(function () {
        
        var introduction = document.getElementById('introduction');
        var typewriter = new Typewriter(introduction, {});
        
        typewriter
            .changeDelay(60)
            .typeString('Welcome!')
            .pauseFor(1500)
            .deleteAll(30)
            .typeString('Are you ready for movie trivia?')
            .pauseFor(1500)
            .deleteAll(30)
            .typeString("let's test your movie knowledge")
            .pauseFor(1500)
            .deleteAll(30)
            .start();

            setTimeout(function () {
                $('.intro-container').hide();
            }, 12300);

            
      });

