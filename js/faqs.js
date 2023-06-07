const faqButtons = document.querySelectorAll('.faq');

faqButtons.forEach((element) => {
	element.addEventListener('click', function() {
		element.classList.toggle('hidden');
	});
})


// const dotInputs = document.querySelectorAll('.input-contain input');

// function redirectDOT() {
// 	let inputValue;
// 	dotInputs.forEach((input) => {
// 		// Check if the input has a value
// 		if(input.value !== "") {
// 			// Remove spaces from inputValue
// 			inputValue = input.value.replace(/\s+/g, '');
// 			// Redirect user to flywheel with DOT number in url
// 			window.location.href=`https://flywheel.giganticdesign.com?dot=${inputValue}`;  
// 		}
// 	})
// }
