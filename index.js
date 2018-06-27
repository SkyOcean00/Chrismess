let array1=[]
class App {
  constructor() {
    const form = document.querySelector('form#flickForm')
    form.addEventListener('submit', (ev) => {
      ev.preventDefault()
      this.handleSubmit(ev)
    })
  }

  renderProperty(name, value) {
    const span = document.createElement('span')
    span.classList.add(name)
    span.textContent = value
    return span
  }

  renderItem(flick) {
    const item = document.createElement('li')
    item.classList.add('flick')

    // get the list of properties
    const properties = Object.keys(flick)

    // loop over the properties
    properties.forEach((propertyName) => {
      // build a span, and append it to the list
      const span = this.renderProperty(propertyName, flick[propertyName])
      item.appendChild(span)
    })

    //build a button add it to the list
    const button = document.createElement('button')
    button.textContent = 'Delete'
    button.addEventListener( 'click', buttonDelete)

    item.id = array1.length
    item.appendChild(button)

    return item
  }

 


  handleSubmit(ev) {
    const f = ev.target

    const flick = {
      name: f.flickName.value,
      chris: f.chrisName.value,
    }

    //store each flick in an array.
    array1.push(flick)

    const item = this.renderItem(flick)

    const list = document.querySelector('#flicks')
    list.appendChild(item)

    f.reset()
    f.flickName.focus()
  }
}

const app = new App()

function buttonDelete(){
  let listid = this.parentElement.id
  const item =document.getElementById(listid)
  item.remove()
}

console.log(array1)