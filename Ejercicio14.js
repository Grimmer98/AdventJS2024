function minMovesToStables(reindeer, stables) {
    let result = 0
    for(let reindeerPos of reindeer){
      let minMove = [Math.abs(reindeerPos-stables[0]),0]
      for(let i=1; i<stables.length; i++){
        if(Math.abs(reindeerPos-stables[i])<minMove[0]){
          minMove = [Math.abs(reindeerPos-stables[i]),i]
        }
      }
      result += minMove[0]
      stables = stables.slice(0,minMove[1]).concat(
         stables.slice(minMove[1]+1))
    }
    return result
  }
  