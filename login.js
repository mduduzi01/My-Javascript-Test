function myCode() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log("ERROR")


    if (email == "user@gmail.com" && password == "mypassword") {

        window.location.href = 'home.html';
    }
    if (email == '') {
        alert("Enter your Email or Password can't be clear");
        return false;
    } 
}

