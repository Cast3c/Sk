
document.addEventListener('DOMContentLoaded', function() {

    //=========MODALES=========//
    var modalBtn1 = document.querySelector('.modal-btn1');
    var modalBtn2 = document.querySelector('.modal-btn2');
    var modalBtn3 = document.querySelector('.modal-btn3');
    var modalClose1 = document.querySelector('.modal-close1');
    var modalClose2 = document.querySelector('.modal-close2');
    var modalClose3 = document.querySelector('.modal-close3');
    var modalTanques = document.querySelector('.modal-tanques');
    var modalFumigacion = document.querySelector('.modal-fumigacion');
    var modalDesinfeccion = document.querySelector('.modal-desinfeccion');
    var overlay = document.querySelector('.overlay');
    
    var body = document.querySelector('body');
  
    modalBtn1.addEventListener('click', function(event) {
      event.preventDefault();
      modalTanques.style.display = 'flex';
      overlay.style.display = 'block';
      body.style.overflow = 'hidden';
    });

    modalBtn2.addEventListener('click', function(event){
      event.preventDefault();
      modalFumigacion.style.display = 'flex';
      overlay.style.display = 'block';
      body.style.overflow = 'hidden';
    })
    
    modalBtn3.addEventListener('click', function(event){
      event.preventDefault();
      modalDesinfeccion.style.display = 'flex';
      overlay.style.display = 'block';
      body.style.overflow = 'hidden';
    })

    modalClose1.addEventListener('click', function(event) {
      event.preventDefault();
      modalTanques.style.display = 'none';
      overlay.style.display = 'none';
      body.style.overflow = 'auto';
    });

    modalClose2.addEventListener('click', function(event){
      event.preventDefault();
      modalFumigacion.style.display = 'none';
      overlay.style.display = 'none';
      body.style.overflow = 'auto';
    })

    modalClose3.addEventListener('click', function(event){
      event.preventDefault();
      modalDesinfeccion.style.display = 'none';
      overlay.style.display = 'none';
      body.style.overflow = 'auto';
    })
    
    //=========+++++++=========//
  });