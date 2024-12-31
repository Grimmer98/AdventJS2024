function isTreesSynchronized(tree1, tree2) {
    if(!tree1 && !tree2){
      return [true, null]
    }
    if(!tree1 || !tree2){
      return [false, tree1?tree1.value:null]
    }
    if(tree1.value!== tree2.value){
      return [false, tree1.value]
    }
    const leftCheck = isTreesSynchronized(tree1.left, tree2.right)
    const rightCheck = isTreesSynchronized(tree1.right, tree2.left)
    return [leftCheck[0] && rightCheck[0], tree1.value]
  }