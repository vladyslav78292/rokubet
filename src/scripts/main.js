'use strict';

$(document).ready(function(){
  $(".MainSliderCarousel").slick({
    rtl:false,
    autoplay:true,
    speed: 500,
    dots: false,
    autoplaySpeed: 4000,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:true,
    appendArrows:$(".SliderArrows"),
    prevArrow:'<span class="Slider-Slick-Prev"></span>',
    nextArrow:'<span class="Slider-Slick-Next"></span>',
    easing:"linear",
    responsive:[
      {breakpoint:1025,settings:{
        dots: true,
      }},
    ],
  })
});

$(".question-wrapper").click( function () {
  var container = $(this).parents(".accordion");
  var answer = container.find(".answer-wrapper");
  var trigger = container.find(".material-icons.drop");
	var state = container.find(".question");
  
  answer.animate({height: "toggle"}, 100);
  
  if (trigger.hasClass("icon-expend")) {
    trigger.removeClass("icon-expend");
		state.removeClass("active");
  }
  else {
    trigger.addClass("icon-expend");
		state.addClass("active");
  }
  
  if (container.hasClass("expanded")) {
    container.removeClass("expanded");
  }
  else {
    container.addClass("expanded");
  }

  if (container.hasClass("expanded")) {
    container.removeClass('border');
  } else {
    container.addClass('border');
  }
});

const button = document.getElementById('burger-menu');
const menu = document.getElementById('menu');
const closedMenu = document.getElementById('burger-menu--closed');

button.addEventListener('click', () => {
  menu.classList.remove('burger-menu--open');
  menu.classList.add('burger-menu--closed');
});

closedMenu.addEventListener('click', () => {
  menu.classList.add('burger-menu--open');
  menu.classList.remove('burger-menu--closed');
});