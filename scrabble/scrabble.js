function init() {

  // letters 
  // distribution 
  // letters 
  const bag = {
    e: 12, a: 9, i: 9, o: 8, n: 6, r: 6, t: 6, l: 4, s: 4, u: 4, d: 4, g: 3, b: 2, c: 2, m: 2, p: 2, f: 2, h: 2, v: 2, w: 2, y: 2, k: 1, j: 1, x: 1, q: 1, z: 1

  }

  console.log(bag)

  const mapPoints = new Map()
  mapPoints.set('e', 1)
    .set('a', 1).set('i', 1).set('o', 1).set('n', 1).set('r', 1).set('t', 1).set('l', 1).set('s', 1).set('u', 1).set('d', 2).set('g', 2).set('b', 3).set('c', 3).set('m', 3).set('p', 3).set('f', 4).set('h', 4).set('v', 4).set('w', 4).set('y', 4).set('k', 5).set('j', 8).set('x', 8).set('q', 10).set('z', 10)

  function deduct(key) {
    return bag[key] -= 1
  }
  // console.table(mapPoints)
  // player class constructor 
  class Player {
    constructor(rack = [], points = 0) {
      this.rack = rack,
      this.points = points
    }

    setPoints(number) {
      return this.points += number
    }
    getPoints() {
      return this.points
    }

    calcScore(word) {
      const array = word.toLowerCase().split('')
      // console.log(array)
      for (let i = 0; i < array.length; i++) {
        this.points += mapPoints.get(array[i])
      }
      return this.points
    }

  }

  const player1 = new Player()
  player1.calcScore('helping')

  function getRandomLetters() {
    const rack = []
    let item
    const keys = Array.from(mapPoints.keys())
    // console.log(keys)
    while (rack.length < 7) {
      item = keys[Math.floor(Math.random() * keys.length)]
      deduct(item)
      if (bag[item] > 0) {
        rack.push(item)
      }
    }
    console.log('rack', rack)
    return rack

  }
  getRandomLetters()

  console.log(bag)



}
init()