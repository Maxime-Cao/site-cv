(function () {
    'use strict';

    const section1 = document.getElementById("apropos");
    const section1Position = section1.getBoundingClientRect().top + window.scrollY;

    const section2 = document.getElementById("competences");
    const section2Position = section2.getBoundingClientRect().top + window.scrollY;


    const section3 = document.getElementById("portfolio");
    const section3Position = section3.getBoundingClientRect().top + window.scrollY;

    const section4 = document.getElementById("contact");
    const section4Position = section4.getBoundingClientRect().top + window.scrollY;

    const headerHeight = document.getElementById("header").offsetHeight;


    window.onscroll = function () {
        let scrollPosition = document.documentElement.scrollTop;

        if(scrollPosition > 0) {
            document.querySelector("#button").style.opacity = "1";
        } else {
            document.querySelector("#button").style.opacity = "0";
        }

        switch(scrollPosition + offsetHeight) {
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
    sectionToSelect.classList.add("active");

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