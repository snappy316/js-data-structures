var expect = require('chai').expect;
var LinkedList = require('../lib/linkedList.js').LinkedList;
var Node = require('../lib/linkedList.js').Node;

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
    expect(list).to.have.property('head').that.equals(node12);
  })
})

describe('Inserting a node', function() {
  it('should insert a node at the head of an existing list', function() {
    setup_nodes();

    var node2 = new Node(2, null, null);
    list.insert(node2);

    expect(node12).to.have.property('prev').that.equals(node2);
    expect(node2).to.have.property('next').that.equals(node12);
    expect(list).to.have.property('head').that.equals(node2);
  })

  it('should insert a node at the head of a new list', function() {
    var node1 = new Node(1, null, null);
    var new_list = new LinkedList(node1);

    expect(new_list).to.have.property('head').that.equals(node1);

    var node3 = new Node(3, null, null);
    new_list.insert(node3);

    expect(new_list).to.have.property('head').that.equals(node3);
    expect(node3).to.have.property('next').that.equals(node1);
    expect(node1).to.have.property('prev').that.equals(node3);
  })
})

describe('Removing a node', function() {
  it('should remove the given node if it exists', function() {
    setup_nodes();
    expect(list.remove(node32)).to.equal(node32.val);

    expect(node22).to.have.property('next').that.equals(node42);
    expect(node42).to.have.property('prev').that.equals(node22);
  })

  it('should return nil if it is not found', function() {
    setup_nodes();

    node102 = new Node(102, null, null);

    expect(list.remove(node102)).to.be.null;
  })

  it('should return the first node if it is removed', function() {
    setup_nodes();

    expect(list.remove(node12)).to.equal(node12.val);
    expect(list).to.have.property('head').that.equals(node22);
    expect(node22).to.have.property('prev').that.is.null;
  })
})

describe('Searching for a node', function() {
  it('should return a value if it is found', function() {
    setup_nodes();

    expect(list.search(node32.val)).to.equal(32);
  })

  it('should return nil if it is not found', function() {
    setup_nodes();
    node102 = new Node(102, null, null);

    expect(list.search(node102.val)).to.be.null;
  })

  it('should return the first value if searching for the first', function() {
    setup_nodes();

    expect(list.search(node12.val)).to.equal(12);
  })
})

describe('Printing a list', function() {
  it('should print a list of the node values', function() {
    setup_nodes();

    expect(list.toString()).to.equal('12, 22, 32, 42, 52, 62, 72, 82');
  })
})
