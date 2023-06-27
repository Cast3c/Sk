document.addEventListener("DOMContentLoaded", function () {
  //=========TOGGLE-NAV=========//
  var navBtn = document.querySelector(".navbar-btn");
  var navMenu = document.querySelector(".nav-menu");
  navBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (navMenu.style.display === "flex") {
      navMenu.style.display = "none";
    } else {
      navMenu.style.display = "flex";
      navMenu.style.opacity = "0.9";
    }
  });

  navMenu.addEventListener("click", function () {
    navMenu.style.display = "none";
  });

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
  var overlayTanques = document.querySelector(".overlay-tanques");
  var overlayFumigacion = document.querySelector(".overlay-fumigacion");
  var overlayDesinfeccion = document.querySelector(".overlay-desinfeccion");
  var overlayTrampas = document.querySelector(".overlay-trampas");
  var overlaySenales = document.querySelector(".overlay-senales");
  var overlayAlimentos = document.querySelector(".overlay-alimentos");
  var overlayAsesorias = document.querySelector(".overlay-asesorias");
  var body = document.querySelector("body");

  modalBtn1.addEventListener("click", function (event) {
    event.preventDefault();
    modalTanques.style.display = "flex";
    overlayTanques.style.display = "block";
    body.style.overflow = "hidden";
  });

  modalBtn2.addEventListener("click", function (event) {
    event.preventDefault();
    modalFumigacion.style.display = "flex";
    overlayFumigacion.style.display = "block";
    body.style.overflow = "hidden";
  });

  modalBtn3.addEventListener("click", function (event) {
    event.preventDefault();
    modalDesinfeccion.style.display = "flex";
    overlayDesinfeccion.style.display = "block";
    body.style.overflow = "hidden";
  });

  modalBtn4.addEventListener("click", function (event) {
    event.preventDefault();
    modalTrampas.style.display = "flex";
    overlayTrampas.style.display = "block";
    body.style.overflow = "hidden";
  });

  modalBtn5.addEventListener("click", function (event) {
    event.preventDefault();
    modalSenales.style.display = "flex";
    overlaySenales.style.display = "block";
    body.style.overflow = "hidden";
  });

  modalBtn6.addEventListener("click", function (event) {
    event.preventDefault();
    modalAlimentos.style.display = "flex";
    overlayAlimentos.style.display = "block";
    body.style.overflow = "hidden";
  });

  modalBtn7.addEventListener("click", function (event) {
    event.preventDefault();
    modalAsesorias.style.display = "flex";
    overlayAsesorias.style.display = "block";
    body.style.overflow = "hidden";
  });

  modalClose1.addEventListener("click", function (event) {
    event.preventDefault();
    modalTanques.style.display = "none";
    overlayTanques.style.display = "none";
    body.style.overflow = "auto";
  });

  modalClose2.addEventListener("click", function (event) {
    event.preventDefault();
    modalFumigacion.style.display = "none";
    overlayFumigacion.style.display = "none";
    body.style.overflow = "auto";
  });

  modalClose3.addEventListener("click", function (event) {
    event.preventDefault();
    modalDesinfeccion.style.display = "none";
    overlayDesinfeccion.style.display = "none";
    body.style.overflow = "auto";
  });

  modalClose4.addEventListener("click", function (event) {
    event.preventDefault();
    modalTrampas.style.display = "none";
    overlayTrampas.style.display = "none";
    body.style.overflow = "auto";
  });

  modalClose5.addEventListener("click", function (event) {
    event.preventDefault();
    modalSenales.style.display = "none";
    overlaySenales.style.display = "none";
    body.style.overflow = "auto";
  });

  modalClose6.addEventListener("click", function (event) {
    event.preventDefault();
    modalAlimentos.style.display = "none";
    overlayAlimentos.style.display = "none";
    body.style.overflow = "auto";
  });

  modalClose7.addEventListener("click", function (event) {
    event.preventDefault();
    modalAsesorias.style.display = "none";
    overlayAsesorias.style.display = "none";
    body.style.overflow = "auto";
  });

  overlayTanques.addEventListener('click', function(event){
    event.preventDefault();
    modalTanques.style.display = 'none';
    overlayTanques.style.display = 'none';
    body.style.overflow = 'auto';
  })

  overlayFumigacion.addEventListener('click', function(event){
    event.preventDefault();
    modalFumigacion.style.display = 'none';
    overlayFumigacion.style.display = 'none';
    body.style.overflow = 'auto';
  })

  overlayDesinfeccion.addEventListener('click', function(event){
    event.preventDefault();
    modalDesinfeccion.style.display = 'none';
    overlayDesinfeccion.style.display = 'none';
    body.style.overflow = 'auto';
  })

  overlayTrampas.addEventListener('click', function(event){
    event.preventDefault();
    modalTrampas.style.display = 'none';
    overlayTrampas.style.display = 'none';
    body.style.overflow = 'auto';
  })

  overlaySenales.addEventListener('click', function(event){
    event.preventDefault();
    modalSenales.style.display = 'none';
    overlaySenales.style.display = 'none';
    body.style.overflow = 'auto';
  })

  overlayAlimentos.addEventListener('click', function(event){
    event.preventDefault();
    modalAlimentos.style.display = 'none';
    overlayAlimentos.style.display = 'none';
    body.style.overflow = 'auto';
  })

  overlayAsesorias.addEventListener('click', function(event){
    event.preventDefault();
    modalAsesorias.style.display = 'none';
    overlayAsesorias.style.display = 'none';
    body.style.overflow = 'auto';
  })

  //=========+++++++=========//
});
