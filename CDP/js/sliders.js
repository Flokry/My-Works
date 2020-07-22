$('.works__slider').slick({
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    loop: true,
    // autoplay: true,
    // autoplaySpeed: 8000,
    slidesToShow: 1,
});

$('.meet__slider').slick({
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    loop: true,
    // autoplay: true,
    // autoplaySpeed: 8000,
    slidesToShow: 3,
    responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});