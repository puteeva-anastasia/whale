$(function () {
	$('#bg-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'linear',
		arrows: true,
		prevArrow: '<button type="button" class="slide__arrow slide__arrow-prev"><svg class="slide__arrow-svg" width="8" height="12" viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 1L1.5 6L6.5 11" stroke-width="2"/></svg></button><span id="page-number" class="switch__page switch__number">01</span><hr class="line-2">',
		nextArrow: '<button type="button" class="slide__arrow slide__arrow-next"><svg class="slide__arrow-svg" width="8" height="12" viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L6 6L1 1" stroke-width="2"/></svg></button><hr class="line-1"><span id="page-total" class="switch__page switch__total"></span>',
	})

	let slider = $('#bg-slider');
	$('#page-total').text('0' + (slider.slick("getSlick").slideCount));
	slider.on('afterChange', function (event, slick, currentSlide) {
		$("#page-number").text(0 + String(currentSlide + 1));
	});

	let menuOpen = document.getElementById('menu-open');
	let menu = document.getElementById('menu');
	let info = document.getElementById('info');
	let headerRight = document.getElementById('header-right');
	let menuClose = document.getElementById('menu-close');
	
	menuOpen.onclick = function() {
		menu.style.display = 'block';
		info.style.display = 'none';
		headerRight.style.display = 'none';
		menuClose.style.display = 'flex';
	}

	menuClose.onclick = function() {
		menu.style.display = 'none';
		info.style.display = 'block';
		headerRight.style.display = 'flex';
		menuClose.style.display = 'none';
	}

	let searchButton = document.getElementById('search-button');
	let headerNav = document.getElementById('header-nav');
	let searchWrap = document.getElementById('search-wrap');
	let closeSearch = document.getElementById('close-search');

	searchButton.onclick = function() {
		headerNav.style.display = 'none';
		searchButton.style.display = 'none';
		searchWrap.style.display = 'flex';
	}

	closeSearch.onclick = function() {
		headerNav.style.display = 'block';
		searchButton.style.display = 'block';
		searchWrap.style.display = 'none';
	}

});