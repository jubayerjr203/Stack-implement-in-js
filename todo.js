const Max_s = 30;

// class Stack {
//   constructor() {
//     this.list = new Array(Max);
//     this.top = -1;
//   }

//   // push for add one in arry
//   push(item) {
//     if (this.top >= Max) {
//       console.log("stack overflow");
//       return false;
//     }
//     this.list[++this.top] = item;
//     return true;
//   }

//   // delete one item from arry
//   pop() {
//     if (this.isEmpty()) return false;
//     let item = this.list[this.top];
//     delete this.list[this.top];
//     this.top--;
//     return item;
//   }

//   // ebar kon item delete hobe, means ${top} ta kpoto number e ase
//   peek() {
//     if (this.isEmpty()) return false;
//     return this.list[this.top];
//   }

//   // Stack empty or not
//   isEmpty() {
//     return this.top < 0;
//   }
// }

// module.exports = Stack;

class Queue {
  constructor() {
    this.fornt = 0;
    this.rear = 0;
    this.queue = new Array(Max_s);
  }
  eh() {
    return this.rear === Max_s;
  }
  // adding item in queue
  inqueue(item) {
    if (this.eh()) {
      console.log("queue is full");
      return false;
    }
    this.queue[this.rear++] = item;
  }
  // for deleteing one item from queue
  disqueue() {
    if (this.eh()) {
      console.log("queue is full");
      return false;
    }
    const item = this.queue[this.fornt];

    for (let i = this.fornt; i < this.rear - 1; i++) {
      // rear Er value ek beshi ase, tai this.rear - 1.
      // jehetu delete korbo, tai ekta delete hoya gele amare samne agote hobe.
      this.queue[i] = this.queue[i + 1];
    }
    // rear er value da age komaylam, er por oi da delete korlam
    delete this.queue[--this.rear];
    return;
  }
  // showing the item of queue
  showqueue() {
    if (this.eh()) {
      console.log("queue is full");
      return false;
    }
    for (let i = this.fornt; i < this.rear; i++) {
      console.log("show queqe", this.queue[i]);
    }
  }
  // see next item
  next() {
    if (this.eh()) {
      console.log("queue is full");
      return false;
    }
    return this.queue[this.fornt];
  }
}

module.exports = Queue;
