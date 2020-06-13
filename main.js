document.addEventListener('DOMContentLoaded', function() {
    /*---DOM refs---*/
    
    let flies = document.getElementById('flies')
    let pond = document.getElementById('pond-img')
    let btn = document.querySelector('button')
    let frogText = document.getElementById('dialogue')
   

    /*---Game logic---*/
    let gameOver = false
    let clickCount = 0
    let clickCountFlies = 0
    let introText = [
        "I have lived alone in this pond my whole life. I don't eat the flies anymore. They are my only companions. Any yet...", 
        "They plague me with their indifference and die quickly. This is not where I was meant to be. What do I do...", 
        "Click the flies to talk to them. Click the pond to drink some water. Press 'q' to leave and find another pond."
    ]
    let flyText = [
        "My friends...", 
        "Please. I can't take the buzzing, the endless buzzing...", 
        "I call upon you. This must END...", 
        "I can feel the weight of a million tiny bodies pressing upon me. But the silence! It settles in as they fill my ears with their unborn children. Finally..."
    ]
   

    

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
        document.getElementById('footer').style.visibility = 'visible'
        //document.getElementById('main').innerHTML += "<audio src='fly-buzz.mp3' type='audio/mpeg'> </audio>"
        //document.querySelector('audio').play()
        //add code to move frog
        document.getElementById('frog-img').addEventListener('click', introScene)
        document.querySelector('h3').innerText = ''
       
    }

    function introScene() {        
            if (clickCount === 0) {
                frogText.innerText = introText[0]
                clickCount++
            } else if (clickCount === 1) {
                frogText.innerText = introText[1]
                clickCount++
            } else if (clickCount === 2) {
                frogText.innerText = introText[2]
                clickCount++
                document.getElementById('flies').addEventListener('click', flySwarm)
                pond.addEventListener('click', drinkWater)
                document.addEventListener('keydown', leaveTown)
            }
    }

    let flySwarm = () => {
        if (clickCountFlies === 0) {
            frogText.innerText = flyText[0]
            flies.innerHTML += "<img class='flyImgs imgs' id='fly-img6' src='images/fly1.png' alt='Fly Image'><img class='flyImgs imgs' id='fly-img7' src='images/fly1.png' alt='Fly Image'><img class='flyImgs imgs' id='fly-img8' src='images/fly1.png' alt='Fly Image'><img class='flyImgs imgs' id='fly-img9' src='images/fly1.png' alt='Fly Image'><img class='flyImgs imgs' id='fly-img10' src='images/fly1.png' alt='Fly Image'>"
            clickCountFlies++
        } else if (clickCountFlies === 1) {
            frogText.innerText = flyText[1]
            flies.innerHTML += "<img class='flyImgs imgs' id='fly-img11' src='images/fly1.png' alt='Fly Image'><img class='flyImgs imgs' id='fly-img12' src='images/fly1.png' alt='Fly Image'><img class='flyImgs imgs' id='fly-img13' src='images/fly1.png' alt='Fly Image'><img class='flyImgs imgs' id='fly-img14' src='images/fly1.png' alt='Fly Image'><img class='flyImgs imgs' id='fly-img15' src='images/fly1.png' alt='Fly Image'>"
            clickCountFlies++
        } else if (clickCountFlies === 2) {
            frogText.innerText = flyText[2]
            flies.innerHTML += "<img class='flyImgs imgs' id='fly-img16' src='images/fly1.png' alt='Fly Image'><img class='flyImgs imgs' id='fly-img17' src='images/fly1.png' alt='Fly Image'><img class='flyImgs imgs' id='fly-img18' src='images/fly1.png' alt='Fly Image'><img class='flyImgs imgs' id='fly-img19' src='images/fly1.png' alt='Fly Image'><img class='flyImgs imgs' id='fly-img20' src='images/fly1.png' alt='Fly Image'>"
            clickCountFlies++
        } else if (clickCountFlies === 3) {
            frogText.innerText = flyText[3]
            flies.innerHTML = "<img id='black-circle' src='images/circle-cropped.png' alt='black circle'>"
            clickCountFlies++
        } 
        
        document.getElementById('black-circle').addEventListener('click', function() {
            document.getElementById('black-circle').style.maxWidth = '1000px'          
                document.addEventListener('keydown', function(e) {
                    if (e.key == 'y') {
                        console.log('you win')
                        //run win statement
                        //endGame
                    } else if (e.key == 'n') {
                        console.log('you lose')
                        //run lose statement
                        //endGame
                    }
                })
        }) 
    }
        //increase volume
        //replace flies with black circle
        //turn screen black       
    

    let drinkWater = () => {
        //increase size of frog
        //decrease size of pond
        //add slurp sound
        //run kingText
        //add event listeners for y/n
        //run win or lose statement based on y/n
        
    }

    let leaveTown = () => {
        //clear all divs
        //run deadText
        gameOver = true
    }

    let reset = () => {
        //reset gameboard
    }

    let winGame = () => {
        //text "you win"
        gameOver = true
        endGame()
    }

    let loseGame = () => {
        //text "you lose"
        gameOver = true
        endGame()
    }

    let endGame = () => {
        //text "play again?"
        //make reset button more prominent
    }

})