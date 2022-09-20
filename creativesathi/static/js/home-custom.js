(function($) { "use strict";

	
	//Top Sections Fullscreen	
				
	$(function(){"use strict";
		$('#top-section, #owl-top .item').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('#top-section, #owl-top .item').css({'height':($(window).height())+'px'});
		});
	});

	
	
		
	
	jQuery(document).ready(function($){
		
		/* Scroll Too */
	
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
		

		
		/* Top Carousel */
	 
	  var time = 7; // time in seconds
	 
	  var $progressBar,
		  $bar, 
		  $elem, 
		  isPause, 
		  tick,
		  percentTime;
	 
		//Init the carousel
		$("#owl-top").owlCarousel({
			navigation: true,
			pagination : false,
			slideSpeed : 500,
			paginationSpeed : 500,
			singleItem:true,
			afterInit : progressBar,
			afterMove : moved,
			startDragging : pauseOnDragging
		});
	 
		//Init progressBar where elem is $("#owl-demo")
		function progressBar(elem){
		  $elem = elem;
		  //build progress bar elements
		  buildProgressBar();
		  //start counting
		  start();
		}
	 
		//create div#progressBar and div#bar then prepend to $("#owl-demo")
		function buildProgressBar(){
		  $progressBar = $("<div>",{
			id:"progressBar"
		  });
		  $bar = $("<div>",{
			id:"bar"
		  });
		  $progressBar.append($bar).prependTo($elem);
		}
	 
		function start() {
		  //reset timer
		  percentTime = 0;
		  isPause = false;
		  //run interval every 0.01 second
		  tick = setInterval(interval, 10);
		};
	 
		function interval() {
		  if(isPause === false){
			percentTime += 1 / time;
			$bar.css({
			   width: percentTime+"%"
			 });
			//if percentTime is equal or greater than 100
			if(percentTime >= 100){
			  //slide to next item 
			  $elem.trigger('owl.next')
			}
		  }
		}
	 
		//pause while dragging 
		function pauseOnDragging(){
		  isPause = true;
		}
	 
		//moved callback
		function moved(){
		  //clear interval
		  clearTimeout(tick);
		  //start again
		  start();
		}
	 
		//uncomment this to make pause on mouseover 
		// $elem.on('mouseover',function(){
		//   isPause = true;
		// })
		// $elem.on('mouseout',function(){
		//   isPause = false;
		// })		
		

		//Hero zoom effect
		
		var introSection = $('#hero'),
			introSectionHeight = introSection.height(),
			//change scaleSpeed if you want to change the speed of the scale effect
			scaleSpeed = 1.2,
			//change opacitySpeed if you want to change the speed of opacity reduction effect
			opacitySpeed = 1.2; 
		
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
		

 	//Parallax
	
	$('.parallax-section-filters').parallax("50%", 0.4);
	$('.parallax-section-quotes').parallax("50%", 0.4);	
	
	

	/* Portfolio Sorting */

		(function ($) { 
		
		
			var container = $('#projects-grid');
			
			
			function getNumbColumns() { 
				var winWidth = $(window).width(), 
					columnNumb = 1;
				
				
				if (winWidth > 1500) {
					columnNumb = 4;
				} else if (winWidth > 1200) {
					columnNumb = 3;
				} else if (winWidth > 900) {
					columnNumb = 2;
				} else if (winWidth > 600) {
					columnNumb = 2;
				} else if (winWidth > 300) {
					columnNumb = 1;
				}
				
				return columnNumb;
			}
			
			
			function setColumnWidth() { 
				var winWidth = $(window).width(), 
					columnNumb = getNumbColumns(), 
					postWidth = Math.floor(winWidth / columnNumb);

			}
			
			$('#portfolio-filter #filter a').click(function () { 
				var selector = $(this).attr('data-filter');
				
				$(this).parent().parent().find('a').removeClass('current');
				$(this).addClass('current');
				
				container.isotope( { 
					filter : selector 
				});
				
				setTimeout(function () { 
					reArrangeProjects();
				}, 300);
				
				
				return false;
			});
			
			function reArrangeProjects() { 
				setColumnWidth();
				container.isotope('reLayout');
			}
			
			
			container.imagesLoaded(function () { 
				setColumnWidth();
				
				
				container.isotope( { 
					itemSelector : '.portfolio-box-1', 
					layoutMode : 'masonry', 
					resizable : false 
				} );
			} );
			
			
		
			
		
			$(window).on('debouncedresize', function () { 
				reArrangeProjects();
				
			} );
			
		
		} )(jQuery);
	} );





	/* DebouncedResize Function */
		(function ($) { 
			var $event = $.event, 
				$special, 
				resizeTimeout;
			
			
			$special = $event.special.debouncedresize = { 
				setup : function () { 
					$(this).on('resize', $special.handler);
				}, 
				teardown : function () { 
					$(this).off('resize', $special.handler);
				}, 
				handler : function (event, execAsap) { 
					var context = this, 
						args = arguments, 
						dispatch = function () { 
							event.type = 'debouncedresize';
							
							$event.dispatch.apply(context, args);
						};
					
					
					if (resizeTimeout) {
						clearTimeout(resizeTimeout);
					}
					
					
					execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
				}, 
				threshold : 150 
			};
		} )(jQuery);	
	
	
	
	//Tooltip
	
	$(".tipped").tipper();	
	
	
	//Filter Click Effect
	
			(function() {

				function mobilecheck() {
					var check = false;
					(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
					return check;
				}

				var support = { animations : Modernizr.cssanimations },
					animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
					animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
					onEndAnimation = function( el, callback ) {
						var onEndCallbackFn = function( ev ) {
							if( support.animations ) {
								if( ev.target != this ) return;
								this.removeEventListener( animEndEventName, onEndCallbackFn );
							}
							if( callback && typeof callback === 'function' ) { callback.call(); }
						};
						if( support.animations ) {
							el.addEventListener( animEndEventName, onEndCallbackFn );
						}
						else {
							onEndCallbackFn();
						}
					},
					eventtype = mobilecheck() ? 'touchstart' : 'click';

				[].slice.call( document.querySelectorAll( '.cbutton' ) ).forEach( function( el ) {
					el.addEventListener( eventtype, function( ev ) {
						classie.add( el, 'cbutton--click' );
						onEndAnimation( classie.has( el, 'cbutton--complex' ) ? el.querySelector( '.cbutton__helper' ) : el, function() {
							classie.remove( el, 'cbutton--click' );
						} );
					} );
				} );

			})();	
			
			
	//Quote Carousel
	 
	  $("#owl-quote").owlCarousel({
		autoPlay : 4000,
		stopOnHover : false,
		navigation:false,
		pagination : false,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true,
		autoHeight : true,
		transitionStyle:"fade"
	  });
	 

	
	
	
	
	
 
  })(jQuery); 