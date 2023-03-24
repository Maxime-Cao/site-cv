(function () {
    'use strict';

    const section1Position = document.getElementById("apropos").getBoundingClientRect().top + window.scrollY;

    const section2Position = document.getElementById("competences").getBoundingClientRect().top + window.scrollY;

    const section3Position = document.getElementById("portfolio").getBoundingClientRect().top + window.scrollY;

    const section4Position = document.getElementById("contact").getBoundingClientRect().top + window.scrollY;

    const headerOffsetHeight = document.getElementById("header").offsetHeight;

    window.onscroll = function () {
        let scrollPosition = document.documentElement.scrollTop;

        if(scrollPosition > 0) {
            document.querySelector("#button").style.opacity = "1";
        } else {
            document.querySelector("#button").style.opacity = "0";
        }

        switch(scrollPosition + headerOffsetHeight) {
            case section1Position: {
                setSelectedSection(document.getElementById("firstNavElem"));
                break;
            }

            case section2Position: {
                setSelectedSection(document.getElementById("secondNavElem"));
                break;
            }

            case section3Position: {
                setSelectedSection(document.getElementById("thirdNavElem"));
                break;
            }

            case section4Position: {
                setSelectedSection(document.getElementById("fourthNavElem"));
                break;
            }
            default: {
                setSelectedSection(null);
                break;
            }
        }



    };
})();

let setSelectedSection = (sectionToSelect) => {
    if(sectionToSelect != null) {
    sectionToSelect.classList.add("active");
    }

    document.querySelectorAll(".section").forEach(section => {
        if(section != sectionToSelect) {
            section.classList.remove("active");
        }
    })
}

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