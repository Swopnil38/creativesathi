(function($) { "use strict";


	
	
	//Navigation	
	
	jQuery(document).ready(function($){
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

		
	//Tooltip
	
	$(".tipped").tipper();	

	
 	//Facts Counter 

        $('.counter-facts').counterUp({
            delay: 100,
            time: 3000
        });

		
	//Full Accordion	

		$(".accordion").smk_Accordion({
			closeAble: true 
		});
	});
	
	

 
 	
	
 
  })(jQuery); 