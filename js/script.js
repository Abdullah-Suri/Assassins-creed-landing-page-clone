new Swiper(".abcd", {
    slidesPerView: 4,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        spaceBetween: 0,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 10,
        },
        1024: {
        slidesPerView: 4,
        spaceBetween: 30,
        },
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});

new Swiper(".news-slider", {
    slidesPerView: 4,
    
    autoplay: {
        delay: 1000,
        loop: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        spaceBetween: 0,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 10,
        },
        1024: {
        slidesPerView: 4,
        spaceBetween: 30,
        },
    }
    // pagination: {
    // el: ".swiper-pagination",
    // clickable: true,
    // },
});

var closebtns = document.getElementsByClassName("close");
var i;


for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}