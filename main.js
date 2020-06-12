document.addEventListener('DOMContentLoaded', function() {
    /*---DOM refs---*/
    let frog = document.getElementById('frog-img')
    let flies = document.getElementsByClassName('flyImgs')
    let pond = document.getElementById('pond-img')
    let btn = document.querySelector('button')
   

    /*---Game logic---*/
    let gameOver = false
    let introText = []

    /*---Event Listeners---*/
    frog.addEventListener('click', init)
    flies.addEventListener('click', flySwarm)
    pond.addEventListener('click', drinkWater)
    btn.addEventListener('click', reset)
    document.addEventListener('keydown', leaveTown)

    let init = () => {
        console.log('init check')
        gameOver = false;
        let flyBuzz = document.createElement('audio')
        flyBuzz.innerHTML = "<source src='fly-buzz.mp3' type='audio/mpeg>"
        document.querySelector('main').append(flyBuzz)
        let introP = document.createElement('p')
        
        //add code to move frog
        //add code to set gameboard back to normal?

    }

})