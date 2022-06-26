// function delay(milliseconds) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, milliseconds);
//     });
// }

function themeToggle() {
    if (localStorage.getItem("theme") === "night-theme") {
        localStorage.removeItem("theme");
    } else {
        localStorage.setItem("theme", "night-theme");
    }
    addNightTheme();
}
function addNightTheme() {
    try {
        if (localStorage.getItem("theme") === "night-theme") {
            document.querySelector("html").classList.add("night-theme");
        } else {
            document.querySelector("html").classList.remove("night-theme");
        }
        hamburgerThemeCheck();
    } catch {}
}
function hamburgerThemeCheck() {
    if (localStorage.getItem("theme") === "night-theme") {
        document
            .querySelector(".navbar-expand-lg")
            .classList.add("navbar-dark");
    } else {
        document
            .querySelector(".navbar-expand-lg")
            .classList.remove("navbar-dark");
    }
}

function moveAvatar() {
    avatar = new Tween(
        document.querySelector(".avatar").style,
        "margin-top",
        Tween.regularEaseOut,
        0,
        20,
        1.2,
        "px"
    );
    avatar.onMotionFinished = function () {
        this.yoyo();
    };
    avatar.start();
}

addNightTheme();
