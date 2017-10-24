
// defining player and opponent variables

let player = {
  health:40,
  power: 5,
  name: "Your Name"
}

let opponent = {
  health:10,
  power:5
  // losses: 0;
}

let opponentLossCounter = 0;

let playerLossCounter = 0;



// while (opponentLossCounter < 3) {

//   attack();
// }


const wantToPlay = () => { 

  let attackButton = document.getElementById('wantToPlay-button');
  userAnswer = confirm("Do you want to attack?");

    if (userAnswer === true){
      let attackButton = document.getElementById('attack-button').hidden = false;
      let wantToPlay = document.getElementById('wantToPlay-button').hidden = true;
      
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

  // Player's attack power is being defined and then subtracted to the opponents health
  let playerAttack = determineAttackPower(player.power);
    opponent.health -= playerAttack;
    printToScreen();


    if (isGameOver(opponent.health)){
        endGame("Player Won the Fight!");
        // opponent.losses = +1;
        return opponentLossCounter++;
      
    }

    attackButton.disabled = true;
    gameMessage.innerText = "Opponent is about to strike!";

    setTimeout(() => {

      let opponentAttack = determineAttackPower(opponent.power);
      player.health -= opponentAttack;
      printToScreen();

      if (isGameOver(player.health)){

        endGame("Opponent Won the Fight!");
        // player.losses = +1;
        return playerLossCounter++;

    }

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

    return Math.floor(Math.random() * power); }

const isGameOver = (health) => {

  return health <= 0;}


const restart = () => {

  let attackButton = document.getElementById('attack-button');

  // player.health = 40;
  opponent.health = 10;
  document.getElementById('game-message').innerText = "";
  attackButton.disabled = false;
  attackButton.hidden = false;
  document.getElementById('restart-button').hidden = true;
  printToScreen();

}




const printToScreen = () => {
  document.getElementById('opponent-health').innerText = opponent.health;
  document.getElementById('opponent-loss-counter').innerText = opponentLossCounter;


  document.getElementById('player-name').innerText = player.name;
  document.getElementById('player-health').innerText = player.health;
  document.getElementById('player-loss-counter').innerText = playerLossCounter;

  }
printToScreen();



