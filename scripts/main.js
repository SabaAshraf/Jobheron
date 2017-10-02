$(document).ready(function(){
  		$(window).scroll(function(){
  			if ($(window).scrollTop()>=100) {
  				$('.header').addClass('fixed-header');
  			}
  			else{
  				$('.header').removeClass('fixed-header')
  			}
  		});
  	})