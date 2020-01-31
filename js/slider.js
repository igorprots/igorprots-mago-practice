$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});

$(document).ready(function() {
    $('.slider_6').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1
    });
});


// $(document).ready(function() {
//     $('.slider').slick({
//         slidesToShow: 1,
//         centerMode: true,
//         centerPadding: '50px',
//         prevArrow: "<img src='assets/sprite/back.svg' class='prev' alt='1'>",
//         nextArrow: "<img src='assets/sprite/next.svg' class='next' alt='2'>",
//     });
// });