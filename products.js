var links1 = document.getElementById('links-1')
var links2 = document.getElementById('links-2')
var username = document.getElementById('user')
var logout = document.getElementById('logout')
var empty = document.getElementById('empty')
var Delivery = document.getElementById('Delivery')
var contaner= document.getElementById('contaner')
var data = JSON.parse(localStorage.getItem('products'))
var address = document.getElementById('address')
var distance = document.getElementById('distance')
var totalcost = document.getElementById('totalcost')
var quantity= document.getElementById('quantity')
var billcost = document.getElementById('billcost')
var price = document.getElementById('price')
var totalall = document.getElementById('totalall')
var truck = document.getElementById('truck')
var infdelivery = document.getElementById('infdelivery')
var totalbills = document.getElementById('totalbill')
var cost = 0.07
var totalprice = 0
var totalbill = 0


if(localStorage.getItem('firstname')){
    links1.style.display = 'none'
    links2.style.display = 'block'

    username.innerHTML = localStorage.getItem('firstname')
}

logout.addEventListener('click', out)

function out (){
   localStorage.clear()
   setTimeout(() =>{
    location = 'sinup.html'
   })
}

if(data.length > 0){
  empty.style.display ='none'
  Delivery.style.display = 'block'
}else{
  empty.style.display ='block'
  empty.style.display ='flex'
  empty.style.justifyContent = 'space-between'
  Delivery.style.display = 'none'
}

function Draw(){
    x = data.map((item)=>{
        return(`<div class="box">
        <img src="image/${item.image}" alt="">
        <div class="inf">
        <h2>${item.titile}</h2>
        <p>${item.text}</p>
        <p>${item.price}</p>
        </div>
        <div class ="footer-icon">
         <i class="fa-solid fa-trash-can delet1" onclick=deletfromcard(${item.id})></i>
         <i class="fa-solid fa-circle-plus"  onclick=addtocard(${item.id})></i>
        </div>
      </div>`)
    })
    contaner.innerHTML = x
    
} 
Draw()



function deletfromcard(id){
  const index = data.map((e) =>{
    return e.id
  }).indexOf(id)

  data.splice(index , 1)
  
  localStorage.setItem('products' , JSON.stringify(data)) 
  setTimeout(() =>{
    window.location.reload()
   })
  Draw()
}



function addtocard(id){
  data.innerHTML =''
  var addprodact = data.find((e) =>{
    return e.id === id
  })

  data = [...data , addprodact]
  localStorage.setItem('products' , JSON.stringify(data)) 
  setTimeout(() =>{
    window.location.reload()
   })
  Draw()
  
}

quantity.innerHTML = data.length



truck.onclick = function(){
  infdelivery.style.display = 'block'
}

distance.addEventListener('keyup' , totcost)

function totcost(){
  var x = distance.value * cost 
  let y = Math.round(x)
  totalcost.innerHTML = y
  billcost.innerHTML = y
  localStorage.setItem('distance' , distance.value)
  console.log(y);
}
totcost()



function total(){
  let y = distance.value * cost
  
  data.map((e) => {
  totalprice +=+ (e.price) 
  })
  price.innerHTML = totalprice
  totalbill = totalprice + y
  totalall.innerHTML = totalbill
  console.log(y);
}
total()


if(data.length === 0){
  totalbills.style.display = 'none'
}else{
  totalbills.style.display = 'block'
}
