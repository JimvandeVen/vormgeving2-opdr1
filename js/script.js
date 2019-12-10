/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/* LOGIN */

var inlogKnop = document.querySelector("#inlogKnop");
var inlogPlek = document.querySelector("#inlogPlek");
var main = document.querySelector(".main");

function openInlog() {
    inlogPlek.classList.remove("hidden");
}

function closeInlog() {
    inlogPlek.classList.add("hidden");
}

inlogKnop.addEventListener("click", openInlog);
main.addEventListener("click", closeInlog);

/* FILTER OVERLAY */

var filterButton = document.querySelector("#filterButton");
var overlay = document.querySelector(".overlay");
var closeFilterButton = document.querySelector("#closeFilter");

function openFilter() {
    overlay.classList.remove("hidden");
    closeFilterButton.classList.remove('hiddenDisplay');
}

function closeFilter() {
    overlay.classList.add("hidden");
    closeFilterButton.classList.add('hiddenDisplay');
}

filterButton.addEventListener("click", openFilter);

closeFilterButton.addEventListener("click", closeFilter);

/* KLEURENFILTERS */

var i;
var kleuren = document.querySelectorAll(".kleurFilter");
var kleurenCheckbox = document.querySelectorAll(".kleurCheckbox");
var kleurLampje = document.querySelector(".kleurLampje");

function showKleuren() {
    var checked = 0;
    for (i = 0; i < kleurenCheckbox.length; i++) {
        console.log(kleurenCheckbox[i]);
        if (kleurenCheckbox[i].checked) {
            checked++;
        }
        console.log(checked);
    }
    setTimeout(function () {
        if (checked > 0) {
            document.querySelector("#kleurIcoon").classList.remove("hiddenDisplay");
            document.querySelector("#kleurIcoon").classList.add("stretch");
            kleurLampje.classList.add("greenLampje");
            kleurLampje.classList.remove("redLampje");
        } else {
            document.querySelector("#kleurIcoon").classList.add("hiddenDisplay");
            document.querySelector("#kleurIcoon").classList.remove("stretch");
            kleurLampje.classList.remove("greenLampje");
            kleurLampje.classList.add("redLampje");
        }
    }, 10);

}

for (i = 0; i < kleuren.length; i++) {
    kleuren[i].addEventListener("click", showKleuren);
}


/* SFEERFILTERS */

var sfeer = document.querySelectorAll(".sfeerFilter");
var sfeerCheckbox = document.querySelectorAll(".sfeerCheckbox");
var sfeerwoordLampje = document.querySelector(".sfeerwoordLampje");

function showSfeer() {
    var checked = 0;
    for (i = 0; i < sfeerCheckbox.length; i++) {
        console.log(sfeerCheckbox[i]);
        if (sfeerCheckbox[i].checked) {
            checked++;
        }
        console.log(checked);
    }
    setTimeout(function () {
        if (checked > 0) {
            document.querySelector("#sfeerIcoon").classList.remove("hiddenDisplay");
            document.querySelector("#sfeerIcoon").classList.add("stretch");
            sfeerwoordLampje.classList.add("greenLampje");
            sfeerwoordLampje.classList.remove("redLampje");
        } else {
            document.querySelector("#sfeerIcoon").classList.add("hiddenDisplay");
            document.querySelector("#sfeerIcoon").classList.remove("stretch");
            sfeerwoordLampje.classList.remove("greenLampje");
            sfeerwoordLampje.classList.add("redLampje");
        }
    }, 10);

}


for (i = 0; i < sfeer.length; i++) {
    sfeer[i].addEventListener("click", showSfeer);
}


/* LEESTIJDFILTERS */

var leestijdEvent = document.querySelectorAll(".leestijdEvent");
var leestijd = document.querySelectorAll(".leestijdCheckbox");
var leestijdCheckbox = document.querySelectorAll(".leestijdCheckbox");
var leestijdLampje = document.querySelector(".leestijdLampje");

function showLeestijd() {
    var checked = 0;
    for (i = 0; i < leestijdCheckbox.length; i++) {
        console.log(leestijdCheckbox[i]);
        if (leestijdCheckbox[i].checked) {
            checked++;
        }
        console.log(checked);
    }
    setTimeout(function () {
        if (checked > 0) {
            document.querySelector("#leestijdIcoon").classList.remove("hiddenDisplay");
            document.querySelector("#leestijdIcoon").classList.add("stretch");
            leestijdLampje.classList.add("greenLampje");
            leestijdLampje.classList.remove("redLampje");
        } else {
            document.querySelector("#leestijdIcoon").classList.add("hiddenDisplay");
            document.querySelector("#leestijdIcoon").classList.remove("stretch");
            leestijdLampje.classList.remove("greenLampje");
            leestijdLampje.classList.add("redLampje");
        }
    }, 10);

}

