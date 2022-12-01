let numberNotifi = document.querySelector('#title>div>span')
const readAll = document.getElementById('read-All')
const markNotifi = document.querySelectorAll('.noticontent>.btnSelector')
const boxNotifi = document.querySelectorAll('main>.noticontent')
 
boxNotifi.forEach(element => {
     element.addEventListener('click', function(ev){      
       let trueItem = ev.target.classList.contains('item')
         if (trueItem === true) {
       ev.target.classList.remove('item')
       ev.target.removeChild(ev.target.lastElementChild) 
       let amount = Number(numberNotifi.innerText)
       numberNotifi.innerText = amount -1      
          }
        })
     })

readAll.addEventListener('click',function(){
   numberNotifi.innerHTML = '0'
   markNotifi.forEach(ement =>{
      ement.classList.remove('btn')
   })
   boxNotifi.forEach(box =>     
      box.classList.remove('item'))  
})
