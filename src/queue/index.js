const readline = require('readline-sync')
const Queue = require('./queue')


class QueueApp {


  static _queue = new Queue()

  constructor() { }

  static initialize() {
    let op;
    console.clear()
    console.log('Initializing Queue App...')
    do {

      op = readline.question('Choose your destiny: \n 1. Enqueue \n 2. Dequeue \n 3. Peek \n 4. Size \n 5. Print \n 0. Exit \n')
      console.warn(op)
      switch (op) {
        case '1':
          console.clear()
          const value = readline.question('Enter the value to be Enqueued: ')
          this._queue.enqueue(value)
          break;
        case '2':
          if(this._queue.dequeue() !== undefined) {
            console.log(' \n First object dequeued \n')
          }
          break;
        case '3':
          console.clear()
          console.log(`\n\n ${this._queue.peek()} \n\n`)
          break;
        case '4':
          console.clear()
          console.log(`The size is: ${this._queue.size()} \n\n`)
          break;
        case '5':
          console.clear()
          console.log('Printing Queue...')
          this._queue.print()
          break;
        default:
          console.log('Invalid Option!')
          break;
      }

    } while(op.toString() !== '0')

  }

}


module.exports = QueueApp