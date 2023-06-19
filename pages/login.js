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

}
notificaCriarConta();
/*Parte de registro: efetuar a verificação de idade */
/*function verificarIdade(){
    var data= new Date()
    var Ano = data.getFullYear()
    var UserAno = window.document.getElementById("doB");
    var UserAnoN = Number(UserAno.value)
    var idaderes = document.getElementById("idade");


    
    if( UserAnoN == 0 || UserAnoN > Ano){
        idaderes.innerHTML = `Verifique o ano e tente novamente!`
        idaderes.style.color = `Red`
        idaderes.style.font = `10px`
    }else{
        var idade = Ano - UserAno
        if(idade <= 14){
            idaderes.innerHTML = `Você não tem idade o suficiente para acessar`
        }
    }
};
verificarIdade();*/
/*parte de validação de senha para entra na conta */

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