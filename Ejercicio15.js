function drawTable(data) {
    if(data.length===0) return ''
   let result = ''
   const columns = Object.keys(data[0])
   const columnWidths = columns.map(column => column.length)
 
   for(let row of data){
     columns.forEach((col,idx) =>{
       columnWidths[idx] = Math.max(columnWidths[idx], row[col].toString().length)
     })
   }
   
 
   const separator = '+' + columnWidths.map(width =>
     '-'.repeat(width+2)).join('+') + '+'
   
   const firstRow = '|' + columns.map((col, idx) => {
     const capitalizedCol = col.charAt(0).toUpperCase() + col.slice(1);
     return ' ' + capitalizedCol + ' '.repeat(columnWidths[idx] - capitalizedCol.length+1);
   }).join('|') + '|'
   
   result += separator +
      '\n' + firstRow + '\n' + separator + '\n'
 
   for(let item of data){
     const row = '|' + columns.map((col, idx) => {
       const value = item[col].toString()
       return ' ' + value + ' '.repeat(columnWidths[idx] - value.length+1)
     }).join('|') + '|'
     result += row + '\n'
   }
   result += separator
   return result
 }