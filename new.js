'use strict';

const showExampleBtn = document.querySelector('.button--show-example'),
closeBtn = document.querySelector('.button--close'),
checkView = document.querySelector('.check-view'),
checkControl = document.querySelector('.check-control'),
enterButton = 'Enter';


const openCheckView = function() {
    checkControl.style.cssText = 'display: none';
    checkView.style.cssText = 'display: block';
};

const openCheckControl = function() {
    checkView.style.cssText = 'display: none';
    checkControl.style.cssText = 'display: block';
};

window.onresize = function(evt) {
    if (document.documentElement.clientWidth > 767) {
        checkControl.style.cssText = 'display: block';
        checkView.style.cssText = 'display: block';
    } 
    // else {
    //     openCheckControl();
    // }
};

showExampleBtn.addEventListener('click', function() {
    openCheckView();
});

closeBtn.addEventListener('click', function() {
    openCheckControl();
});