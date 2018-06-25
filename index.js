


/*function change3() {
    const h1 = document.querySelector('#ALLA')
    h1.textContent = document.forms.querySelector('#ahead').value
    return false;
}

//', change3 )

document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    const result = document.getElementById("ahead").innerHTML;
    const h1 = document.getElementById('ALLA')
       if (keyName === 'Enter') {
        h1.textContent = result.innerHTML
            ;
        }

    }
)
*/

const submit = document.querySelector('#i100')


const change1 = function() {
  const h = document.querySelector('h1')
  h.textContent = document.querySelector("#ahead").value
  
}



submit.addEventListener('click', change1)
document.addEventListener("click", function(event) {
    document.getElementById("i100");
    event.preventDefault();
}, false);