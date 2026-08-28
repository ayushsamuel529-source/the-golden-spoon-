document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("global-loader");
  if (!loader) return;

  const show = () => {
    loader.classList.remove("loader-hidden");
  };

  const hide = () => {
    loader.classList.add("loader-hidden");
  };

  // start hidden
  hide();

  // jab new page open hota hai to hide
  window.addEventListener("load", hide);

  document.addEventListener(
    "click",
    (e) => {
      const a = e.target.closest("a[href]");
      if (!a) return;

      // open in new tab
      if (a.target === "_blank") return;

      const href = (a.getAttribute("href") || "").trim();
      if (!href) return;

      // ignore special
      if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) return;

      // Same page anchor (#about, #reservation etc.)
      if (href.startsWith("#")) {
        show();
        setTimeout(hide, 800); // thoda time loader dikhne do
        return; // default scroll chalta rahega
      }

      // Other pages
      show();
      sessionStorage.setItem("globalLoaderNextPage", "1");
      // default navigation allow (preventDefault nahi)
    },
    true
  );

  // If coming from a click on another page:
  if (sessionStorage.getItem("globalLoaderNextPage") === "1") {
    show();
    sessionStorage.removeItem("globalLoaderNextPage");
  }
});