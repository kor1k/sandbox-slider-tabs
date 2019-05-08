$(document).ready(function ($) {
    // var disableSlick = {
    //     arrows: false,
    //     dots: false,
    //     responsive: [{
    //         breakpoint: 99999,
    //         settings: "unslick"
    //     }]
    // };

    $('.section-star-slider, .section-oil-slider, .section-stocks-slider, .section-exchange_green-slider, .section-exchange_violet-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        className: 'section-star-slider',
        dots: true,
        dotsClass: "custom-dots",
        autoplay: true,
        autoplaySpeed: 7000,
        responsive: [{
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                arrows: true,
                dots: true,
                slidesToScroll: 1
            }
        },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false,
                    slidesToScroll: 1
                }
            }]
    });


    // active tabs at slider
    $('.section-main-content-slider-item').click(function () {
        $('.section-main-content-slider-item').removeClass('tab-active');
        $(this).toggleClass('tab-active');
    });


    // active circles (categories)
    $('.bar-item').click(function () {
        $('.bar-item').removeClass('active');
        $(this).toggleClass('active');
    });


    $('.section-main-content-progress-bar-item-star-border').click(function () {
        $('.section-star-slider').addClass('active');
        $('.star-title').addClass('active');
        $('.oil-title').removeClass('active');
        $('.stocks-title').removeClass('active');
        $('.violet-title').removeClass('active');
        $('.section-oil-slider').removeClass('active');
        $('.section-stocks-slider').removeClass('active');
        $('.section-exchange_green-slider').removeClass('active');
        $('.section-exchange_violet-slider').removeClass('active');
    });

    $('.section-main-content-progress-bar-item-oil-border').click(function () {
        $('.section-oil-slider').addClass('active');
        $('.oil-title').addClass('active');
        $('.stocks-title').removeClass('active');
        $('.green-title').removeClass('active');
        $('.star-title').removeClass('active');
        $('.section-star-slider').removeClass('active');
        $('.violet-title').removeClass('active');
        $('.section-stocks-slider').removeClass('active');
        $('.section-exchange_green-slider').removeClass('active');
        $('.section-exchange_violet-slider').removeClass('active');
    });

    $('.section-main-content-progress-bar-item-rating-border').click(function () {
        $('.section-stocks-slider').addClass('active');
        $('.stocks-title').addClass('active');
        $('.star-title').removeClass('active');
        $('.oil-title').removeClass('active');
        $('.green-title').removeClass('active');
        $('.violet-title').removeClass('active');
        $('.section-oil-slider').removeClass('active');
        $('.section-exchange_green-slider').removeClass('active');
        $('.section-exchange_violet-slider').removeClass('active');
        $('.section-star-slider').removeClass('active');
    });

    $('.section-main-content-progress-bar-item-exch-grn-border').click(function () {
        $('.section-exchange_green-slider').addClass('active');
        $('.green-title').addClass('active');
        $('.star-title').removeClass('active');
        $('.stocks-title').removeClass('active');
        $('.section-stocks-slider').removeClass('active');
        $('.section-oil-slider').removeClass('active');
        $('.section-star-slider').removeClass('active');
        $('.section-exchange_violet-slider').removeClass('active');
        $('.violet-title').removeClass('active');
    });

    $('.section-main-content-progress-bar-item-exch-viol-border').click(function () {
        $('.section-exchange_violet-slider').addClass('active');
        $('.violet-title').addClass('active');
        $('.stocks-title').removeClass('active');
        $('.section-stocks-slider').removeClass('active');
        $('.green-title').removeClass('active');
        $('.star-title').removeClass('active');
        $('.section-exchange_green-slider').removeClass('active');
        $('.section-oil-slider').removeClass('active');
        $('.oil-title').removeClass('active');
        $('.section-star-slider').removeClass('active');
    });


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
    )
});