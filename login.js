var emai = document.getElementById('input-email')
var password = document.getElementById('input-password')
var btnsend = document.getElementById('send')
var emailstoreg = localStorage.getItem('email')
var passwordstoreg = localStorage.getItem('password')

btnsend.addEventListener('click' ,send)

function send (){
    if(emai.value == emailstoreg && password.value == passwordstoreg){
        setTimeout(() =>{
            location = 'index.html'
        },1000)
    }else{
        alert('username or password arenot corrict')
    }
} 