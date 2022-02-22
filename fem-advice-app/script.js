adviceBtn = document.getElementById('adviceBtn')
adviceText = document.getElementById('adviceText')
adviceId = document.getElementById('adviceId')
adviceImg = document.getElementById('adviceImg')


fetch('https://api.adviceslip.com/advice')
.then((res) => res.json())
.then((data) => {
  adviceId.innerText = data.slip['id']
  adviceText.innerText = data.slip['advice']
})


adviceBtn.addEventListener('click', () => { 


  fetch('https://api.adviceslip.com/advice')
  .then((res) => res.json())
  .then((data) => {
    adviceId.innerText = data.slip['id']
    adviceText.innerText = data.slip['advice']
  })

  adviceBtn.classList.add('disable')  

  setTimeout(() => {
    adviceBtn.classList.remove('disable')  
  }, 2000)

})
