// 1--> 10 --> 99 --> 5 --> 16

// let myLinkedList = {
//     head: {
//         value: value,
//         next: {
//             value: value,
//             next: {
//                 value: value,
//                 next: null
//             }
//         }
//     }
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// Singly LinkedList

// class SinglyLinkedList {
//   constructor(value) {
//     this.head = {
//       value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }

//   append(value) {
//     // let new_node = new Node(value);
//     let new_node = {
//       value,
//       next: null,
//     };
//     this.tail.next = new_node;
//     this.tail = new_node;
//     this.length++;
//   }

//   prepend(value) {
//     // let new_node = new Node(value);
//     let new_node = {
//       value,
//       next: null,
//     };
//     new_node.next = this.head;
//     this.head = new_node;
//     this.length++;
//   }

//   printList() {
//     let arr = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       arr.push(currentNode);
//       currentNode = currentNode.next;
//     }
//     console.log(arr);
//   }

//   insert(index, value) {
//     if (index >= this.length) {
//       this.append(value);
//     }
//     // const new_node = new Node(value);
//     let new_node = {
//       value,
//       next: null,
//     };
//     let leader = this.tranverseNode(index - 1);
//     let holdingPointer = leader.next;
//     leader.next = new_node;
//     new_node.next = holdingPointer;
//   }

//   tranverseNode(index) {
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }

//   remove(index) {
//     if (index > this.length) {
//       return "Index is greater than length of the item";
//     }

//     const leader = this.tranverseNode(index - 1);
//     const removeNode = leader.next;
//     leader.next = removeNode.next;
//     this.length--;
//   }

//   reverse() {
//     if (!this.head.next) {
//       return this.head;
//     }

//     let first = this.head;
//     console.log("first", first);
//     this.tail = this.head;
//     console.log("this.tail", this.tail);
//     let second = first.next;
//     while (second) {
//       let temp = second.next;
//       second.next = first;
//       first = second;
//       second = temp;
//     }
//     this.head.next = null;
//     this.head = first;
//   }
// }

// const mySinglyLinkedList = new SinglyLinkedList(10);
// mySinglyLinkedList.prepend(1);
// mySinglyLinkedList.append(5);
// mySinglyLinkedList.append(16);
// mySinglyLinkedList.insert(2, 99);
// // myLinkedList.insert(20, 88);
// mySinglyLinkedList.reverse();
// mySinglyLinkedList.printList();
// console.log(mySinglyLinkedList.printList());

// Doubly LinkedList

// class DoublyLinkedList {
//   constructor(value) {
//     this.head = {
//       value,
//       next: null,
//       prev: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }

//   append(value) {
//     // let new_node = new Node(value);
//     let new_node = {
//       value,
//       next: null,
//       prev: null,
//     };
//     new_node.prev = this.tail;
//     this.tail.next = new_node;
//     this.tail = new_node;
//     this.length++;
//   }

//   prepend(value) {
//     // let new_node = new Node(value);
//     let new_node = {
//       value,
//       next: null,
//       prev: null,
//     };
//     new_node.next = this.head;
//     this.head.prev = new_node;
//     this.head = new_node;
//     this.length++;
//   }

//   printList() {
//     let arr = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       arr.push(currentNode);
//       currentNode = currentNode.next;
//     }
//     console.log(arr);
//   }

//   insert(index, value) {
//     if (index >= this.length) {
//       this.append(value);
//     }
//     // const new_node = new Node(value);
//     let new_node = {
//       value,
//       next: null,
//       prev: null,
//     };
//     let leader = this.tranverseNode(index - 1);
//     let follower = leader.next;
//     leader.next = new_node;
//     new_node.prev = leader;
//     new_node.next = follower;
//     follower.prev = new_node;
//   }

//   tranverseNode(index) {
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }

//   remove(index) {
//     if (index > this.length) {
//       return "Index is greater than length of the item";
//     }

//     const leader = this.tranverseNode(index - 1);
//     const removeNode = leader.next;
//     leader.prev = this.head;
//     leader.next = removeNode.next;
//     this.length--;
//   }
// }

// const myDoublyLinkedList = new DoublyLinkedList(10);
// myDoublyLinkedList.prepend(1);
// myDoublyLinkedList.append(5);
// myDoublyLinkedList.append(16);
// myDoublyLinkedList.insert(2, 99);
// // // myLinkedList.insert(20, 88);
// myDoublyLinkedList.remove(2);
// // myDoublyLinkedList.remove(2);
// // myDoublyLinkedList.remove(2);
// // myDoublyLinkedList.printList();
// console.log(myDoublyLinkedList.printList());

// Create an Animal Class 

// class Animal {
//   constructor(name, food) {
//     this.name = name;
//     this.food = food;
//   }

//   sound() {
//     console.log(`${this.name} is making a sound`);
//   }
// }


// class Dog extends Animal {
//   constructor(name, food, weight) {
//     super(name, food);
//     this.weight = weight;
//   }

//   sound() {
//     console.log(`${this.name} is making a sound`);
//   }

//   eat() {
//     console.log(`${this.name} is eating ${this.food}`);
//   }

//   weight() {
//     console.log(`${this.name} is ${this.weight} kg`);
//   }
// }

// class Cat extends Animal {
//   constructor(name, food, weight) {
//     super(name, food);
//     this.weight = weight;
//   }

//   sound() {
//     console.log(`${this.name} is making a sound`);
//   }

//   eat() {
//     console.log(`${this.name} is eating ${this.food}`);
//   }

//   weight() {
//     console.log(`${this.name} is ${this.weight}`);
//   }
// }

// const myAnimal = new Animal("Animal", "Food");
// const myDog = new Dog("Dog", "Bone", "25kg");
// const myCat = new Cat("Cat", "Fish", "10kg");

// myAnimal.sound()
// myDog.sound();
// myCat.sound();
// myDog.eat();
// myCat.eat();
// myCat.weight();

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array;
  }

  // insert data into a particular index
  insert(index, data) {
    if (index > this.length) {
      return "Index is greater than length of the item";
    }

    if (index >= this.length) {
      this.append(data);
    }
    const newNode = new Node(data);
    let leader = this.traverseToIndex(index - 1);
    let follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    this.length++;
    return this;
  }

  // remove data from a particular index
  remove(index) {
    if (index >= this.length) {
      return "Index is greater than length of the item";
    }
    const leader = this.traverseToIndex(index - 1);
    const removeNode = leader.next;
    leader.next = removeNode.next;
    this.length--;
    return this;
  }

  // traverse to a particular index
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  
}

const myLinkedList = new LinkedList();
myLinkedList.append(15);
myLinkedList.append(7);
myLinkedList.append(19);
console.log(myLinkedList.printList());
myLinkedList.prepend(5);
console.log(myLinkedList.printList());
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());
