function calculatePrice(ornaments) {
    const prices = new Map([
      ['*', 1], ['o', 5], ['^', 10],
      ['#', 50], ['@', 100]
    ])
    let result = 0
    for(let i=0; i<ornaments.length-1; i++){
      if(!prices.has(ornaments[i])){return undefined}
      if(prices.get(ornaments[i])<prices.get(ornaments[i+1])){
        result -= prices.get(ornaments[i])
      }else{
        result += prices.get(ornaments[i])
      }
    }
    if(!prices.has(ornaments[ornaments.length-1])){return undefined}
    result += prices.get(ornaments[ornaments.length-1])
    return result      
  }