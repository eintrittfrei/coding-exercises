function init() {


  // Declare variables for the cards and numbers 

  const suits = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  const values = ['spades', 'diamonds', 'clubs', 'hearts']

  // Dreating the players Sam and Dealer as classes  

  const player = {
    name: 'Sam',
    hand: []
  } 
  const player2 = {
    name: 'Dealer',
    hand: []
  }


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
  
  Array.prototype.shuffle = function() {

    let i = this.length, j, temp
    while ( --i > 0 ) {
      j = Math.floor(Math.random() * (i + 1))
      temp = this[j]
      this[j] = this[i]
      this[i] = temp
    }
    return this


  }
  
  const result = cards.shuffle()

  console.log(result)

  const pageElement  = document.querySelector('.stack')
  console.log(pageElement)
  pageElement.textContent = JSON.stringify(result)







 









}
window.addEventListener('DOMContentLoaded', init)