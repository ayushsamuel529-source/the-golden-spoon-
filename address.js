/* =====================================================
   ADDRESS SYSTEM 3.0
   ELEMENT SELECTION
===================================================== */

"use strict";


const addressSection =
document.getElementById("address");


const addressContainer =
document.querySelector(".address-container");


const addressTitle =
document.querySelector(".address-title");


const addressDisplay =
document.querySelector(".address-display");


const addressBrand =
document.querySelector(".address-brand");


const addressNote =
document.querySelector(".address-note");
/* =====================================================
   ADDRESS SYSTEM 3.1
   SCROLL REVEAL
===================================================== */

const addressObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if(entry.isIntersecting){

                    addressSection.classList.add(
                        "address-visible"
                    );

                }

            });

        },
        {
            threshold: 0.25
        }
    );


addressObserver.observe(addressSection);
/* =====================================================
   ADDRESS SYSTEM 3.2
   ADDRESS CONTAINER INTERACTION
===================================================== */

if (addressContainer) {

    addressContainer.addEventListener(
        "mouseenter",
        function () {

            addressContainer.classList.add(
                "address-hover"
            );

        }
    );


    addressContainer.addEventListener(
        "mouseleave",
        function () {

            addressContainer.classList.remove(
                "address-hover"
            );

        }
    );

}
/* =====================================================
   ADDRESS SYSTEM 3.3
   SCROLL ANIMATION TRIGGER
===================================================== */

function revealAddressElements(){

    if(!addressSection){
        return;
    }

    addressSection
        .querySelectorAll(
            ".address-content, .address-display, .address-brand, .address-note"
        )
        .forEach(function(element){

            element.classList.add(
                "address-element-visible"
            );

        });

}


if(addressSection){

    const revealObserver =
        new IntersectionObserver(
            function(entries){

                entries.forEach(function(entry){

                    if(entry.isIntersecting){

                        revealAddressElements();

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


    revealObserver.observe(addressSection);

}
/* =====================================================
   ADDRESS SYSTEM 3.4
   BRAND LINE INTERACTION
===================================================== */

if (addressBrand) {

    addressBrand.addEventListener(
        "mouseenter",
        function () {

            addressBrand.classList.add(
                "brand-highlight"
            );

        }
    );


    addressBrand.addEventListener(
        "mouseleave",
        function () {

            addressBrand.classList.remove(
                "brand-highlight"
            );

        }
    );

}
/* =====================================================
   ADDRESS SYSTEM 3.5
   FINAL NOTE INTERACTION
===================================================== */

if (addressNote) {

    addressNote.addEventListener(
        "mouseenter",
        function () {

            addressNote.classList.add(
                "note-highlight"
            );

        }
    );


    addressNote.addEventListener(
        "mouseleave",
        function () {

            addressNote.classList.remove(
                "note-highlight"
            );

        }
    );

}
/* =====================================================
   ADDRESS SYSTEM 3.6
   ADDRESS SECTION CLICK INTERACTION
===================================================== */

if (addressSection) {

    addressSection.addEventListener(
        "click",
        function () {

            addressSection.classList.add(
                "address-clicked"
            );

            setTimeout(function () {

                addressSection.classList.remove(
                    "address-clicked"
                );

            }, 600);

        }
    );

}
/* =====================================================
   ADDRESS SYSTEM 3.7
   INITIALIZE ADDRESS SYSTEM
===================================================== */

window.addEventListener(
    "DOMContentLoaded",
    function () {

        if (!addressSection) {
            return;
        }

        addressSection.classList.add(
            "address-ready"
        );

    }
);
/* =====================================================
   ADDRESS SYSTEM 3.8
   FINAL INITIALIZATION
===================================================== */

function initializeAddressSystem() {

    if (!addressSection) {
        return;
    }

    addressSection.classList.add(
        "address-initialized"
    );

    console.log(
        "Address System 3.0 Loaded Successfully"
    );

}


window.addEventListener(
    "DOMContentLoaded",
    initializeAddressSystem
);
/* =====================================================
   ADDRESS SYSTEM 3.9
   FINAL SAFETY CHECK
===================================================== */

if (!addressSection) {

    console.warn(
        "Address section not found."
    );

} else {

    console.log(
        "Address System 3.9 Ready"
    );

}
/* =====================================================
   ADDRESS SYSTEM 3.3
   SCROLL REVEAL ANIMATION
===================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const addressSection =
        document.querySelector(".address-section");

    if (!addressSection) return;


    /* ---------------------------------------------
       INTERSECTION OBSERVER
    --------------------------------------------- */

    const addressObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        addressSection.classList.add(
                            "address-visible"
                        );

                        addressObserver.unobserve(
                            addressSection
                        );

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


    addressObserver.observe(addressSection);

});