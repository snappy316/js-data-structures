var expect = require('chai').expect;
var LinkedList = require('../lib/linkedList.js');
var Node = require('../lib/linkedList.js');

setup_nodes = function() {
  this.node12 = new Node(12, null, null);
  this.node22 = new Node(22, null, null);
  this.node32 = new Node(32, null, null);
  this.node42 = new Node(42, null, null);
  this.node52 = new Node(52, null, null);
  this.node62 = new Node(62, null, null);
  this.node72 = new Node(72, null, null);
  this.node82 = new Node(82, null, null);

  node12.next = node22;
  node22.prev = node12;
  node22.next = node32;
  node32.prev = node22;
  node32.next = node42;
  node42.prev = node32;
  node42.next = node52;
  node52.prev = node42;
  node52.next = node62;
  node62.prev = node52;
  node62.next = node72;
  node72.prev = node62;
  node72.next = node82;
  node82.prev = node72;
};

setup_list = function() {
  this.list = new LinkedList(node12);
  list.head = node12;
};

describe('Nodes', function() {
  it('should have a value after being created', function() {
    var node12 = new Node(12, null, null);
    var node22 = new Node(22, null, null);

    node12.next = node22;
    node22.prev = node12;

    expect(node12).to.have.property('val').that.equals(12);
    expect(node12).to.have.property('next').that.equals(node22);
    expect(node22).to.have.property('prev').that.equals(node12);
  })
})

describe('Linked List', function() {
  it('should have a head value', function() {
    setup_nodes();
    setup_list();
    expect(list).to.have.property('head').that.equals(node12);
  })
})

describe('Inserting a node', function() {
  it('should insert a node at the head of the list', function() {
    setup_nodes();
    var list = new LinkedList(node12);
    list.head = node12;

    var node2 = new Node(2, null, null);
    // list.insert_node(node2);
    //
    expect(list).to.respondTo('removeNode');
    // expect(node12).to.have.property('prev').that.equals(node2);
    // expect(node2).to.have.property('next').that.equals(node12);
    // expect(list).to.have.property('head').that.equals(node2);
  })
})

describe('Searching for a node', function() {
  it('should return a value if it is found', function() {
    setup_nodes();
  })

  it('should return nil if it is not found', function() {
    setup_nodes();
  })

  it('should return the first value if searching for the first', function() {
    setup_nodes();
  })
})

describe('Removing a node', function() {
  it('should remove the given node if it exists', function() {
    setup_nodes();
  })

  it('should return nil if it is not found', function() {
    setup_nodes();
  })
})

// describe('Printing a list', function() {
//   it('should print a list of the node values', function() {
//     setup_nodes();
//     var list = new LinkedList(node12);
//     list.head = node12;
//     list.toString();

//     expect(list).to.have.property('toString').that.equals('12, 22, 32, 42, 52, 62, 72, 82');
//   })
// })
