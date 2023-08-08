function checkdetail() {
    let inputPass = document.getElementById("password").value;
    let checkpass = document.getElementById('checkpass').value;

    if (inputPass !== checkpass) {
        alert("Passwords do not match");
    } else {
        alert("Registration successful!");
    }
}
