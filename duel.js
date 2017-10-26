
// defining player and opponent variables

let player = {
  health:40,
  power: 20,
  heal: 10,
  name: "Your Name",
  attack:0
}

let opponent = {
  health:10,
  power:5,
  attack:0
  // losses: 0;
}

// Game increment counters
// storing loss counters & attacks for both players for summary view

let opponentLossCounter = 0;

let playerLossCounter = 0;

let playerHealCounter = 2;

const playAgainButton = document.getElementById("playAgain-button");

    playAgainButton.onclick = playAgain = () => {
      startGame();
      printToScreen();
    }


const startGameButton = document.getElementById("startGame-button");

    startGameButton.onclick = startGame = () => {

    // const startGame = () => { 

    printToScreen();

  let attackButton = document.getElementById('attack-button');
  userAnswer = confirm("If you beat Grant Chirpus 3X, you claim the crown. If you lose, you must serve as a surf for the rest of your life. Are you sure you want to continue?");

    if (userAnswer === true){
      let attackButton = document.getElementById('attack-button').hidden = false;
      let healButton = document.getElementById('heal-button').hidden = false;
      let quitButton = document.getElementById('quit-button').hidden = false;
      let startGame = document.getElementById('startGame-button').hidden = true;
      let playAgainButton = document.getElementById('playAgain-button').hidden = true;
      let gameMessage = document.getElementById('game-message');

      attackButton.disabled = false;
      // healButton.disabled = false;

      enterName();
      // printToScreen();

    } else {

      // break;

    }

}


// name prompt 
const enterName = () => {

  player.name = prompt("Enter your name brave fighter!");
  printToScreen();
  // healButton.disabled = false;
  
}


//

const startCombat = () => {

  debugger;

  let attackButton = document.getElementById('attack-button');
  let restartButton = document.getElementById('restart-button');
  let gameMessage = document.getElementById('game-message');
  let healButton = document.getElementById('heal-button');

  // Player's attack power is being defined and then subtracted to the opponents health
  let playerAttack = determineAttackPower(player.power);
    opponent.health -= playerAttack;
    player.attack++;
    printToScreen();


    if (isGameOver(opponent.health)){
        endGame("Player Won the Fight!");
        
        return opponentLossCounter++;
      
    }

    attackButton.disabled = true;
    healButton.disabled = true;
    gameMessage.innerText = "Take that!!";

    // Opponent strikes back with 1 second timeout for realistic feel :)

    setTimeout(() => {

      let opponentAttack = determineAttackPower(opponent.power);
      player.health -= opponentAttack;
      opponent.attack++;
      printToScreen();

      if (isGameOver(player.health)){

        endGame("You've been defeated!! Now you must serve as my Surf for eternity!! (Muahhaha)");
          let attackButton = document.getElementById('attack-button').hidden = true;
          let restartButton = document.getElementById('restart-button').hidden = true;
          let playAgainButton = document.getElementById('playAgain-button').hidden = false;
          let healButton = document.getElementById('heal-button').hidden = true;
          let quitButton = document.getElementById('quit-button').hidden = true;
          fighterPropertyReset();
          

          printToScreen();


        // storing loss counter for game summary
        return playerLossCounter++;

    }
      healButton.disabled = false;
      attackButton.disabled = false;
    
    // this is where the delay is defined
    }, 500);

    healButton.disabled = false;
    attackButton.disabled = false;

}




const endGame = (message) => {

  let gameMessage = document.getElementById('game-message').innerText = message;
  let attackButton = document.getElementById('attack-button').hidden = true;
  let restartButton = document.getElementById('restart-button').hidden = false;}


const determineAttackPower = (power) => { 

    return Math.floor(Math.random() * power +1); }



const healPlayer = () =>{
  
  // Why does this if need to be defined at 1 instead of 2?

  if (playerHealCounter >= 1){
    let playerHeal = determineHeal(player.heal);
      player.health += playerHeal;
      playerHealCounter--;
    } else {

      let healButton = document.getElementById('heal-button').disabled = true;
      healButton.hidden = true;

    }

    printToScreen();
}

const determineHeal = (heal) => { 

    return Math.floor(Math.random() * heal + 1); }


const isGameOver = (health) => {

  return health <= 0;}


const restart = () => {

  let attackButton = document.getElementById('attack-button');
  let healButton = document.getElementById('heal-button');


  opponent.health = 10;
  document.getElementById('game-message').innerText = "";
  attackButton.disabled = false;
  attackButton.hidden = false;
  healButton.hidden = false;

  document.getElementById('restart-button').hidden = true;
  printToScreen();}


const quitGame = () => {

  let gameMessage = document.getElementById('game-message').innerText = "I knew no one would be able to handle 'The Great Grant Chirpus!!'";
  let attackButton = document.getElementById('attack-button').hidden = true;
  let restartButton = document.getElementById('restart-button').hidden = true;
  let startGame = document.getElementById('startGame-button').hidden = false;
  let healButton = document.getElementById('heal-button').hidden = true;
  let quitButton = document.getElementById('quit-button').hidden = true;

  fighterPropertyReset();

}

const fighterPropertyReset = () => {

          // player property reset
          player.health = 40;
          // player.name = "Your Name";
          player.attack = 0;
          playerLossCounter = 0;
          playerHealCounter = 2;

          // opponent property reset
          opponent.health = 10;
          opponent.attack = 0;
          opponentLossCounter =0;

          }




const printToScreen = () => {

  document.getElementById('opponent-health').innerText = opponent.health;
  document.getElementById('opponent-loss-counter').innerText = opponentLossCounter;
  document.getElementById('opponent-attack-counter').innerText = opponent.attack;


  const gameWon = () => {

    if (opponentLossCounter === 3){

          let gameMessage = document.getElementById('game-message').innerText = "Luck is on your side! You've defeated The Great Grant Chirpus!!'";
          let attackButton = document.getElementById('attack-button').hidden = true;
          let restartButton = document.getElementById('restart-button').hidden = true;
          let playAgainButton = document.getElementById('playAgain-button').hidden = false;
          let healButton = document.getElementById('heal-button').hidden = true;
          let quitButton = document.getElementById('quit-button').hidden = true;

          fighterPropertyReset();
          
          printToScreen();

          // return 
     } else{

     }

   }

  // Checks if the opponent has 3 losses
  gameWon();

  document.getElementById('player-name').innerText = player.name;
  document.getElementById('player-health').innerText = player.health;
  document.getElementById('player-loss-counter').innerText = playerLossCounter;
  document.getElementById('heal-counter').innerText = playerHealCounter;
  document.getElementById('player-attack-counter').innerText = player.attack;

  }






