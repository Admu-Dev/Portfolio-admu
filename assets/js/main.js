/*
__________________________________________________________________________

                    Menu
__________________________________________________________________________
 */

const toggleBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
const navbar = document.getElementById("navbar");
const body = document.body;
const linksText = document.querySelectorAll(".links .item a p");

toggleBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  if (!toggleBtn.className.includes("active")) {
    toggleBtn.classList.add("active");
    links.classList.add("active");
    navbar.classList.add("active");
  } else {
    toggleBtn.classList.remove("active");
    links.classList.remove("active");
    navbar.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  if (body.offsetWidth <= 850) {
    linksText.forEach((link) => (link.style = "display: block;"));
  }
  if (window.scrollY >= 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});



/*
__________________________________________________________________________

                Animated SVG Scrolling Mouse Icon
__________________________________________________________________________
 */ 

jQuery(document).ready(function($){
	
	$('a.scroll-link').click(function(e){
		e.preventDefault();
		$id = $(this).attr('href');
		$('body,html').animate({
			scrollTop: $($id).offset().top -20
		}, 200);
	});
	
});

/*
__________________________________________________________________________

                Slider
__________________________________________________________________________
 */ 

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
});