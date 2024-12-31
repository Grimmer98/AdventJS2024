function createXmasTree(height, ornament) {
    /* Code here */
    let result = ''
    let widthLength = height * 2 -1 
    for(let i =1; i<=height; i++){
      let amountOfOrnaments = i*2-1
      let amountOfUnderScore =(widthLength-amountOfOrnaments)/2
      result += '_'.repeat(amountOfUnderScore)
      result += ornament.repeat(amountOfOrnaments)
      result += '_'.repeat(amountOfUnderScore)
      result += '\n'
    }
    let amountOfUnderScore = (widthLength-1)/2
    result += '_'.repeat(amountOfUnderScore)
    result += '#' + '_'.repeat(amountOfUnderScore) + '\n'
    result += '_'.repeat(amountOfUnderScore)
    result += '#' + '_'.repeat(amountOfUnderScore)
    return result
  }