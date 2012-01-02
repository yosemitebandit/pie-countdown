
function Timer(containerID, size, timerColor, backgroundColor, time) {
    this.time = time;

    $('#' + containerID).append("<div id='circle1' class='circle'></div>");
    $('#' + containerID).append("<div id='circleMask' class='circle quadrant4'></div>");
    $('#' + containerID).append("<div id='circle4' class='circle quadrant4'></div>");
    $('#' + containerID).append("<div id='circle3' class='circle quadrant3'></div>");
    $('#' + containerID).append("<div id='circle2' class='circle quadrant2'></div>");

    $('#circleMask').css({
        'top': '-' + 2*size + 'px'
    });

    $('#circle4').css({
        'top': '-' + 4*size + 'px'
    });
    
    $('#circle3').css({
        'top': '-' + 6*size + 'px'
    });
    
    $('#circle2').css({
        'top': '-' + 8*size + 'px'
    });

    $('.circle').css({
        'border-top': size + 'px solid ' + timerColor
        , 'border-right': size + 'px solid transparent'
        , 'border-bottom': size + 'px solid transparent'
        , 'border-left': size + 'px solid transparent'
        , 'border-radius': size + 'px'
    });

    $('#circleMask').css({
        'border-top': size + 'px solid ' + backgroundColor
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


Timer.prototype.start = function() {
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
        $('#circleMask').removeClass('quadrant4').addClass('quadrant1');
    }, 3*_timer.time*1000/4);

    setTimeout(function() {
        $('#circle1').hide();
        $('#circleMask').hide();
    }, _timer.time*1000);
}
