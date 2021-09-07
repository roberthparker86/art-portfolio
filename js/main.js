$('#contactForm').submit((e) => {
	let email = e.target.emailInput.value;
	let message = e.target.messageBox.value;
	console.log(email, message);
	e.preventDefault();
});