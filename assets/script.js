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
        //  fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/direct?q=${parameter}&limit=3&appid=d769864f4813769c7a82a33216c211e2`)
         fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/direct?q=${userEntry}&limit=3&appid=d769864f4813769c7a82a33216c211e2`)
             .then(data=>{return data.json()})
             .then(response=> {
                fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?lat=${response[0].lat}&lon=${response[0].lon}&appid=d769864f4813769c7a82a33216c211e2`)
                .then(finalResponse=>{
                console.log(finalResponse)
                //write dom stuff here
                })
            })
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
