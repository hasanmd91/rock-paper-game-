const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("your-choice")
const resultDisplay = document.getElementById("result")

const posibbleChoices =document.querySelectorAll("button")

let userChoice
let computerChoice
posibbleChoices.forEach(posibbleChoice => posibbleChoice.addEventListener("click", (e) => {

    userChoice = e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
}))

function generateComputerChoice(){

   const randomNumber =  Math.floor(Math.random() * 3 ) + 1

   if(randomNumber===1){
       computerChoice="rock"

   }
   if(randomNumber===2){
    computerChoice="paper"

}
    if(randomNumber===3){
    computerChoice="scissors"

    }

}

userChoiceDisplay.innerHTML=computerChoice