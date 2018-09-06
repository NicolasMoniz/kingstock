function mobile_menu() {
    var iconBurger = document.querySelector("#iconBurger");
    document.querySelector("#menuBurgerDropdown").classList.toggle('fadeInLeft');
    iconBurger.classList.toggle('active');
}

//affiche gestion user
function co() {
    var menuUser = document.querySelector("#menuUser");
    menuUser.classList.toggle("afficheCo");
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Bandeau Cookie RGPD
var cookieBox = document.getElementById('js-cookie-box');
var cookieButton = document.getElementById('js-cookie-button');

if (!getCookie('cookie-box')) {

    cookieBox.classList.remove('cookie-box--hide');

    cookieButton.onclick = function () {
        setCookie('cookie-box', true, {expires: 7});
        cookieBox.classList.add('cookie-box--hide');
    }
}
