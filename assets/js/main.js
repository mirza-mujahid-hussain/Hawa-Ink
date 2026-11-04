/* Hawa & Ink: shared script (data, header, footer, poem reader, helpers).
   Loaded by every page. Page-specific logic lives in pages/<name>/<name>.js */
(function () {
"use strict";
const PAGES=[["home","Home"],["poetry","Poetry"],["quotes","Quotes"],["categories","Categories"],["poets","Poets"],["journal","Journal"],["about","About"]];
const CATS={love:"Love",loss:"Loss & Memory",nature:"Nature",city:"City Life",faith:"Faith & Doubt",home:"Home & Family"};
const POETS=[
{id:"nadia-rahman",name:"Nadia Rahman",city:"Karachi",bio:"Writes short, quiet poems about sea air, night buses and the people who wait at bus stops."},
{id:"imran-sheikh",name:"Imran Sheikh",city:"Lahore",bio:"A retired schoolteacher who turned to verse at sixty. His poems are plain-spoken and often begin in a kitchen."},
{id:"zara-malik",name:"Zara Malik",city:"Islamabad",bio:"Poet and translator, drawn to mountains, weather and the small doubts that sit beside belief."},
{id:"omar-farooq",name:"Omar Farooq",city:"Peshawar",bio:"Performs at open-mic nights across the country. His work moves between longing and dry humour."},
{id:"hina-baig",name:"Hina Baig",city:"Quetta",bio:"Writes about orchards, inherited recipes and the way grief rearranges a house."},
{id:"daniyal-ali",name:"Daniyal Ali",city:"Multan",bio:"A young poet writing about rickshaws, rooftops and falling in love in traffic."}];
const POEMS=[
{id:"p1",t:"Low Tide at Clifton",p:"nadia-rahman",c:"nature",x:"The sea pulls back its wide grey sleeve\nand shows us what it kept:\na shoe, a shell, a child’s lost name\nwritten where the water slept.\n\nWe walk the edge of what returns\nand what will not return,\nand learn the tide has two kinds of mercy:\nto give, and to let us learn."},
{id:"p2",t:"Last Bus, Number Nine",p:"nadia-rahman",c:"city",x:"The last bus hums its yellow hymn.\nA man asleep against the glass\ndreams of a village I will never see.\nThe streetlights count us as we pass."},
{id:"p3",t:"What My Mother Kept",p:"hina-baig",c:"home",x:"A tin of buttons, none that match.\nA thread wound round a pencil stub.\nShe kept the small things in case\nthe large things came apart.\n\nThey did. And now I hold the tin\nand every button is a day."},
{id:"p4",t:"Tea for Two, Poured for One",p:"imran-sheikh",c:"loss",x:"I still fill two cups out of habit,\nthen stand there, steam between us,\nas if the second one might cool\nand teach me how to stop."},
{id:"p5",t:"Doubt, Folded Small",p:"zara-malik",c:"faith",x:"I carry doubt the way you carry\na letter you have not yet opened:\nfolded small, close to the chest,\nwarm from being held so long.\n\nPerhaps the answer is the holding.\nPerhaps the paper is blank, and sacred."},
{id:"p6",t:"Rain on the Rooftop",p:"daniyal-ali",c:"love",x:"You said the monsoon was only weather.\nThen we stood under one dupatta,\nlaughing at the sky for being so loud,\nand I stopped believing in only."},
{id:"p7",t:"Orchard Arithmetic",p:"hina-baig",c:"nature",x:"Nine trees, each with its own weather.\nOne gave early, one gave late,\none gave nothing for a year\nand then gave everything at once.\n\nI learned to count without expecting."},
{id:"p8",t:"Open Mic, Third Row",p:"omar-farooq",c:"love",x:"I wrote you twelve lines and a joke,\nthen read only the joke aloud.\nYou laughed in the third row.\nThe twelve lines are still in my pocket."},
{id:"p9",t:"Traffic Signal, Red",p:"daniyal-ali",c:"city",x:"Red light. A boy sells jasmine strings.\nThe air smells briefly of a wedding\nthat is happening somewhere else.\nGreen. The wedding ends. We go."},
{id:"p10",t:"The Teacher’s Kitchen",p:"imran-sheikh",c:"home",x:"Onions first. Always the onions.\nThen the radio, then the long talk\nof oil and patience.\nNo lesson plan ever taught me this."},
{id:"p11",t:"Monsoon Letter",p:"daniyal-ali",c:"love",x:"I wrote your name on the window fog\nand the rain corrected my spelling\nby erasing it, slowly,\nso I could write it again."},
{id:"p12",t:"Grandfather’s Watch",p:"imran-sheikh",c:"loss",x:"It stopped at ten past four.\nWe never wound it after.\nSome clocks are kept not for the time\nbut for the hour that stayed."},
{id:"p13",t:"Before the Azaan",p:"zara-malik",c:"faith",x:"The street holds its breath at dawn.\nA sparrow tests the silence once,\nand then the whole sky clears its throat\nand the day begins to listen."},
{id:"p14",t:"Chai Stall Philosophy",p:"omar-farooq",c:"city",x:"Three sugars, says the rickshaw driver,\nbecause the road is already bitter.\nThe steam rises like a small, warm argument\nagainst the whole grey evening."},
{id:"p15",t:"Snow Above Murree",p:"nadia-rahman",c:"nature",x:"The pines wear their white coats\nand pretend they have always been quiet.\nUnder the hush, a stream keeps talking,\nlow, to no one, to itself."},
{id:"p16",t:"Wedding Week",p:"hina-baig",c:"home",x:"Cousins sleeping in rows on the floor.\nThe smell of henna, cardamom, rain.\nSomeone is always cooking, someone laughing,\nand the house is a held note."}];
const QUOTES=[["Poetry is what remains when the explaining is finished.","nadia-rahman"],["Grief is love with nowhere left to go, so it learns to sit quietly.","hina-baig"],["Say the small true thing; the large ones will follow.","imran-sheikh"],["Doubt is only faith, awake at night.","zara-malik"],["Write it badly first. Bad drafts are how good ones get started.","omar-farooq"],["A city is a poem written by ten million people who never met.","daniyal-ali"],["Every kitchen is a library of someone’s love.","imran-sheikh"],["The tide teaches that leaving is also a way of returning.","nadia-rahman"],["Read slowly. Poems are not in a hurry, and neither are you.","zara-malik"],["Courage is reading the twelve lines instead of the joke.","omar-farooq"],["Some silences are full sentences.","zara-malik"],["A good poem leaves a window open behind you.","nadia-rahman"],["Love is mostly noticing.","daniyal-ali"],["What we keep tells the story of what we lost.","hina-baig"],["Patience is a kind of prayer with its sleeves rolled up.","imran-sheikh"],["Stage lights fade; the line you meant stays.","omar-farooq"]];
const ARTS=[{t:"How to read a poem slowly",tag:"Guide",m:3,x:"Read it once for sound and once for meaning. Read it aloud, pause at every line break, and notice the word you want to linger on. A poem rarely gives everything on the first pass, and that is by design."},{t:"Five habits of a daily writer",tag:"Craft",m:4,x:"Write at the same hour, keep a notebook within reach, collect odd words, read one poem before you write, and finish drafts badly before improving them. Consistency beats inspiration."},{t:"Why short poems stay with us",tag:"Essay",m:3,x:"Brevity forces choice. Every word has to carry weight, so a four-line poem can feel larger than a page of prose. The reader’s imagination does the rest of the work."},{t:"Writing prompts for quiet evenings",tag:"Prompts",m:2,x:"Describe a doorway you walk through every day. Write about a sound from your childhood home. Begin a poem with the word ‘still’. Write a letter to a place you have left."}];
const ROOT = document.body.dataset.root || "", PAGE = document.body.dataset.page || "";
const L = {home: ROOT + "index.html", poetry: ROOT + "pages/poetry/poetry.html", quotes: ROOT + "pages/quotes/quotes.html", categories: ROOT + "pages/categories/categories.html", poets: ROOT + "pages/poets/poets.html", journal: ROOT + "pages/journal/journal.html", about: ROOT + "pages/about/about.html", signup: ROOT + "pages/signup/signup.html", signin: ROOT + "pages/signin/signin.html"};
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c]));
const ls = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? d; } catch (e) { return d; } };
const lset = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
const poet = id => POETS.find(p => p.id === id), poem = id => POEMS.find(p => p.id === id);
const mins = p => Math.max(1, Math.round(p.x.split(/\s+/).length / 150));
const ini = n => n.split(" ").map(w => w[0]).join("");
let favs = ls("favs", []), fs = 1.3, cur = null, returnFocus = null;
const me = () => ls("me", null);
const savedTheme = ls("theme", null);
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

