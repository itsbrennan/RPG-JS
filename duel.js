
// defining player and opponent variables

let player = {
  health:40,
  power: 3,
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
let opponentLossCounter = 0;

let playerLossCounter = 0;

let playerHealCounter = 2;



// while (opponentLossCounter < 3) {

//   attack();
// }


const startGame = () => { 

  printToScreen();

  let attackButton = document.getElementById('startGame-button');
  userAnswer = confirm("If you beat Grant Chirpus 3X, you claim the crown. If you lose, you must serve as a surf for the rest of your life. Are you sure you want to continue?");

    if (userAnswer === true){
      let attackButton = document.getElementById('attack-button').hidden = false;
      let healButton = document.getElementById('heal-button').hidden = false;
      let quitButton = document.getElementById('quit-button').hidden = false;
      let startGame = document.getElementById('startGame-button').hidden = true;
      
      enterName();

    } else {

      // break;

    }

}




const attack = () => {

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
    gameMessage.innerText = "Opponent is about to strike!";

    // Opponent strikes back with 1 second timeout for realistic feel :)

    setTimeout(() => {

      let opponentAttack = determineAttackPower(opponent.power);
      player.health -= opponentAttack;
      opponent.attack++;
      printToScreen();

      if (isGameOver(player.health)){

        endGame("Opponent Won the Fight!");
        
        return playerLossCounter++;

    }
      healButton.disabled = false;
      attackButton.disabled = false;
    
    // this is where the delay is defined
    }, 250);

}


// name prompt 
const enterName = () => {

  player.name = prompt("Enter your name brave fighter!");


  printToScreen();
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

  // player property reset
  player.health = 40;
  player.name = "Your Name";
  player.attack = 0;
  playerLossCounter = 0;
  playerHealCounter = 2;

  // opponent property reset
  opponent.health = 10;
  opponent.attack = 0;
  opponentLossCounter =0;

  // printToScreen();

}


const printToScreen = () => {

  document.getElementById('opponent-health').innerText = opponent.health;
  document.getElementById('opponent-loss-counter').innerText = opponentLossCounter;
  document.getElementById('opponent-attack-counter').innerText = opponent.attack;


  document.getElementById('player-name').innerText = player.name;
  document.getElementById('player-health').innerText = player.health;
  document.getElementById('player-loss-counter').innerText = playerLossCounter;
  document.getElementById('heal-counter').innerText = playerHealCounter;
  document.getElementById('player-attack-counter').innerText = player.attack;

  }
printToScreen();



