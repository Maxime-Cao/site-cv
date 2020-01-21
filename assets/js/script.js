(function () {
    'use strict';

    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function () {
        var heightHeader = document.querySelector('#header').offsetHeight;
        var scrollPosition = (document.documentElement.scrollTop + heightHeader) || (document.body.scrollTop + heightHeader);
        var heightAccueil = document.querySelector('#accueil').offsetHeight;
        var portfolio = document.querySelector("#portfolio").offsetTop;

        for (i in sections) {

            if (scrollPosition > heightHeader) {
                document.querySelector("#button").style.opacity = "1";
            }

            if (scrollPosition == heightHeader) {
                document.querySelector("#button").style.opacity = "0";
            }

            if (sections[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');

                if (scrollPosition >= portfolio) {
                    showLetters();
                }
            } else if (scrollPosition <= heightAccueil) {
                document.querySelector('a[href*=' + i + ']').setAttribute('class', ' ');
                document.querySelector('#navname').setAttribute('class', 'active');
            }
        }
    };
})();

const htmlP = document.getElementById("hello");
const txt = htmlP.dataset.label;
let i = 0;

function showLetters() {
    let timeOut;
    if (i < txt.length) {
        htmlP.innerHTML += `<span>${txt[i]}</span>`;
        timeOut = setTimeout(showLetters, 500);
        i++;
    } else {
        clearTimeout(timeOut);
    }
}