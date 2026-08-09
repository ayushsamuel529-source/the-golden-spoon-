/* =====================================================
   TAKEOUT SYSTEM 3.0
   ELEMENT SELECTION
===================================================== */

"use strict";


const pickupTime =
document.getElementById("pickupTime");


const takeoutGuests =
document.getElementById("takeoutGuests");


const orderDetails =
document.getElementById("orderDetails");


const takeoutTotalPrice =
document.getElementById("takeoutTotalPrice");


const placeOrderBtn =
document.getElementById("placeOrderBtn");


const takeoutSuccessModal =
document.getElementById("takeoutSuccessModal");


const closeTakeoutSuccess =
document.getElementById("closeTakeoutSuccess");
/* =====================================================
   TAKEOUT SYSTEM 3.1
   LIVE PRICE CALCULATION
===================================================== */

const TAKEOUT_PRICE_PER_GUEST = 500;


/* ---------------------------------------------
   CALCULATE TOTAL PRICE
----------------------------------------------*/

function calculateTakeoutPrice(){

    const guests =
    Number(takeoutGuests.value);


    if(
        !guests ||
        guests < 1
    ){

        takeoutTotalPrice.textContent =
        "₹0";

        return;

    }


    const totalPrice =
    guests *
    TAKEOUT_PRICE_PER_GUEST;


    takeoutTotalPrice.textContent =
    "₹" + totalPrice;

}


/* ---------------------------------------------
   LIVE UPDATE
----------------------------------------------*/

takeoutGuests.addEventListener(
    "input",
    calculateTakeoutPrice
);


/* ---------------------------------------------
   INITIAL PRICE
----------------------------------------------*/

calculateTakeoutPrice();
/* =====================================================
   TAKEOUT SYSTEM 3.2
   GUEST VALIDATION
===================================================== */

function validateTakeoutGuests(){

    const guests =
    Number(takeoutGuests.value);

    if(!guests || guests < 1){

        takeoutGuests.setCustomValidity(
            "Please enter at least 1 guest."
        );

        return false;

    }

    takeoutGuests.setCustomValidity("");

    return true;

}


/* ---------------------------------------------
   LIVE VALIDATION
----------------------------------------------*/

takeoutGuests.addEventListener(
    "input",
    validateTakeoutGuests
);
/* =====================================================
   TAKEOUT SYSTEM 3.3
   PICKUP TIME VALIDATION
===================================================== */

function validatePickupTime(){

    if(!pickupTime.value){

        pickupTime.setCustomValidity(
            "Please select a pickup time."
        );

        return false;

    }

    pickupTime.setCustomValidity("");

    return true;

}


/* ---------------------------------------------
   LIVE VALIDATION
---------------------------------------------- */

pickupTime.addEventListener(
    "change",
    validatePickupTime
);
/* =====================================================
   TAKEOUT SYSTEM 3.4
   PLACE ORDER VALIDATION
===================================================== */

placeOrderBtn.addEventListener(
    "click",
    submitTakeoutOrder
);


/* =====================================================
   TAKEOUT SYSTEM 3.8
   FINAL INTEGRATION
===================================================== */

function submitTakeoutOrder(){

    if(!validateTakeoutGuests()){

        takeoutGuests.reportValidity();

        return;

    }

    if(!validatePickupTime()){

        pickupTime.reportValidity();

        return;

    }

    if(!orderDetails.value.trim()){

        orderDetails.setCustomValidity(
            "Please enter your order details."
        );

        orderDetails.reportValidity();

        return;

    }

    orderDetails.setCustomValidity("");


    /* START LOADING */

    startTakeoutLoading();


    /* SHOW SUCCESS AFTER SHORT DELAY */

    setTimeout(function(){

        stopTakeoutLoading();

        showTakeoutSuccess();

    }, 800);

}
/* =====================================================
   TAKEOUT SYSTEM 3.5
   SUCCESS POPUP
===================================================== */

function showTakeoutSuccess(){

    takeoutSuccessModal.classList.add(
        "active"
    );

}
/* =====================================================
   TAKEOUT SYSTEM 3.6
   RESET FORM
===================================================== */

function resetTakeoutForm(){

    pickupTime.selectedIndex = 0;

    takeoutGuests.value = "1";

    orderDetails.value = "";

    takeoutTotalPrice.textContent = "₹0";

    takeoutGuests.setCustomValidity("");

    pickupTime.setCustomValidity("");

    orderDetails.setCustomValidity("");

    calculateTakeoutPrice();

}


/* ---------------------------------------------
   CLOSE SUCCESS POPUP
---------------------------------------------- */

closeTakeoutSuccess.addEventListener(
    "click",
    function(){

        takeoutSuccessModal.classList.remove(
            "active"
        );

        resetTakeoutForm();

    }
);
/* =====================================================
   TAKEOUT SYSTEM 3.7
   BUTTON LOADING
===================================================== */

function startTakeoutLoading(){

    placeOrderBtn.disabled = true;

    placeOrderBtn.dataset.originalText =
        placeOrderBtn.textContent;

    placeOrderBtn.textContent =
        "Processing...";

    placeOrderBtn.classList.add(
        "loading"
    );

}


/* ---------------------------------------------
   REMOVE LOADING
---------------------------------------------- */

function stopTakeoutLoading(){

    placeOrderBtn.disabled = false;

    placeOrderBtn.textContent =
        placeOrderBtn.dataset.originalText ||
        "Place Your Order";

    placeOrderBtn.classList.remove(
        "loading"
    );

}