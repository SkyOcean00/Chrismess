const button = document.querySelector('button')

const change = function() {
  const h = document.querySelector('h1')
  h.textContent = 'Wuuu Yeah!'
}
button.addEventListener('click', change)
const change2 = function() {
    const h = document.querySelector('#h101')
    h.textContent = 'Greedy is good!'
  }
button.addEventListener('click', change2)

const submit = document.querySelector('#i100')


const change1 = function() {
  const h = document.querySelector('h1')
  h.textContent = document.querySelector("#ahead").value
  
}

submit.addEventListener('click', change1)

document.getElementById("i100").addEventListener("click", function(event) {
    
    event.preventDefault();
}, false);


document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    const result = document.getElementById("ahead").innerHTML;
    const h1 = document.getElementById('ALLA')
       if (keyName === 'Enter') {
        h1.textContent = result.innerHTML;
        }

    }
)