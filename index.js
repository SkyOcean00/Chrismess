const form = document.querySelector('form#flickForm')

const addFlick = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const year = f.Year.value
  const flickName = f.flickName.value
  const item = document.createElement('li')
  const s1 = document.createElement('span')
  const s2 = document.createElement('span')

  s1.textContent = flickName
  s2.textContent ='   '+year

  s1.style.font='22px arial, sans-serif'
  s1.style.color = 'red'
  s1.style.backgroundColor = 'gold'
  s1.style.textAlign ='center'
  s2.style.color = '#51ff00'
  s2.style.fontSize='18px'
  s2.style.textAlign ='center'
  s2.style.backgroundColor = 'silver'
  item.appendChild(s1)
  item.appendChild(s2)
  

  const list = document.querySelector('#flicks')
  list.appendChild(item)

  f.reset()
}

form.addEventListener('submit', addFlick)