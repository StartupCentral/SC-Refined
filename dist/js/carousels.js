$(document).ready(function () {
    $('.partners-carousel').slick({
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
        ]
    });
});

$(document).ready(function () {
    $('.coaches-carousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});