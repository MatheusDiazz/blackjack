let firstCard = 10
let secondCard = 12
let cardSum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let msg = ""
let messageEl = document.getElementById("message-el")
let sum = document.getElementById("sum-el")
function startGame() {
    if (sum<=20) {
    msg = "Do you want to draw another card?"
}
else if (sum ===21) {
    hasBlackJack = true
    msg = "Wohoo, you've got Blackjack!"
}
else {
    msg = "You're out of the game" 
    isAlive = false
}
messageEl.textContent = msg
sum.textContent += " " + cardSum
}

