    // Mobile Nav and Overlay Toggler toggler
    const btns = document.querySelectorAll('.nav-burger-button');
    const bodyBtn = document.querySelectorAll('body');
    const nav = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-nav-overlay');

    const toggleMenu = () => nav.classList.toggle('active');
    const toggleScrollLock = () => bodyBtn.classList.toggle('scrollLock');
    const toggleOverlay = () => overlay.classList.toggle('active');

    btns.forEach(el => el.addEventListener('click', toggleMenu));
    btns.forEach(el => el.addEventListener('click', toggleScrollLock));
    btns.forEach(el => el.addEventListener('click', toggleOverlay));







    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("main-nav").style.top = "0";
        } else {
            document.getElementById("main-nav").style.top = "-90px";
        }
        prevScrollpos = currentScrollPos;
    }


    var acc = document.getElementsByClassName("dropmenu");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("open");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }