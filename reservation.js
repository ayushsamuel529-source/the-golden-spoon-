/* =====================================================
   THE GOLDEN SPOON
   RESERVATION SYSTEM 3.0
===================================================== */

"use strict";

/* =====================================================
   SELECT ELEMENTS
===================================================== */

const bookingDate =
document.getElementById("bookingDate");

const bookingTime =
document.getElementById("bookingTime");

const bookingSlot =
document.getElementById("bookingSlot");

const guestCount =
document.getElementById("guestCount");

const hours =
document.getElementById("hours");

const minutes =
document.getElementById("minutes");

const validationMessage =
document.getElementById("validationMessage");

const totalPrice =
document.getElementById("totalPrice");

const reserveBtn =
document.getElementById("reserveBtn");

/* =====================================================
   CONSTANTS
===================================================== */

const PRICE_PER_PERSON = 500;

const MINIMUM_GUESTS = 4;

const MAX_BOOKING_DAYS = 30;
/* =====================================================
   1.0 RAZORPAY CONSTANTS
===================================================== */

const CURRENCY = "INR";

const COMPANY_NAME =
"The Golden Spoon";

const COMPANY_DESCRIPTION =
"Premium Restaurant Reservation";

const RAZORPAY_KEY =
"YOUR_RAZORPAY_KEY_ID";
/* =====================================================
   INITIALIZE
===================================================== */

window.addEventListener("DOMContentLoaded", () => {

    initializeReservation();

});

/* =====================================================
   MAIN FUNCTION
===================================================== */
function initializeReservation(){

    console.log(
        "Reservation System 3.0 Loaded Successfully"
    );

    setBookingDateLimit();

    bookingDate.addEventListener(
        "change",
        checkBookingDay
    );

    guestCount.addEventListener(
        "change",
        validateGuests
    );

    validateGuests();
hours.addEventListener(
    "change",
    calculatePrice
);

minutes.addEventListener(
    "change",
    calculatePrice
);

guestCount.addEventListener(
    "change",
    calculatePrice
);

calculatePrice();
hours.addEventListener(
    "change",
    validateDuration
);

minutes.addEventListener(
    "change",
    validateDuration
);

validateDuration();
bookingSlot.addEventListener(
    "change",
    validateSlotTime
);

bookingTime.addEventListener(
    "change",
    validateSlotTime
);

validateSlotTime();
}
/* =====================================================
   FUTURE MODULES
===================================================== */

/*

3.1
Date Limit
Sunday Highlight

------------------------

3.2
Guest Validation

------------------------

3.3
Price Calculation

------------------------

3.4
Hours + Minutes

------------------------

3.5
Lunch / Dinner Validation

------------------------

3.6
Reserve Button Validation

------------------------

3.7
Booking Success Popup

------------------------

3.8
Payment Modal

------------------------

3.9
Payment Success

------------------------

3.10
Luxury Effects

*/
/* =====================================================
   3.1 DATE LIMIT + SUNDAY DETECTION
===================================================== */



/* ---------------------------------------------
   DATE LIMIT
----------------------------------------------*/

function setBookingDateLimit(){

    const today = new Date();

    const maxDate = new Date();

    maxDate.setDate(
        today.getDate() + MAX_BOOKING_DAYS
    );

    bookingDate.min =
    formatDate(today);

    bookingDate.max =
    formatDate(maxDate);

}

/* ---------------------------------------------
   FORMAT DATE
----------------------------------------------*/

function formatDate(date){

    const year =
    date.getFullYear();

    const month =
    String(
        date.getMonth()+1
    ).padStart(2,"0");

    const day =
    String(
        date.getDate()
    ).padStart(2,"0");

    return `${year}-${month}-${day}`;

}

/* ---------------------------------------------
   CHECK SUNDAY
----------------------------------------------*/

function checkBookingDay(){

    if(!bookingDate.value){

        validationMessage.textContent = "";

        return;

    }

    const selectedDate =
    new Date(bookingDate.value);

    if(selectedDate.getDay() === 0){

        validationMessage.style.color =
        "#C9A14A";

        validationMessage.innerHTML =
        "🌟 Sunday Booking Available • High Demand";

    }

    else{

        validationMessage.textContent = "";

    }

}
/* =====================================================
   3.2 LIVE MINIMUM GUEST VALIDATION
===================================================== */


