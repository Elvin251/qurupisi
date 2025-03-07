let users=JSON.parse(localStorage.getItem("users"))||[];
let form=document.querySelector("form")
form.addEventListener("submit", (event)=>{
event.preventDefault();
let inputs=document.querySelectorAll("input")

let obj={
    username:inputs[0].value,
    email:inputs[1].value,
    phone:inputs[2].value,
    password:inputs[3].value,
}
users.push(obj)
localStorage.setItem("users",JSON.stringify(users))
inputs[0].value="";
inputs[1].value="";
inputs[2].value="";
inputs[3].value="";
})