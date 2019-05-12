$(document).ready(function ($) {
    // $(function () {
    //     'use strict';
    //
    //     var $swipeTabsContainer = $('.swipe-tabs'),
    //         $swipeTabs = $('.swipe-tab'),
    //         $swipeTabsContentContainer = $('.swipe-tabs-container'),
    //         currentIndex = 0,
    //         activeTabClassName = 'active-tab';
    //
    //     $swipeTabsContainer.on('init', function (event, slick) {
    //         $swipeTabsContentContainer.removeClass('invisible');
    //         $swipeTabsContainer.removeClass('invisible');
    //
    //         currentIndex = slick.getCurrent();
    //         $swipeTabs.removeClass(activeTabClassName);
    //         $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
    //     });
    //
    //     $swipeTabsContainer.slick({
    //         //slidesToShow: 3.25,
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         arrows: false,
    //         infinite: false,
    //         swipeToSlide: true,
    //         touchThreshold: 10
    //     });
    //
    //     $swipeTabsContentContainer.slick({
    //         asNavFor: $swipeTabsContainer,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         arrows: false,
    //         infinite: false,
    //         swipeToSlide: true,
    //         draggable: false,
    //         touchThreshold: 10
    //     });
    //
    //
    //     $swipeTabs.on('click', function (event) {
    //         // gets index of clicked tab
    //         currentIndex = $(this).data('slick-index');
    //         $swipeTabs.removeClass(activeTabClassName);
    //         $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
    //         $swipeTabsContainer.slick('slickGoTo', currentIndex);
    //         $swipeTabsContentContainer.slick('slickGoTo', currentIndex);
    //     });
    //
    //     //initializes slick navigation tabs swipe handler
    //     $swipeTabsContentContainer.on('swipe', function (event, slick, direction) {
    //         currentIndex = $(this).slick('slickCurrentSlide');
    //         $swipeTabs.removeClass(activeTabClassName);
    //         $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
    //     });
    // });


    // $('.slide').slick({
    //     dots: true,
    //     dotsClass: "custom-dots",
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     //adaptiveHeight: true
    // });
    //
    // $("#tabs").tabs();
    //
    // $('.ui-tabs-tab').click(function () {
    //     $(".slide").slick('slickSetOption', 'adaptiveHeight', true, true);
    // });

// var disableSlick = {
//     arrows: false,
//     dots: false,
//     responsive: [{
//         breakpoint: 99999,
//         settings: "unslick"
//     }]
// };
//     $('.section-star-slider, .section-oil-slider, .section-stocks-slider, .section-exchange_green-slider, .section-exchange_violet-slider').slick({
//     // infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     dots: true,
//     // destroy: slick,
//     // slickPlay: true,
//     dotsClass: "custom-dots",
//     autoplay: true,
//     autoplaySpeed: 1500,
//     responsive: [{
//         breakpoint: 481,
//         settings: {
//             slidesToShow: 1,
//             arrows: true,
//             dots: true,
//             slidesToScroll: 1
//         }
//     },
//         {
//             breakpoint: 320,
//             settings: {
//                 slidesToShow: 1,
//                 arrows: false,
//                 dots: false,
//                 slidesToScroll: 1
//             }
//         }]
// });


    // $(function () {
    //     $('#myTab a:last').tab('show')
    // });
    // $('.slider').slick();


    // active circles (categories)
    // $('.bar-item').click(function () {
    //     $('.bar-item').removeClass('active');
    //     $(this).toggleClass('active');
    // });

    // $('ul.tabs li').click(function () {
    //     var tab_id = $(this).attr('data-tab');
    //     $('ul.tabs li').removeClass('current');
    //     $('.tab-content').removeClass('current');
    //     $(this).addClass('current');
    //     $("#" + tab_id).addClass('current');

    // if (tab_id === 'tab-1') {
    //     console.log('tab-1')
    // } else {
    //     // alert('not ok')
    //     $('.section-oil-slider').slick('unslick');
    //     $('.section-stocks-slider').slick('unslick');
    //     $('.section-exchange_green-slider').slick('unslick');
    //     $('.section-exchange_violet-slider').slick('unslick');
    // }
    // // console.log(tab_id);
    //
    // if (tab_id === 'tab-2') {
    //     console.log('tab-2')
    // } else {
    //     $('.section-star-slider').slick('unslick');
    //     // $('.section-oil-slider').slick('unslick');
    //     $('.section-stocks-slider').slick('unslick');
    //     $('.section-exchange_green-slider').slick('unslick');
    //     $('.section-exchange_violet-slider').slick('unslick');
    // }


    //TODO: MAKE IT LIKE TABS. IN TAB SHOULD BE SLICKS WITH RIGHT CONTENT FOR EACH CIRCLE!!!!!!!!!!!!
    //TODO: MAKE IT LIKE TABS. IN TAB SHOULD BE SLICKS WITH RIGHT CONTENT FOR EACH CIRCLE!!!!!!!!!!!!
    //TODO: MAKE IT LIKE TABS. IN TAB SHOULD BE SLICKS WITH RIGHT CONTENT FOR EACH CIRCLE!!!!!!!!!!!!
// ______________________________________________________________// ______________________________________________________________
    // TODO: add 4 different content in sliders to each round image
    // TODO: add simple toggling of NEW different content in slider


    $.get(
        // "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&outputsize=full&apikey=466U4PJ0R9230V6C",
        "http://api.openweathermap.org/data/2.5/weather",
        {
            "id": "2643743", //London, GB
            "appid": "d74f35da617974e2c8453a4e52d3aa81"
        },
        function (data) {
            let temp = '', humi = '', pressure = '', temp_min = '', temp_max = '';
            // console.log(data);
            temp += 'Temp: <b>' + Math.round(data.main.temp - 273) + ' C &#176;</b><br>';
            humi += 'Humidity: <b>' + data.main.humidity + '%</b>';
            pressure += 'Pressure: <b>' + data.main.pressure + '</b>';
            temp_max += 'T max:<b>' + Math.round(data.main.temp_max - 273) + ' С &#176;</b>';
            temp_min += 'T min:<b>' + Math.round(data.main.temp_min - 273) + ' С &#176;</b>';
            // console.log('Humidity: '+data.main.humidity + '%');
            // console.log('Temp: '+Math.round(data.main.temp-273));
            // console.log(data);
            $('.temp-show').html(temp);
            $('.humi-show').html(humi);
            $('.pressure-show').html(pressure);
            $('.temp_min-show').html(temp_min);
            $('.temp_max-show').html(temp_max);
        }
    );

});
