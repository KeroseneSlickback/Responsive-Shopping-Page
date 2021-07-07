const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	// Toggle nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

		// Animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.classList.add('nav-link-active');
				link.style.animation = '';
			} else {
				link.classList.remove('nav-link-active');
				link.style.animation = `navLinkFade 0.25s ease forwards ${index / 9}s`;
			}
		});
		// Burger animation
		burger.classList.toggle('toggle');
	});
};

navSlide();
