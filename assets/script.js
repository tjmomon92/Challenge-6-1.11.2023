const searchButton = document.querySelector(".search-btn");
// const cityGeoSearch = document.getElementById('cityGeo');

// Function to set user input to local storage
function newCity() {
    const userEntry = document.querySelector("#city-entry").value;
    if (userEntry === "") {
        console.log('Error: No data entered');
    } else {
        if (userEntry !== "") {
            localStorage.setItem(userEntry, " ");
            document.querySelector(".city-data").textContent = " ";
        }
    }
};

// Function to save search history to page for easy access
function saveCity() {
    for (let i = 0; i< localStorage.length; i++) {
        const b = document.createElement("button");
        const city = localStorage.key(i);
        b.textContent = city;
        document.querySelector(".city-data").appendChild(b);
        b.setAttribute('id', 'cityGeo');
    }
};

// prevents search data from disappearing on page refresh
saveCity();

// eventListener on 'Search' button to save city search to localStorage
searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    newCity();
    saveCity();
});

// Geocoding API to get Lat and Lon for future 5-Day Forecast call
// const geoCode = () => {
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=dallas&limit=5&appid=d769864f4813769c7a82a33216c211e2")
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
// }