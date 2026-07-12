const selectCountry = document.querySelector(".container");
const countryContainer = document.querySelector(".country-container");
const countryList = document.querySelector(".country-list");
const input = document.querySelector('input');

let searchInput = "";

const countries = [
  { id: 1, country: "America" },
  { id: 2, country: "Australia" },
  { id: 3, country: "Afghanistan" },
  { id: 4, country: "India" },
  { id: 5, country: "Indonesia" },
  { id: 5, country: "China" },
  { id: 6, country: "Japan" },
  { id: 7, country: "Pakistan" },
];

function showCountries (countries) {
    for (let country of countries) {
        const name = document.createElement('p');
        name.classList.add("name");
        name.innerText = country.country;
        countryList.appendChild(name)
    }
}

showCountries(countries);

function handleInputChange(event) {
    searchInput = event.target.value.toLowerCase();
    const filterBySearch = countries.filter(({country})=>country.toLowerCase().startsWith(searchInput));
    countryList.innerText = "";
    showCountries(filterBySearch);
}

input.addEventListener("keyup", handleInputChange);

selectCountry.addEventListener("click", () => {
    countryContainer.classList.toggle("hide");
})