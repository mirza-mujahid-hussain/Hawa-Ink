/* Poets page: list of poets, or one poet's profile when ?poet=<id> is in the URL */
(function () {
  const H = window.HI, id = new URLSearchParams(location.search).get("poet"), p = id && H.poet(id);
  if (!p) { H.$("#poet-list").innerHTML = H.POETS.map(H.poetCard).join(""); return; }
  const poems = H.POEMS.filter(x => x.p === id), quotes = H.QUOTES.map((q, i) => [q, i]).filter(([q]) => q[1] === id);
  document.title = p.name + " | Hawa & Ink";
  H.$(".pagehead").remove();
  H.$("#poet-area").innerHTML = `<div class="pagehead"><a href="poets.html" class="meta">← All poets</a><div class="av" style="width:84px;height:84px;margin:20px 0;font-size:1.8rem">${H.ini(p.name)}</div><h1>${H.esc(p.name)}</h1><p class="meta" style="margin-top:8px">${p.city}</p><p style="max-width:60ch;font-size:1.15rem">${p.bio}</p></div>
  <div class="sec"><h2>Poems</h2></div><div class="grid">${poems.map(H.poemCard).join("")}</div>
  <div class="sec"><h2>Quotes</h2></div><div class="grid">${quotes.map(([q, i]) => H.quoteCard(q, i)).join("") || '<p class="empty">No quotes yet.</p>'}</div><div style="height:60px"></div>`;
})();
