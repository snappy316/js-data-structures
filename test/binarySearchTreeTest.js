var expect = require('chai').expect;
var BinarySearchTree = require('../lib/binarySearchTree.js').BinarySearchTree;

describe('Binary Search Tree', function() {
  var bst = null;

  beforeEach(function() {
    bst = new BinarySearchTree();
  });

  it('should initialize empty', function() {
    expect(bst).to.have.property('size').that.equals(0);
  });

  it('should insert values', function() {
    bst.insert(5);
    expect(bst.size).to.equal(1);
  });

  it('should find values', function() {
    bst.insert(5);
    bst.insert(4);
    bst.insert(6);
    bst.insert(8);
    bst.insert(2);
    bst.insert(3);
    expect(bst.contains(4)).to.be.true;
    expect(bst.contains(10)).to.be.false;
  });

  it('should keep track of its size', function() {
    bst.insert(5);
    expect(bst.size).to.equal(1);
    bst.insert(4);
    expect(bst.size).to.equal(2);
    bst.insert(6);
    expect(bst.size).to.equal(3);
    bst.insert(8);
    expect(bst.size).to.equal(4);
    bst.insert(2);
    expect(bst.size).to.equal(5);
    bst.insert(3);
    expect(bst.size).to.equal(6);
  });

  it('should keep track if its depth', function() {
    bst.insert(5);
    expect(bst.depth).to.equal(1);
    bst.insert(4);
    expect(bst.depth).to.equal(2);
    bst.insert(6);
    expect(bst.depth).to.equal(2);
    bst.insert(8);
    expect(bst.depth).to.equal(3);
    bst.insert(2);
    expect(bst.depth).to.equal(3);
    bst.insert(3);
    expect(bst.depth).to.equal(4);
  });

  it('should keep track of its balance', function() {
    bst.insert(5);
    expect(bst.balance).to.equal(0);
    bst.insert(4);
    expect(bst.balance).to.equal(-1);
    bst.insert(6);
    expect(bst.balance).to.equal(0);
    bst.insert(8);
    expect(bst.balance).to.equal(1);
    bst.insert(2);
    expect(bst.balance).to.equal(0);
    bst.insert(3);
    expect(bst.balance).to.equal(1);
  });
});
