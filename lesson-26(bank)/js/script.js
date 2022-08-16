

document.getElementById('submit-btn').addEventListener("click",()=>{
    const email = document.getElementById('user-email').value
    const pass = document.getElementById('user-password').value
    if(email === 'dipto@gmail.com' && pass === 'dipto123'){
        window.location.href = "bank.html"
    }else{
        const error = document.getElementById('error-msg')
        error.classList.remove('opacity-0')
        error.classList.add('opacity-100')
    }
   
})


// depositeBtn.addEventListener("click", ()=>{
    
// })



// const password = document.getElementById('user-password').value
// console.log(password.value);