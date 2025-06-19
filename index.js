let firstCard = 2
let secondCard = 3
let cardSum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let msg = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    if (cardSum <= 20) {
        msg = "Do you want to draw another card?"
    } else if (cardSum === 21) {
        hasBlackJack = true
        msg = "Wohoo, you've got Blackjack!"
    } else {
        msg = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = msg
    sumEl.textContent = "Sum: " + cardSum
}
function newCard() {
    let newCard = 5
    cardSum += newCard
    renderGame()
}
