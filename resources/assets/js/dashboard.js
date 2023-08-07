(function () {
    /* ========= sidebar toggle ======== */
    let sidebarNavWrapper = document.querySelector(".sidebar-nav-wrapper");
    let mainWrapper = document.querySelector(".main-wrapper");
    let menuToggleButton = document.querySelector("#menu-toggle");
    let menuToggleButtonIcon = document.querySelector("#menu-toggle i");
    let overlay = document.querySelector(".overlay");

    menuToggleButton.addEventListener("click", () => {
        sidebarNavWrapper.classList.toggle("active");
        overlay.classList.add("active");
        mainWrapper.classList.toggle("active");

        if (document.body.clientWidth > 1200) {
            if (menuToggleButtonIcon.classList.contains("lni-chevron-left")) {
                menuToggleButtonIcon.classList.remove("lni-chevron-left");
                menuToggleButtonIcon.classList.add("lni-menu");
            } else {
                menuToggleButtonIcon.classList.remove("lni-menu");
                menuToggleButtonIcon.classList.add("lni-chevron-left");
            }
        } else {
            if (menuToggleButtonIcon.classList.contains("lni-chevron-left")) {
                menuToggleButtonIcon.classList.remove("lni-chevron-left");
                menuToggleButtonIcon.classList.add("lni-menu");
            }
        }
    });
    overlay.addEventListener("click", () => {
        sidebarNavWrapper.classList.remove("active");
        overlay.classList.remove("active");
        mainWrapper.classList.remove("active");
    });
})();
