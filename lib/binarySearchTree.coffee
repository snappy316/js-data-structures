class BinarySearchTree
  constructor: ->
    @root = null
    @size = 0
    @depth = 0
    @balance = 0

  insert: (value) ->
    if @root?
      current_depth = 1
      current_node = @root
      while current_node.value != value
        if value < current_node.value
          unless current_node.left?
            current_node.left = {value: value}
            @balance--
          current_node = current_node.left
          current_depth++
        else
          unless current_node.right?
            current_node.right = {value: value}
            @balance++
          current_node = current_node.right
          current_depth++
      @depth = current_depth if current_depth > @depth
    else
      @root = {value: value}
      @depth = 1
    @size++


  contains: (value) ->
    current_node = @root
    while true
      if !current_node
        return false
      else if value < current_node.value
        current_node = current_node.left
      else if value > current_node.value
        current_node = current_node.right
      else if value == current_node.value
        return true

  size: ->
    @size

  depth: ->
    @depth

  balance: ->
    @balance

module.exports =
  BinarySearchTree: BinarySearchTree
