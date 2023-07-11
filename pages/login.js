/*script do sistema de notificação ao criar uma conta */

function notificaCriarConta(){
    const submitBtn = document.getElementById("r-btn");
    const closeBtn = document.getElementById("close");
    const popup = document.querySelector(".popupContainer");

    submitBtn.addEventListener("click", function(){
        popup.classList.add("popupActive");
    });

    closeBtn.addEventListener("click", function(){
        popup.classList.remove("popupActive");
    });

}/*
function validarSenha(){
    var senha = document.getElementById("senha").value;
    var foca = 0;
    var res = document.getElementById("mostrarSenha");
    
    if((senha.length) == ""){
        res.innerHTML = ``
    }
    else if((senha.length) <= 8){
        res.style.fontSize =`10px`
        res.style.color = "red"
        res.style.fontWeight = "300"
        res.innerHTML =`Sua senha é muito curta, favor revisar`
    }else if((senha.length) > 8 && (senha.length) < 16){
        res.innerHTML = `Senha aceita!`
        res.style.color = "Blue"
    }else{
        res.innerHTML = `Sua senha excedeu 16 caracteres`
        res.style.color = "Orange"
    }

}
function verificarSenha(){
    var senhaA = document.getElementById("senha").value;
    var senhaB = document.getElementById("senha2").value;
    var res = document.getElementById("mostrarSenha");

    if((senhaA.value) === (senhaB.value)){
        res.innerHTML =`As senhas estão de acordo`;
        res.style.color = "Green"
        res.style.fontSize = `10px`
    }else if((senhaA.value) != (senhaB.value)){
        res.innerHTML = `As senhas são diferentes!`
        res.style.color = "Red"
        res.style.fontSize = `10px`
    }
}*/
//parte de verificação e criação de conta

const form = document.getElementById("formCreate");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const password2 = document.getElementById("pass2");

form.addEventListener("submit", e => {
    e.preventDefault();

    checkInputs();
});
function checkInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(emailValue === ""){
        setErrorFor(email, "O E-mail não pode ficar vazio");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Esse não é um email válido");
    }else{
        setSucessFor(email);
    }

    if(password === ""){
        setErrorFor(password, "A senha não pode ficar vazia");
    }else{
        setSucessFor(password);
    }
    
    if(password2 === ""){
        setErrorFor(password2, "A confirmação de senha não pode ficar vazia");
    }else{
        setSucessFor(password2);
    }
};
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = documen.querySelector("small");

    formControl.className = `form-control error`;
    small.innerText = message;

}
function setSucessFor(input){
    const formControl = input.parentElement;
    formControl.className = `form-control sucess`;
}
/* modo noturno na área para entrar*/
var noturno = document.getElementById("noturno");
var c = document.getElementById("body");
var h = document.getElementById("header");

function noite(){
    body.style.background = "Black"
    header.style.background = "Black"
}
function dia(){
    body.style.background = "White"
    header.style.background = "White"
}
noite();
dia();