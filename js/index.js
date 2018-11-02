function circle(step){
    t = step + 0.05;

    var r = -100;
    var xcenter = 100;
    var ycenter = 100;
    var newLeft = xcenter + (r * Math.cos(t));
    var newTop = ycenter + (r * Math.sin(t));

    //console.log('left:'+newTop+' | top:'+newTop+' | t:'+t);

    $('#ball').animate({
        top: newTop,
        left: newLeft,
    }, 10, function() {
        circle(t);
    });
}

circle(0);