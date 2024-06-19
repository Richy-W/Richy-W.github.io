/*-----------------------------------------------
Filename: initialCSP.js
DATE: 04/7/2024
Author: Richard Wren
---------------------------------------------- */

/**********************************************
 *   header, Nav, and footer js code
 **********************************************/


//----------header--------------
function displayHeader() {
    document.write("<img class='logo' src='images/JSlogo2.png' alt='JS Logo'>");
    document.write("Learning the Client-Side");
    
    }
    
    
    //----------Nav menu------
    function displayNav() {
    document.write("<a href='index.html'>HOME</a>");
    document.write("<a href='functions.html'>Functions</a>");
    document.write("<a href='ControlFlow.html'>Control Flow</a>");
    document.write("<a href='debug.html'>Debugging</a>");
    document.write("<a href='index.html'>CSP-05</a>");
    document.write("<a href='index.html'>CSP-06</a>");
    document.write("<a href='index.html'>CSP-07</a>");
    document.write("<a href='index.html'>CSP-08</a>");
    document.write("<a href='index.html'>CSP-09</a>");
    document.write("<a href='index.html'>CSP-10</a>");
    document.write("<a href='index.html'>CSP-11</a>");
    document.write("<a href='index.html'>CSP-12</a>");
    }
    
    //-----------Footer---------
    function displayFooter() {
    document.write(" <div id='bottomnav'>");  
    document.write(" <a href='index.html'>HOME</a>");
    document.write("<a href='functions.html'>Functions</a>");
    document.write("<a href='ControlFlow.html'>Control Flow</a>");
    document.write("<a href='debug.html'>Debugging</a>");
    document.write("<a href='index.html'>CSP-05</a>");
    document.write("<a href='index.html'>CSP-06</a>");
    document.write("<a href='index.html'>CSP-06</a>");
    document.write("<a href='index.html'>CSP-07</a>");
    document.write("<a href='index.html'>CSP-08</a>");
    document.write("<a href='index.html'>CSP-09</a>");
    document.write("<a href='index.html'>CSP-10</a>");
    document.write("<a href='index.html'>CSP-11</a>");
    document.write("<a href='index.html'>CSP-12</a>");
    document.write("</div><br>");
    document.write("Contact info: <a href='mailto:Richard@Wren.com'>Richard@wren.com</a><br>");
    document.write("<p>Last Updated: " + document.lastModified + "</p>");
    
    document.write("Disclaimer: Oklahoma City Community College does not necessarily endorse the content or respective links of this page.")
    }