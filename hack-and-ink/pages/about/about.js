/* About page: site numbers and the demo contact form */
(function () {
  const H = window.HI;
  H.$("#about-stats").innerHTML = [[H.POEMS.length, "Poems"], [H.QUOTES.length, "Quotes"], [H.POETS.length, "Poets"], [Object.keys(H.CATS).length, "Themes"]].map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join("");
  H.$("#contact").addEventListener("submit", e => {
    e.preventDefault();
    const n = H.$("#cn").value.trim(), em = H.$("#ce").value.trim(), m = H.$("#cm").value.trim(), err = H.$("#err");
    if (n.length < 2) return err.textContent = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(em)) return err.textContent = "Enter a valid email address.";
    if (m.length < 5) return err.textContent = "Write a short message or poem.";
    err.textContent = ""; H.toast("Thank you, " + n.split(" ")[0]); e.target.reset();
  });
})();