function toast(m) {
  let t = $("#toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
  t.textContent = m; t.classList.add("show"); clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), 1800);
}
function copy(txt) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(txt).then(() => toast("Copied"), () => fallbackCopy(txt));
  } else {
    fallbackCopy(txt);
  }
}
function fallbackCopy(txt) {
  try {
    const ta = document.createElement("textarea");
    ta.value = txt; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    toast(ok ? "Copied" : "Copy failed");
  } catch (e) {
    toast("Copy is not available");
  }
}
async function hash(s) {
  try { const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)); return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join(""); }
  catch (e) { return btoa(unescape(encodeURIComponent(s))); }
}

/* ---------- Reusable card renderers ---------- */
const poemCard = p => `<article class="card" data-open="${p.id}" tabindex="0" role="button" aria-label="Read ${esc(p.t)}"><div class="meta"><span class="tag">${CATS[p.c]}</span>${mins(p)} min read${favs.includes(p.id) ? " · Saved" : ""}</div><h3>${p.t}</h3><p class="exc">${p.x.split("\n").slice(0, 2).join("\n")}…</p><div class="meta" style="margin-top:auto">${esc(poet(p.p).name)} · ${poet(p.p).city}</div></article>`;
const quoteCard = (q, i) => `<blockquote class="quote"><p>${q[0]}</p><div class="meta"><a href="${L.poets}?poet=${q[1]}">${esc(poet(q[1]).name)}</a><span style="margin-left:auto;display:flex;gap:8px"><button data-copyq="${i}">Copy</button><button data-img="${i}">Image</button></span></div></blockquote>`;
const poetCard = p => `<a class="card" href="${L.poets}?poet=${p.id}"><div class="av">${ini(p.name)}</div><h3>${esc(p.name)}</h3><div class="meta">${p.city} · ${POEMS.filter(x => x.p === p.id).length} poems</div><p class="exc" style="font-style:normal;font-family:inherit;font-size:.95rem">${p.bio}</p></a>`;
const catCard = ([k, v]) => { const n = POEMS.filter(p => p.c === k).length; return `<a class="cat" href="${L.poetry}?cat=${k}"><h3>${v}</h3><div class="meta">Poems filed under this theme</div><i>${n}</i></a>`; };

