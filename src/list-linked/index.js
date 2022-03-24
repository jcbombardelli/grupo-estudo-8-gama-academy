const readline = require('readline-sync')
const { LinkedList, Node }  = require('./linked-list')


class LinkedListApp {

  static _linkedList = new LinkedList()

  constructor() { }

  static initialize() {
    let op;
    console.clear()
    console.log('Initializing Linked List App...')
    do {

      op = readline.question('Choose your destiny: \n 1. Add \n 2. Insert \n 3. Remove \n 4. IndexOf \n 5. Clear \n 6. First \n 7. Last \n 8. Size \n 9. Print \n 0. Exit \n')
      console.warn(op)
      switch (op) {
        case '1':
          console.clear()
          const value = readline.question('Enter the value to be added: ')
          this._linkedList.add(new Node(value))
          break;
        case '2':
          console.clear()
          const indexInsert = readline.questionInt('How to position you add a new node')
          const valueInsert = readline.question('Enter the value to be added: ')
          this._linkedList.insert(indexInsert, new Node(valueInsert))
          break;
        case '3':
          console.clear()
          const indexRemove = readline.questionInt('How to position you remove node')
          this._linkedList.remove(indexRemove)
          break;
        case '4':
          console.clear()  
          const indexPosition = readline.questionInt('How to position you remove node') 
          console.log(this._linkedList.indexOf(indexPosition))
          break;
        case '5':
          console.clear()
          this._linkedList.clear()
          break;
        case '6':
          console.clear()
          console.log(`The First is: ${this._linkedList.getFirst()} \n\n`)
          break;
        case '7':
          console.clear()
          console.log(`The Last is: ${this._linkedList.getLast()} \n\n`)
          break;
        case '8':
          console.clear()
          console.log(`The size is: ${this._linkedList.size()} \n\n`)
          break;
        case '9':
          console.clear()
          console.log('Printing List...')
          this._linkedList.print()
          break;
        default:
          console.log('Invalid Option!')
          break;
      }

    } while(op.toString() !== '0')

  }

}


module.exports = LinkedListApp