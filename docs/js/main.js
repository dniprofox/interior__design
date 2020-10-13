
$(function(){  


  ///якорные ссылки///////////
  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

  
  ////header__slider////////
  $('.slide-item__wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true   
  });

  $('.users-slider__inner').slick({
    slidesToShow: 2,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
        }
      }     
     
    ]
  });
 /////////////////portfolio////////////// 
 $('.portfolio__link[filter]').click(function () {
  if ($(this).attr('val') == 'off') {
     $('.portfolio__link[filter]').attr('val', 'off').removeClass('focused');
     $(this).attr('val', 'on').addClass('focused');
     $('.filter > div').hide(600);
     $('.filter > div[filter=' + $(this).attr('filter') + ']').show(600);
     if ($(this).attr('filter') == 'all') {
        $('.portfolio__link[filter]').attr('val', 'off').removeClass('focused');
        $(this).attr('val', 'on').addClass('focused');
        $('.filter > div').show(600);
     }
  }
});
/////////////video-fansy////////////
$('.video__inner a').fancybox({
  caption : function( instance, item ) {
    return $(this).parent().find('.card-text').html();
  }
});
 

/////////////////tabs//////////////
  $('.services__tabs .tab').on('click', function(event) {
  var id = $(this).attr('data-id');
    $('.services__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.services__tabs').find('.tab').removeClass('tab-active');
    $(this).addClass('tab-active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
  });

  /////////////////menu__btn//////////////
  $('.menu__btn').on("click", function(){
    $(this).toggleClass('open');
    $('.menu__list').slideToggle();
  });
  
  
  /* Кнопка вверх */
    $(window).scroll(function () {
        
      if ($(this).scrollTop() != 0)
        $('#toTop').fadeIn("slow");
      else
        $('#toTop').fadeOut("slow");
  });
  $('#toTop').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
  });

  

});