/* ---------- Header and footer ---------- */
function buildHeader() {
  const h = $("#site-header"); if (!h) return;
  const items = [["home", "Home"], ["poetry", "Poetry"], ["quotes", "Quotes"], ["categories", "Categories"], ["poets", "Poets"], ["journal", "Journal"], ["about", "About"]], u = me();
  h.innerHTML = `<div class="wrap"><a class="logo" href="${L.home}"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="15" fill="#0b2b25"/><path d="M9 22c3-1 5-4 7-10 2 6 4 9 7 10M16 12V8" stroke="#d9a441" stroke-width="2" fill="none" stroke-linecap="round"/></svg>Hawa &amp; Ink</a><nav id="nav" aria-label="Main">${items.map(([k, l]) => `<a href="${L[k]}" class="${k === PAGE ? "on" : ""}"${k === PAGE ? ' aria-current="page"' : ""}>${l}</a>`).join("")}</nav><button class="ib" data-act="search" aria-label="Search everything (Ctrl K)">⌕</button><button class="ib" data-act="theme" aria-label="Toggle dark mode">◐</button>${u ? `<span class="meta">Hi, ${esc(u.n.split(" ")[0])}</span><button class="acct" data-act="logout">Sign out</button>` : `<a class="acct" href="${L.signin}">Sign in</a>`}<button class="ib" id="menu" data-act="menu" aria-label="Menu" aria-expanded="false">☰</button></div>`;
}
function buildFooter() {
  const f = $("#site-footer"); if (!f) return;
  f.innerHTML = `<div class="wrap"><div><div class="serif" style="font-size:1.4rem;color:var(--ink)">Hawa &amp; Ink</div><p style="max-width:32ch">Short poems, memorable lines and the poets who write them.</p></div><div class="fcol"><b>Explore</b><a href="${L.poetry}">Poetry</a><a href="${L.quotes}">Quotes</a><a href="${L.categories}">Categories</a></div><div class="fcol"><b>Community</b><a href="${L.poets}">Poets</a><a href="${L.journal}">Journal</a><a href="${L.about}">About</a></div><div class="fcol"><b>Account</b><a href="${L.signin}">Sign in</a><a href="${L.signup}">Join free</a></div></div><div class="wrap" style="margin-top:24px"><span>© 2026 Hawa &amp; Ink. All poems, poets and quotes here are original sample content.</span></div>`;
}

