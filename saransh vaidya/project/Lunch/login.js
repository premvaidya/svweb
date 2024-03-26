const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "main.html"
    }else{
        alert("password are wrong, You want to password, Then contact me saranshvaidya_prem")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "saranshvaidya" && password === "saranshvaidya"){
        return true
    }else{
        return false
    }
}