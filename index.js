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
    },
    {
        id : 2,
        image : '2.png',
        titile: 'card2',
        text : 'Some quick example text to build on the card title and make up the bulk of the card',
        price : 15,
    },
    {
        id : 3,
        image : '3.png',
        titile: 'card3',
        text : 'Some quick example text to build on the card title and make up the bulk of the card',
        price : 10,
    },
    {
      id : 4,
      image : '4.png',
      titile: 'card4',
      text : 'Some quick example text to build on the card title and make up the bulk of the card',
      price : 20,
  },
  {
      id : 5,
      image : '1.png',
      titile: 'card5',
      text : 'Some quick example text to build on the card title and make up the bulk of the card',
      price : 15,
  },
  {
      id : 6,
      image : '1.png',
      titile: 'card6',
      text : 'Some quick example text to build on the card title and make up the bulk of the card',
      price : 10,
  },
  
]

var data1 = [
  {
    id : 7,
    image : 'chiar.jpg',
    titile: 'card7',
    text : 'Some quick example text to build on the card title and make up the bulk of the card',
    price : 10,
  },
  {
    id : 8,
    image : 'blutoth.jpg',
    titile: 'card8',
    text : 'Some quick example text to build on the card title and make up the bulk of the card',
    price : 10,
  },
  {
    id : 9,
    image : 'watch.jpg',
    titile: 'card9',
    text : 'Some quick example text to build on the card title and make up the bulk of the card',
    price : 10,
  },
  {
    id : 10,
    image : 'chiar.jpg',
    titile: 'card10',
    text : 'Some quick example text to build on the card title and make up the bulk of the card',
    price : 10,
  },
  {
    id : 11,
    image : 'chiar.jpg',
    titile: 'card11',
    text : 'Some quick example text to build on the card title and make up the bulk of the card',
    price : 10,
  },
  {
    id : 12,
    image : 'chiar.jpg',
    titile: 'card12',
    text : 'Some quick example text to build on the card title and make up the bulk of the card',
    price : 10,
  },

]

var data2 = [
  {
    id : 13,
    image : '13.webp',
    titile: 'card13',
    price : 10,
  },
  {
    id : 14,
    image : '14.jpg',
    titile: 'card14',
    price : 10,
  },
  {
    id : 15,
    image : '15.webp',
    titile: 'card15',
    price : 10,
  },
  {
    id : 16,
    image : '16.webp',
    titile: 'card16',
    price : 10,
  },
  {
    id : 17,
    image : '17.webp',
    titile: 'card17',
    price : 10,
  },
  {
    id : 18,
    image : '18.webp',
    titile: 'card18',
    price : 10,
  },
  {
    id : 19,
    image : '19.webp',
    titile: 'card19',
    price : 10,
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
    
    contaner.innerHTML = x
    
} 

Draw()

function Draw1(){
  x = data1.map((item)=>{
      return(`<div class="card">
      <img src="image/${item.image}" alt="">
      <h2>${item.titile}</h2>
      <p>${item.text}</p>
      <p> price :${item.price}</p>
      <button onclick=AddToCard(${item.id})>Add T Card</button>
    </div>`)
  })
  
 cursor.innerHTML = x
  
  
} 

Draw1()

function Draw2(){
  x = data2.map((item)=>{
      return(`<div class="box1" onclick=AddToCard(${item.id})>
      <img src="image/${item.image}" alt="">
      <h2>${item.titile}</h2>
     </div>`)
  })
  
 box.innerHTML = x
  
} 

Draw2()

var data3 = data.concat(data1)
var totaldata = data3.concat(data2)

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
     var addprodact = totaldata.find((e) =>{
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
 




// myfilter.addEventListener('keyup' , filteration)

// function filteration(){
//    par.innerHTML = ''
//    var w = data.filter((e)=>{
//     return e.price == myfilter.value
//   })

//   if(myfilter.value === ''){
//     function Draw(){
//       x = data.map((item)=>{
//           return(`<div class="box">
//           <img src="image/${item.image}" alt="">
//           <div class="inf">
//             <h2>${item.titile}</h2>
//             <p>${item.text}</p>
//             <p>${item.price}</p>
//           </div>
//           <button onclick=AddToCard(${item.id})>ADD TO CARD</button>
//         </div>`)
//       })
//       par.innerHTML =x
//   } 
//   }else{
//     w.map((item)=>{
//       par.innerHTML +=`<div class="box">
//       <img src="image/${item.image}" alt="">
//       <div class="inf">
//         <h2>${item.titile}</h2>
//         <p>${item.text}</p>
//         <p>${item.price}</p>
//       </div>
//       <button onclick=AddToCard(${item.id})>ADD TO CARD</button>
//     </div>`
//     })
//   }
//   Draw()
// }



btnAll.onclick = function(){
  setTimeout(() => {
    location = 'filter.html'
  });
}
 

