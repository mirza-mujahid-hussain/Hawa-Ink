/* Poetry page: search, sort, theme filter and saved poems */
(function () {
  const H = window.HI, params = new URLSearchParams(location.search);
  const state = {q: params.get("q") || "", cat: H.CATS[params.get("cat")] ? params.get("cat") : "all", sort: "new", fav: false};
  const input = H.$("#q"), sort = H.$("#sort");
  input.value = state.q;

  function chips() {
    const all = [["all", "All"], ...Object.entries(H.CATS)];
    H.$("#chips").innerHTML = all.map(([k, v]) => `<button class="chip ${state.cat === k ? "on" : ""}" data-cat="${k}">${v}</button>`).join("") +
      `<button class="chip ${state.fav ? "on" : ""}" data-fav="1">Saved (${H.getFavs().length})</button>`;
  }
  function render() {
    const q = state.q.toLowerCase(), favs = H.getFavs();
    let list = H.POEMS.filter(p => (state.cat === "all" || p.c === state.cat) && (!state.fav || favs.includes(p.id)) && (p.t + p.x + H.poet(p.p).name).toLowerCase().includes(q));
    if (state.sort === "az") list.sort((a, b) => a.t.localeCompare(b.t));
    if (state.sort === "short") list.sort((a, b) => a.x.length - b.x.length);
    H.$("#count").textContent = list.length + (list.length === 1 ? " poem" : " poems");
    H.$("#results").innerHTML = list.map(H.poemCard).join("") || '<p class="empty">No poems match. Clear the search or choose another theme.</p>';
    chips();
  }
  input.addEventListener("input", e => { state.q = e.target.value; render(); });
  sort.addEventListener("change", e => { state.sort = e.target.value; render(); });
  H.$("#chips").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.fav) state.fav = !state.fav; else state.cat = b.dataset.cat;
    render();
  });
  document.addEventListener("hi:favs", render);
  document.addEventListener("keydown", e => { if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) { e.preventDefault(); input.focus(); } });
  render();
})();
