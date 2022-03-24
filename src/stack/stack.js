class Stack {

    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    top() {
        return this.items[this.items.length - 1];
    }

    _isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        let stringBuilder = "|───|\n";
        for (let i = this.items.length; i > 0; i--) {
            stringBuilder +=  `| ${this.items[i-1]} |\n|───|\n`;
        }
        console.log(stringBuilder);
    }
}

module.exports = Stack