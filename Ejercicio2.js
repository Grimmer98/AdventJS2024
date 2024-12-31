function createFrame(names) {
    let longestNameSize = names[0].length
    for (let name of names){
      if (name.length > longestNameSize){
        longestNameSize = name.length
      }
    }
    let numberOfHorizontalAsterisks = longestNameSize + 4
    let result = ""
    result += '*'.repeat(numberOfHorizontalAsterisks)
    result += '\n'
    for(let i=0;i<names.length;i++){
      let gap = longestNameSize - names[i].length
      result += `* ${names[i]}` + ' '.repeat(gap) + ' *'
      result += '\n'
    }
    
    result += '*'.repeat(numberOfHorizontalAsterisks)
    return result
  }