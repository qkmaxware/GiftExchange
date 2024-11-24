function set_theme_from_queryparams() {
    const params = new URLSearchParams(window.location.search);
    
    var title = params.get("title");
    if (title) set_salutation(title);

    var bg_theme = params.get("bg");
    if (bg_theme) set_background(bg_theme);

    var box_theme = params.get("box");
    if (box_theme) set_box(box_theme);

    set_gift(params.get("img"), params.get("url"));
}

function set_gift(image, link) {
    var linky = document.querySelector(".gift-link");
    var imagey = document.querySelector(".gift-image");

    if (image && image.length > 0) {
        imagey.src = image;
    }
    if (link && link.length > 0) {
        linky.href = link;
    }
}

function set_salutation(text) {
    if (text && text.length > 0)
        document.querySelector("h1").innerText = text;
}

function set_background(theme_name) {
    var elements = document.querySelectorAll(".theme");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.classList.remove("active");
        if (element.classList.contains(theme_name)) {
            element.classList.add("active");
        }
    }
}

function set_box(boxid) {
    var elements = document.querySelectorAll(".box");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.className = "box";
        if (!element.classList.contains(boxid)) {
            element.classList.add(boxid);
        }
    }
}