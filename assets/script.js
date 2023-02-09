var searchButton = document.querySelector(".search-btn");

// Function to set user input to local storage
function newCity() {
    var userEntry = document.querySelector("#city-entry").value;
    if (userEntry === "") {
        userEntry = "anonymous";
    }
    localStorage.setItem(userEntry, userEntry);
    document.querySelector(".city-data").textContent = " ";
    var p = document.createElement("p");
    p.textContent = userEntry;
    document.querySelector(".city-data").appendChild(p);
};

// eventListener on 'Search' button to save city search to localStorage
searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    newCity();
});

