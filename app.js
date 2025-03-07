let form=document.querySelector("form")
form.addEventListener("submit", (event)=>{
event.preventDefault();
let inputs=document.querySelectorAll("input")
let users=JSON.parse(localStorage.getItem("users"));
let findusers= users.find(user=> user.username==inputs[0].value&& user.password==inputs[1].value);
 if (findusers) {
    alert("giris uqurludur😊")
    window.location.href="ana.html";
 } else {
    alert("users tapilmadi😊")
 }

inputs[0].value="";
inputs[1].value="";

})