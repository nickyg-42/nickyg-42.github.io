const backButton = document.getElementById('backButton');
const index = parseInt(window.localStorage.index);

window.addEventListener('DOMContentLoaded', () => {
    const data = JSON.parse(window.localStorage.results);

    document.getElementById('head').innerHTML = data[index].name.common;

    document.getElementById('flag').src = data[index].flags.png;
    document.getElementById('flag').alt = data[index].flags.alt;

    document.getElementById('population').innerHTML = data[index].population.toLocaleString("en-US");
    document.getElementById('capital').innerHTML = data[index].capital[0];
    document.getElementById('region').innerHTML = data[index].region;

    var langs = [];
    var langText = "";

    
    for (const lg in data[index].languages) {
        langs.push(" " + data[index].languages[lg]);
    }

    if (langs.length > 1) {
        langs.splice(langs.length - 1, 0, " and");

        if (langs.length == 2) {
            langText = langs.toString().replace(",", " ");
        }
        else {
            langText = langs.toString();
            var pos = langText.lastIndexOf(",");
            langText = langText.substring(0, pos) + langText.substring(pos+1);
        }
    }
    else langText = langs.toString() || "undefined";
    
    document.getElementById('language').innerHTML = langText;

    var currs = [];
    var currText = "";
    var currSym = "";

    for (const cr in data[index].currencies) {
        currs.push(data[index].currencies[cr].name);
        currs.push(data[index].currencies[cr].symbol);
    }

    currText = currs[0];
    currSym = currs[1];

    document.getElementById('currencyName').innerHTML = currText;
    document.getElementById('currencySym').innerHTML = currSym;

    if (window.localStorage.isMany === "true") {
        document.getElementById('hiddenBack').style.display = 'block';
    }
});

backButton.addEventListener('click', () => {
    window.localStorage.clear();
    window.location.href = "../ci_index.html";
});