/* ---------- Poem reader (modal) ---------- */
function overlay() { let o = $("#overlay"); if (!o) { o = document.createElement("div"); o.id = "overlay"; document.body.appendChild(o); } return o; }
function openPoem(id) {
  try { speechSynthesis.cancel(); } catch (e) {}
  const p = poem(id); if (!p) return;
  if (!cur) returnFocus = document.activeElement;
  cur = id;
  const f = favs.includes(id), a = poet(p.p);
  overlay().innerHTML = `<div class="ov" data-act="backdrop"><article class="reader" role="dialog" aria-modal="true" aria-label="${esc(p.t)}"><div class="meta"><span class="tag">${CATS[p.c]}</span>${mins(p)} min read</div><h2 style="margin-top:12px">${p.t}</h2><p class="meta" style="margin:8px 0 0">by <a href="${L.poets}?poet=${a.id}">${esc(a.name)}</a></p><div class="body" style="--fs:${fs}rem">${p.x}</div><div class="bar"><button data-act="speak">🔊 Listen</button><button data-act="fav">${f ? "Saved ✓" : "Save"}</button><button data-act="copy">Copy</button><button data-act="smaller">A−</button><button data-act="bigger">A+</button></div><div class="bar" style="margin-top:28px;justify-content:space-between"><button data-act="prev">← Previous</button><button data-act="close">Close</button><button data-act="next">Next →</button></div></article></div>`;
  document.body.style.overflow = "hidden";
  $("#poem-reader [data-act='close']").focus();
}
function closeP() {
  try { speechSynthesis.cancel(); } catch (e) {}
  overlay().innerHTML = ""; document.body.style.overflow = ""; cur = null;
  if (returnFocus && returnFocus.isConnected) returnFocus.focus();
  returnFocus = null;
}
function speak() {
  if (!("speechSynthesis" in window)) return toast("Audio is not supported in this browser");
  if (speechSynthesis.speaking) { speechSynthesis.cancel(); return; }
  const p = poem(cur), u = new SpeechSynthesisUtterance(p.t + ". " + p.x.replace(/\n+/g, ". ")); u.rate = .85; speechSynthesis.speak(u);
}
function toggleFav(id) {
  favs = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]; lset("favs", favs);
  toast(favs.includes(id) ? "Saved" : "Removed"); document.dispatchEvent(new Event("hi:favs"));
}
const copyQuote = i => copy("“" + QUOTES[i][0] + "” — " + poet(QUOTES[i][1]).name);
function quoteImg(i) {
  const c = document.createElement("canvas"); c.width = c.height = 1080; const g = c.getContext("2d");
  g.fillStyle = "#061f1a"; g.fillRect(0, 0, 1080, 1080); g.fillStyle = "#cfa95a"; g.font = "800 300px Georgia,serif"; g.fillText("“", 70, 330);
  g.fillStyle = "#eef2ee"; g.font = "italic 62px Georgia,serif"; let y = 430, l = "";
  for (const w of QUOTES[i][0].split(" ")) { if (g.measureText(l + w).width > 900) { g.fillText(l, 90, y); y += 84; l = ""; } l += w + " "; }
  g.fillText(l, 90, y); g.fillStyle = "#cfa95a"; g.font = "700 38px sans-serif"; g.fillText("— " + poet(QUOTES[i][1]).name, 90, y + 110);
  g.fillStyle = "#7e9a92"; g.font = "28px sans-serif"; g.fillText("Hawa & Ink", 90, 1010);
  c.toBlob(b => {
    if (!b) return toast("Could not create the image");
    const url = URL.createObjectURL(b), a = document.createElement("a");
    a.href = url; a.download = "quote.png"; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000); toast("Image downloaded");
  }, "image/png");
}

