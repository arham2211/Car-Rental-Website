
$(document).ready(function () {

  $('.about').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    arrows: false,
  });


  // Handle custom arrow clicks
  $('.arrows-left').on('click', function (e) {
    e.preventDefault();
    $('.about').slick('slickPrev');
  });

  $('.arrows-right').on('click', function (e) {
    e.preventDefault();
    $('.about').slick('slickNext');
  });

});


var rev = $('.cascade-slider');
rev.on('init', function (event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    prev = cur.prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  cur.removeClass('slick-snext').removeClass('slick-sprev');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  next = cur.next(),
    prev = cur.prev();
  prev.prev();
  prev.next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev');
});

$('.cascade-slider').slick({
  slidesToShow: 3,
  swipe: true,
  Infinite: true,
  slidesToScroll: 1,
  draggable: true,
  focusOnSelect: true,
  arrows: true,
  centerMode: true,
  centerPadding: '0px',
  dots: false,
  // autoplay:true,
  // autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,


      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
  ]



});

anime.timeline()
  .add({
    targets: '.ml15 .word',
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 500,
    delay: (el, i) => 500 * i

  })

anime.timeline().add({
  targets: '.ml25 .word',
  scale: [14, 1],
  opacity: [0, 1],
  easing: "easeOutCirc",
  duration: 900,
  delay: 4600,

})

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRightt = "0";
}

function opennav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closenav() {
  document.getElementById("myNav").style.height = "0%";
}

jQuery(document).ready(function ($) {

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    centerMode: true,
    fade: true,
    asNavFor: '.slider-nav',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }

    ]


  });

  $('.words-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-nav,.slider-for',
    draggable: true,
    focusOnSelect: true,
    arrows: false,
    centerPadding: '0px',
    dots: false,
    centerMode: true,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }

    ]



  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for, .words-slider',
    draggable: true,
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '10px',
    prevArrow: '<span class="icon-angle-left"></span>',
    nextArrow: '<span class="icon-angle-right"></span>',


    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }

    ]



  });

});


jQuery(document).ready(function ($) {

  $('.feature-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    centerMode: true,
    fade: true,
    asNavFor: '.rental-slider',



  });

  $('.rental-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    asNavFor: '.feature-slider',
    draggable: true,
    dots: false,
    focusOnSelect: true,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
  
  
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      }
    ]


  });


});

var rev = $('.rental-slider');
rev.on('init', function (event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    prev = cur.prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  cur.removeClass('slick-snext').removeClass('slick-sprev');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  next = cur.next(),
    prev = cur.prev();
  prev.prev();
  prev.next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev');
});


new WOW().init();