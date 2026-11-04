/* Categories page: one tile per theme, linking to the filtered poetry page */
(function () {
  const H = window.HI;
  H.$("#cat-grid").innerHTML = Object.entries(H.CATS).map(H.catCard).join("");
})();
