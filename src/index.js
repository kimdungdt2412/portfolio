import initTilt from "./js/tilt";
import initSr from "./js/sr";
import theme from './js/theme';

import "./style/main.scss";


$('a[href^="#"]').on('click', function (event) {
	var target = $(this.getAttribute('href'));
	if (target.length) {
		event.preventDefault();
		$('html, body').stop().animate(
			{
				scrollTop: target.offset().top,
			},
			1000,
		);
	}



});



theme();


initSr();
initTilt();

// uncomment this if you want to attach your resume
addResume(resume);
