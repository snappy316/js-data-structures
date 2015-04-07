class Stack
  constructor: ->
    this.head = null

  push: (node) ->
    if this.head?
      this.head.prev = node
      node.next = this.head
      this.head = node
    else
      this.head = node

  pop: ->
    if this.head?
      temp = this.head
      this.head.next.prev = null
      this.head = this.head.next
      temp
    else
      throw new Error("Stack is empty")


class Node
  constructor: (val, next, prev) ->
    this.val = val
    this.next = next
    this.prev = prev

module.exports =
  Stack: Stack
  Node: Node
