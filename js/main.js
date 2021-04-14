$(function () {

  $('.conf__slider').slick({
  
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
 
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1098,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })


    
});

$('.menu__burger').on('click', function(){
  $('.menu__burger,.menu').toggleClass('active');
      $('body').toggleClass('lock');
    });
$('.menu__list-link').click(function() {
        $('.menu__burger,.menu').removeClass('active');
        $('body').removeClass('lock');
      });
