// implementing a stack from scratch using Javascript.. 
// Stacks in Data Structures is a linear type of data structure that follows the LIFO (Last-In-First-Out) principle and allows insertion and deletion operations from one end of the stack data structure, that is top.
class Stack{
    constructor(){
        this.items = []
        this.count = 0
    }
    // add element to top of the stack
    push(element){
        this.items[this.count] = element;
        this.count++
        console.log(`${element} added to position ${this.count}`);
        return this.count - 1
    }
    // remove element form the top of the stack / return undefined if stack if empty
    pop(){
        if(this.count == 0) return undefined;
        let deleteItem = this.items[this.count - 1];
        this.count--;
        console.log(`${deleteItem} removed from the top`);
        return deleteItem;
    }
    // check top element in stack
    peek(){
        return this.items[this.count - 1]
    }
    // check if the stack is empty
    isEmpty(){
        return this.count == 0 
    }
    // check size of stack
    size(){
        return this.count
    }
    // print stack elements
    print(){
        let str = ''
        for (let i = 0; i < this.count; i++){
        str = this.items[i] + '';}
        return str
    }

    // clear stack
    clear(){
        this.items = [];
        this.count = 0;
        return this.items
    }

}

const stack = new Stack();
stack.push('hey');
stack.push('hello')
stack.push('hi')
stack.push(1950)
stack.pop()
stack.pop()
stack.peek()
stack.clear()