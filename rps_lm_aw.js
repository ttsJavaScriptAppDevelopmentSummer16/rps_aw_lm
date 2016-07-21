//The first time the game runs the values for oneWeaponOfChoice and twoWeaponOfChoice log undefined
var onePlayerName = "Latori";
var twoPlayerName = "Amy";
var oneScore = 0;
var twoScore = 0;
var weapons = ["rock" , "paper", "scissors"];

while (oneScore < 3 && twoScore < 3){
  console.log("Rock, Paper, Scissors Shoot!");
  console.log("Anything you want to do! :-)");
  console.log(onePlayerName +" has " + oneWeaponOfChoice);
  console.log(twoPlayerName + " has " + twoWeaponOfChoice);
  var oneWeaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
  var twoWeaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
    if (oneWeaponOfChoice === "rock" && twoWeaponOfChoice === "paper"){
      console.log(twoPlayerName + " wins this round!");
      twoScore++;
    } else if (oneWeaponOfChoice === "paper" && twoWeaponOfChoice === "rock"){
      console.log (onePlayerName + " wins this round!");
      oneScore++;
    } else if (oneWeaponOfChoice === "scissors" && twoWeaponOfChoice === "rock"){
      console.log(twoPlayerName + " wins this round!");
      twoScore++;
    } else if (oneWeaponOfChoice === "scissors" && twoWeaponOfChoice === "paper"){
      console.log (onePlayerName + " wins this round!");
      oneScore++;
    } else if (oneWeaponOfChoice === "rock" && twoWeaponOfChoice === "scissors"){
      console.log(onePlayerName + " wins this round!");
      oneScore++;
    } else if (oneWeaponOfChoice === "paper" && twoWeaponOfChoice === "scissors"){
      console.log (twoPlayerName + " wins this round!");
      twoScore++;
    } else {console.log("We have a tie!");
    }
}
if  (oneScore == 3){
  console.log (onePlayerName + ", congratulations!  You've won three games.")
  } else {console.log (twoPlayerName + ", congratulations!  You've won three games.")
}
