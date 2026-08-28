// ==================================================
// THE GOLDEN SPOON — LOADER
// ==================================================

(function () {

    const loader =
        document.getElementById("site-loader");

    if (!loader) return;


    // Minimum luxury-loader display time
    const MINIMUM_TIME = 1800;

    // Safety: forever stuck nahi hoga
    const MAXIMUM_TIME = 5000;

    // CSS fade duration
    const FADE_TIME = 800;


    const startTime =
        Date.now();

    let finished =
        false;


    // Loader ke waqt scrolling off
    document.documentElement.style.overflow =
        "hidden";

    document.body.style.overflow =
        "hidden";


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


            // Smooth fade
            loader.classList.add(
                "loader-hidden"
            );


            // Page scroll restore
            document.documentElement.style.overflow =
                "";

            document.body.style.overflow =
                "";


            // Fade complete → remove loader
            setTimeout(function () {

                if (loader.parentNode) {

                    loader.parentNode.removeChild(
                        loader
                    );

                }

            }, FADE_TIME);


        }, remaining);

    }


    // Actual page assets loaded
    if (
        document.readyState === "complete"
    ) {

        finishLoader();

    } else {

        window.addEventListener(
            "load",
            finishLoader,
            { once: true }
        );

    }


    // Safety timeout
    setTimeout(
        finishLoader,
        MAXIMUM_TIME
    );


})();