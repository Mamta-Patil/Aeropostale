// Sign In Form
let signup_form = document.getElementById("signup_form");
let signup_arr = JSON.parse(localStorage.getItem("loginData")) || [];
console.log(signup_arr)
signup_form.addEventListener("submit", (e) => {
    e.preventDefault()
    let login_email = document.getElementById("email").value;
    let login_password = document.getElementById("password").value;
    let newarr = signup_arr.filter((ele) => {
        if (login_email == ele.email && login_password == ele.password) {
            return ele
        }
    })
    console.log(newarr)
    if (newarr[0]) {
        alert("Login Successfully")
    }
    else {
        alert ("incorrect password")
    }
})