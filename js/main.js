
document.addEventListener('DOMContentLoaded', function() {

    //=========MODALES=========//
    var modalBtn = document.querySelector('.modal-btn');
    var modal = document.querySelector('#modal');
    var overlay = document.querySelector('.overlay');
    var modalClose = document.querySelector('.modal-close');
  
    modalBtn.addEventListener('click', function(event) {
      event.preventDefault();
      modal.style.display = 'flex';
      overlay.style.display = 'block';
    });
  
    modalClose.addEventListener('click', function(event) {
      event.preventDefault();
      modal.style.display = 'none';
      overlay.style.display = 'none';
    });
    //=========+++++++=========//
  });