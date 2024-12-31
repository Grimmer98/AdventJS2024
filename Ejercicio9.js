function moveTrain(board, mov) {
    let trainEnginePosition = []
    
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === '@') {
          trainEnginePosition = [i, j]
        }
      }
    }
    
    let newRow = trainEnginePosition[0]
    let newCol = trainEnginePosition[1]
    
    if (mov === 'U') {
      newRow -= 1
    } else if (mov === 'D') {
      newRow += 1
    } else if (mov === 'L') {
      newCol -= 1
    } else if (mov === 'R') {
      newCol += 1
    }
    
    if (newRow < 0 || newRow >= board.length || newCol < 0 || newCol >= board[0].length || board[newRow][newCol]==='o') {
      return 'crash'
    }
    
    const newContent = board[newRow][newCol];
    
    if (newContent === '*') {
      return 'eat'
    }
    return 'none'
  }