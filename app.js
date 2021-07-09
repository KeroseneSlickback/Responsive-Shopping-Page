const navSlide = () => {
	const burger = document.querySelector('.burger');
	const navMobile = document.querySelector('.nav-m-links');

	const earphoneM = document.querySelector('.earphone-m');
	const headphoneM = document.querySelector('.headphone-m');
	const supportM = document.querySelector('.support-m');

	const navSubMLink1 = document.querySelector('.nav-m-sub-links-1');
	const navSubMLink2 = document.querySelector('.nav-m-sub-links-2');
	const navSubMLink3 = document.querySelector('.nav-m-sub-links-3');

	function clearSide() {
		navSubMLink1.classList.remove('sub-nav-slide-in');
		navSubMLink2.classList.remove('sub-nav-slide-in');
		navSubMLink3.classList.remove('sub-nav-slide-in');
		navSubMLink1.classList.remove('sub-nav-slide-out');
		navSubMLink2.classList.remove('sub-nav-slide-out');
		navSubMLink3.classList.remove('sub-nav-slide-out');
	}

	// Toggle mobile nav slide
	burger.addEventListener('click', () => {
		if (navMobile.classList.contains('nav-slide-out')) {
			navMobile.classList.remove('nav-slide-out');
			navMobile.classList.add('nav-slide-in');
			clearSide();
		} else {
			navMobile.classList.remove('nav-slide-in');
			navMobile.classList.add('nav-slide-out');
		}

		burger.classList.toggle('toggle');
	});

	// toggle individual sections

	earphoneM.addEventListener('click', () => {
		if (navSubMLink1.classList.contains('sub-nav-slide-out')) {
			clearSide();
			navSubMLink1.classList.add('sub-nav-slide-in');
		} else {
			clearSide();

			navSubMLink1.classList.add('sub-nav-slide-out');
		}
	});

	headphoneM.addEventListener('click', () => {
		if (navSubMLink2.classList.contains('sub-nav-slide-out')) {
			clearSide();
			navSubMLink2.classList.add('sub-nav-slide-in');
		} else {
			clearSide();

			navSubMLink2.classList.add('sub-nav-slide-out');
		}
	});

	supportM.addEventListener('click', () => {
		if (navSubMLink3.classList.contains('sub-nav-slide-out')) {
			clearSide();
			navSubMLink3.classList.add('sub-nav-slide-in');
		} else {
			clearSide();
			navSubMLink3.classList.add('sub-nav-slide-out');
		}
	});
};

navSlide();
