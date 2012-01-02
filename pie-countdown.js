
function Timer(containerID, size, timerColor, backgroundColor, time) {
    this.time = time;

    $('#' + containerID).append("<div id='circle1' class='circle'></div>");
    $('#' + containerID).append("<div id='circleFinal' class='circle quadrant4'></div>");
    $('#' + containerID).append("<div id='circle4' class='circle quadrant4'></div>");
    $('#' + containerID).append("<div id='circle3' class='circle quadrant3'></div>");
    $('#' + containerID).append("<div id='circle2' class='circle quadrant2'></div>");

    $('.circle').css({
        'border-top': size + ' solid ' + timerColor
        , 'border-right': size + ' solid transparent'
        , 'border-bottom': size + ' solid transparent'
        , 'border-left': size + ' solid transparent'
        , 'border-radius': size
    });

    $('#circleFinal').css({
        'border-top': size + ' solid ' + backgroundColor
    });

    // any further changes to the rotation happen over a certain time period
    $('.circle').css({
        '-webkit-transition': '-webkit-transform ' + time/4 + 's linear'
        , '-moz-transition': '-moz-transform ' + time/4 + 's linear'
        , '-o-transition': '-o-transform ' + time/4 + 's linear'
        , '-ms-transition': '-ms-transform ' + time/4 + 's linear'
        , 'transition': 'transform ' + time/4 + 's linear'
    });
}


Timer.prototype.countdown = function() {
    $('#circle2').removeClass('quadrant2').addClass('quadrant3');

    var _timer = this;

    setTimeout(function() {
        $('#circle2').hide();
        $('#circle3').removeClass('quadrant3').addClass('quadrant4');
    }, _timer.time*1000/4);

    setTimeout(function() {
        $('#circle3').hide();
        $('#circle4').removeClass('quadrant4').addClass('quadrant1');
    }, 2*_timer.time*1000/4);

    setTimeout(function() {
        $('#circle4').hide();
        $('#circleFinal').removeClass('quadrant4').addClass('quadrant1');
    }, 3*_timer.time*1000/4);

    setTimeout(function() {
        $('#circle1').hide();
        $('#circleFinal').hide();
    }, _timer.time*1000);
}
