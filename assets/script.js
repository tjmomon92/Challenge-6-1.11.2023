var searchButton = document.querySelector(".search-btn");

// Function to set user input to local storage
function newCity() {
    var userEntry = document.querySelector("#city-entry").value;
    if (userEntry === "") {
        userEntry = "anonymous";
    }
    localStorage.setItem(userEntry, userEntry);
};

// Function to populate city search from localStorage
function printCity() {
    document.querySelector(".city-data").textContent = " ";
    for (let i = 0; i< localStorage.length; i++) {
        var p = document.createElement("p");
        var city = localStorage.key(i);
        p.textContent = city;
        document.querySelector(".city-data").appendChild(p);
    }
};

// eventListener on 'Search' button to save city search to localStorage
searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    newCity();
    printCity();
});
