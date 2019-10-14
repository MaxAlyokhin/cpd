$( document ).ready(function(){

  let click = 1;

  $('.hamburger').on('click', function(){
    
    $(this).toggleClass('hamburger_active'); // Запускаем анимацию гамбургера
    $('body').toggleClass('overflow-hidden'); // Скрываем скролл
    if (click) {
      $('.menu').toggleClass('active visible');
      // По-очереди показываем пункты меню
      setTimeout(function () { $('.index').toggleClass('translate'); }, 100);
      setTimeout(function () { $('.methods').toggleClass('translate'); }, 200);
      setTimeout(function () { $('.contacts').toggleClass('translate'); }, 400);
      click = 0;
    }
    else {
      setTimeout(function () { $('.index').toggleClass('translate'); }, 300);
      setTimeout(function () { $('.methods').toggleClass('translate'); }, 200);
      setTimeout(function () { $('.contacts').toggleClass('translate'); }, 100);
      setTimeout(function () { $('.menu').toggleClass('visible')}, 500);
      setTimeout(function () { $('.menu').toggleClass('active')}, 1500); 
      click = 1;	
    }
    
  })
})