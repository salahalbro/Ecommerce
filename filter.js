var links1 = document.getElementById('links-1')
var links2 = document.getElementById('links-2')
var username = document.getElementById('user')
var logout = document.getElementById('logout')
var contaner = document.getElementById('contaner')
var procard = document.getElementById('procard')
var count = document.getElementById('count')
var myfilter = document.getElementById('input1')
var par = document.getElementById('par')
var cursor = document.getElementById('cursor')
var box = document.getElementById('box')
var btnAll = document.getElementById('btnAll')

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

var data = [
    {
        id : 1,
        image : '1.png',
        titile: 'card1',
        text : 'Some quick example text to build on the card title and make up the bulk of the card',
        price : 20,
        type : 'small',
    },
    {
        id : 2,
        image : '2.png',
        titile: 'card2',
        text : 'Some quick example text to build on the card title and make up the bulk of the card',
        price : 15,
        type : 'big',
    },
    {
        id : 3,
        image : '3.png',
        titile: 'card3',
        text : 'Some quick example text to build on the card title and make up the bulk of the card',
        price : 10,
        type : 'small',
    },
    {
      id : 4,
      image : '4.png',
      titile: 'card4',
      text : 'Some quick example text to build on the card title and make up the bulk of the card',
      price : 20,
      type : 'big',
  },
  {
      id : 5,
      image : '1.png',
      titile: 'card5',
      text : 'Some quick example text to build on the card title and make up the bulk of the card',
      price : 15,
      type : 'mddium',
  },
  {
      id : 6,
      image : '1.png',
      titile: 'card6',
      text : 'Some quick example text to build on the card title and make up the bulk of the card',
      price : 10,
      type : 'mddium',
  },
  
]




function Draw(){
    x = data.map((item)=>{
        return(`<div class="box">
        <img src="image/${item.image}" alt="">
        <div class="inf">
          <h2>${item.titile}</h2>
          <p>${item.text}</p>
          <p>${item.price}</p>
        </div>
        <button onclick=AddToCard(${item.id})>ADD TO CARD</button>
      </div>`)
    })
    
    par.innerHTML =x
    
} 

Draw()


if(localStorage.getItem('products')){
  var products = JSON.parse(localStorage.getItem('products'))
}else{
  var products = []
}

var prolength = products.length
 if(prolength === 0){
  count.style.display ='none'
 }else{
  count.style.display = 'block'
  count.innerHTML = products.length
 }

function AddToCard(id){
  if(localStorage.getItem('firstname')){
    procard.innerHTML =''
    var addprodact = data.find((e) =>{
      return e.id === id
    })
  
    products = [...products , addprodact]
  
    products.map((e) =>{
      procard.innerHTML +=`<p>${e.titile}<p>`
    })
    
    localStorage.setItem('products' , JSON.stringify(products)) 
  
    count.style.display = 'block'
    count.innerHTML = products.length
  
  }else{
    alert('please, you need to creat account')
  }
  
}



myfilter.addEventListener('keyup' , filteration)

function filteration(){
   par.innerHTML = ''
   var w = data.filter((e)=>{
    return e.price == myfilter.value
  })

  if(myfilter.value === ''){
    function Draw(){
      x = data.map((item)=>{
          return(`<div class="box">
          <img src="image/${item.image}" alt="">
          <div class="inf">
            <h2>${item.titile}</h2>
            <p>${item.text}</p>
            <p>${item.price}</p>
          </div>
          <button onclick=AddToCard(${item.id})>ADD TO CARD</button>
        </div>`)
      })
      par.innerHTML =x
  } 
  }else{
    w.map((item)=>{
      par.innerHTML +=`<div class="box">
      <img src="image/${item.image}" alt="">
      <div class="inf">
        <h2>${item.titile}</h2>
        <p>${item.text}</p>
        <p>${item.price}</p>
      </div>
      <button onclick=AddToCard(${item.id})>ADD TO CARD</button>
    </div>`
    })
  }
  Draw()
}

var big = document.getElementById('big')
var mddium = document.getElementById('mddium')
var small = document.getElementById('small')

big.addEventListener('click' , Big)

function Big (){
  par.innerHTML = ''
  var n = data.filter((e)=>{
    return e.type == 'big'
  })
  
  n.map((item)=>{
    par.innerHTML +=`<div class="box">
    <img src="image/${item.image}" alt="">
    <div class="inf">
      <h2>${item.titile}</h2>
      <p>${item.text}</p>
      <p>${item.price}</p>
    </div>
    <button onclick=AddToCard(${item.id})>ADD TO CARD</button>
  </div>`
  })
}

mddium.addEventListener('click' , Mddium)

function Mddium (){
  par.innerHTML = ''
  var n = data.filter((e)=>{
    return e.type == 'mddium'
  })
  
  n.map((item)=>{
    par.innerHTML +=`<div class="box">
    <img src="image/${item.image}" alt="">
    <div class="inf">
      <h2>${item.titile}</h2>
      <p>${item.text}</p>
      <p>${item.price}</p>
    </div>
    <button onclick=AddToCard(${item.id})>ADD TO CARD</button>
  </div>`
  })
}

small.addEventListener('click' , Small)

function Small (){
  par.innerHTML = ''
  var n = data.filter((e)=>{
    return e.type == 'small'
  })
  
  n.map((item)=>{
    par.innerHTML +=`<div class="box">
    <img src="image/${item.image}" alt="">
    <div class="inf">
      <h2>${item.titile}</h2>
      <p>${item.text}</p>
      <p>${item.price}</p>
    </div>
    <button onclick=AddToCard(${item.id})>ADD TO CARD</button>
  </div>`
  })
}