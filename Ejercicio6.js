function inBox(box) {
    let result = true
    //check edges
    for(let i=0;i<box[0].length;i++){
      if(box[0][i]!='#'){result=false}
    }
    for(let i=0;i<box[box.length-1];i++){
      if(box[box.length-1][i]!='#'){result=false}
    }
    for(let i=0;i<box.length;i++){
      if(box[i][0]!='#'){result = false}
    }
    for(let i=0;i<box.length;i++){
      if(box[i][box[i].length-1]!='#'){result=false}
    }
    let isInside = false
    for(let i=1; i<box.length-1;i++){
      for(let j=1;j<box[i].length;j++){
        if(box[i][j]=='*'){isInside=true}
      }
    }
    return result && isInside
  }