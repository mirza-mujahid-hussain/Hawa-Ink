/* Journal page: expandable articles, one per row so every card lines up */
(function () {
  const H = window.HI;
  H.$("#articles").innerHTML = H.ARTS.map(a => `<details class="art"><summary><span class="at serif">${a.t}</span><span class="meta"><span class="tag">${a.tag}</span>${a.m} min read</span></summary><p>${a.x}</p></details>`).join("");
})();
