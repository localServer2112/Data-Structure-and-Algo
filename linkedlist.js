// what is a linked list?
// it consists of nodes, and each node has a value and a pointer to another node or null -- it contains a head, tail and length property

/** linked list vs array
 * 
 * linked list -- Do not have indices, connected via nodes with a next pointer, random access is not allowed
 * 
 * arrays -- indexed in order, insertion and deletion can be expensive, can be quickly accessed at a specific index
 * 
**/

// singly linked list
class Node{
    constructor(_val){
        this.val = _val;
        this.next = null;
    }
}

// let first = new Node("Hi");
// first.next = new Node("There");
// first.next.next = new Node("YO");
// this is a low level implementation of a singly linked list

class SinglyLinkedList{
    // constructor for the basic property of a linked list
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // create instance methods of the SLL class
    push(val){
        // this inserts to the end of the linked list
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            // this.length+=1;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        // remove a node from the end of the linked list
    }
}

let listt = new SinglyLinkedList();