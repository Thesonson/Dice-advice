const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', ()=> {
   fetch("https://api.adviceslip.com/advice").then(response => {
   return response.json()

   }).then(obj =>{
        result.innerHTML = `"${obj.slip.advice}"`
        document.querySelector('.number').innerHTML = obj.slip.id
        console.log(obj)
   })
})