function storeCredential(username, password) {
    localStorage.setItem(username, password);
}

function userAlreadyExists(username) {
    return localStorage.getItem(username) !== null;
}

function handleSubmit() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    if (userAlreadyExists(username)) {
        document.getElementById('message').innerHTML = `<div class="alert alert-warning">Username already exists. Please choose a different one.</div>`;
        return false; 
    }

    storeCredential(username, password);
    document.getElementById('message').innerHTML = `<div class="alert alert-success">Account created successfully!</div>`;
    document.getElementById('createAccountForm').reset();
    window.location.href = 'index.html'; 
    return false; 
}

function validateUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('message').innerHTML = `<div class="alert alert-danger">Invalid username or password.</div>`;
    }

    return false;
}
function checkLoginInput() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    const usernamePattern = /^[a-zA-Z0-9]+$/;
    let isValid = true;

    if (!usernamePattern.test(username) || username.length < 2 || username.length > 20) {
        document.getElementById('loginUsernameError').innerText = "Username must be 2-20 alphanumeric characters.";
        isValid = false;
    } else {
        document.getElementById('loginUsernameError').innerText = "";
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('loginPasswordError').innerText = "Password must be at least 8 characters long, include 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
        isValid = false;
    } else {
        document.getElementById('loginPasswordError').innerText = "";
    }

    return isValid;
}

