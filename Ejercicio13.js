function isRobotBack(moves) {
    let robotPosition = [0,0]
    const movesMap = new Map([
      ['L', [-1,0]], ['R', [1,0]],
      ['U', [0,1]], ['D', [0,-1]]
    ])
    const invertedMoves = new Map([
      ['L', 'R'], ['R', 'L'],
      ['U', 'D'], ['D', 'U']
    ])
    let i=0
    while(i<moves.length){
      if(i<moves.length-1){
        if(moves[i]==='*'){
          robotPosition = robotPosition.map(
            (value,index) =>
              value + 2*movesMap.get(moves[i+1])[index] 
          )
          i+=2
          continue
        }else if(moves[i]==='!'){
          moves = moves.slice(0,i+1) +
           invertedMoves.get(moves[i+1]) + moves.slice(i+2)
          robotPosition = robotPosition.map(
            (value,index) => value + 
            movesMap.get(moves[i+1])[index]
          )
          i+=2
          continue
        }else if(moves[i]==='?'){
          if(i>0 && !moves.substring(0,i).includes(moves[i+1])){
            robotPosition = robotPosition.map(
              (value,index) => value + 
                movesMap.get(moves[i+1])[index]
            )
          }
          i+=2
          continue
        }
      }
      if(movesMap.has(moves[i])){
        robotPosition = robotPosition.map(
          (value, index) => value + 
            movesMap.get(moves[i])[index]
        )
      }
      i++
    }
    return (robotPosition[0]===0 && robotPosition[1]===0)
      ?true:robotPosition
  }