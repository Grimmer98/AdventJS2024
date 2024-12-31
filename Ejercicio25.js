/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
    function helper(code, result){
      let i=0
      while(i<code.length){
        if(code[i]==='+'){
          result++; i++; continue
        }else if(code[i]==='-'){
          result--; i++; continue
        }else if(code[i]==='>'){
          i++; continue
        }else if(code[i]==='{'){
         const closingBracketIndex = code.indexOf('}', i)
          if(result!==0){
            result = helper(code.slice(i+1,closingBracketIndex),result)
          }
          i = closingBracketIndex+1; continue
        }else if(code[i]==='['){
          const closingSqBracketIndex = code.indexOf(']',i)
          if(result!==0){
            while(result!==0){
              result = helper(code.slice(i+1,closingSqBracketIndex),result)
            }
          }
          i = closingSqBracketIndex+1; continue
        }
  
      }
      return result
    }
    
    return helper(code,0)
  }
    