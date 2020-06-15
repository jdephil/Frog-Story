document.addEventListener('DOMContentLoaded', function() {
    /*---DOM refs---*/
    
    let flies = document.getElementById('flies')
    let pond = document.getElementById('pond-img')
    let btn = document.getElementById('reset')
    let frogText = document.getElementById('dialogue')
    let sound2 = document.getElementById('sound')
   

    /*---Game logic---*/
    let gameOver = false
    let clickCount = 0
    let clickCountFlies = 0
    let clickCountPond = 0
    let introText = [
        "I have lived alone in this pond my whole life. I don't eat the flies anymore. They are my only companions. And yet...", 
        "They plague me with their indifference and die quickly. This is not where I was meant to be. What do I do...", 
        "Click the flies to talk to them. Click the pond to drink some water. Press 'q' to leave and find another pond."
    ]
    let flyText = [
        "My friends...", 
        "Please. I can't take the buzzing, the endless buzzing...", 
        "I call upon you.",
        "This must END...", 
        "I can feel the weight of a million tiny bodies pressing upon me. But the silence! It settles in as they fill my ears with their unborn children. Finally...", 
        "Press 'y' to let the flies use frog as an incubator. Press 'n' to dive underwater in an attempt to shake them off.", 
        "I see it now. My life's purpose is to serve you and become part of you, my flying friends. If we are together, I am never alone. Please use me as you will. I am finally free.", 
        "No! The flies have climbed into my airways! I can't hold my breath for much longer. Is that...? Yes, I see Death swimming towards me."
    ]
    let pondText = [
        "I am a king! I will have my revenge upon this world.", 
        "I will crush you all!",
        "Press 'y' to eat the flies. Press 'n' to let them live.", 
        "Finally I am alone. All alone... What have I done?",
        "No, I cannot bear the thought. A king? What kind of king destroys his kingdom? The sun is warm, the water is cool, and I am grateful."
    ]
   

    

    /*---Functions---*/

    
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 32) {
            init();
        }
    })

    
    let winGame = () => {
        document.querySelector('h3').innerText = "You win! Play again?"
        document.querySelector('h3').style.color = "goldenrod"
       
    }

    let loseGame = () => {
        document.querySelector('h3').innerText = "You lose! Play again?"
        document.querySelector('h3').style.color = "red"
    }


   let reset = () => {
    document.location.href = ""
   }

    let init = () => {
        console.log('init check')
        document.getElementById('footer').style.visibility = 'visible'
        sound2.play()
        //add frog bounce animation
        document.getElementById('frog-img').addEventListener('click', introScene)
        document.querySelector('h3').innerText = ''
       
    }

    let introScene = () => { 
        //animate flies to fly around       
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
                document.addEventListener('keydown', function(e) {
                    if (e.key == 'q') {
                        leaveTown()
                    }
                })
            }
    }

    let flySwarm = () => {
        pond.removeEventListener('click', drinkWater)
        document.removeEventListener('keydown', function(e) {
            if (e.key == 'q') {
                leaveTown()
            }
        })
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
            sound2.pause()
            clickCountFlies++
            document.getElementById('black-circle').addEventListener('click', function() {
                if (clickCountFlies === 4) {
                    frogText.innerText = flyText[4]
                    document.getElementById('black-circle').style.maxWidth = '100%'
                    document.getElementById('black-circle').style.width = '8000px'
                    document.getElementById('black-circle').style.zIndex = '2'
                    document.getElementById('black-circle').style.margin = '0'
                    document.getElementById('dialogue').style.marginTop = '5%'
                    clickCountFlies++          
                } else if (clickCountFlies === 5) {
                    frogText.innerText = flyText[5]
                    clickCountFlies++
                            document.addEventListener('keydown', function(e) {
                            if (e.key == 'y') {
                                frogText.innerText = flyText[6]
                                winGame()                                
                            } else if (e.key == 'n') {
                                frogText.innerText = flyText[7]
                                loseGame()                                
                            }
                        })
                }
            }) 
        } 
        
    
    }
        
        
    btn.addEventListener('click', reset)       
    

    let drinkWater = () => {
        document.getElementById('flies').removeEventListener('click', flySwarm)
        document.removeEventListener('keydown', function(e) {
            if (e.key == 'q') {
                leaveTown()
            }
        })
        switch (clickCountPond) {
            case 0:
                document.getElementById('frog-img').style.maxWidth = "200px"
                document.getElementById('frog-img').style.margin = "28% 0 0 35%"
                document.getElementById('pond-img').style.maxWidth = "450px"
                document.getElementById('pond-img').style.margin = "34% 0% 0% 50%"
                frogText.innerText = pondText[0]
                clickCountPond++
            break;
            case 1:
                document.getElementById('frog-img').style.maxWidth = "400px"
                document.getElementById('frog-img').style.margin = "15% 0 0 21%"
                document.getElementById('pond-img').style.maxWidth = "100px"
                document.getElementById('pond-img').style.margin = "34% 0% 0% 60%"
                frogText.innerText = pondText[1]
                clickCountPond++
                break;
            case 2:
                frogText.innerText = pondText[2]
                clickCountPond++
                document.addEventListener('keydown', function(e) {
                    if (e.key == 'y') {
                        frogText.innerText = pondText[3]
                        document.getElementById('flies').style.visibility = "hidden"
                        sound2.pause()
                        clickCountPond++
                        loseGame()                                
                    } else if (e.key == 'n') {
                        frogText.innerText = pondText[4]
                        document.getElementById('frog-img').style.maxWidth = "90px"
                        document.getElementById('frog-img').style.margin = "32% 0% 0% 67%"
                        document.getElementById('pond-img').style.maxWidth = "700px"
                        document.getElementById('pond-img').style.margin = "34% 0% 0% 43%"
                        clickCountPond++
                        winGame()                                
                    }
                })
                break;
            }
        //add slurp sound
    }

    let leaveTown = () => {
        document.getElementById('flies').removeEventListener('click', flySwarm)
        pond.removeEventListener('click', drinkWater)
        sound2.pause()
        pond.style.visibility = "hidden"
        flies.style.visibility = "hidden"
        document.getElementById('tree-img').style.visibility = "hidden"
        frogText.innerText = "I have been hopping for days. No food. No water. There is nothing out here. No one else. What is this empty place?"
        document.getElementById('frog-img').style.maxWidth = "20px"
        document.getElementById('frog-img').style.margin = "25% 0% 0% 50%"
        loseGame()
    }

  

    

})