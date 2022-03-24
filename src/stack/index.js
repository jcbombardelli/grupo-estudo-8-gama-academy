const readline = require('readline-sync')

const Stack = require('./stack')



class StackApp {

  static _stack = new Stack()

  constructor() {  }

  static initialize() {
    let op;
    console.clear()
    console.log('Initializing Stack App...')
    do {

      op = readline.question('Choose your destiny: \n 1. Push \n 2. Pop \n 3. Top \n 4. Size \n 5. Print \n 0. Exit \n')
      switch (op) {
        case '1':
          console.clear()
          const value = readline.question('Enter the value to be pushed: ')
          this._stack.push(value)
          break;
        case '2':
          console.clear()
          console.log(this._stack.pop())
          break;
        case '3':
          console.clear()
          console.log(this._stack.top())
          break;
        case '4':
          console.clear()
          console.log(this._stack.size())
          break;
        case '5':
          console.clear()
          this._stack.print()
          break;
        default:
          console.clear()
          console.log('Invalid Option!\n\n\n')
          break;
      }

    } while(op.toString() !== '0')

  }
}

module.exports = StackApp