$('.header__slider').slick({
    vertical: true,
    arrows: false,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
            vertical: false,
            verticalSwiping: false
        },
    }]
});

$('.news__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
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