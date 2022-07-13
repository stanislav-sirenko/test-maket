const sliders = document.querySelectorAll('.swiper');
let mySwiper;
let btn = document.querySelectorAll('.btn-more');
let card = document.querySelectorAll('.card');
let rotate = document.querySelectorAll('.read-more-img');
const HIDE = 'Скрыть';
const SHOW_ALL = 'Показать все';
const READ_ALL = 'Читать далее';

window.onload =  () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    sliders.forEach((el) => {
      mySwiper = new Swiper(el, {
        pagination: {
          el: el.querySelector('.swiper-pagination'),
          clickable: true,
          },
          slidesPerView: "auto",
      });
    });
  }
}

/* --------------------------------Кнопка показать все */
for (let e = 0; e < btn.length; e++) {
btn[e].addEventListener('click', function () {
  for (let i = 0; i < card.length; i++) {
    card[i].classList.toggle("hide-element");
    if (card[i].classList.contains("hide-element")) {
      btn.value = SHOW_ALL;
    } else {
      btn.value = HIDE;
    }

    for (let q = 0; q < rotate.length; q++) {
      if (btn.value === HIDE) {
        rotate[q].style.transform = 'rotate(' + 180 + 'deg)';
        console.log(btn.value);
      } else {
        rotate[q].style.transform = null;
      }
    }
  }
});

}











// btn.addEventListener("click", function () {
//     for (let i = 0; i < card.length; i++) {
//   card[i].classList.toggle("hide-element");
//   if (card[i].classList.contains("hide-element")) {
//     btn.value = SHOW_ALL;
//   } else {
//     btn.value = HIDE;
//   }

//   for (let q = 0; q < rotate.length; q++) {
//     if (btn.value === HIDE) {
//       rotate[q].style.transform = 'rotate(' + 180 + 'deg)';
//       console.log(btn.value);
//     } else {
//       rotate[q].style.transform = null;
//     }
//   }
// }
// });







// function mobileSlider() {
//   if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
//     mySwiper = new Swiper(slider, {
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         },
//         slidesPerView: "auto",
//     });

//     slider.dataset.mobile = 'true';
//   }

//   if (window.innerWidth > 768) {
//     slider.dataset.mobile = 'false';

//     if (slider.classList.contains('swiper-container-initialized')) {
//       mySwiper.destroy();
//     }
//   }
// }

// mobileSlider();

// window.addEventListener('resize', () => {
//   mobileSlider();
// });


