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

        for (i in sections) {

            if (scrollPosition > heightHeader) {
                document.querySelector("#button").style.opacity = "1";
            } else {
                document.querySelector("#button").style.opacity = "0";
            }

            if (sections[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');

            } else if (scrollPosition <= heightAccueil) {
                document.querySelector('a[href*=' + i + ']').setAttribute('class', ' ');
            }
        }
    };
})();

const ratio = .3;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: .3
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll('.reveal').forEach(r => {
    observer.observe(r);
});