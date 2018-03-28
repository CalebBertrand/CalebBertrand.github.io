$(function() {
	window.mobileAndTabletcheck = function () {
		var check = false;
		(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	};

	var mobile = window.mobileAndTabletcheck();

	if (mobile) {
		$('#contact-info *').css({'font-size': '1.6em', 'text-align': 'center'});
		$('#hero-nav > ul > li > a').css('font-size', '2em');
		$('.hero-centered > h1').css('font-size', '3em');
	}
	
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
		if (!mobile) {
			$('.windowHeight').height(window.innerHeight);
		}
		// $('.windowHeight').height(window.innerHeight);  This caused problems with iphone 5
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
		if ($(window).scrollTop() > $('#hero').height() - navHeight) {
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
