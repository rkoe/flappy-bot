function play() {
    function click(){document.dispatchEvent(new Event('mousedown'))};
    if(tubes.length) {
        n = tubes.getAt(0);
        if(tubes.length > 2  &&  (n.x < 20 || n.x > 200))  n = tubes.getAt(2);
        if(bird.y+26 >= n.y-5) click();
    }
    else if(bird.y > 280)
        click();
    if(!gameOver)
        setTimeout(play, 10);
}
