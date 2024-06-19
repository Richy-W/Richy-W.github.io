/*-----------------------------------------------
Filename: State.js
DATE: 05/05/2024
Author: Richard Wren
---------------------------------------------- */

// Function to set a cookie with the selected text size
function setCookie(size, color1, color2, color3, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    let cookieVal = size + "|" +  color1 + "|" + color2 + "|" + color3;

    document.cookie = "textSettings=" + cookieVal + expires + "; path=/";
}

// Function to get the value of a cookie by name
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to apply text size based on the selected value
function applyTextSize(size) {
    let contentArea = document.getElementById("stateNMain");
    contentArea.className = size;
    contentArea.style.fontSize = size + "%";
}

// Function to handle text size selection
function handleTextSizeSelection(size, color1, color2, color3) {
    // Apply text size
    applyTextSize(size);
    
    //update visual indicator
    updateVisuals(size);

    // Save selected size to a cookie
    setCookie(size, color1, color2, color3, 30); // Cookie expires in 30 days
}

// Function to initialize text size based on the saved cookie (if available)
function initializeTextSize() {
    var savedSize = getCookie("textSettings");
    console.log(savedSize);
    if (savedSize) {
        let parts = savedSize.split("|");
        let size = parts[0];
        console.log(savedSize + size);
        applyTextSize(size);
        updateVisuals(size);
    }
}

//update visials
function updateVisuals(size) {
    document.querySelectorAll("#text-size-selectors button").forEach(function(button) {
        button.style.color = "black";

    });

    let selectedButton = document.getElementById("size" + size);
    if (selectedButton) {
        selectedButton.style.color = "red";
    }
    
}
// Initialize text size on page load
window.onload = function() {
    initializeTextSize();
};


// Event listeners for text size selectors
document.getElementById("size80").addEventListener("click", function() {
    handleTextSizeSelection("80", "red", "black", "black");

});

document.getElementById("size100").addEventListener("click", function() {
    handleTextSizeSelection("100", "black", "red", "black");

});

document.getElementById("size125").addEventListener("click", function() {
    handleTextSizeSelection("125", "black", "black", "red");
});