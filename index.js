document.getElementById("password1").addEventListener("click",()=>copy(1));
document.getElementById("password2").addEventListener("click",()=>copy(2));
document.getElementById("generate-button").addEventListener("click",()=>showPasswords());
const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const password1 = document.getElementById("password1-text");
const password2 = document.getElementById("password2-text");

function copy(n){
    let id="password"+n+"-text";
    const text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text)
}
function showPasswords(){
    typeWriter(generatePassword(15),password1,30);
    typeWriter(generatePassword(15),password2,30);
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
function typeWriter(text, element, speed = 100, i = 0) {
     function stepErase() {
         const txt = element.textContent;
          if (txt.length > 0) {
             element.textContent = txt.slice(0, -1);
            setTimeout(stepErase, speed);
         }else{
            stepPrint();
            return;
         } }
    function stepPrint(){
             if (i < text.length) {
         element.textContent += text[i];
         i++;
          setTimeout(stepPrint, speed); 
        }
    }
         stepErase();
     }
