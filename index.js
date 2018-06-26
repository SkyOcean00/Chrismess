const form = document.querySelector('form#flickForm')

const addFlick = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const year = f.Year.value
  const flickName = f.flickName.value
  const item = document.createElement('li')
 
  item.appendChild(adds1(flickName))
  item.appendChild(adds2(year))
  

  const list = document.querySelector('#flicks')
  list.appendChild(item)

  f.reset()
}
function adds1(flickName){
  const s1 = document.createElement('span')
  s1.textContent = flickName
  s1.style.font='22px arial, sans-serif'
  s1.style.color = 'red'
  s1.style.backgroundColor = 'gold'
  s1.style.textAlign ='center'
  return s1
}
function adds2(year){
  const s2 = document.createElement('span')
  s2.textContent ='   '+year

  s2.style.color = '#51ff00'
  s2.style.fontSize='18px'
  s2.style.textAlign ='center'
  s2.style.backgroundColor = 'silver'
  return s2
}
 

form.addEventListener('submit', addFlick)