let firstCard = 10
let secondCard = 12
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let msg = ""

console.log(hasBlackJack)
console.log(isAlive)
console.log(msg)
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
    console.log("msg")
}