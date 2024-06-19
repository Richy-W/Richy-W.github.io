/*-----------------------------------------------
Filename: CSP.js
DATE: 05/08/2024
Author: Richard Wren
---------------------------------------------- */

/*--------------------------------------------
       Chapter 2: functions - BMI
-------------------------------------------*/

function calcBMI() {
    var weight = parseInt(document.getElementById("weight").value);
    var height = parseInt(document.getElementById("height").value);
    var bmi = weight * 703 / Math.pow(height, 2);

    document.getElementById("result").value = bmi.toFixed(2);
}

/*--------------------------------------------------
        Chapter 3: ControlFlow - Prime Numbers
--------------------------------------------------*/ 

//Richard Wren

//function to validate Input 
function validateInput() {
    var startNum = parseInt(document.forms[0].start.value);
    var endNum = parseInt(document.forms[0].end.value);

    //Check to see if the input is a number
    if(isNaN(startNum) || isNaN(endNum)) {
        alert("Please Use Numbers Only.");
        //return false to halt program
        return false;
    }
    //check to see if numbers are positive
    else if(startNum < 0 || endNum < 0) {
        alert("Please Make sure both numbers are greater than 0.");
        //return false to halt program
        return false;
    }
    //Start number is less than or equal to end number
    else if(startNum >= endNum){
        alert("Please make sure the starting number is less than the end number.");
        //return false to halt program
        return false;
    }
    else {
        //call display prime numbers passing start and end values
        displayPrimeNumbers(startNum, endNum);

        return  true;
    }
}


function displayPrimeNumbers(startNum, endNum) {
    var startN = startNum;
    var endN = endNum;
    var primes = []; //array for primes

    //examin each number with outer loop
    for (var i = startN; i <= endN; i++) {
        var isprime = true; //default value
        
        //test for prime
        for (var j = 2; j < i; j++) {
            if(i % j === 0) {
                isprime = false;
                break;
            }
        }
        //if still prime push to primes array
        if (isprime && i > 1) {
            primes.push(i);
            console.log(primes[i])
        }
    }


    //create Table
    document.write("<h1>Primes Table</h1>")
    document.write("<table>");
    document.write("<tr>");
    var numOfCells = 1;
    var maxCells = 10;
    var maxVal = primes[length +1];
    //Write lines to the tables


   for (let t = 0; t < maxVal; t++) {
    document.writeln("<td>" + primes[t] + "</td>");  // writes any number in the primes array to primes table
        
        if (numOfCells == maxCells) {
        document.writeln("</tr><tr>")
        numOfCells = 1
        }
    }
    //end table and give retun link
    document.write("</tr>");
    document.write("</table><br><br>");
    document.write("<a href='ControlFlow.html'>Return</a>");

    document.close()

}

/*--------------------------------------------------
        Chapter 4: Debugging - page set up
--------------------------------------------------*/

/**********************************************
 *   header, Nav, and footer js code
 **********************************************/


//----------header--------------
function displayHeader() {
    var headerContent = "<img class='logo' src='images/JSlogo2.png' alt='JS Logo'>";
    headerContent += "Learning the Client-Side";
    document.getElementById("header").innerHTML = headerContent;
    
    }
    
    
    //----------Nav menu------
    function displayNav() {
        var navContent = "<ul>";
        navContent += "<li><a href='index.html'>Home</a></li>";
        navContent += "<li><a href='functions.html'>Functions</a></li>";
        navContent += "<li><a href='ControlFlow.html'>Control Flow</a></li>";
        navContent += "<li><a href='debug.html'>Debugging</a></li>";
        navContent += "<li><a href='DOM.html'>DOM</a></li>";
        navContent += "<li><a href='forms.html'>Forms</a></li>";
        navContent += "<li><a href='objects.html'>Objects</a></li>";
        navContent += "<li><a href='strings.html'>Strings</a></li>";
        navContent += "<li><a href='state.html'>State</a></li>";
        navContent += "<li><a href='touch.html'>Touch</a></li>";
        navContent += "<li><a href='jQuery.html'>jQuery</a></li>";
        navContent += "<li><a href='AJAX.html'>AJAX</a></li>";
        navContent += "<li><a href='../index.html'>Landing Page</a></li>";
        navContent += "</ul>";
        document.getElementById("nav").innerHTML = navContent;
    }
    
    //-----------Footer---------
    function displayFooter() {
        var footContent = "<div id='bottomnav'>";  
        footContent += "<ul>";
        footContent += "<li><a href='index.html'>Home</a></li>";
        footContent += "<li><a href='functions.html'>Functions</a></li>";
        footContent += "<li><a href='ControlFlow.html'>Control Flow</a></li>";
        footContent += "<li><a href='debug.html'>Debugging</a></li>";
        footContent += "<li><a href='DOM.html'>DOM</a></li>";
        footContent += "<li><a href='forms.html'>Forms</a></li>";
        footContent += "<li><a href='objects.html'>Objects</a></li>";
        footContent += "<li><a href='strings.html'>Strings</a></li>";
        footContent += "<li><a href='state.html'>State</a></li>";
        footContent += "<li><a href='touch.html'>Touch</a></li>";
        footContent += "<li><a href='jQuery.html'>jQuery</a></li>";
        footContent += "<li><a href='AJAX.html'>AJAX</a></li>";
        footContent += "</ul>";
        footContent += "</div><br>";
        footContent += "Contact info: <a href='mailto:Richard@Wren.com'>Richard@wren.com</a><br>";
        footContent += "<p>Last Updated: " + document.lastModified + "</p>";
        footContent += "Disclaimer: Oklahoma City Community College does not necessarily endorse the content or respective links of this page.";
        document.getElementById("footer").innerHTML = footContent;
    }


