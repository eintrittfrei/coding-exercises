function init() {


  // Declare variables for the cards and numbers 

  const suits = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  const values = ['spades', 'diamonds', 'clubs', 'hearts']


  // Create the deck by looping though the arrays, creating a new object for each card 

  const cards = new Array()
  function newDeck() {


    for (let i = [0]; i < suits.length; i++) {
      for (let x = [0]; x < values.length; x++) {
        const card = { Value: values[x], Suit: suits[i] }

        cards.push(card)
      }
    }
    return cards


  }
  newDeck()

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

  const shuffledDeck = cards.shuffle() // now applying the shuffle constructor to the array 

  console.log(shuffledDeck)

  
  const pageElement = document.querySelector('.stack') // grabbing the html element
  pageElement.textContent = JSON.stringify(shuffledDeck) // updating the textContent (html) with the result as JSON.stringify 

  // Creating the players Sam and Dealer as classes  
  
  let players = new Array()
  function createPlayers(num) {
    players = new Array()
    for ( let i = 1; i <= num; i++) {
      const hand = new Array()
      const player = { Name: 'Player' + i, ID: i, Points: 0, Hand: hand }
      players.push(player)
    }
  }

  createPlayers(2)
  console.log('players', players)

 


  // give each player two cards from the shuffled deck. 

  function dealHands() {

    for (let i = 0; i < 2; i++) {
      for (let x = 0; x < players.length; x++) {
        const card = shuffledDeck.pop()
        console.log('card', card)
        players[x].Hand.push(card, x)
      }
    }
  }

  dealHands()
    

  // Determine the score for each player and dealer -- running total constructor 

  // loop throug the array to check the value of the suit cards inside
  // for each card check if suit is number or letter 
  // if suit is number then number j === point value => counter points += int(j)  
  // if suit is letter J, Q, K then points x += 10 counter score 
  // if suit is A then points counter += 11

  
  // function sum(obj) {
  //   let sum = 0
    
  //   // if (points === '2', '3', '4', '5', '6', '7', '8', '9', '10') {
  //   for ( const points in obj ) {
  //     if ( obj.hasOwnProperty( points )) {
  //       sum += parseFloat( obj[points] )
  //       console.log(sum)
  //     }
  //     return sum
      
  //   }
  // }
    
  
  // const summed = sum( players )
  // console.log('sum ' + summed )
 
  
  
 

  for (let i = 0; i < players.length; i++) {
    const value = players[i]
    console.log('VALUE', value)
    for (let j = 0; j < players[i].length; j++) {
      const innerValue = players[i][j]
      console.log('innerV', innerValue)
    }
    
    
  }



}
window.addEventListener('DOMContentLoaded', init)