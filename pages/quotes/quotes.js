/* Quotes page: list with search, copy and image download */
(function () {
  const H = window.HI, box = H.$("#quote-list"), input = H.$("#qq");
  function render() {
    const q = input.value.toLowerCase();
    const items = H.QUOTES.map((x, i) => [x, i]).filter(([x]) => (x[0] + H.poet(x[1]).name).toLowerCase().includes(q));
    box.innerHTML = items.map(([x, i]) => H.quoteCard(x, i)).join("") || '<p class="empty">No quotes match your search.</p>';
  }
  input.value = new URLSearchParams(location.search).get("q") || "";
  input.addEventListener("input", render);
  render();
})();
