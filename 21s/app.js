function init() {


  // Declare variables for the cards and numbers 

  const suits = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  const values = ['spades', 'diamonds', 'clubs', 'hearts']


  // Create the deck by looping though the arrays, creating a new object for each card 

  const cards = []
  function deck() {


    for (let i = [0]; i < suits.length; i++) {
      for (let x = [0]; x < values.length; x++) {
        const card = { Value: values[x], Suit: suits[i] }

        cards.push(card)
      }
    }
    return cards


  }
  deck()

  // Shuffle cards
  // reading on shuffle seem the 'Fisher Yates Modern Shuffle Algorithm'  
  // create a variabel with the array.length and j which will represent the random number. Temp is going to hold the temporary value to do the swapping of the indexes in the array 
  // now we need a while loop 
  // the dcoument.write so we can see how it looks after it has been shuffled 
  // add teh loop condition --i so it goes backwards until greater 0 so it does not inlcude the first index 0. 
  // then we generate a random number of the indexes 
  // now get the random index positon value temp to swab 
  // now take the random index position and swab with index positoin on the loop
  // now make it re usable with Array.prototype  

  Array.prototype.shuffle = function () {

    let i = this.length, j, temp
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1))
      temp = this[j]
      this[j] = this[i]
      this[i] = temp
    }
    return this


  }

  const result = cards.shuffle() // now applying the shuffle constructor to the array 

  console.log(result)

  
  const pageElement = document.querySelector('.stack') // grabbing the html element
  pageElement.textContent = JSON.stringify(result) // updating the textContent (html) with the result as JSON.stringify 

  // Creating the players Sam and Dealer as classes  

  const player = {
    name: 'Sam',
    hand: [],
    score: 0
  }
  const player2 = {
    name: 'Dealer',
    hand: [],
    score: 0
  }


  // give each player two cards from the shuffled deck. 

  const dealPlayer = result.splice(0, 2)
  player.hand = dealPlayer

  const dealPlayer2 = result.splice(0, 2)
  player2.hand = dealPlayer2

  console.log('current hands', player.hand, player2.hand)

  const handElement = document.querySelector('.hands1')
  const handElement2 = document.querySelector('.hands2')
  handElement.textContent = JSON.stringify(player.hand[1].Suit)
  handElement2.textContent = JSON.stringify(player2.hand[1].Suit)

  console.log('player', player.hand)

  // Determine the score for each player and dealer -- running total constructor 

  // loop throug the array to check the value of the suit cards inside
  // for each card check if suit is number or letter 
  // if suit is number then number j === point value => counter points += int(j)  
  // if suit is letter J, Q, K then points x += 10 counter score 
  // if suit is A then points counter += 11

  player.hand.forEach(function(suit) {
    // console.log('suit', + index)
    Object.keys(suit).forEach(function(prop) {
      console.log('each', prop + ' = ' + suit[prop])
    })
  })

  
 





}
window.addEventListener('DOMContentLoaded', init)