function findMissingNumbers(nums) {
    const result = []
    const maxNumber = nums.reduce((max,current) =>{
      return current>max?current:max
    }, -Infinity)
    numsSet = new Set(nums)
    for(let i=1; i<=maxNumber;i++){
      if(!numsSet.has(i)){result.push(i)}
    }
    return result 
  }