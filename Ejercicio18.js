/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
    let result = []
    let childrenInfo = agenda.split('\n')
    for(let info of childrenInfo){
      let phoneNumberIndex = info.indexOf('+')
      let blankSpaceIndex = 
        info.indexOf(' ', phoneNumberIndex+1)
      if(blankSpaceIndex===-1){blankSpaceIndex=info.length}
      let phoneNumber = info.slice(phoneNumberIndex+1,blankSpaceIndex)
      if(phoneNumber.includes(phone)){
        let lessThanIndex = info.indexOf('<')
        let greaterThanIndex = info.indexOf('>')
        let childName = info.slice(lessThanIndex+1,greaterThanIndex)
        //find the address
        let childAddresss = ''
        if(phoneNumberIndex<lessThanIndex){
          childAddresss += info.slice(0,phoneNumberIndex) +
            info.slice(blankSpaceIndex,lessThanIndex) + 
            info.slice(greaterThanIndex+1) 
        }else{
          childAddresss += info.slice(0,lessThanIndex) + 
            info.slice(greaterThanIndex+1, phoneNumberIndex) +
            info.slice(blankSpaceIndex)
        }
        childAddresss = childAddresss.trim()
        result.push({name: childName, address: childAddresss})
      }
    }
    if(result.length===0 || result.length>1){
      return null
    }else{
      return result[0]
    }
  
  }
    