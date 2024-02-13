export const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  cssEase: 'ease-in-out',
  pauseOnHover: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1750,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1410,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 690,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
