function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    let correctUsername = "admin";
    let correctPassword = "Admin@123";

    if (username === correctUsername && password === correctPassword) {
        message.innerHTML = "Login Successful!";
        message.style.color = "lightgreen";
    } else {
        message.innerHTML = "Invalid Username or Password!";
        message.style.color = "red";
    }
}
