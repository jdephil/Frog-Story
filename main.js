document.addEventListener('DOMContentLoaded', function() {
    /*---DOM refs---*/
    let frog = document.getElementById('frog-img')
    let flies = document.getElementsByClassName('flyImgs')
    let pond = document.getElementById('pond-img')
    let btn = document.querySelector('button')
    let frogText = document.getElementById('dialogue')
   

    /*---Game logic---*/
    let gameOver = false
    let introText = [
        "I have lived alone in this pond my whole life. I don't eat the flies anymore. They are my only companions. Any yet...", 
        "They plague me with their indifference and die quickly. This is not where I was meant to be. What do I do...", 
        "Click the flies to talk to them. Click the pond to drink some water. Press 'q' to leave and find another pond."
    ]
    let flyText = [
        "My friends...", 
        "Please...", 
        "I call upon you. This must END.", 
        ""
    ]
    let clickCount = 0

    

    /*---Event Listeners---*/

    //btn.addEventListener('click', reset)
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 32) {
            init();
        }
    })

    let init = () => {
        console.log('init check')
        gameOver = false;
        //document.getElementById('main').innerHTML += "<audio src='fly-buzz.mp3' type='audio/mpeg'> </audio>"
        //document.querySelector('audio').play()
        //add code to move frog
        //add code to set gameboard back to normal
        document.getElementById('frog-img').addEventListener('click', firstScene)
        
        
    }

    function firstScene() {
       
        console.log("scene check")
        
            if (clickCount === 0) {
                console.log(clickCount)
                frogText.innerText = introText[0]
                clickCount++
            } else if (clickCount === 1) {
                console.log(clickCount)
                console.log(introText[1])
                frogText.innerText = introText[1]
                clickCount++
            } else if (clickCount === 2) {
                console.log(clickCount)
                frogText.innerText = introText[2]
                clickCount++
                flies.addEventListener('click', flySwarm)
                pond.addEventListener('click', drinkWater)
                document.addEventListener('keydown', leaveTown)
            }
            
      
        
        
    }

    let flySwarm = () => {
        //double flies
        //increase volume
        //replace flies with black circle
        //turn screen black
    }

})