for (i = 0; i < leestijdEvent.length; i++) {
    leestijdEvent[i].addEventListener("click", showLeestijd);
}


/* TAALGEBRUIK FILTERS */

var taalgebruikEvent = document.querySelectorAll(".taalgebruikEvent");
var taalgebruik = document.querySelectorAll(".taalgebruikCheckbox");
var taalgebruikCheckbox = document.querySelectorAll(".taalgebruikCheckbox");
var taalgebruikLampje = document.querySelector(".taalgebruikLampje");



function showTaalgebruik() {
    var checked = 0;
    for (i = 0; i < taalgebruikCheckbox.length; i++) {
        console.log(taalgebruikCheckbox[i]);
        if (taalgebruikCheckbox[i].checked) {
            checked++;
        }
        console.log(checked);
    }
    setTimeout(function () {
        if (checked > 0) {
            document.querySelector("#taalgebruikIcoon").classList.remove("hiddenDisplay");
            document.querySelector("#taalgebruikIcoon").classList.add("stretch");
            taalgebruikLampje.classList.add("greenLampje");
            taalgebruikLampje.classList.remove("redLampje");
        } else {
            document.querySelector("#taalgebruikIcoon").classList.add("hiddenDisplay");
            document.querySelector("#taalgebruikIcoon").classList.remove("stretch");
            taalgebruikLampje.classList.remove("greenLampje");
            taalgebruikLampje.classList.add("redLampje");
        }
    }, 10);

}

for (i = 0; i < taalgebruikEvent.length; i++) {
    taalgebruikEvent[i].addEventListener("click", showTaalgebruik);
}


/* SORTEREN OVERLAY */

var sorterenButton = document.querySelector(".sorterenKnop");
var sorterenOverlay = document.querySelector(".sorteren");
var closeSortButton = document.querySelector(".sluitSorteren");

function openSorteren() {
    sorterenOverlay.classList.remove("hiddenDisplay");
    closeSortButton.classList.remove("hiddenDisplay");
}

function closeSorteren() {
    sorterenOverlay.classList.add("hiddenDisplay");
    closeSortButton.classList.add("hiddenDisplay");
}

sorterenButton.addEventListener("click", openSorteren);

closeSortButton.addEventListener("click", closeSorteren);

/* SORTEREN lampje */

var sorterenEvent = document.querySelectorAll(".sorterenEvent");
var sorteren = document.querySelectorAll(".sorterenCheckbox");
var sorterenCheckbox = document.querySelectorAll(".sorterenCheckbox");
var sorteerLampje = document.querySelectorAll(".sorteerLampje");

function sorterenLampje() {
    var checked = 0;
    for (i = 0; i < sorterenCheckbox.length; i++) {
        console.log(sorterenCheckbox[i]);
        if (sorterenCheckbox[i].checked) {
            checked++;
        }
        console.log(checked);
    }
    setTimeout(function () {
        if (checked > 0) {
            for (i = 0; i < sorteerLampje.length; i++) {
                sorteerLampje[i].classList.add("greenLampje");
                sorteerLampje[i].classList.remove("redLampje");
            }
        } else {
            for (i = 0; i < sorteerLampje.length; i++) {
                sorteerLampje[i].classList.remove("greenLampje");
                sorteerLampje[i].classList.add("redLampje");
            }
        }
    }, 10);

}

for (i = 0; i < sorterenEvent.length; i++) {
    sorterenEvent[i].addEventListener("click", sorterenLampje);
}


/* LIKES */
var hartjeLeeg = document.querySelector(".hartjeLeeg");
var hartjeVol = document.querySelector(".hartjeVol");

function likesToggle() {
    if (hartjeVol.classList.contains("hiddenDisplay")) {
        hartjeLeeg.classList.add("hiddenDisplay");
        hartjeVol.classList.remove("hiddenDisplay");
    }
    else{
        hartjeVol.classList.add("hiddenDisplay");
        hartjeLeeg.classList.remove("hiddenDisplay");
    }
}

hartjeVol.addEventListener("click", likesToggle);
hartjeLeeg.addEventListener("click", likesToggle);
