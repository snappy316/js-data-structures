class LinkedList
  constructor: (@head) ->

  toString: ->
    current = @head
    string = ""
    while current.next?
      string = string + current.val + ", "
      current = current.next
    string = string + current.val
    string

  insert: (node) ->
    node.next = @head
    @head.prev = node
    @head = node

  remove: (node) ->
    return null unless node.next?
    if node.prev?
      node.prev.next = node.next
      node.next.prev = node.prev
    else
      node.next.prev = null
      @head = node.next

    node.val

  search: (val) ->
    current = @head
    until current.val == val || !current.next?
      current = current.next
    return null unless current.val == val
    current.val

class Node
  constructor: (val, next, prev) ->
    this.val = val
    this.next = next
    this.prev = prev

module.exports =
  LinkedList: LinkedList
  Node: Node
