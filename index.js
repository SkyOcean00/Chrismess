const button = document.querySelector('button')

const change1 = function() {
  const h = document.querySelector('h1')
  h.textContent = 'Wuuu Yeah!'
}

const change2 = function() {
    const h1 = document.querySelector('#h101')
    h1.textContent = 'Great is good!'
  }


button.addEventListener('click', change1)
button.addEventListener('click', change2)