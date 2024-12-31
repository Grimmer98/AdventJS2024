function removeSnow(s) {
    let i=0
    let j=1
    while(j<s.length){
      if(s[i]===s[j]){
        //duplicate found
        s = s.slice(0,i) + s.slice(j+1)
        i=0
        j=1
      }else{
        i++
        j++
      }
    }
    return s
  }