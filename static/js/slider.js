const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

const mobileButtonRight = document.getElementById('mobileSlideRight');
const mobileButtonLeft = document.getElementById('mobileSlideLeft');


buttonRight.onclick = function () {
    document.getElementById('who-we-are-text').scrollLeft += 700;
};
mobileButtonRight.onclick = function () {
    document.getElementById('who-we-are-text').scrollLeft += 400;
};

buttonLeft.onclick = function () {
    document.getElementById('who-we-are-text').scrollLeft -= 700;
};
mobileButtonLeft.onclick = function () {
    document.getElementById('who-we-are-text').scrollLeft -= 400;
};
