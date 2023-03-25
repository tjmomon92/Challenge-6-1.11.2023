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
            document.querySelector(".city-data").textContent = " ";
        }
        fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${userEntry}&units=imperial&APPID=d769864f4813769c7a82a33216c211e2`)
            .then(data => {return data.json()})
            .then(function (data) {
            console.log(data);
        })


                //write dom stuff here
                // const container = document.getElementById('left');
                // container.innerHTML= '';

                // const resultDiv = document.createElement('div');
                // resultDiv.classList.add('result');

                // resultDiv.textContent = ``
                // })
            // })
     .catch(error => {
         console.log(error);
     })
         }
     let response;
};

// Function to save search history to page for easy access
function saveCity(parameter) {
    for (let i = 0; i< localStorage.length; i++) {
        const b = document.createElement("button");
        const city = localStorage.key(i);
        // const city = localStorage.getItem('userEntry');
        b.textContent = city;
        document.querySelector(".city-data").appendChild(b);
        b.setAttribute('class', 'buttons');
    }
    document.querySelector(".city-data").addEventListener("click",function(event){
        event.preventDefault;
            newCity(event.target.innerText)
            saveCity(event.target.innerText)
        })
    };

// prevents search data from disappearing on page refresh
saveCity();

// eventListener on 'Search' button to save city search to localStorage
document.querySelector("#search-button").addEventListener("click",function(event){
    newCity(event.target.previousElementSibling.value)
    saveCity(event.target.innerText)
})
