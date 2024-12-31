function decodeFilename(filename) {
    const fileNameStart = filename.indexOf("_")+1
    const fileNameDot = filename.indexOf(".")
    const fileNameEnd = filename.indexOf(".", fileNameDot+1)
  
    return filename.substring(fileNameStart, fileNameEnd)
  }