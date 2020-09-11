	jQuery(document).ready(function($){
        $('.jcarousel, [data-jcarousel]').each(function(){
			var jcarousel = $(this);

			jcarousel
				.on('jcarousel:reload jcarousel:create', function () {
					var carousel = $(this),
						width = carousel.innerWidth(),
						cnt = Math.floor(width / 245);

					width = width / cnt;
					/*if (width >= 600) {
						width = width / 3;
					} else if (width >= 350) {
						width = width / 2;
					}*/
					

					carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
				})
				.jcarousel($.extend({
					wrap: 'circular'
				}, jcarousel.data()));
		});

		$('.jcarousel-control-prev')
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('inactive');
			})
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('inactive');
			})
			.jcarouselControl({
				target: '-=1'
			});

		$('.jcarousel-control-next')
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('inactive');
			})
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('inactive');
			})
			.jcarouselControl({
				target: '+=1'
			});

		$('.jcarousel-pagination')
			.on('jcarouselpagination:active', 'a', function() {
				$(this).addClass('active');
			})
			.on('jcarouselpagination:inactive', 'a', function() {
				$(this).removeClass('active');
			})
			.on('click', function(e) {
				e.preventDefault();
			})
			.jcarouselPagination({
				perPage: 1,
				item: function(page) {
					return '<a href="#' + page + '">' + page + '</a>';
				}
			});
    });