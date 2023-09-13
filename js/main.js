
/*abrir a barra lateram mobile */
function openNav(){
   var navO =  document.getElementById("mySidenav")
   navO.style.width = "400px";
   navO.style.opacity ="1";
}
function closeNav(){
    var navF = document.getElementById("mySidenav")
    navF.style.width = "0";
    navF.style.opacity = "0"
}

/*Barra lateral direita com mais informações */
function openSide2(){
   var SideO = document.getElementById("Side2")
   SideO.style.width = "500px";
   SideO.style.opacity = "1";
}
function closeSide2(){
    var SideF = document.getElementById("Side2")
    SideF.style.width = "0";
    SideF.style.opacity = "0";
}
function abrirFechar2(){
    $("body").click(function closeSide2(){
        $("#Side2").css("width", "0")
    });
    $('header').click(function(e){
        e.stopPropagation();
    });
}
/*fim da barra lateral direita */
function abrirFechar(){
    $("body").click(function closeNav(){
        $("#mySidenav").css("width", "0")
    });
    $("header").click(function(e){
        e.stopPropagation();
    });
};
abrirFechar();
abrirFechar2();
closeNav();
closeSide2();

/*abrir e fechar a notificação */
function openNot(){
    var Notfy = document.getElementById("notify");
    Notfy.style.width = "30%";
    Notfy.style.opacity = "1";
}
function closeNot(){
    var NotfyClose = document.getElementById("notify");
    NotfyClose.style.width = "0";
    NotfyClose.style.opacity = "0";
}
openNot();
closeNot();
//mudar a cor dos links indicando a seção que se está
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const resetLinks = () => {
    navLinks.forEach((link) => link.classList.remove("active"));
};

const handleScroll = function () {
    const { pageYOffset } = window;

    sections.forEach((section) => {
        const { id, offsetTop, clientHeight} = section;
        const offset = offsetTop - 1;

    if (pageYOffset >= offset && pageYOffset < offset + clientHeight){
        resetLinks();
        navLinks.forEach((link) => {
            if (link.dataset.scroll === id){
                link.classList.add("active");
            }
        });
    }
    });
};
document.addEventListener("scroll", handleScroll);


//notificação de que a dúvida foi enviada com sucesso
function enviado(){
    window.alert('Sua dúvida foi enviada com sucesso!')
}
