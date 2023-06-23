document.addEventListener("DOMContentLoaded", function () {
  //=========TOGGLE-NAV=========//
  var navBtn = document.querySelector(".navbar-btn");
  var navMenu = document.querySelector(".nav-menu");
  navBtn.addEventListener('click', function(event){
    event.preventDefault();
    if (navMenu.style.display === 'flex') {
      navMenu.style.display = 'none'
      navMenu.style.filter = 'blur(10px)'
    } else {
      navMenu.style.display = 'flex'
      navMenu.style.filter = 'blur(0)'
      navMenu.style.opacity = '1';
    } 
  })

  //=========MODALES=========//
  var modalBtn1 = document.querySelector(".modal-btn1");
  var modalBtn2 = document.querySelector(".modal-btn2");
  var modalBtn3 = document.querySelector(".modal-btn3");
  var modalBtn4 = document.querySelector(".modal-btn4");
  var modalBtn5 = document.querySelector(".modal-btn5");
  var modalBtn6 = document.querySelector(".modal-btn6");
  var modalBtn7 = document.querySelector(".modal-btn7");
  var modalClose1 = document.querySelector(".modal-close1");
  var modalClose2 = document.querySelector(".modal-close2");
  var modalClose3 = document.querySelector(".modal-close3");
  var modalClose4 = document.querySelector(".modal-close4");
  var modalClose5 = document.querySelector(".modal-close5");
  var modalClose6 = document.querySelector(".modal-close6");
  var modalClose7 = document.querySelector(".modal-close7");
  var modalTanques = document.querySelector(".modal-tanques");
  var modalFumigacion = document.querySelector(".modal-fumigacion");
  var modalDesinfeccion = document.querySelector(".modal-desinfeccion");
  var modalTrampas = document.querySelector(".modal-trampas");
  var modalSenales = document.querySelector(".modal-senales");
  var modalAlimentos = document.querySelector(".modal-alimentos");
  var modalAsesorias = document.querySelector(".modal-asesorias");
  var overlay = document.querySelector(".overlay");
  var body = document.querySelector("body");

  modalBtn1.addEventListener("click", function (event) {
    event.preventDefault();
    modalTanques.style.display = "flex";
    overlay.style.display = "block";
    body.style.overflow = "hidden";
  });

  modalBtn2.addEventListener("click", function (event) {
    event.preventDefault();
    modalFumigacion.style.display = "flex";
    overlay.style.display = "block";
    body.style.overflow = "hidden";
  });

  modalBtn3.addEventListener("click", function (event) {
    event.preventDefault();
    modalDesinfeccion.style.display = "flex";
    overlay.style.display = "block";
    body.style.overflow = "hidden";
  });

  modalBtn4.addEventListener("click", function (event) {
    event.preventDefault();
    modalTrampas.style.display = "flex";
    overlay.style.display = "block";
    body.style.overflow = "hidden";
  });

  modalBtn5.addEventListener("click", function (event) {
    event.preventDefault();
    modalSenales.style.display = "flex";
    overlay.style.display = "block";
    body.style.overflow = "hidden";
  });

  modalBtn6.addEventListener("click", function (event) {
    event.preventDefault();
    modalAlimentos.style.display = "flex";
    overlay.style.display = "block";
    body.style.overflow = "hidden";
  });

  modalBtn7.addEventListener("click", function (event) {
    event.preventDefault();
    modalAsesorias.style.display = "flex";
    overlay.style.display = "block";
    body.style.overflow = "hidden";
  });

  modalClose1.addEventListener("click", function (event) {
    event.preventDefault();
    modalTanques.style.display = "none";
    overlay.style.display = "none";
    body.style.overflow = "auto";
  });

  modalClose2.addEventListener("click", function (event) {
    event.preventDefault();
    modalFumigacion.style.display = "none";
    overlay.style.display = "none";
    body.style.overflow = "auto";
  });

  modalClose3.addEventListener("click", function (event) {
    event.preventDefault();
    modalDesinfeccion.style.display = "none";
    overlay.style.display = "none";
    body.style.overflow = "auto";
  });

  modalClose4.addEventListener("click", function (event) {
    event.preventDefault();
    modalTrampas.style.display = "none";
    overlay.style.display = "none";
    body.style.overflow = "auto";
  });

  modalClose5.addEventListener("click", function (event) {
    event.preventDefault();
    modalSenales.style.display = "none";
    overlay.style.display = "none";
    body.style.overflow = "auto";
  });

  modalClose6.addEventListener("click", function (event) {
    event.preventDefault();
    modalAlimentos.style.display = "none";
    overlay.style.display = "none";
    body.style.overflow = "auto";
  });

  modalClose7.addEventListener("click", function (event) {
    event.preventDefault();
    modalAsesorias.style.display = "none";
    overlay.style.display = "none";
    body.style.overflow = "auto";
  });
  //=========+++++++=========//
});
