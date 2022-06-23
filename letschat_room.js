function logout()
{
    window.location = "/index.html";
}

var username = localStorage.getItem("user_name");
console.log(username);
document.getElementById("username").innerHTML = username;