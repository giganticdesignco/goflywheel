if(typeof vh !== 'undefined') {
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	// We listen to the resize event
	window.addEventListener('resize', () => {
	  // We execute the same script as before
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
}

$(document).ready(function(){
	
	$("[data-scrollTo]").on('click', function(event) {
		event.preventDefault();
		if(!$("#"+$(this).data('scrollto')).length) return;
		var ypos = $("#"+$(this).data('scrollto')).offset().top;
		$("html, body").animate({ scrollTop: ypos }, 1000);
	});

	if (typeof Waypoint === "function") { 

		$('.stats').waypoint(function(direction) {
			//check the direction
			if(direction == 'down') {
				
				var options = {
					useEasing: true,
					useGrouping: true,
					separator: ',',
					decimal: '.',
					duration: 2,
				};
				var numChange = $('.stat .number span');

				$.each(numChange, function(index) {
					var numId = 'num' + index;
					$(this).attr('id', numId);
					var decimalCount = ($(this).attr('data-count').split('.')[1]) ? $(this).attr('data-count').split('.')[1].length : 0;
					var demo = new CountUp($(this).attr('id'),0,$(this).attr('data-count'),decimalCount,3,options);
					demo.start();
				});
				
				this.destroy();
			}
			}, {
			//Set the offset
			offset: '80%'
		});

		var inviewWaypoint = $('.animate, .fadeup, .fadeup-cascade, .fadein, .slideleft, .slideleft-cascade, .slideright, .slideright-cascade, .appear, .flipup, .flipleft, .flipright').waypoint(function(direction) {
			//check the direction
			if(direction == 'down') {
				//add the class to start the animation
				$(this.element).addClass('in-view');
				//then destroy this waypoint, we don't need it anymore
				this.destroy();
			}
			}, {
			//Set the offset
			offset: '80%'
		});
	}

	document.querySelector('.menu-icon__checkbox').addEventListener('change', event => {
		document.querySelector('body').classList.toggle('nav-open')
	})
});