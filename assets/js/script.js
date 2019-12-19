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
            if (sections[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
            } else if (scrollPosition <= heightAccueil) {
                document.querySelector('a[href*=' + i + ']').setAttribute('class', ' ');
                document.querySelector('#navname').setAttribute('class', 'active');
            }
        }
    };
})();