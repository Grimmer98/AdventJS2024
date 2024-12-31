function organizeShoes(shoes) {
    const leftShoes = new Map(); 
    const rightShoes = new Map(); 
    const result = []; 
  
    for (let shoe of shoes) {
      if (shoe.type === 'I') {
        leftShoes.set(shoe.size, (leftShoes.get(shoe.size) || 0) + 1);
      } else if (shoe.type === 'R') {
        rightShoes.set(shoe.size, (rightShoes.get(shoe.size) || 0) + 1);
      }
    }
  
    for (let [size, leftCount] of leftShoes.entries()) {
      const rightCount = rightShoes.get(size) || 0; 
      const matches = Math.min(leftCount, rightCount); 
  
      for (let i = 0; i < matches; i++) {
        result.push(size);
      }
    }
  
    return result;
  
  }