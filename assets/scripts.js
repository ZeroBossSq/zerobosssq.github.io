function CopyMe(TextToCopy) {
    var TempText = document.createElement("input");
    TempText.value = TextToCopy;
    document.body.appendChild(TempText);
    TempText.select();

    document.execCommand("copy");
    document.body.removeChild(TempText);

    var par = document.querySelector(".par");
    par.innerHTML = "Copied";
}
function themeToggle() {
    if (localStorage.getItem("theme") === "night-theme") {
        localStorage.removeItem("theme");
    } else {
        localStorage.setItem("theme", "night-theme");
    }
    addDarkClassToHTML();
}

function addDarkClassToHTML() {
    try {
        if (localStorage.getItem("theme") === "night-theme") {
            document.querySelector("html").classList.add("night-theme");
        } else {
            document.querySelector("html").classList.remove("night-theme");
        }
    } catch (err) {}
}

addDarkClassToHTML();
