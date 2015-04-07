# JavaScript Data Structures

This repo is a collection of data structures and algorithms implemented in JavaScript.

## Stacks

A stack is a collection of elements that is last-in, first-out (LIFO). I implemented the Stack algorithm in CoffeeScript. In my implementation, the stack is a collection of nodes, where each node contains a value, and a pointer to the previous node and next node. It has two methods:
- `push(node)` - adds the node to the beginning of the stack. It will set the stack's `head` to the `node`, and if there is already a `head` node, it will create the new `prev` and `next` associations between the new head and old head.
- `pop()` - removes the node from the beginning of the stack, and returns it. If the stack is empty, it will throw an error.

I BDD'd the stack by using Mocha and Chai.
