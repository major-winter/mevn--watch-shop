// Params: array of objects
async function saveToLocalStorage (array) {
  array.forEach(async item => {
    const key = Object.keys(item)[0]
    const value = Object.values(item)[0]
    await localStorage.setItem(key, JSON.stringify(value))
  })
}

// Params: array of items
async function removeFromLocalStorage (array) {
  array.forEach(async item => {
    await localStorage.removeItem(item)
  })
}

export { saveToLocalStorage, removeFromLocalStorage }