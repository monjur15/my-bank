document.getElementById('login-btn').addEventListener('click', function () {

    // get user's email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get user's password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(passwordField);

    // check email and password
    if (userEmail == 'hellojs@gmail.com' && userPassword == 'js2021') {
        window.location.href = 'banking.html';
    } else {
        console.log(alert('Wrong Input'));
    }

})