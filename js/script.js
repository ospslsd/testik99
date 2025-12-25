document.addEventListener('DOMContentLoaded', () => {
  const initSwiper = () => {
    const desktopSlider = document.querySelector('.swiper-desk');
    const mobileSlider = document.querySelector('.swiper-mob');
  const abSlider = document.querySelector('.about-slid');

    if (window.innerWidth > 1000 && desktopSlider) {
      new Swiper('.swiper-desk', {
        slidesPerView: 1,
        spaceBetween: 10,
      });
    } else if (window.innerWidth < 900 && mobileSlider && abSlider) {
      new Swiper('.swiper-mob', {
				slidesPerView: 1,
				spaceBetween: 25,
				
			})
          new Swiper('.about-slid', {
						slidesPerView: 1,
						spaceBetween: 25,
				
					})
    }
  };

  initSwiper();
  window.addEventListener('resize', initSwiper);
});



function openBurg(){
  document.querySelector('.burger-menu').classList.toggle('open');
  document.querySelector('html').classList.toggle('ov');
}