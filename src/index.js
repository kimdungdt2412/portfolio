import initTilt from "./js/tilt";
import initSr from "./js/sr";
import resume from "./assets/resume.pdf";

import "./style/main.scss";

<<<<<<< Updated upstream
$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
=======

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
>>>>>>> Stashed changes
});

theme();


initSr();
initTilt();

// uncomment this if you want to attach your resume
addResume(resume);
