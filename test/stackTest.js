var expect = require('chai').expect;
var Stack = require('../lib/stack.js').Stack;
var Node = require('../lib/stack.js').Node;

describe('Stacks', function() {
  it('should have a value after being created', function() {
    stack = new Stack();
    expect(stack).to.have.property('head').that.equals(null);
  })
})

describe('Pushing onto stacks', function() {
  it('should put one new value at the top of the stack', function() {
    stack = new Stack();
    expect(stack).to.have.property('head').that.equals(null);

    node1 = new Node(1, null, null);
    stack.push(node1);

    expect(stack).to.have.property('head').that.equals(node1);
  })

  it ('should put multiple new values at the top of the stack', function() {
    stack = new Stack();
    expect(stack).to.have.property('head').that.equals(null);

    node1 = new Node(1, null, null);
    stack.push(node1);

    node2 = new Node(2, null, null);
    stack.push(node2);

    node3 = new Node(3, null, null);
    stack.push(node3);

    expect(stack).to.have.property('head').that.equals(node3);
  })
})

describe('Popping off of stacks', function() {
  it('should take the first item off the top of the stack', function() {
    stack = new Stack();
    node1 = new Node(1, null, null);
    node2 = new Node(2, null, null);
    node3 = new Node(3, null, null);
    stack.push(node1);
    stack.push(node2);
    stack.push(node3);

    expect(stack).to.have.property('head').that.equals(node3);

    popped = stack.pop();
    expect(popped).to.equal(node3);
    expect(stack).to.have.property('head').that.equals(node2);
  })

  it('should throw an error if the stack is empty', function() {
    stack = new Stack();
    expect(stack.pop).to.throw(Error);
  })
})
