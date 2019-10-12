jQuery(function ($) {
// START BLOCK show/hide block with social link
	$('.share').children('p').on('click', function() {		
    $('.social_link').show(500);
    $('.social_link').css('display', 'flex');    
	});
	$('.share .social_link .close').on('click', function() {		
    $('.social_link').hide(500);
	});
// END BLOCK show/hide block with social link

// START BLOCK add word "DETAILS" in discription_item block
	add_details();
	
	$(window).resize(function() {
		add_details();
	});

	function add_details() {
		if(window.matchMedia('(max-width: 685px) and (min-width: 403px)').matches){
			if ($('.discription_item>p:first').html() !== 'DETAILS:') {
				$('.discription_item').prepend('<p>DETAILS:</p>');
			}
		}else{
			if ($('.discription_item>p:first').html() == 'DETAILS:') {
				$('.discription_item>p:first').remove();
			}
		}		
	}
// END BLOCK add word "DETAILS" in discription_item block

// START BLOCK add word "select a..." in size/color block
	add_select();
	$(window).resize(function() {
		add_select();
	});

	function add_select() {
		if(window.matchMedia('(max-width: 403px)').matches){
			$('.size_item').children('p').html('select a size:');
			$('.color_item').children('p').html('select a color:');		
		}else{
			$('.size_item').children('p').html('size:');
			$('.color_item').children('p').html('color:');
		}
	}
// END BLOCK add word "select a..." in size/color block

// START BLOCK show/hide owlCarousel for mobile
	var $homeSlider = $(".items_block");

	$(window).resize(function() {
	  showHomeSlider();
	});

	function showHomeSlider() {
	  if ($homeSlider.data("owlCarousel") !== "undefined") {
	    if (window.matchMedia('(max-width: 403px)').matches) {
	      initialHomeSlider();
	    } else {
	      destroyHomeSlider();
	    }
	  }
	}
	showHomeSlider();

	function initialHomeSlider() {
	  $homeSlider.addClass("owl-carousel").owlCarousel({
	    loop:true,
			nav:true,
			navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
			responsive:{
				0:{
					items:1
				}
			}
	  });
	}

	function destroyHomeSlider() {
	  $homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
	}
// END BLOCK show/hide owlCarousel for mobile

// START BLOCK change color in rate block
	$('.rate').on('click', 'span', function() {
  	var rate = ($(this).index());
		var like = document.querySelectorAll('div.rate > span');
		for (var i = 0; i < like.length; i++) {
			$(like[i]).removeClass();
		}
		for (var i = 0; i <= rate; i++){
			$(like[i]).addClass('like');
		}
	});	
// END BLOCK change color in rate block
})