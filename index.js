const readline = require('readline-sync')

const QueueApp = require('./src/queue');
const StackApp = require('./src/stack');
const LinkedListApp = require('./src/list-linked')	


const initialize = () => {
  let op
  console.clear()

  do{
    op = readline.question('Select your application \n 1. Stack \n 2. Queue \n 3. Linked List \n 0. Exit \n')
    switch (op) {
      case '1':
        StackApp.initialize()
        break;
      case '2':
        QueueApp.initialize()
        break;
      case '3':	
        LinkedListApp.initialize()
      default:
        break;
    }

  }while (op.toString() !== '0') 
}


initialize()



