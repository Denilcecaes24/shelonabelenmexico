var swiper1 = new Swiper(".mySwiper1", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

        navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
      },

       breakpoints: {
      // Configuración cuando el ancho de la ventana es igual o menor a 400px
      0: {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 20, // Espacio entre los slides
      },
      500: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 20, // Espacio entre los slides
    },
    900: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 30, // Espacio entre los slides
  },
}

    });

var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 4,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

        navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
      },

       breakpoints: {
      // Configuración cuando el ancho de la ventana es igual o menor a 400px
      0: {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 10, // Espacio entre los slides
      },
      600: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 10, // Espacio entre los slides
    },
    900: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 10, // Espacio entre los slides
  },
  1200: {
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 10, // Espacio entre los slides
  },
}

});


var swiper3 = new Swiper(".mySwiper3", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

        navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
      },

       breakpoints: {
      // Configuración cuando el ancho de la ventana es igual o menor a 400px
      0: {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 20, // Espacio entre los slides
      },
      500: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 20, // Espacio entre los slides
    },
    900: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 30, // Espacio entre los slides
  },
}

    });

var swiper4 = new Swiper(".mySwiper4", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

          navigation: {
          nextEl: ".swiper-button-nextt4",
          prevEl: ".swiper-button-prevv4",
        },

        breakpoints: {
        // Configuración cuando el ancho de la ventana es igual o menor a 400px
        0: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 20, // Espacio entre los slides
        },
        600: {
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 20, // Espacio entre los slides
      },
      900: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 30, // Espacio entre los slides
    },
  }
});