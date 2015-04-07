class LinkedList
  constructor: (@head) ->

  toString: ->
    current = head
    string = while current.val?
      temp = current.val
      current = current.next
      temp

  insNode: ->
    "hello"

class Node
  constructor: (val, next, prev) ->
    this.val = val
    this.next = next
    this.prev = prev

module.exports =
  LinkedList: LinkedList
  Node: Node
