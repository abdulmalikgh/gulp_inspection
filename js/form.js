
const form = document.getElementById('contactUsForm')
const fullname = document.getElementById('fullname')
const email = document.getElementById('email')
const message = document.getElementById('message')
const phone = document.getElementById('phone')

let success = document.getElementById('successMessage')
let error = document.getElementById('errorMessage')

success.style.display = 'none'
error.style.display = 'none'
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault()
    const messageBody = {
        fullname: fullname.value,
        email: email.value,
        message: message.value,
        phone: phone.message
    }
    emailjs.send('service_prbxc09', 'template_tnd94wf', messageBody)
        .then( res => {
            success.style.display = 'block'  
        }).catch( err => {
            error.style.display = 'none'
        })
})

