// Login 
let login_form = document.getElementById("login_form")
let login_arr = JSON.parse(localStorage.getItem("loginData")) || []
login_form.addEventListener("submit", (el) => {
    el.preventDefault();
    let first_name = document.getElementById("firstName").value;
    let last_name = document.getElementById("lastName").value;
    let phoneNo = document.getElementById("phoneNo").value;
    let email = document.getElementById("email").value;
    let conf_Email = document.getElementById("confEmail").value;
    let password = document.getElementById("password").value;
    let con_Password = document.getElementById("conPassword").value;

    let login_obj = {
        first_name,
        last_name,
        email,
        conf_Email,
        password,
        con_Password,
    }

    let isvalid = true

    if (first_name == "") {
        document.querySelector("#firstNameError").innerText = "First name is compulasory"
        isvalid = false
    }
    else {
        document.querySelector("#firstNameError").innerText = ""
    }
    if (last_name == "") {
        document.querySelector("#lastNameError").innerText = "Last name is compulasory"
        isvalid =false
    }
    else {
        document.querySelector("#lastNameError").innerText = ""
    }
    if (phoneNo == "") {
        document.querySelector("#phoneNoError").innerText = "Phone Number is compulasory"
        isvalid= false
    }
    else {
        document.querySelector("#phoneNoError").innerText = ""
    }
    if (email == "") {
        document.querySelector("#emailError").innerText = "Email is compulasory"
        isvalid = false
    }
    else {
        document.querySelector("#emailError").innerText = ""
    }
    if (conf_Email == "") {
        document.querySelector("#confEmailError").innerText = "Re-enter Email"
        isvalid = false
    }
    else {
        document.querySelector("#confEmailError").innerText = ""
    }
    if (password == "") {
        document.querySelector("#PasswordError").innerText = "Password is compulasory"
        isvalid = false
    }
    else {
        document.querySelector("#PasswordError").innerText = ""
    }
    if (con_Password == "") {
        document.querySelector("#conPasswordError").innerText = "conPasswordError is compulasory"
        isvalid=false
    }
    else {
        document.querySelector("#conPasswordError").innerText = ""
    }
    if (isvalid) {
        alert("Your Account is Created")
        login_arr.push(login_obj)
        console.log(login_arr)
        localStorage.setItem("loginData", JSON.stringify(login_arr));
        document.getElementById("firstName").value = ""
        document.getElementById("lastName").value = ""
        document.getElementById("phoneNo").value = ""
        document.getElementById("email").value = ""
        document.getElementById("confEmail").value = ""
        document.getElementById("password").value = ""
        document.getElementById("conPassword").value = ""
    }
    else
    {
        alert("First, Fill All Information")
    }

})