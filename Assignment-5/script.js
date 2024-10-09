function validateUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    console.log(userCredentials[username]);
    
    if (userCredentials[username] && userCredentials[username] === password) {
        
        window.location.href = 'welcome.html';
    } else {
        messageDiv.innerHTML = '<div class="alert alert-danger">Invalid username or password.</div>';
    }
}

let userCredentials = {}; 

function validateField(field, errorField) {
    const value = field.value.trim();
    if (!/^[a-zA-Z]+$/.test(value)) {
        errorField.textContent = `${field.placeholder} can't be other than alphabets.`;
        return false;
    } else {
        errorField.textContent = '';
        return true;
    }
}



function handleSubmit() {
    const firstNameField = document.getElementById('firstName');
    const lastNameField = document.getElementById('lastName');
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');

    const isFirstNameValid = validateField(firstNameField, firstNameError);
    const isLastNameValid = validateField(lastNameField, lastNameError);

    if (isFirstNameValid && isLastNameValid) {
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        userCredentials[username] = password; 
        for (let i = 0;i <= 2; i++)
        {
            console.log(userCredentials[i]);
        }
        
        alert("Account created successfully! You can now log in.");
        window.location.href = 'index.html'; 
        return false; 
    }

    return false; 
}


