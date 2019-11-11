var htmlDoc = document.documentElement,
	enSizing = false;

function setFontSize() {
	htmlDoc.style.fontSize = Math.floor((htmlDoc.offsetWidth/320*62.5) * 100000 / 100000) + '%';
}

function listRow(row) {
	$('.product_list').removeClass().addClass('product_list ' + row);
}

function moreView(el){
	$('.' + el).each(function(i,elm){
		if(i >= 6) {
			// console.log(i+'.'+el);
			$(elm).css('display','none');
		}
	});
}

function expandCollapse(id , el) {
	var list_box = $("." + id);

	if ( list_box.is(":visible") ) {
		list_box.slideUp();
		list_box.prev().removeClass('on');
	} else {
		list_box.slideDown();
		list_box.prev().addClass('on');
	}

	list_box.find('.' + el).on('click', function(e){
		list_box.hide();
		e.preventDefault();
	});
}

$(document).on("touchstart", function(){ });

$(".btn_menu").click(function(){
	$(this).toggleClass('on');
	if ($(this).hasClass('on')) {
		$('html, body').css('overflow','hidden');
		$(".left_area").stop().animate({
			left : "0"
		},400);
	} else {
		$('html, body').css('overflow','auto');
		$(".left_area").stop().animate({
			left : "-100%"
		},400);
	}
});
$(".btn_left_close").click(function(){
	$('html, body').css('overflow','auto');
	$(".btn_menu").removeClass('on');
	$(".left_area").stop().animate({
		left : "-100%"
	},400);
});

$(".btn_sch").click(function(){
	$(this).toggleClass('on');
	if ($(this).hasClass('on')) {
		$('html, body').css('overflow','hidden');
		$(".right_area").stop().animate({
			right : "0"
		},400);
	} else {
		$('html, body').css('overflow','auto');
		$(".right_area").stop().animate({
			right : "-100%"
		},400);
	}
});
$(".btn_right_close").click(function(){
	$('html, body').css('overflow','auto');
	$(".btn_sch").removeClass('on');
	$(".right_area").stop().animate({
		right : "-100%"
	},400);
});

function scrollLink(obj){
	var position = $("#"+obj).position();
	$('html, body').animate({scrollTop : position.top}, 700);
}

function layer_open(el){
	var temp = $('#' + el);
	var bg = temp.prev().hasClass('bg');

	if(bg){
		temp.parent('.ly').fadeIn();
	}else{
		temp.parent('.ly').fadeIn();
	}

	temp.find('.btn_Close').click(function(e){
		if(bg){
			temp.parent().fadeOut();
		}else{
			temp.parent().fadeOut();
		}
		e.preventDefault();
	});

    temp.prev('.bg').click(function(e){
		temp.parent().fadeOut();
		e.preventDefault();
	});
}

$(document).ready(function() {
	setFontSize();

	var filter = "win16|win32|win64|mac|macintel";
	if( navigator.platform ){
		if( filter.indexOf(navigator.platform.toLowerCase())<0 ){
			// location.href = "모바일 링크 경로 작성";
		} else {
			// alert("모바일에서만 접속 가능합니다.");
			// location.href = "https://ksmall.ksnet.co.kr";
		}
	}

	$(window).resize(function() {
		if (!enSizing) {
			window.requestAnimationFrame(function() {
				setFontSize();
				enSizing = false;
			});
		}
		enSizing = true;
	}).trigger("resize");

	$(window).resize(function() {
		if (!enSizing) {
			window.requestAnimationFrame(function() {
				setFontSize();
				enSizing = false;
			});
		}
		enSizing = true;
	}).trigger("resize");


	var _comFooter = $(".footer_area");
	var _item = $(".go_top");

	$(window).on('scroll', function() {
		// var top = _comFooter.offset().top;
		var min = ($(this).scrollTop() + $(window).height()) - _comFooter.offset().top;

		if ( $(this).scrollTop() > 50 ) {
			_item.fadeIn();
		} else {
			_item.fadeOut();
		}

		if($(this).scrollTop() + $(window).height() > _comFooter.offset().top) {
			_item.css({position: 'absolute', bottom: min , marginBottom: '0.75rem'});
		} else {
			_item.css({position: 'fixed', bottom: '0.75rem' , marginBottom: '0'});
		}
	});

	$(".go_top").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});

	lightbox.option({
		'alwaysShowNavOnTouchDevices': true,
		'showImageNumberLabel': false
	});

	$('.recommendation_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: false,
		cssEase: 'linear'
	});

	var chagtit = $(".project_list .link");
	var chagsubmu = $(".project_list .list_detail_box");

	chagsubmu.hide();
	chagtit.on("click", function(e) {
		chagsubmu.slideUp();
		$(this)
			.parents('table')
			.next(".list_detail_box:hidden")
			.slideDown();
		if ($(this).hasClass("on")) {
			$(this).toggleClass("on");
		} else {
			$(this)
				.addClass("on")
				.siblings()
				.removeClass("on");
		}
		e.preventDefault();
	});

	var keytit = $(".keyboard > a");
	var keyImgBox = $(".keyboard .img_box");

	keyImgBox.hide();
	keytit.on("click", function(e) {
		keyImgBox.slideUp();
		$(this)
			.next(".img_box:hidden")
			.slideDown();
		if ($(this).hasClass("on")) {
			$(this).toggleClass("on");
		} else {
			$(this)
				.addClass("on")
				.siblings()
				.removeClass("on");
		}
		e.preventDefault();
	});
	

});


