// const Stack = require("./todo");

// const stack = new Stack();
// const s = "shishir";

// for (let i = 0; i < s.length; i++) {
//   stack.push(s.charAt(i));
//   //console.log(h);
// }

// let rev = "";
// while (!stack.isEmpty()) {
//   rev += stack.pop();
// }
// console.log(rev);

// const stack = [];
// const s = "shishir";

// for (let i = 0; i < s.length; i++) {
//   stack.push(s.charAt(i));
//   //console.log(h);
// }

// let rev = "";
// while (stack.length ) {
//   // console.log(stack);
//   rev += stack.pop();
// }
// console.log(rev);

const Queue = require("./todo");
const queqe = new Queue();

queqe.inqueue("t1");
queqe.inqueue("t2");
queqe.inqueue("t3");
queqe.inqueue("t4");
queqe.showqueue();
queqe.disqueue();
queqe.showqueue();
//queqe.next();
console.log(queqe);
