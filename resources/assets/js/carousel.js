var owl = $('.owl-carousel');

owl.owlCarousel({
    items:1 ,
    loop: true,
    autoplay:true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dots: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
});