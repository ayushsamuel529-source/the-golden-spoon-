// ==================================================
// THE GOLDEN SPOON
// LOADER + FIRST HERO IMAGE SYNC
// ==================================================

(function () {

    const loader =
        document.getElementById("site-loader");

    const firstHeroImage =
        document.querySelector(
            ".slide.active picture img"
        );

    if (!loader) return;


    // ==================================================
    // SETTINGS
    // ==================================================

    const MINIMUM_TIME = 1800;

    const MAXIMUM_TIME = 7000;

    const FADE_TIME = 800;


    const startTime =
        Date.now();

    let finished =
        false;


    // ==================================================
    // LOCK PAGE
    // ==================================================

    document.documentElement.style.overflow =
        "hidden";

    document.body.style.overflow =
        "hidden";


    // ==================================================
    // FINISH LOADER
    // ==================================================

    function finishLoader() {

        if (finished) return;


        const elapsed =
            Date.now() - startTime;


        const remaining =
            Math.max(
                0,
                MINIMUM_TIME - elapsed
            );


        setTimeout(function () {

            if (finished) return;

            finished = true;


            // Loader fade
            loader.classList.add(
                "loader-hidden"
            );


            // Scroll restore
            document.documentElement.style.overflow =
                "";

            document.body.style.overflow =
                "";


            // Fade complete
            setTimeout(function () {

                if (loader.parentNode) {

                    loader.parentNode.removeChild(
                        loader
                    );

                }

            }, FADE_TIME);


        }, remaining);

    }


    // ==================================================
    // WAIT FOR FIRST HOMEPAGE IMAGE
    // ==================================================

    if (firstHeroImage) {

        /*
           Image cached/already loaded
        */
        if (
            firstHeroImage.complete &&
            firstHeroImage.naturalWidth > 0
        ) {

            finishLoader();

        } else {

            /*
               First hero image actually loaded
            */
            firstHeroImage.addEventListener(
                "load",
                finishLoader,
                { once: true }
            );


            /*
               Broken image ho toh loader
               forever stuck nahi hoga
            */
            firstHeroImage.addEventListener(
                "error",
                finishLoader,
                { once: true }
            );

        }

    } else {

        finishLoader();

    }


    // ==================================================
    // SAFETY TIMEOUT
    // ==================================================

    setTimeout(
        finishLoader,
        MAXIMUM_TIME
    );


})();