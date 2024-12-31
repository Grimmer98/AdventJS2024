function drawRace(indices, length) {
    let result = ''
    const indicesLength = indices.length
    for(let i=0; i<indicesLength;i++){
      result += ' '.repeat(indicesLength-1-i)
      if(indices[i]==0){
        result += '~'.repeat(length) + ` /${i+1}`
      }else if(indices[i]<0){
        result += '~'.repeat(length+indices[i])
        result += 'r' + '~'.repeat(-indices[i]-1)
        result += ` /${i+1}`
      }else{
        result += '~'.repeat(indices[i])
        result += 'r' + '~'.repeat(length-indices[i]-1) + ` /${i+1}`
      }
      if(i<indicesLength-1){
        result += '\n'
      }
    }
    return result
  }