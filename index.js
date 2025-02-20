function validateRegistrationForm(name, email, message) { 
    const isNameValid = name.length >= 5  
    const isEmailValid = email.includes('@')  
    const isMessageValid = message.length >= 5  
    return isNameValid && isEmailValid && isMessageValid  
} 
document.addEventListener('DOMContentLoaded', function () { 
    const registrationForm = document.getElementById('registration-form')  
    registrationForm.addEventListener('submit', function (event) { 
        event.preventDefault()  
        const name = document.getElementById('name').value  
        const email = document.getElementById('email').value  
        const message = document.getElementById('message').value  
        const isValid = validateRegistrationForm(name, email, message)  
        if (isValid) { 
            console.log('Registration form is valid.')  
        } else { 
            console.error('Registration form is not valid.')  
        } 
    })  
}) 