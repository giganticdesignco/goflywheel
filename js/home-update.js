


// Clickable cards to show copy when active
const coverageTypes = document.querySelectorAll('.coverage-types .type');

coverageTypes.forEach((type) => {
  type.addEventListener('click', function() {
  	type.classList.toggle('active');
  })
});


// Horizontal text scrolling
$(window).scroll(
{
	previousTop: 0
},
function () {
	var currentTop = $(window).scrollTop();
	var number = currentTop / 30;	

	if ($('.not-ready-yet').length > 0 ) {
		if (($('.not-ready-yet').offset().top + $('.not-ready-yet').outerHeight()) > $(window).scrollTop()){
			var $d1 = $('.text-shadow');
			var d2X = 50 + number;		

			$d1.css({
				'transform': 'translateX(' + - number * 4 + 'px) scale(1.2)'
			});
		}
	}
	this.previousTop = currentTop;
});



const dotInputs = document.querySelectorAll('.input-contain input');

function redirectDOT() {
	let inputValue;
	dotInputs.forEach((input) => {
		// Check if the input has a value
		if(input.value !== "") {
			// Remove spaces from inputValue
			inputValue = input.value.replace(/\s+/g, '');
			// Redirect user to flywheel with DOT number in url
			window.location.href=`https://flywheel.giganticdesign.com?dot=${inputValue}`;  
		}
	})
}


// Show the navigation once the top of the page hits a 
// certain point
const nav = document.querySelector('nav');
// const mastInput =document.querySelector('section.mast .input-contain')

// function obCallback(payload) {
//   if(!payload[0].isIntersecting) {
//     nav.classList.add('sticky');
//   } else {
//   	nav.classList.remove('sticky');
//   }
// }

const ob = new IntersectionObserver(obCallback);
// ob.observe(mastInput)

// Autofocus the DOT Number Mast input on load
window.onload = function() {
  var input = document.querySelector(".mast input").focus();
}


// Footer expand animation
const footer = document.querySelector('footer');
const renderedCopy = document.querySelector('.rendered');

const options = {
  rootMargin: `0px 0px -${renderedCopy.offsetHeight}px 0px`
}

function footerTrigger(payload) {
  if(!payload[0].isIntersecting) {
    footer.classList.remove('expand');
  } else {
  	nav.classList.remove('sticky')
  	footer.classList.add('expand');
    window.scrollTo(0, footer.offsetTop);
  }
}

const observer = new IntersectionObserver(footerTrigger, options);
observer.observe(renderedCopy)


const footerCopy = document.querySelector('footer .contain')
// Show Nav when user scrolls up
function obCallback(payload) {
  if(!payload[0].isIntersecting && window.pageYOffset !== 0) {
    nav.classList.add('sticky');
  } else {
  	nav.classList.remove('sticky');
  }
}

const navOb = new IntersectionObserver(obCallback);
navOb.observe(footerCopy)












































