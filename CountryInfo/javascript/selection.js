const backButton = document.getElementById('backButton');

window.addEventListener('DOMContentLoaded', () => {
    const options = JSON.parse(window.localStorage.results);
    var num = options.length;
    var container = document.getElementById('c-cont');

    for (i = 0; i < num; i++) {
        var imgDiv = document.createElement("div");
        var linkDiv = document.createElement("div");

        var img = document.createElement("img");
        img.alt = options[i].flags.alt;
        img.style = "cursor: pointer;";
        img.id = i;
        img.src = options[i].flags.png;
        img.onclick = function (e) {
            window.localStorage.index = e.target.id.toString();
            window.location.href = "country.html";
        }

        var link = document.createElement("a");
        link.href = "country.html";
        link.textContent = options[i].name.common;
        link.id = i;
        link.onclick = function (e) {
            window.localStorage.index = e.target.id.toString();
        }

        imgDiv.append(img);
        linkDiv.append(link);

        container.append(imgDiv);
        container.append(linkDiv)
        container.append(document.createElement("br"));
    }
})

backButton.addEventListener('click', () => {
    window.location.href = "../ci_index.html";
    window.localStorage.clear();
})