/* ---------- Search palette (header button or Ctrl+K) ---------- */
function openSearch() {
  if (!$("#overlay [role='dialog']")) returnFocus = document.activeElement;
  overlay().innerHTML = `<div class="ov" data-act="backdrop"><div class="reader cp" role="dialog" aria-modal="true" aria-label="Search"><input id="cpq" placeholder="Search poems, poets, quotes…" autocomplete="off" aria-label="Search"><div id="cpr"></div></div></div>`;
  document.body.style.overflow = "hidden"; $("#cpq").focus(); fillSearch("");
}
function fillSearch(v) {
  v = v.toLowerCase().trim(); const r = [];
  if (v) {
    POEMS.filter(p => (p.t + p.x).toLowerCase().includes(v)).forEach(p => r.push(["Poem", p.t, `data-open="${p.id}"`]));
    POETS.filter(p => p.name.toLowerCase().includes(v)).forEach(p => r.push(["Poet", p.name, `data-go="${L.poets}?poet=${p.id}"`]));
    QUOTES.forEach(x => { if (x[0].toLowerCase().includes(v)) r.push(["Quote", x[0], `data-go="${L.quotes}?q=${encodeURIComponent(v)}"`]); });
  } else {
    [["home", "Home"], ["poetry", "Poetry"], ["quotes", "Quotes"], ["categories", "Categories"], ["poets", "Poets"], ["journal", "Journal"], ["about", "About"]].forEach(([k, l]) => r.push(["Go to", l, `data-go="${L[k]}"`]));
  }
  $("#cpr").innerHTML = r.slice(0, 8).map(x => `<button class="cpi" ${x[2]}><span class="tag">${x[0]}</span> ${esc(x[1])}</button>`).join("") || '<p class="empty">No results. Try another word.</p>';
}

/* ---------- Home page ---------- */
function home() {
  const set = (id, h) => { const e = $(id); if (e) e.innerHTML = h; };
  const feat = ["p1", "p6", "p5", "p9"]; let hi = 0;
  const stage = () => { const p = poem(feat[hi]); set("#stage", `${p.x.split("\n").filter(Boolean).slice(0, 4).map((l, i) => `<div class="ln" style="animation-delay:${.3 + i * .45}s">${l}</div>`).join("")}<div class="by"><span>${p.t} · ${poet(p.p).name}</span><span><button data-open="${p.id}">Read</button> <button data-act="verse" aria-label="Next verse">Next</button></span></div>`); };
  window.__nextVerse = () => { hi = (hi + 1) % feat.length; stage(); };
  stage();
  const r = Object.values(CATS).concat(POETS.map(p => p.name)).join("  ✦  ") + "  ✦  "; set("#ribbon", r + r);
  set("#stats", [[POEMS.length, "Poems"], [QUOTES.length, "Quotes"], [POETS.length, "Poets"], [Object.keys(CATS).length, "Themes"]].map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join(""));
  set("#home-poems", POEMS.slice(0, 6).map(poemCard).join(""));
  const d = new Date().getDate() % QUOTES.length; set("#home-quote", quoteCard(QUOTES[d], d));
  set("#home-cats", Object.entries(CATS).map(catCard).join(""));
  set("#home-poets", POETS.slice(0, 3).map(poetCard).join(""));
  set("#home-journal", ARTS.slice(0, 3).map(a => `<a class="card" href="${L.journal}"><div class="meta"><span class="tag">${a.tag}</span>${a.m} min read</div><h3>${a.t}</h3></a>`).join(""));
}

