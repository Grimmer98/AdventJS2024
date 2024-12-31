/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
    const result = {missing: {}, extra: {}}
    
    receivedOccurrences = {}
    expectedOccurrences = {}
  
    for(const element of received){
      receivedOccurrences[element] = (receivedOccurrences[element] || 0) + 1
    }
    for(const element of expected){
      expectedOccurrences[element] = (expectedOccurrences[element] || 0) + 1
    }
    //let's check missing:
    for(const elem of Object.keys(expectedOccurrences)){
      if(!Object.keys(receivedOccurrences).includes(elem)){
        result.missing[elem] = expectedOccurrences[elem]
      }else{
        if(expectedOccurrences[elem]>receivedOccurrences[elem]){
          const missingOccurrences = 
            expectedOccurrences[elem]-receivedOccurrences[elem]
          result.missing[elem] = missingOccurrences
        }
      }
    }
    //let's check extra:
    for(const elem of Object.keys(receivedOccurrences)){
      if(!Object.keys(expectedOccurrences).includes(elem)){
        result.extra[elem] = receivedOccurrences[elem]
      }else{
        if(receivedOccurrences[elem]>expectedOccurrences[elem]){
          const missingOccurrences = 
            receivedOccurrences[elem]-expectedOccurrences[elem]
          result.extra[elem] = missingOccurrences
        }
      }
    }
    return result
  }
    