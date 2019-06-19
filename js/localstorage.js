

console.log(localStorage)

function getItem(key) {
   return localStorage.getItem(key) === null ? '' : localStorage.getItem(key)
}

function setItem(key, value) {
  localStorage.setItem(key,value)
}