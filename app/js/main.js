'use strict';
window.addEventListener('DOMContentLoaded', function () {
	/* LazyLoad */
	var lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy",
	});

	/* Animate On Scroll */
	const aos = document.querySelector('[data-aos]');
	/* if (aos) {
		AOS.init({
			Global settings:
			disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
			initClassName: 'aos-init', // class applied after initialization
			animatedClassName: 'aos-animate', // class applied on animation
			useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
			disableMutationObserver: false, // disables automatic mutations' detections (advanced)
			debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
			throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	
			Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 400, // values from 0 to 3000, with step 50ms
			easing: 'ease', // default easing for AOS animations
			once: false, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	
		});
	} */


});



$(document).ready(function () {

	/* ========== menu toggle =========== */
	/* 	let menuBtn = $('.h__menu_btn'),
			menu = $('.h__wrapper'),
			body = $('body');
	
		menuBtn.on('click',function () {
			body.toggleClass('menu-active');
		}); */

	/* ========== to top btn =========== */
	/* $('.to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 500);
	}); */

	/* ========== slick slider =========== */
	/* 	if ($('.slider').length) {
			$('.slider').slick({
				arrows: true,
				infinite: false,
				dots: true,
				autoplay: true,
				fade: false,
				prevArrow: $('.arrows .btn-prev'),
				nextArrow: $('.arrows .btn-next'),
				responsive: [
					{
						breakpoint: 2560,
						settings: "unslick",
					},
					{
						breakpoint: 1200,
						settings: {
							infinite: false,
							slidesToShow: 3,
							slidesToScroll: 2,
							draggable: true,
	
						}
					},
	
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							draggable: true,
	
						}
					},
	
				]
			});
		}
	 */
});