function organizeInventory(inventory) {
    // Code here
    const obj = {}
    for(let item of inventory){
      const {name, quantity, category} = item 
      if (category in obj){
        if(name in obj[category]){
          obj[category][name] += quantity
        }else{
          obj[category][name] = quantity
        }
      }else{
        obj[category] = {[name]: quantity}
      }
    }
    return obj
  }