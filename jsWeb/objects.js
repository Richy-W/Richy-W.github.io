/*-----------------------------------------------
Filename: objects.js
DATE: 04/28/2024
Author: Richard Wren
---------------------------------------------- */

function validation(){	
	let errorsExist = false;
	// ~~~~~~~~~~~~~~~~~~   validate quantity
	let copies = parseInt(document.getElementById("copies").value);
	let errorPortrait = document.getElementById('errorPortrait');

	if (isNaN(copies) || copies < 1 || copies > 25) {
		errorPortrait.innerText = "The number of copies must be between 1 and 25.";
		errorPortrait.style.visibility = "visible";
		errorsExist = true;
	}

	// ~~~~~~~~~~~~~~~~~~   validate photo size
	let size = document.querySelector('input[name="size"]:checked');
	let errorSize = document.getElementById('errorSize');

	if(!size) {
		errorSize.innerText = "Please select a photo size.";
		errorSize.style.visibility = "visible";
		errorsExist = true;
	}

	
	// ~~~~~~~~~~~~~~~~~~   validate image has been selected
	let portrait = document.querySelector('input[name="fileName"]:checked');
	let errorFilename = document.getElementById("errorFilename");
	if(!portrait) {
		errorFilename.innerText = "Please select an image";
		errorFilename.visibility = "visible";
		errorsExist = true;
	}
	
	
	// ~~~~~~~~~~~~~~~~~~   validate buyer (name and email - fields have entries)
	 let buyer = document.getElementById("buyer").value;
	 let errorName = document.getElementById("errorName");
	 let email = document.getElementById("email").value;
	 let errorEmail = document.getElementById("errorEmail");

	 if(buyer == "") {
		errorName.innerText = "Please enter your name.";
		errorName.style.visibility = "visible";
		errorsExist = true;
	 }
	 else if (email == "") {
		errorEmail.innerText = "Please enter an e-mail address";
		errorEmail.style.visibility = "visible";
		errorsExist = true;
	 } 
	
//------------	
	if (errorsExist == true){
			return false;
		}  
		else {
			return true;
		} 
}  

function PortraitOrder(portrait, copies ,size ,buyer, orderCost){
	// ~~~~~~~~~~~~~~~~~~   constructor and Properties
	this.portrait = portrait;
	this.copies = copies;
	this.size = size;
	this.buyer = buyer;
	this.orderCost = orderCost;
	 //                      method:  calculate the cost	  
	this.calculate = function() {
		const prices = {
            "4-wallets": 10,
            "2-4x6": 10,
            "5x7": 10,
            "8x10": 20,
            "11x14": 30
        };

        // Get the total cost based on the selected size and number of copies
        return prices[this.size] * this.copies;

	}
	  
}


function DisplayOutput(newOrder){
	//calculate order Costs
	newOrder.orderCost = newOrder.calculate();
	//display ouput to main
	let output = `<p>Portrait: ${newOrder.portrait}</p>`;
    output += `<p>Copies: ${newOrder.copies}</p>`;
    output += `<p>Size: ${newOrder.size}</p>`;
    output += `<p>Buyer: ${newOrder.buyer}</p>`;
    output += `<p>Cost: $${newOrder.orderCost.toFixed(2)}</p>`;

    document.getElementsByTagName("main")[0].innerHTML = output;                   
}



// ~~~~~~~~~~~~~~~~~~   Add code to create even listeners
document.addEventListener("DOMContentLoaded", function() {
	let prepareOrderBtn = document.querySelector(".margin175");

	prepareOrderBtn.addEventListener("click", function(){
		if (validation()) {
			// If validation succeeds, create an instance of PortraitOrder
            let portrait = document.querySelector('input[name="fileName"]:checked').value;
            let copies = parseInt(document.getElementById("copies").value);
            let size = document.querySelector('input[name="size"]:checked').value;
            let buyer = document.getElementById("buyer").value;
            let orderCost = 0; // Initially set to 0, will be calculated later
            let newOrder = new PortraitOrder(portrait, copies, size, buyer, orderCost);

			console.log(newOrder);
			DisplayOutput(newOrder);
		}
	});
});