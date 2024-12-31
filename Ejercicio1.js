function prepareGifts(gifts) {
    const uniqueGifts = [...new Set(gifts)]
    uniqueGifts.sort((a,b) => a-b)
    return uniqueGifts
  }