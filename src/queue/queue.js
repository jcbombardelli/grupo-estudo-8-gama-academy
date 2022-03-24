
class Queue {

  constructor() {
    this.data = []
  }

  enqueue(item) {
    this.data.push(item)
  }

  dequeue() {
    return this.data.shift()
  }

  _isEmpty() {
    return this.data.length === 0
  }

  peek() {
    return this.data[0]
  }

  size() {
    return this.data.length
  }

  print() {
    console.log(this.data)
  }

}

module.exports = Queue