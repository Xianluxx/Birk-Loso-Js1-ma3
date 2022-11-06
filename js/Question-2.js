const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=3cec49e5462e4df29bb22a1015419fd4";

const resultsContainer = document.querySelector(".results");

async function getName() {


    const response = await fetch(url);

    const fact = await response.json();

    resultsContainer.innerHTML = "";

    for (let i = 0; i < fact.length; i++) {
        console.log(fact[i].name);

        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${fact[i].name}</div>`;
    }
}

getName();

async function getRating() {


    const response2 = await fetch(url);

    const fact2 = await response2.json();

    resultsContainer.innerHTML = "";

    for (let i = 0; i < fact2.length; i++) {
        console.log(fact2[i].rating);

        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${fact2[i].rating}</div>`;
    }
}

getRating();

async function getNumberOfTags() {


    const response3 = await fetch(url);

    const fact3 = await response3.json();

    resultsContainer.innerHTML = "";

    for (let i = 0; i < fact3.length; i++) {
        console.log(fact3[i].tags);

        if (i === 8) {
            break;a
        }

        resultsContainer.innerHTML += `<div class="result">${fact3[i].tags}</div>`;
    }
}

getNumberOfTags();
