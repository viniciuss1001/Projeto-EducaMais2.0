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
//parde de confirmação captcha
  const captchaTextBox = document.querySelector(".captcha-box input")
  const refreshButton = document.getElementById("refresh")
  const captchaInputBox = document.querySelector(".captcha-input input")
  const captchaMensagem = document.querySelector(".msgCaptcha")
  const captchaSubmitButton = document.getElementById("CaptchaButton")

  let captchaText = null//iniciar o captcha com valor nulo

  const generateCaptcha = function(){
    const radomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = radomString.split("");
    const changeString = randomStringArray.map((char)=> (Math.random() > 0.5 ? char.toUpperCase() : char ));
    captchaText = changeString.join(" ");

    captchaTextBox.value = captchaText;
    console.log(captchaText);
  };

  const refreshBtnClick = function(){//função para reiniciar os valores de captcha
    generateCaptcha();
    captchaInputBox.value = "";
    chaptchakeyUpValidate();

  };
  const chaptchakeyUpValidate = function(){
    captchaSubmitButton.classList.toggle("disabled", !captchaInputBox.value);
    if(!captchaInputBox.value){
        captchaMensagem.classList.remove("active");
    }
  };
  const subimitBtnClick = function(){//validar o código captcha que foi inserido
    captchaText = captchaText
    .split("")
    .filter((char)=> char !== " ")
    .join("");
    captchaMensagem.classList.add("active");

    //verificar se o texto inserido é válido ou não 
    if(captchaInputBox.value === captchaText){
        captchaMensagem.innerText = "Código inserido está correto"
        captchaMensagem.style.color = "#826afb"
    }else{
        captchaMensagem.innerText = "Còdigo inserido é inválido"
        .captchaMensagem.style.color = "#FF2525"
    }
  };
  //declaração das funções para execução
  refreshButton.addEventListener("click", refreshBtnClick);
  captchaInputBox.addEventListener("keyup", chaptchakeyUpValidate);
  captchaSubmitButton.addEventListener("click", subimitBtnClick);

  //gerar o captcha quando a página for gerada
  generateCaptcha();

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