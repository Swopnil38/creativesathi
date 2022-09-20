(function($) { "use strict";

	
	//Top Sections Fullscreen	
				
	$(function(){"use strict";
		$('#top-section, .about-top-section').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('#top-section, .about-top-section').css({'height':($(window).height())+'px'});
		});
	});


		
	/* Scroll Too */
	
	$(document).ready(function(){"use strict";
		$(".scroll").click(function(event){

			event.preventDefault();

			var full_url = this.href;
			var parts = full_url.split("#");
			var trgt = parts[1];
			var target_offset = $("#"+trgt).offset();
			var target_top = target_offset.top;

			$('html, body').animate({scrollTop:target_top}, 1000);
		});

		
	//Navigation	

		var isLateralNavAnimating = false;
		
		//open/close lateral navigation
		$('.cd-nav-trigger').on('click', function(event){
			event.preventDefault();
			//stop if nav animation is running 
			if( !isLateralNavAnimating ) {
				if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
				
				$('body').toggleClass('navigation-is-open');
				$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					//animation is over
					isLateralNavAnimating = false;
				});
			}
		});

		
	//Hero zoom effect

		var introSection = $('#hero'),
			introSectionHeight = introSection.height(),
			//change scaleSpeed if you want to change the speed of the scale effect
			scaleSpeed = 1.2,
			//change opacitySpeed if you want to change the speed of opacity reduction effect
			opacitySpeed = 0; 
		
		//update this value if you change this breakpoint in the style.css file
		var MQ = 1170;

		triggerAnimation();
		$(window).on('resize', function(){
			triggerAnimation();
		});

		//bind the scale event to window scroll if window width > $MQ (unbind it otherwise)
		function triggerAnimation(){
			if($(window).width()>= MQ) {
				$(window).on('scroll', function(){
					//The window.requestAnimationFrame() method tells the browser that you wish to perform an animation- the browser can optimize it so animations will be smoother
					window.requestAnimationFrame(animateIntro);
				});
			} else {
				$(window).off('scroll');
			}
		}
		//assign a scale transformation to the introSection element and reduce its opacity
		function animateIntro () {
			var scrollPercentage = ($(window).scrollTop()/introSectionHeight).toFixed(5),
				scaleValue = 1 - scrollPercentage*scaleSpeed;
			//check if the introSection is still visible
			if( $(window).scrollTop() < introSectionHeight) {
				introSection.css({
					'-moz-transform': 'scale(' + scaleValue + ') translateZ(0)',
					'-webkit-transform': 'scale(' + scaleValue + ') translateZ(0)',
					'-ms-transform': 'scale(' + scaleValue + ') translateZ(0)',
					'-o-transform': 'scale(' + scaleValue + ') translateZ(0)',
					'transform': 'scale(' + scaleValue + ') translateZ(0)',
					'opacity': 1 - scrollPercentage*opacitySpeed
				});
			}
		}

		
		//Skills Counter 

        $('.counter-skills').counterUp({
            delay: 100,
            time: 3000
        });	


		//Parallax
	
		$('.parallax-section-quotes').parallax("50%", 0.4);	
	
	
	
		//Tooltip
	
		$(".tipped").tipper();	
	
	
	
    });	
	

 
  })(jQuery); 