class Stack {

    constructor() {
        this.items = [];
        this.cursor = 0;
    }

    push(element) {
        this.items[this.cursor] = element
        this.cursor++
    }

    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        const poped = this.items[this.cursor]
        this.items[this.cursor] = null
        this.cursor--
        return poped
    }

    top() {
        return this.items[this.cursor];
    }

    _isEmpty() {
        return this.cursor === 0;
    }

    size() {
        return this.cursor + 1;
    }

    print() {
        let stringBuilder = "|───|\n";
        for (let i = this.size(); i > 0; i--) {
            stringBuilder +=  `| ${this.items[i-1]} |\n|───|\n`;
        }
        console.log(stringBuilder);
    }
}

module.exports = Stack