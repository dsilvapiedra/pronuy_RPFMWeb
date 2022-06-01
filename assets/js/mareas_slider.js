var n = 1;
var pause = false;

function slide() {
    if (!pause) {
        n += 1;
        if (n > 72) {
            n = 1;
        }
        changeSlider();
    }
}

function changeSlider() {
    document.getElementById("slider-img").src = "images/corrientes/figure_video_"+n+".jpg";
}

function pauseSlider() {
    pause = true;
}

function playSlider() {
    pause = false;
}

function forwardSlider() {
    pauseSlider();
    n += 1;
    if (n > 72) {
        n = 1;
    }
    changeSlider();
}

function fastforwardSlider() {
    pauseSlider();
    n = 72;
    changeSlider();
}

function backSlider() {
    pauseSlider();
    n -= 1;
    if (n < 1) {
        n = 72;
    }
    changeSlider();
}

function fastbackSlider() {
    pauseSlider();
    n = 1;
    changeSlider();
}

setInterval(slide, 1000);