/* ---------------------------------------------
   VALIDATE GUESTS
----------------------------------------------*/

function validateGuests(){

    const guests =
    Number(guestCount.value);

    if(guests < MINIMUM_GUESTS){

        validationMessage.style.color =
        "#ff5c5c";

        validationMessage.innerHTML =
        "Minimum 4 guests are required for reservation.";

        reserveBtn.disabled = true;

        return false;

    }

    validationMessage.style.color =
    "#66d17a";

    validationMessage.innerHTML =
    "Guest count accepted.";

    reserveBtn.disabled = false;

    return true;

}
/* =====================================================
   3.3 LIVE PRICE CALCULATION
===================================================== */

/* ---------------------------------------------
   LIVE PRICE
----------------------------------------------*/

function calculatePrice(){
    if(!validateDuration()){

    totalPrice.innerHTML = "₹0";

    return;

}
if(!validateSlotTime()){

    totalPrice.innerHTML = "₹0";

    return;

}

    const guests =
    Number(guestCount.value);

    const selectedHours =
    Number(hours.value);

    const selectedMinutes =
    Number(minutes.value);

    const totalHours =
    selectedHours +
    (selectedMinutes / 60);

    const price =
    guests *
    totalHours *
    PRICE_PER_PERSON;

    totalPrice.innerHTML =
    "₹" + Math.round(price);

}
/* =====================================================
   3.4 HOURS + MINUTES VALIDATION
===================================================== */

/* ---------------------------------------------
   VALIDATE DURATION
----------------------------------------------*/

function validateDuration(){

    const selectedHours =
    Number(hours.value);

    const selectedMinutes =
    Number(minutes.value);

    if(
        selectedHours === 0 &&
        selectedMinutes === 0
    ){

        validationMessage.style.color =
        "#ff5c5c";

        validationMessage.innerHTML =
        "Please select a booking duration.";

        reserveBtn.disabled = true;

        return false;

    }

    reserveBtn.disabled = false;

    return true;

}
/* =====================================================
   3.5 LUNCH / DINNER TIME VALIDATION
===================================================== */

/* ---------------------------------------------
   VALIDATE SLOT TIME
----------------------------------------------*/

function validateSlotTime(){

    if(!bookingTime.value){

        return true;

    }

    const selectedTime =
    bookingTime.value;

    if(
        bookingSlot.value === "Lunch"
    ){

        if(
            selectedTime < "11:00" ||
            selectedTime > "16:00"
        ){

            validationMessage.style.color =
            "#ff5c5c";

            validationMessage.innerHTML =
            "Lunch bookings are available only between 11:00 AM and 4:00 PM.";

            reserveBtn.disabled = true;

            return false;

        }

    }

    if(
        bookingSlot.value === "Dinner"
    ){

        if(
            selectedTime < "18:00" ||
            selectedTime > "23:00"
        ){

            validationMessage.style.color =
            "#ff5c5c";

            validationMessage.innerHTML =
            "Dinner bookings are available only between 6:00 PM and 11:00 PM.";

            reserveBtn.disabled = true;

            return false;

        }

    }

    reserveBtn.disabled = false;

    return true;

}
/* =====================================================
   3.6 RESERVE BUTTON VALIDATION
===================================================== */

/* ---------------------------------------------
   RESERVE BUTTON
----------------------------------------------*/

reserveBtn.addEventListener(
    "click",
    submitReservation
);
function submitReservation(){

    if(!bookingDate.value){

        alert("Please select a reservation date.");

        return;

    }

    if(!bookingTime.value){

        alert("Please select a reservation time.");

        return;

    }

    if(!validateGuests()){

        return;

    }

    if(!validateDuration()){

        return;

    }

    if(!validateSlotTime()){

        return;

    }

    buttonLoading();

    startPayment();

}
/* =====================================================
   3.7 BOOKING SUCCESS POPUP
===================================================== */
/* =====================================================
   3.8.3 LUXURY SUCCESS MODAL
===================================================== */

