function myCode() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


 
    if (email == "user@gmail.com" && password == "mypassword") {

        window.location.href = 'home.html';
    }
    if (email == '') {
        alert("Enter your Email or Password can't be clear");
        return false;
    } 
}

