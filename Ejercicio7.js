function fixPackages(packages) {
    const stack = []
  
    for(let i=0;i<packages.length;i++){
      if(packages[i]==='('){
        stack.push(i)
      }else if (packages[i]===')'){
        let index = stack.pop()
        packages = packages.slice(0,index) + " " + packages.slice(index+1,i).split('').reverse().join('') + " " + packages.slice(i+1)
      }
    }
    packages = packages.split("").filter(elem => elem !==" ").join("")
    return packages
  }
  