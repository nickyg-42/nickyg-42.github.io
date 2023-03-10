const searchInput = document.querySelector('.search');
const input = document.getElementById('input');
const url = "https://restcountries.com/v3.1/name/";

document.addEventListener('DOMContentLoaded', () => {
    window.localStorage.clear();
})

searchInput.addEventListener("click", () => {
    let val = input.value;

    if (val && val.trim().length > 0) {
        val = val
            .trim()
            .toLowerCase()
            .concat("?fields=name,currencies,flags,capital,region,population,languages");

        fetch(url.concat(val), {
                method: 'GET'
            })
            .then((response) => response.json())
            .then(data => {
                window.localStorage.results = JSON.stringify(data);
                window.localStorage.index = "0";

                if (data.length > 1) {
                    window.localStorage.isMany = "true";
                    window.location.href = "html/selection.html";
                }
                else {
                    window.location.href = "html/country.html";
                }
            })
            .catch((error) => {
                alert("There was an error processing your request: " + error);
        });
        
    }
})

input.addEventListener('keydown', (e) => {
    var regex = new RegExp('[a-zA-Z ]');

    if (e.ctrlKey || e.altKey || typeof e.key !== 'string' || e.key.length !== 1) return;

    if (!regex.test(e.key)) {
        e.preventDefault();
    }
});

input.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        searchInput.click();
    }
});