class LinkedList
  constructor: (head) ->

  toStringGarbage: ->
    current = head
    string = while current.val?
      current = current.next
      console.log(current.prev.val)
      current.prev.val

  removeNode: ->
    "hello"

class Node
  constructor: (val, next, prev) ->
    this.val = val
    this.next = next
    this.prev = prev

module.exports = LinkedList
module.exports = Node
