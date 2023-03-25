const searchButton = document.querySelector(".search-btn");
const cityGeoSearch = Object.entries(localStorage);

console.log(cityGeoSearch);

// Function to set user input to local storage
// function newCity(parameter) {
function newCity() {
    const userEntry = document.querySelector("#city-entry").value;
    // if (parameter === "") {
    if (userEntry === "") {
        console.log('Error: No data entered');
        return;
    } else {
        // if (parameter !== "") {
        if (userEntry !== "") {
            // localStorage.setItem(parameter, " ");
            localStorage.setItem(userEntry, " ");

            document.getElementById('left').textContent = '';
            document.getElementById('right').textContent = '';
            document.getElementById('day1').textContent = '';
            document.getElementById('day2').textContent = '';
            document.getElementById('day3').textContent = '';
            document.getElementById('day4').textContent = '';
        }
        fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${userEntry}&units=imperial&APPID=d769864f4813769c7a82a33216c211e2`)
            .then(response => { return response.json() })
            .then(function (response) {
                console.log(response);
                console.log(response.city.name);
            // })
            // .then(response => {

                // ** extract all API data
                const nameOfCity = response.city.name;
                const dateOfFirstIndex = response.list[0].dt_txt;
                const tempOfFirstIndex = response.list[0].main.temp;
                const windOfFirstIndex = response.list[0].wind.speed;
                const humidOfFirstIndex = response.list[0].main.humidity;
                const outlookOfFirstIndex = response.list[0].weather[0].description;

                const dateOfIndex7 = response.list[7].dt_txt;
                const tempOfIndex7 = response.list[7].main.temp;
                const windOfIndex7 = response.list[7].wind.speed;
                const humidOfIndex7 = response.list[7].main.humidity;

                const dateOfIndex15 = response.list[15].dt_txt;
                const tempOfIndex15 = response.list[15].main.temp;
                const windOfIndex15 = response.list[15].wind.speed;
                const humidOfIndex15 = response.list[15].main.humidity;

                const dateOfIndex23 = response.list[23].dt_txt;
                const tempOfIndex23 = response.list[23].main.temp;
                const windOfIndex23 = response.list[23].wind.speed;
                const humidOfIndex23 = response.list[23].main.humidity;

                const dateOfIndex31 = response.list[31].dt_txt;
                const tempOfIndex31 = response.list[31].main.temp;
                const windOfIndex31 = response.list[31].wind.speed;
                const humidOfIndex31 = response.list[31].main.humidity;

                const containerToday = document.getElementById('left');
                const containerTodayRight = document.getElementById('right');
                const containerDay1 = document.getElementById('day1');
                const containerDay2 = document.getElementById('day2');
                const containerDay3 = document.getElementById('day3');
                const containerDay4 = document.getElementById('day4');

                const resultDivDate = document.createElement('div');
                const resultDivTemp = document.createElement('div');
                const resultDivWind = document.createElement('div');
                const resultDivHumid = document.createElement('div');
                const resultDivCity = document.createElement('div');
                const resultDivOutlook = document.createElement('div');

                const resultDivDate1 = document.createElement('div');
                const resultDivTemp1 = document.createElement('div');
                const resultDivWind1 = document.createElement('div');
                const resultDivHumid1 = document.createElement('div');

                const resultDivDate2 = document.createElement('div');
                const resultDivTemp2 = document.createElement('div');
                const resultDivWind2 = document.createElement('div');
                const resultDivHumid2 = document.createElement('div');

                const resultDivDate3 = document.createElement('div');
                const resultDivTemp3 = document.createElement('div');
                const resultDivWind3 = document.createElement('div');
                const resultDivHumid3 = document.createElement('div');

                const resultDivDate4 = document.createElement('div');
                const resultDivTemp4 = document.createElement('div');
                const resultDivWind4 = document.createElement('div');
                const resultDivHumid4 = document.createElement('div');

                // resultDivDate.classList.add('result');
                // resultDivTemp.classList.add('result');
                // resultDivWind.classList.add('result');
                // resultDivHumid.classList.add('result');

                resultDivCity.textContent = 'City: ' + nameOfCity;
                resultDivDate.textContent = 'Date: ' + dateOfFirstIndex;
                resultDivTemp.textContent = 'Temp: ' + tempOfFirstIndex;
                resultDivWind.textContent = 'Wind Speed: ' + windOfFirstIndex;
                resultDivHumid.textContent = 'Humidity: ' + humidOfFirstIndex;
                resultDivOutlook.textContent = 'Outlook: ' + outlookOfFirstIndex;

                resultDivDate1.textContent = 'Date: ' + dateOfIndex7;
                resultDivTemp1.textContent = 'Temp: ' + tempOfIndex7;
                resultDivWind1.textContent = 'Wind: ' + windOfIndex7;
                resultDivHumid1.textContent = 'Humidity: ' + humidOfIndex7;

                resultDivDate2.textContent = 'Date: ' + dateOfIndex15;
                resultDivTemp2.textContent = 'Temp: ' + tempOfIndex15;
                resultDivWind2.textContent = 'Wind: ' + windOfIndex15;
                resultDivHumid2.textContent = 'Humidity: ' + humidOfIndex15;

                resultDivDate3.textContent = 'Date: ' + dateOfIndex23;
                resultDivTemp3.textContent = 'Temp: ' + tempOfIndex23;
                resultDivWind3.textContent = 'Wind: ' + windOfIndex23;
                resultDivHumid3.textContent = 'Humidity: ' + humidOfIndex23;

                resultDivDate4.textContent = 'Date: ' + dateOfIndex31;
                resultDivTemp4.textContent = 'Temp: ' + tempOfIndex31;
                resultDivWind4.textContent = 'Wind: ' + windOfIndex31;
                resultDivHumid4.textContent = 'Humidity: ' + humidOfIndex31;

                containerToday.appendChild(resultDivCity);
                containerToday.appendChild(resultDivDate);
                containerToday.appendChild(resultDivTemp);
                containerToday.appendChild(resultDivWind);
                containerToday.appendChild(resultDivHumid);

                containerTodayRight.appendChild(resultDivOutlook);

                containerDay1.appendChild(resultDivDate1);
                containerDay1.appendChild(resultDivTemp1);
                containerDay1.appendChild(resultDivWind1);
                containerDay1.appendChild(resultDivHumid1);

                containerDay2.appendChild(resultDivDate2);
                containerDay2.appendChild(resultDivTemp2);
                containerDay2.appendChild(resultDivWind2);
                containerDay2.appendChild(resultDivHumid2);

                containerDay3.appendChild(resultDivDate3);
                containerDay3.appendChild(resultDivTemp3);
                containerDay3.appendChild(resultDivWind3);
                containerDay3.appendChild(resultDivHumid3);

                containerDay4.appendChild(resultDivDate4);
                containerDay4.appendChild(resultDivTemp4);
                containerDay4.appendChild(resultDivWind4);
                containerDay4.appendChild(resultDivHumid4);

            })

            .catch(error => {
                console.log(error);
            })
    }
    let response;
};

// Function to save search history to page for easy access
function saveCity(parameter) {
    document.getElementById('city-data').textContent = '';
    for (let i = 0; i < localStorage.length; i++) {
        const b = document.createElement("button");
        const city = localStorage.key(i);
        // const city = localStorage.getItem('userEntry');
        b.textContent = city;
        document.querySelector(".city-data").appendChild(b);
        // b.setAttribute('class', 'buttons');
        b.classList.add('city-button');
    }
    document.querySelector(".city-data").addEventListener("click", function (event) {
        event.preventDefault;
        newCity(event.target.innerText)
        saveCity(event.target.innerText)
    })
};

// prevents search data from disappearing on page refresh
saveCity();

// eventListener on 'Search' button to save city search to localStorage
document.querySelector("#search-button").addEventListener("click", function (event) {
    newCity(event.target.previousElementSibling.value)
    saveCity(event.target.innerText)
})
