function detectBombs(grid) {
    const result = []
    for(let i=0;i<grid.length;i++){
      const row = []
      for(let j=0;j<grid[i].length;j++){
        //count adjacent bombs
        let count = 0
        for(let k=Math.max(i-1,0);k<Math.min(i+2,grid.length);k++){
          for(let z=Math.max(j-1,0);z<Math.min(j+2,grid.length);z++){
            if(k!==i || z!==j){
              if(grid[k][z]){count++}
            }
          }
        }
        row.push(count)
      }
      result.push(row)
    }
    return result
  }