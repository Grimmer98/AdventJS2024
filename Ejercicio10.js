function compile(instructions) {
    const splitInstructions = []
    let result = 0
    let auxVar = 0
    for (let instruction of instructions){
      let splitInstruction = instruction.split(" ")
      splitInstructions.push(splitInstruction)
    }
    if(!instructions.some(instruction => instruction.includes("A"))){return undefined}
    for(let i=0; i<splitInstructions.length; i++){
      if(splitInstructions[i][0]==="MOV"){
        if(splitInstructions[i][1]!=="A"){
          if(isNaN(Number(splitInstructions[i][1]))){
            result = auxVar
          }else{
            if(splitInstructions[i][2]==="A"){
              result = Number(splitInstructions[i][1])
            }else{
              auxVar = Number(splitInstructions[i][1])
            }
          }
        }else{
          auxVar = result
        }
      }else if(splitInstructions[i][0]==="INC"){
        if(splitInstructions[i][1]==="A"){
          result++
        }else{
          auxVar++
        }
      }else if(splitInstructions[i][0]==="DEC"){
        if(splitInstructions[i][1]==="A"){
          result--
        }else{
          auxVar--
        }
      }else if(splitInstructions[i][0]==="JMP"){
        if(splitInstructions[i][1]==="A"){
          if(result===0){i=Number(splitInstructions[i][2]-1)}
        }else{
          if(auxVar===0){i=Number(splitInstructions[i][2]-1)}
        }
      }
    }
    return result
  }