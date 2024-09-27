var firstname = document.getElementById('input-fname')
var lastname = document.getElementById('input-lname')
var email = document.getElementById('input-email')
var password = document.getElementById('input-password')
var btnsend = document.getElementById('send')

btnsend.addEventListener('click' , send)

function send(){
    if(firstname.value === '' || lastname.value === '' || email.value === '' || password.value === ''){
        alert('plrase, fill all the filed')
    }else{
        localStorage.setItem('firstname' , firstname.value)
        localStorage.setItem('lastname' , lastname.value)
        localStorage.setItem('email' , email.value)
        localStorage.setItem('password' , password.value)

        setTimeout(() =>{
            location = 'login.html'
        },1000)
    }
}