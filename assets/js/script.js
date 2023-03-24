const navElems = [document.getElementById("firstNavElem"),document.getElementById("secondNavElem"),document.getElementById("thirdNavElem"),document.getElementById("fourthNavElem")];

const section1Position = document.getElementById("apropos").getBoundingClientRect().top + window.scrollY;

const section2Position = document.getElementById("competences").getBoundingClientRect().top + window.scrollY;

const section3Position = document.getElementById("portfolio").getBoundingClientRect().top + window.scrollY;

const section4Position = document.getElementById("contact").getBoundingClientRect().top + window.scrollY;

const headerOffsetHeight = document.getElementById("header").offsetHeight;

window.onscroll = function () {
    let scrollPosition = document.documentElement.scrollTop;

    let scrollPositionWithHeader = scrollPosition + headerOffsetHeight;

    if(scrollPosition > 0) {
        document.querySelector("#button").style.opacity = "1";
    } else {
        document.querySelector("#button").style.opacity = "0";
    }

    if(scrollPositionWithHeader >= section4Position) {
        setSelectedSection(document.getElementById("fourthNavElem"));
    } else if(scrollPositionWithHeader >= section3Position) {
        setSelectedSection(document.getElementById("thirdNavElem"));
    } else if(scrollPositionWithHeader >= section2Position) {
        setSelectedSection(document.getElementById("secondNavElem"));
    } else if(scrollPositionWithHeader >= section1Position) {
        setSelectedSection(document.getElementById("firstNavElem"));
    } else {
        setSelectedSection(null);
    }
};

let setSelectedSection = (elemToSelect) => {
    if(elemToSelect != null) {
        elemToSelect.classList.add("active");
    }

    navElems.forEach(elem => {
        if(elem != elemToSelect) {
            elem.classList.remove("active");
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