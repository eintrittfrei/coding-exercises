function init() {


  // declare variables for the cards and numbers 

  const suits = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  const values = ['spades', 'diamonds', 'clubs', 'hearts']


  function deck() {

    const cards = []

    for (let i = [0]; i < suits.length; i++) {
      for (let x = [0]; x < values.length; x++) {
        const card = { Value: values[x], Suit: suits[i] }
        console.log(card)
        cards.push(card)
      } 
    }
    return cards

  }
  deck()
  


















}
window.addEventListener('DOMContentLoaded', init)