const successModal =
document.getElementById("successModal");

const closeSuccess =
document.getElementById("closeSuccess");

/* ---------------------------------------------
   OPEN MODAL
----------------------------------------------*/

function bookingSuccess(){

    successModal.classList.add(
        "active"
    );

}

/* ---------------------------------------------
   CLOSE MODAL
----------------------------------------------*/
closeSuccess.addEventListener(

    "click",

    function(){

        successModal.classList.remove(
            "active"
        );

        resetReservationForm();

    }

);
/* =====================================================
   3.9 RESET RESERVATION FORM
===================================================== */

function resetReservationForm(){

    bookingDate.value = "";

    bookingTime.value = "";

    bookingSlot.selectedIndex = 0;

    guestCount.value = "4";

    hours.value = "0";

    minutes.value = "00";


    validationMessage.innerHTML = "";


    totalPrice.innerHTML = "₹0";


    reserveBtn.disabled = false;


    removeLoading();


    validateGuests();

    validateDuration();

}
/* =====================================================
   BUTTON LOADING
===================================================== */

function buttonLoading(){

    reserveBtn.classList.add(
        "loading"
    );

    reserveBtn.innerHTML =
    "Processing...";

}
/* =====================================================
   REMOVE LOADING
===================================================== */

function removeLoading(){

    reserveBtn.classList.remove(
        "loading"
    );

    reserveBtn.innerHTML =
    "Reserve Now";

}
/* =====================================================
   1.1 PAYMENT CONFIGURATION
===================================================== */

function getPaymentOptions(amount){

    return {

        key: RAZORPAY_KEY,

        amount: amount * 100,

        currency: "INR",

        name: "The Golden Spoon",

        description: "Table Reservation Payment",

        theme: {

            color: "#C9A14A"

        }

    };

}
/* =====================================================
   1.2 OPEN RAZORPAY
===================================================== */
function openRazorpay(amount){

    const options =
    getPaymentOptions(amount);

    options.handler = function(response){

        removeLoading();

        handlePaymentSuccess(response);

        bookingSuccess();

    };

    handlePaymentCancel(options);

    const payment =
    new Razorpay(options);

    handlePaymentFailure(payment);

    payment.open();

}
/* =====================================================
   1.3 PAYMENT FAILED HANDLER
===================================================== */

function handlePaymentFailure(payment){

    payment.on(

        "payment.failed",

        function(response){

            removeLoading();

            alert(

                "Payment Failed!\n\n" +

                response.error.description

            );

        }

    );

}
/* =====================================================
   1.4 PAYMENT CANCEL HANDLER
===================================================== */

function handlePaymentCancel(options){

    options.modal = {

        ondismiss: function(){

            removeLoading();

            alert(

                "Payment was cancelled."

            );

        }

    };

}
/* =====================================================
   1.5 GET BOOKING DETAILS
===================================================== */

function getBookingDetails(){

    return {

        date:
        bookingDate.value,

        time:
        bookingTime.value,

        slot:
        bookingSlot.value,

        guests:
        guestCount.value,

        hours:
        hours.value,

        minutes:
        minutes.value,

        amount:
        totalPrice.textContent

    };

}
/* =====================================================
   1.6 PAYMENT SUCCESS HANDLER
===================================================== */
function handlePaymentSuccess(response){

    const booking =

    getBookingDetails();

    console.log(

        "Payment Success",

        response,

        booking

    );

    console.table(booking);

    console.log(

        "Payment ID :",

        response.razorpay_payment_id

    );

}
/* =====================================================
   1.7 START PAYMENT
===================================================== */

function startPayment(){

    const guests =
    Number(guestCount.value);

    const selectedHours =
    Number(hours.value);

    const selectedMinutes =
    Number(minutes.value);

    const totalHours =
    selectedHours +
    (selectedMinutes / 60);

    const amount =
    Math.round(
        guests *
        totalHours *
        PRICE_PER_PERSON
    );

    openRazorpay(amount);

}