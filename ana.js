let next = document.querySelector(".next")
let before = document.querySelector(".before")
let div1 = document.querySelector(".divBir")
let div2 = document.querySelector(".divIki")
let div3 = document.querySelector(".divUc")
let div4 = document.querySelector(".divDord")
function change() {
    div1.style.display = "none"
    div2.style.display = "none"
    div3.style.display = "inline"
    div4.style.display = "inline"
}
function changeNormal() {
    div1.style.display = "inline"
    div2.style.display = "inline"
    div3.style.display = "none"
    div4.style.display = "none"
    
}
next.addEventListener("click",change)
before.addEventListener("click",changeNormal)

document.getElementById("downloadBtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "file.pdf"; 
    link.download = "file.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});