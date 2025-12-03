document.getElementById("password1").addEventListener("click",()=>copy(1));
document.getElementById("password2").addEventListener("click",()=>copy(2));

function copy(n){
    let id="password"+n+"-text";
    const text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text)
}
function generatePassword{
    
}
function showPasswords{

}