function createEventListeners () {

    //ch2 event listener
    try {
        document.getElementById("calculate").addEventListener("click", calcBMI);
        }catch (error) {
            console.log('error message', error.message);
        }

    // ch3     
    try {
        // make prime button object
        var primeBtn = document.getElementById("getPrimes");
        //test if addeventlistner
        if (primeBtn.addEventListener) {
            primeBtn.addEventListener("click", validateInput); //add event listener
        } else if (primeBtn.attachEvent) { // test for attachevent For older IE versions
            primeBtn.attachEvent("onclick", validateInput); //attach onclick event
        }

    }
    catch (error) {
            console.log('error message ', error.message);
    }
}
/* ~~~~~~~~~~~ Set Up Page ~~~~~~~~~~~~ */

window.addEventListener('load', function() {
    setUpPage();
    console.log("check");
});

function setUpPage () {

    displayHeader()
    displayNav()
    displayFooter()
    try{
    createEventListeners()
    }
    catch {
        console.log('error message ', error.message);
    }
}


/*--------------------------------------------------
        Chapter 5: DOM - page set up
--------------------------------------------------*/

// I really dont understand what this assignment is asking



try {
window.addEventListener("load", createLightbox);

    function createLightbox() {
        //LightBox Container
        let lightbox = document.getElementById("lightbox");

        //light box parts
        let lbTitle = document.createElement("h1");
        let lbCounter = document.createElement("div");
        let lbPrev = document.createElement("div");
        let lbNext = document.createElement("div");
        let lbPlay = document.createElement("div");
        let lbImages = document.createElement("div");

        //lightBox Title
        lightbox.appendChild(lbTitle);
        lbTitle.id = "lbTitle";
        lbTitle.textContent = lightboxTitle;

        //Lightbox slide Counter
        lightbox.appendChild(lbCounter);
        lbCounter.id = "lbCounter";
        let currentImg = 1;
        lbCounter.textContent = currentImg + " / " + imgCount;

        //Previous Button
        lightbox.appendChild(lbPrev);
        lbPrev.id = "lbPrev";
        lbPrev.innerHTML = "&#9664;";
        lbPrev.onclick = showPrev;

        //next Button
        lightbox.appendChild(lbNext);
        lbNext.id = "lbNext";
        lbNext.innerHTML = "&#9654;";
        lbNext.onclick = showNext;

        //play pause
        lightbox.appendChild(lbPlay);
        lbPlay.id = "lbPlay";
        lbPlay.innerHTML = "&#9199;";
        let timeID;
        lbPlay.onclick = function() {
            if(timeID) {
                //pause slides
                window.clearInterval(timeID);
                timeID = undefined;
            }
            else {
                //play Slides
                showNext();
                timeID = window.setInterval(showNext, 1500);
            }
        }

        //image Container
        lightbox.appendChild(lbImages);
        lbImages.id = "lbImages";
        // Add Image Files
        for (let i = 0; i < imgCount; i++) {
            let image = document.createElement("img");
            image.src = imgFiles[i];
            image.alt = imgCaptions[i];
            lbImages.appendChild(image);
            image.onclick = createOverlay;
            lbImages.appendChild(image);
        }


        //scroll forward
        function showNext(){
            lbImages.appendChild(lbImages.firstElementChild);
            (currentImg < imgCount) ? currentImg++ : currentImg = 1;
            lbCounter.textContent = currentImg + " / " + imgCount;
        }

        //scroll Backwards
        function showPrev() {
            lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
            (currentImg > 1) ? currentImg-- : currentImg = imgCount;
            lbCounter.textContent = currentImg + " / " + imgCount;
        }

        //create overlay
        function createOverlay() {
            let overlay = document.createElement("div");
            overlay.id = "lbOverlay";

            //figure Box
            let figureBox = document.createElement("figure");
            overlay.appendChild(figureBox);

            //add image to figurebox
            let overlayImage = this.cloneNode("true");
            figureBox.appendChild(overlayImage);

            //add caption to figurebox
            let overlayCaption = document.createElement("figCaption");
            overlayCaption.textContent = this.alt;
            figureBox.appendChild(overlayCaption);

            document.body.appendChild(overlay);

            //close overlay
            let closeBox = document.createElement("div");
            closeBox.id = "lbOverlayClose";
            closeBox.innerHTML = "&times;";
            closeBox.onclick = function () {
                document.body.removeChild(overlay);
            }
            overlay.appendChild(closeBox);
            
            document.body.appendChild(overlay)
        }
    }
} catch {
    console.log('error message ', error.message);
}

/* ~~~~~~~~~~~---------------------------------------- 
Chapter 6: Enhancing and Validating Forms- Order Form
----------------------------------------~~~~~~~~~~~~ */ 
// The JavaScript code is located in The js06a and b files

/* ~~~~~~~~~~~ ----------------------------------------
Chapter 9: Managing State Information and Security - Cookies 
       The JavaScript code is located in state.js 
-------------------------------------------~~~~~~~~~~~~*/

/* ~~~~~~~~~~~ ----------------------------------------
Chapter 10: Programming for touch screens and mobile devices 
       The JavaScript code is located in touch.js 
-------------------------------------------~~~~~~~~~~~~*/