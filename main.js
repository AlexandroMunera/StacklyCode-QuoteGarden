const getData = (url, searchText) => {
  const section = document.getElementById("content__section");
  section.innerHTML = "";
  const template = document.getElementById("quote");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.data.forEach((element) => {
        const clone = template.content.cloneNode(true);
        const span = clone.querySelector("span");
        const p = clone.querySelector("p");

        span.textContent = element.quoteGenre;
        p.textContent = element.quoteText;

        section.appendChild(clone);
      });
    });
};

window.onload = function () {
  const searchButtom = document.getElementById("search-section__button");
  const searchText = document.getElementById("search-text");

  const ramdomButton = document.getElementById("search-section__ramdomButton");
  const title = document.getElementById("content__title");

  searchButtom.addEventListener("click", function () {
    title.innerText = searchText.value;

    getData(
      `https://quote-garden.herokuapp.com/api/v3/quotes?query=${searchText.value}`
    );
  });

  ramdomButton.addEventListener("click", function () {
    title.innerText = "Ramdom Quote";
    getData("https://quote-garden.herokuapp.com/api/v3/quotes/random");
  });

  getData("https://quote-garden.herokuapp.com/api/v3/quotes");
};
