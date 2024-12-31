function generateGiftSets(gifts) {
    const result = []
  
    function helper(index, currentSet){
      if(index===gifts.length){
        if(currentSet.length>0){
          result.push([...currentSet])
        }
        return
      }
      currentSet.push(gifts[index])
      helper(index+1,currentSet)
      currentSet.pop()
  
      helper(index+1,currentSet)
    }
  
    helper(0,[])
    result.sort((a,b) => a.length-b.length)
    return result
  }