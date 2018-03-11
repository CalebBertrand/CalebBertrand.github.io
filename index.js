$(function() {
	$('#typing-txt').typeIt({
	 	speed: 100,
	    startDelay: 1250,
	    loop: true,
	    loopDelay: 1250,
	    deleteSpeed: 35
	})
	.tiType(' <span class="green">websites.</span>')
	.tiPause(300)
	.tiDelete(16)
	.tiPause(300)
	.tiType(' <span class="green">CMS empowered</span> websites.')
	.tiPause(650)
	.tiDelete(23)
	.tiPause(500)
	.tiType(' <span class="green">responsive</span> websites.')
	.tiPause(650)
	.tiDelete(23)
	.tiPause(500)
	.tiType(' javascript <span class="green">applications.</span>')
	.tiPause(650);

	$('.windowHeight').height(window.innerHeight);
	$('.hero-centered').css('padding-top', window.innerHeight/4);
	$(window).resize(function() {
		$('.windowHeight').height(window.innerHeight);
		$('.hero-centered').css('padding-top', window.innerHeight/4);	
		manageDevice();	
	});
	// if (window.innerWidth > 786) {
	// 	$('.video-container').append('<video class="video" preload="auto" loop="loop" autoplay="autoplay"><source src="vid/save_as.mp4" type="video/mp4"></video>');
	// }

	//Append a clear div at the end of each section, so the sections expand to hold the floated elements
	$('.section, .popout').append('<div class="clear-both"></div>');
	
	var navHeight = $('#hero-nav').height();
	$(window).scroll(function() {
		if ($(window).scrollTop() > window.innerHeight - navHeight) {
			$('#hero-nav').css({'position': 'fixed', 'top': '0', 'bottom': 'auto'});
		}else{
			$('#hero-nav').css({'position': 'absolute', 'bottom': '0', 'top': 'auto'});
		}

		if (!statsHasAnimated) {
			if ($(window).scrollTop() > $('#features').offset().top + $('#features').height()/5) {
				$('#skills li h3 div').each(function(i, value) {
					$(value).animate({width: stats[i] + '%'}, 1000 + i * 70);
				});
			}
		}

		if ($(window).scrollTop() > $('#skills').offset().top) {
			if (!quotesHasAnimated) {
				$('#testimonial > blockquote').fadeIn();
				quotesHasAnimated = true;
			}
		} else if ($(window).scrollTop() < $('#skills').offset().top - window.innerHeight/2) {
			if (quotesHasAnimated) {
				$('#testimonial > blockquote').fadeOut();
				quotesHasAnimated = false;
			}
		}
	});

	//skills stats animations:
	var stats = [95, 88, 79, 45, 45, 45, 20];
	var statsHasAnimated = false;
	$('#skills li h3').append('<div></div>');

	//Site showcase
	var sites = $('.sites > .site').toArray();
	var currentSiteIndex = 0;
	var links = ['wilcraftgoods.org', 'something.com'];
	$('.sites > .centered > a').text(links[ currentSiteIndex ]);
	for (var i = 1; i < sites.length; i++) {
		$(sites[i]).hide();
	}
	function manageDevice() {
		var deviceClass;
		if (window.innerWidth > 521) {
			if (window.innerWidth > 968) {
				deviceClass = 'desktop';
			}else{
				deviceClass = 'tablet';
			}
		}else{
			deviceClass = 'phone';
		}
		var currentSiteId = $( sites[ currentSiteIndex ] ).attr('id');
		$('#' + currentSiteId + ' > component, #' + currentSiteId + ' > div').each(function(i, value) {
			if ($(value).hasClass(deviceClass)) {
				$(value).show();
			}else{
				$(value).hide();
			}
		});
	}
	manageDevice();



	//Fade in quotes
	var quotesHasAnimated = false;
	$('#testimonial > blockquote').hide();
});
