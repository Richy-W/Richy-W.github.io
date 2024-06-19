"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: Richard Wren
      Date:   4/21/2024

      Filename: js06a.js
 */


      //add event listener so when the document loads the model set into focus
      try {


            window.addEventListener("load", function() {
                  let orderForm = document.forms.orderForm;
                  let model = orderForm.elements.model;

                  //select Model selection List when the form opens
                  model.focus();

                  //add event listners to update order totals on change
                  for(let i = 0; i < orderForm.elements.length; i++) {
                        orderForm.elements[i].addEventListener("change", calcOrder);
                  }

                  //run calcOrder
                  calcOrder();

                  //calculate order total

                  function calcOrder () {
                  //find selected model
                  let modIndex = model.selectedIndex;
                  let modValue = model.options[modIndex].value;

                  //find Quantity
                  let qIndex = orderForm.elements.qty.selectedIndex;
                  let quan = orderForm.elements.qty[qIndex].value;

                  //find initial cost without protection
                  let modelCost = modValue * quan;
                  orderForm.elements.modelCost.value = modelCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

                  //get cost of prtection plan
                  let planValue = document.querySelector('input[name="plan"]:checked').value;

                  //add protection to number of item ordered
                  let planCost = planValue * quan;
                  orderForm.elements.planCost.value = planCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

                  //calculate subtotal
                  let subtotal = modelCost + planCost;
                  orderForm.elements.subtotal.value = subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"});

                  //add sales tax
                  const sTax = 0.05;
                  let salesTax = subtotal * sTax;
                  orderForm.elements.salesTax.value = salesTax.toLocaleString("en-US", {style: "currency", currency: "USD"});

                  //find total cost
                  let totalCost = subtotal + salesTax; 
                  orderForm.elements.totalCost.value = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

                  //Storing product information
                  orderForm.elements.modelName.value = model.options[modIndex].text;
                  let selectedPlan = document.querySelector('input[name="plan"]:checked');
                  orderForm.elements.planName.value = selectedPlan.labels[0].textContent;



                  }

            })

      }
      catch(error) {
            console.log("error message" + error)
      }


