$(document).ready(function(){
  $('.btn').on('click', () => {
    $('.pop-up').show();
    $('.black').show();
  });

  $('.close').on('click', () => {
    $('.pop-up').hide();
    $('.black').hide();
  });

  $('.black').on('click', () => {
    $('.pop-up').hide();
    $('.black').hide();
  });

  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    adaptiveHeight: false
  });

  $('.carousel-six').slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    adaptiveHeight: false
  });
});
