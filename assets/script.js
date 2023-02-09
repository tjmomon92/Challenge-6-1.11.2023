var searchButton = document.querySelector(".search-btn");

// Function to set user input to local storage
function newCity() {
    var userEntry = document.querySelector("#city-entry").value;
    if (userEntry === "") {
        console.log('Error: No data entered');
    } else {
        if (userEntry !== "") {
            localStorage.setItem(userEntry, " ");
            document.querySelector(".city-data").textContent = " ";
        }
        // for (let i = 0; i< localStorage.length; i++) {
        //     var b = document.createElement("button");
        //     var city = localStorage.key(i);
        //     b.textContent = city;
        //     document.querySelector(".city-data").appendChild(b);
        // }
    }
};

function saveCity() {
    for (let i = 0; i< localStorage.length; i++) {
        var b = document.createElement("button");
        var city = localStorage.key(i);
        b.textContent = city;
        document.querySelector(".city-data").appendChild(b);
    }
};

saveCity();

// eventListener on 'Search' button to save city search to localStorage
searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    newCity();
    saveCity();
});
