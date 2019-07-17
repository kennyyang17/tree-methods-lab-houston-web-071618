function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left)
  }
  console.log(currentNode.data);
  if (currentNode.right) {
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode){
  let currentNode = rootNode
  if(newNode.data < rootNode.data){
      currentNode = rootNode.left
      if(currentNode){
        findOrAdd(currentNode, newNode)
      } else {
        rootNode.left = newNode
      }
  } else if(newNode.data > rootNode.data) {
    currentNode = rootNode.right
    if(currentNode){
      findOrAdd(currentNode, newNode)
    } else {
      rootNode.right = newNode
    }
  } 
}

function inOrderArray(currentNode) {
  let result = [];
  if (currentNode.left) {
    inOrder(currentNode.left)
  }
  result.push(currentNode.data)
  if (currentNode.right) {
    inOrder(currentNode.right)
  }
}

function max(currentNode) {
  let result = inOrderArray(currentNode);
  return Math.max(...result)
}

function min(currentNode) {
   let result = inOrderArray(currentNode);
  return Math.min(...result)
}
 