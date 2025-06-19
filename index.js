let firstCard
let secondCard
let cardSum
let cards
let hasBlackJack = false
let isAlive = true
let msg = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function randomCard() {
    let result = Math.floor(Math.random() * 13) + 1
    if (result === 1) return 11
    else if (result > 10)   return 10
    else {
        return result
    }
}

function startGame() {
    firstCard = randomCard()
    secondCard = randomCard()
    cardSum = firstCard + secondCard
    cards = [firstCard, secondCard]
    hasBlackJack = false
    isAlive = true
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

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
    let newCard = randomCard()
    cardSum += newCard
    cards.push(newCard)
    renderGame()
}
console.log(cards)