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

//criação de senha
const passwordInput = document.getElementById("passwardVerifyCreate")
const eyeIcon = document.getElementById("eyeIcon")
const requerimentList = document.querySelectorAll(".requerimentList li")
//verificar se a senha digitada está de acordo com as normas, para isso, usa-se uma array
const requeriments= [
    { regex: /.{8,}/, index: 0 }, // Mínimo de 8 caracteres
    { regex: /[0-9]/, index: 1 }, // Saber se há números
    { regex: /[a-z]/, index: 2 }, //letra minúscula
    { regex: /[^A-Za-z0-9]/, index: 3 }, // símbolo especial
    { regex: /[A-Z]/, index: 4 }, // letra Maiúscula
]
passwordInput.addEventListener("keyup", (e) => {
    //checar se a senha atende aos requisitos
    requeriments.forEach(item =>{
        const isValidPassWord = item.regex.test(e.target.value);
        const requerimentItem = requerimentList[item.index];

        //efetuando alterações caso a senha seja verdadeira ou não 
        if(isValidPassWord){
            requerimentItem.classList.add("valid");
            requerimentItem.firstElementChild.className = "fa-solid fa-check";
        }else{
            requerimentItem.classList.remove("valid");
            requerimentItem.firstElementChild.className = "fa-solid fa-circle"
        }
    });
});
//deixar visível os requerimentos da senha
function requerimentsVisible(){
    const requerimentsTopics = document.getElementById("requerimentsTopics")
    requerimentsTopics.style.display = "flex";
};
function requerimentsInvisible(){
    const requerimentsTopicsInvisible = document.getElementById("requerimentsTopics")
    requerimentsTopicsInvisible.style.display = "none"
}
