document.getElementById("password1").addEventListener("click",()=>copy(1));
document.getElementById("password2").addEventListener("click",()=>copy(2));
document.getElementById("generate-button").addEventListener("click",()=>showPasswords());
const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let password1 = document.getElementById("password1-text");
let password2 = document.getElementById("password2-text");

function copy(n){
    let id="password"+n+"-text";
    const text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text)
}
function showPasswords(){
    password1.innerHTML = generatePassword(15);
    password2.innerHTML = generatePassword(15);
}
function randomEl(masLength){
    return Math.floor(Math.random()*masLength);
}
function generatePassword(len){
    let password="";
    for(let i=0;i<len;i++){
        password+=characters[randomEl(characters.length)];
    }
    return password;
    
}