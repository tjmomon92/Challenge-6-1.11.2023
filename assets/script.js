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
            document.getElementById('day1').textContent = '';
            document.getElementById('day2').textContent = '';
            document.getElementById('day3').textContent = '';
            document.getElementById('day4').textContent = '';
        }
        fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${userEntry}&units=imperial&APPID=d769864f4813769c7a82a33216c211e2`)
            .then(response => { return response.json() })
            .then(function (data) {
                console.log(data);
            })
            .then(data => {

                // ** extract all yuor data
                // const nameOfCity = data.city.name;
                // const dateOfFirstIndex = data.list[0].dt_txt;



                const containerToday = document.getElementById('left');
                const containerDay1 = document.getElementById('day1');
                const containerDay2 = document.getElementById('day2');
                const containerDay3 = document.getElementById('day3');
                const containerDay4 = document.getElementById('day4');

                const resultDivDate = document.createElement('div');
                const resultDivTemp = document.createElement('div');
                const resultDivWind = document.createElement('div');
                const resultDivHumid = document.createElement('div');
                const resultDivCity = document.createElement('div');

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

                resultDivCity.textContent = `City: Test`
                resultDivDate.textContent = `Date: Test`;
                resultDivTemp.textContent = `Temp: Test`;
                resultDivWind.textContent = `Wind: Test`;
                resultDivHumid.textContent = `Humidity: Test`;

                resultDivDate1.textContent = `Date: Test`;
                resultDivTemp1.textContent = `Temp: Test`;
                resultDivWind1.textContent = `Wind: Test`;
                resultDivHumid1.textContent = `Humidity: Test`;

                resultDivDate2.textContent = `Date: Test`;
                resultDivTemp2.textContent = `Temp: Test`;
                resultDivWind2.textContent = `Wind: Test`;
                resultDivHumid2.textContent = `Humidity: Test`;

                resultDivDate3.textContent = `Date: Test`;
                resultDivTemp3.textContent = `Temp: Test`;
                resultDivWind3.textContent = `Wind: Test`;
                resultDivHumid3.textContent = `Humidity: Test`;

                resultDivDate4.textContent = `Date: Test`;
                resultDivTemp4.textContent = `Temp: Test`;
                resultDivWind4.textContent = `Wind: Test`;
                resultDivHumid4.textContent = `Humidity: Test`;

                containerToday.appendChild(resultDivCity);
                containerToday.appendChild(resultDivDate);
                containerToday.appendChild(resultDivTemp);
                containerToday.appendChild(resultDivWind);
                containerToday.appendChild(resultDivHumid);

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
        b.setAttribute('class', 'buttons');
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