/* ---------- Global events ---------- */
document.addEventListener("click", e => {
  const t = e.target; let o;
  if ((o = t.closest("[data-open]"))) return openPoem(o.dataset.open);
  if ((o = t.closest("[data-go]"))) { location.href = o.dataset.go; return; }
  if ((o = t.closest("[data-copyq]"))) return copyQuote(+o.dataset.copyq);
  if ((o = t.closest("[data-img]"))) return quoteImg(+o.dataset.img);
  if (!(o = t.closest("[data-act]"))) return;
  const a = o.dataset.act, i = POEMS.findIndex(p => p.id === cur);
  if (a === "backdrop") { if (t === o) closeP(); return; }
  if (a === "close") closeP();
  else if (a === "fav") { toggleFav(cur); openPoem(cur); }
  else if (a === "copy") { const p = poem(cur); copy(p.t + "\n\n" + p.x + "\n— " + poet(p.p).name); }
  else if (a === "speak") speak();
  else if (a === "smaller") { fs = Math.max(1, fs - .1); openPoem(cur); }
  else if (a === "bigger") { fs = Math.min(2, fs + .1); openPoem(cur); }
  else if (a === "prev") openPoem(POEMS[(i + POEMS.length - 1) % POEMS.length].id);
  else if (a === "next") openPoem(POEMS[(i + 1) % POEMS.length].id);
  else if (a === "search") openSearch();
  else if (a === "theme") { const r = document.documentElement, dark = r.dataset.theme ? r.dataset.theme === "dark" : matchMedia("(prefers-color-scheme:dark)").matches; r.dataset.theme = dark ? "light" : "dark"; lset("theme", r.dataset.theme); }
  else if (a === "menu") { const n = $("#nav"); const open = n.classList.toggle("open"); o.setAttribute("aria-expanded", String(open)); }
  else if (a === "logout") { lset("me", null); toast("Signed out"); buildHeader(); }
  else if (a === "verse") window.__nextVerse();
  else if (a === "rquote") { const k = Math.floor(Math.random() * QUOTES.length); $("#home-quote").innerHTML = quoteCard(QUOTES[k], k); }
  else if (a === "news") { const em = $("#em"); if (em && /^\S+@\S+\.\S+$/.test(em.value)) { toast("Subscribed (demo)"); em.value = ""; } else toast("Enter a valid email address"); }
  if (t.closest("#nav a")) { $("#nav")?.classList.remove("open"); $("#menu")?.setAttribute("aria-expanded", "false"); }
});
document.addEventListener("input", e => { if (e.target.id === "cpq") fillSearch(e.target.value); });
document.addEventListener("keydown", e => {
  const dialog = $("#overlay [role='dialog']");
  if (e.key === "Escape" && dialog) closeP();
  if (e.key === "Tab" && dialog) {
    const focusable = [...dialog.querySelectorAll("a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex='-1'])")];
    if (!focusable.length) { e.preventDefault(); dialog.focus(); return; }
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) { e.preventDefault(); first.focus(); }
  }
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); }
  if (e.key === "Enter" && e.target.matches && e.target.matches("[data-open]")) openPoem(e.target.dataset.open);
});
addEventListener("scroll", () => { const b = $("#prog"), d = document.documentElement; if (b) b.style.width = (scrollY / (d.scrollHeight - innerHeight || 1) * 100) + "%"; });

buildHeader(); buildFooter();
if (PAGE === "home") {
  home();
  document.addEventListener("hi:favs", () => {
    const el = $("#home-poems");
    if (el) el.innerHTML = POEMS.slice(0, 6).map(poemCard).join("");
  });
}

/* Shared API for the page scripts */
window.HI = {POEMS, POETS, QUOTES, CATS, ARTS, L, $, esc, ls, lset, poet, poem, mins, ini, toast, copy, hash, poemCard, quoteCard, poetCard, catCard, getFavs: () => favs, buildHeader};
})();
