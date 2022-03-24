
class LinkedList {
  
  constructor() {
    this.head = null;     
  }

  add(node) {
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
  }

  insert(index, node) {
    if(index < 0) throw new Error('Invalid index')
    
    if (index === 0) {
      this.add(node)
      return
    }
    let current = this.head
    let previous = null
    let i = 0
    while (i < index) {
      previous = current
      current = current.next
      i++
    }
    previous.next = node
    node.next = current
  }

  remove(index){
    if(index < 0) throw new Error('Invalid index')
    
    if(index === 0) { 
      this.head = this.head.next
      return
    }

    let current = this.head
    let previous = null
    let i = 0
    while (i < index) {
      previous = current
      current = current.next
      i++
    }
    previous.next = current.next
  }

  indexOf(element){
    let current = this.head
    let index = 0
    while(current){
      if(current.value === element) return index
      index++
      current = current.next
    }
    return -1
  }

  clear() {
    this.head = null
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    return current
  }

  size() {
    let current = this.head
    let count = 0
    while (current) {
      count++
      current = current.next
    }
    return count
  }

  print() {
    let current = this.head
    while (current) {
      console.log(current.value)
      current = current.next
    }
  }

}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = {
  LinkedList,
  Node
}