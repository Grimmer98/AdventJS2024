function distributeWeight(weight) {
    
    let result = ''
    const boxes = []
    const boxRepresentations = {
      1: [" _ ", "|_|"] ,
      2: [" ___ ", "|___|"],
      5: [" _____ ", "|     |", "|_____|"],
      10: [" _________ ", "|         |", "|_________|"]
    }
    while(weight>0){
      if(weight-10>=0){
        weight -= 10
        boxes.push(10)
      }else if(weight-5>=0){
        weight -= 5
        boxes.push(5)
      }else if(weight-2>=0){
        weight -=2
        boxes.push(2)
      }else if(weight-1>=0){
        weight--
        boxes.push(1)
      }
    }
    for(let i=boxes.length-1;i>=0;i--){
        if(i===boxes.length-1){
            result += boxRepresentations[boxes[i]][0] + '\n'
        }
        if(boxRepresentations[boxes[i]].length>2){
            result += boxRepresentations[boxes[i]][1] + '\n'
            result += boxRepresentations[boxes[i]][2] 
        }else{
            result += boxRepresentations[boxes[i]][1]
        }
         
      
      if(i-1>=0){
        let boxesDifference = boxRepresentations[boxes[i-1]][0].length-boxRepresentations[boxes[i]][0].length
        if(boxesDifference>1){
          result += '_'.repeat(boxesDifference-1)
        }                          
      }
      if(i>0){
        result += '\n'
      }
      
    }
    return result
  }