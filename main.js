/*var myInterval= setInterval(function(){console.log(new Date());},1000);
clearInterval(myInterval);*/

$(function(){

	//configration
	var width = 720;
	var animationspeed=1000;
	var pause = 1000;

	var $slider= $('#slider')
	var $slideContainer =$slider.find('.slides');
	var $slides =  $slideContainer.find('.slide');
	var $currentSlide =1;
//setInterval
	var interval;
	
	function startSlider(){
		interval = setInterval(function(){
			//animate marginleft
			$slideContainer.animate({'margin-left' : '-='+width}, animationspeed, function(){
				$currentSlide++;
				//if its last slide go to opx
				if($currentSlide == $slides.length){					
					$currentSlide = 1;
					$slideContainer.css('margin-left',0);
				}
			});
	},pause);
	}

	function stopSlider(){
		clearInterval(interval);
	}
	//listen for mouseenter and pause
	$slider.on('mouseenter', stopSlider).on('mouseleave',startSlider);
	//resume on mouse leave


	startSlider();
});
