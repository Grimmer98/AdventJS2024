function getCompleted(timeWorked, totalTime){
    const toSecond = timeString =>{
      const [hour,minute,seconds] = timeString.split(':').map(Number)
      return hour*3600 + minute*60 + seconds
    }
  
    const secondsWorked = toSecond(timeWorked)
    const totalSeconds = toSecond(totalTime)
  
    const roundedPercentage = Math.round((secondsWorked/totalSeconds)*100)
    return roundedPercentage.toString() + '%'
  }