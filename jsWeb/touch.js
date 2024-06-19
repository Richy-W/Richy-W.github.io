/* ----------------------
FileName: touch.js
Date: 5/7/2024
Author: Richard Wren
---------------------- */

function highlightSelection() 
{
    //get text selection
    let selection = window.getSelection();
    let selectedText = selection.toString();

    if(selectedText.length > 0) {
         //modify the text
    let modifiedText = "<span class='highlight'>" + selectedText + "</span>";

    let range = selection.getRangeAt(0);
    
    range.deleteContents();
    
    //add span element to the page
    let spanNode = document.createElement("span");
    spanNode.innerHTML = modifiedText;
    range.insertNode(spanNode);
    }

}

function clearHighlighter (){
    let highlighted= document.querySelectorAll(".highlight");
    highlighted.forEach(function(element) {
        element.outerHTML = element.innerHTML;
    });
}

//event listeners to highlight
document.addEventListener("mouseup", highlightSelection, false);
document.addEventListener("touchend", highlightSelection, false);
document.addEventListener("pointerup", highlightSelection, false);
document.addEventListener("MSPointerUp", highlightSelection, false);

//event listeners to clear
document.getElementById("clearButton").addEventListener("click", clearHighlighter, false);
document.getElementById("clearButton").addEventListener("touchend", clearHighlighter, false);
document.getElementById("clearButton").addEventListener("pointerup", clearHighlighter, false);
document.getElementById("clearButton").addEventListener("MSPointerUp", clearHighlighter, false);