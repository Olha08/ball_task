function circle(step){
    t = step + 0.05;

    var r = -100;
    var xcenter = 100;
    var ycenter = 100;
    var newLeft = xcenter + (r * Math.cos(t));
    var newTop = ycenter + (r * Math.sin(t));
    var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

    $('#ball').animate({
        top: newTop,
        left: newLeft,
        backgroundColor: newColor
    }, 10, function() {
        circle(t);
    });
}

circle(0);

function change_radius(){
    var random_radius = Math.floor(Math.random() * 500) + 50;
    random_radius = random_radius + 'px';

    $('#ball').css('width', random_radius);
    $('#ball').css('height', random_radius);
    $('#ball').css('border-radius', random_radius);

}