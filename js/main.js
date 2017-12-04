$(document).ready(function(){

	$('.user-login').click(function(){
		$('.user-dropdown').slideToggle();
	});


	$('.orders-filter-item').click(function(){
		var elem = $(this);
		setActiveFilter(elem);
		getOrder(elem);
	});

	$(".menu-toggle").on('click', function() {
		$(this).toggleClass("on");
		$('.menu-section').toggleClass("on");
		$(".header nav").slideToggle();
	});

});



function setActiveFilter(elem) {
	var filters = $('.orders-filter-item');
	filters.removeClass('active');
	elem.addClass('active');
}


function getOrder(elem) {

	var progress = elem.attr('data-progress-filter');
	var progressElems = $('.orders-item .order-progress');

	for (var i = 0; i < progressElems.length; i++) {
		var progressElem = progressElems.eq(i).attr('data-progress-item');
		if (progressElem.search(progress) == -1) {
			progressElems.eq(i).parent('.orders-item').css('display', 'none');
		} else if (progressElem.search(progress) != -1) {
			progressElems.eq(i).parent('.orders-item').css('display', 'block');
		}
	};
}