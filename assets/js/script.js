// =========================================================
//  SETTINGS (change your settings here)
// =========================================================
const RESTAURANT = {
  name: "BS Smart",
  sub: "Fast Food & Restaurant",
  address: "Sector 5-J, North Karachi, near Kala School",
  map: "https://maps.app.goo.gl/kD19U42DTTHjdht58",
  phone: "0345-2183819 / 0312-2029588"
};
const CURRENCY = "Rs.";
const LOGO = "assets/img/logo.jpeg";

// Menu list. Items with category "Deals" only show in the Deals view.
// Har item ka id alag hona chahiye.
const MENU = [
  { id: 1, cat: "FastFood", name: "Zinger Burger", desc: "Crispy chicken zinger burger", price: 300, img: "" },
  { id: 2, cat: "FastFood", name: "Zinger Burger Cheese", desc: "Zinger burger with cheese", price: 350, img: "" },
  { id: 3, cat: "FastFood", name: "Zinger Burger Jumbo", desc: "Jumbo crispy chicken zinger burger", price: 450, img: "" },
  { id: 4, cat: "FastFood", name: "Beef Burger", desc: "Juicy beef burger", price: 300, img: "" },
  { id: 5, cat: "FastFood", name: "Beef Burger Cheese", desc: "Beef burger with cheese", price: 350, img: "" },
  { id: 6, cat: "FastFood", name: "Club Sandwich", desc: "Fresh chicken club sandwich", price: 400, img: "" },
  { id: 7, cat: "FastFood", name: "Chicken Sandwich", desc: "Delicious chicken sandwich", price: 450, img: "" },
  { id: 8, cat: "FastFood", name: "BBQ Sandwich", desc: "Chicken sandwich with BBQ flavor", price: 450, img: "" },
  { id: 9, cat: "FastFood", name: "Plan Fries", desc: "Fries", price: 150, img: "" },
  { id: 10, cat: "FastFood", name: "Mayo Fries", desc: "Mayo Yammi Fries", price: 200, img: "" },
  { id: 11, cat: "FastFood", name: "Cheese Fries", desc: "Cheese Yammi Fries", price: 200, img: "" },

  { id: 12, cat: "EXTRAS", name: "Paratha (SMALL)", desc: "Yammi", price: 50, img: "" },
  { id: 13, cat: "EXTRAS", name: "Paratha (LARGE)", desc: "Yammi", price: 100, img: "" },
  { id: 49, cat: "EXTRAS", name: "Chapati", desc: "Yammi", price: 20, img: "" },

  { id: 14, cat: "BBQ", name: "Zinger Roll", desc: "Crispy chicken zinger roll", price: 150, img: "" },
  { id: 15, cat: "BBQ", name: "Zinger Jumbo Roll", desc: "Jumbo crispy chicken zinger roll", price: 250, img: "" },
  { id: 16, cat: "BBQ", name: "Boti Roll", desc: "Chicken boti roll", price: 150, img: "" },
  { id: 17, cat: "BBQ", name: "Kabab Roll", desc: "Chicken kabab roll", price: 150, img: "" },
  { id: 18, cat: "BBQ", name: "Chicken Roll", desc: "Chicken roll", price: 150, img: "" },
  { id: 19, cat: "BBQ", name: "Chicken Mayo Garlic Roll", desc: "Chicken roll with mayo garlic sauce", price: 150, img: "" },
  { id: 20, cat: "BBQ", name: "Chicken Malai Boti Roll", desc: "Creamy chicken malai boti roll", price: 150, img: "" },
  { id: 21, cat: "BBQ", name: "Chicken Crispy Roll", desc: "Crispy chicken roll", price: 150, img: "" },

  { id: 22, cat: "Pizza", name: "Chicken Fajita (SMALL)", desc: "Chicken fajita pizza", price: 300, img: "" },
  { id: 23, cat: "Pizza", name: "Chicken Fajita (MEDIUM)", desc: "Chicken fajita pizza", price: 500, img: "" },
  { id: 24, cat: "Pizza", name: "Chicken Fajita (LARGE)", desc: "Chicken fajita pizza", price: 700, img: "" },

  { id: 25, cat: "Pizza", name: "Chicken Tikka (SMALL)", desc: "Chicken tikka pizza", price: 300, img: "" },
  { id: 26, cat: "Pizza", name: "Chicken Tikka (MEDIUM)", desc: "Chicken tikka pizza", price: 500, img: "" },
  { id: 27, cat: "Pizza", name: "Chicken Tikka (LARGE)", desc: "Chicken tikka pizza", price: 700, img: "" },

  { id: 28, cat: "Pizza", name: "Chicken Malai (SMALL)", desc: "Chicken malai pizza", price: 300, img: "" },
  { id: 29, cat: "Pizza", name: "Chicken Malai (MEDIUM)", desc: "Chicken malai pizza", price: 500, img: "" },
  { id: 30, cat: "Pizza", name: "Chicken Malai (LARGE)", desc: "Chicken malai pizza", price: 700, img: "" },

  { id: 31, cat: "Pizza", name: "BBQ Chicken (SMALL)", desc: "BBQ chicken pizza", price: 300, img: "" },
  { id: 32, cat: "Pizza", name: "BBQ Chicken (MEDIUM)", desc: "BBQ chicken pizza", price: 500, img: "" },
  { id: 33, cat: "Pizza", name: "BBQ Chicken (LARGE)", desc: "BBQ chicken pizza", price: 700, img: "" },

  { id: 34, cat: "Pizza", name: "Chicken Supreme (SMALL)", desc: "Chicken supreme pizza", price: 300, img: "" },
  { id: 35, cat: "Pizza", name: "Chicken Supreme (MEDIUM)", desc: "Chicken supreme pizza", price: 500, img: "" },
  { id: 36, cat: "Pizza", name: "Chicken Supreme (LARGE)", desc: "Chicken supreme pizza", price: 700, img: "" },

  { id: 37, cat: "Pizza", name: "Chicken Shish (SMALL)", desc: "Chicken shish pizza", price: 300, img: "" },
  { id: 38, cat: "Pizza", name: "Chicken Shish (MEDIUM)", desc: "Chicken shish pizza", price: 500, img: "" },
  { id: 39, cat: "Pizza", name: "Chicken Shish (LARGE)", desc: "Chicken shish pizza", price: 700, img: "" },

  { id: 40, cat: "Pizza", name: "Chicken Cheese (SMALL)", desc: "Chicken cheese pizza", price: 300, img: "" },
  { id: 41, cat: "Pizza", name: "Chicken Cheese (MEDIUM)", desc: "Chicken cheese pizza", price: 500, img: "" },
  { id: 42, cat: "Pizza", name: "Chicken Cheese (LARGE)", desc: "Chicken cheese pizza", price: 700, img: "" },

  { id: 43, cat: "Pizza", name: "Vegetable (SMALL)", desc: "Fresh vegetable pizza", price: 300, img: "" },
  { id: 44, cat: "Pizza", name: "Vegetable (MEDIUM)", desc: "Fresh vegetable pizza", price: 500, img: "" },
  { id: 45, cat: "Pizza", name: "Vegetable (LARGE)", desc: "Fresh vegetable pizza", price: 700, img: "" },

  { id: 46, cat: "Pizza", name: "Special (BS Smart) (SMALL)", desc: "Special signature pizza", price: 400, img: "" },
  { id: 47, cat: "Pizza", name: "Special (BS Smart) (MEDIUM)", desc: "Special signature pizza", price: 700, img: "" },
  { id: 48, cat: "Pizza", name: "Special (BS Smart) (LARGE)", desc: "Special signature pizza", price: 1000, img: "" }
];

// =========================================================
//  HELPERS
// =========================================================
const $ = id => document.getElementById(id);
const fmt = n => CURRENCY + " " + Math.round(n).toLocaleString("en-PK");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const lsGet = (k, fb) => { try { return JSON.parse(localStorage.getItem(k)) ?? fb; } catch (e) { return fb; } };
const lsSet = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } };
const isDeal = m => m.cat === "Deals";
const reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = window.matchMedia && matchMedia("(hover:hover)").matches;

let view = "menu", cat = "All", q = "";

// =========================================================
//  TOAST + CONFETTI
// =========================================================
let toastTimer;
function toast(msg) {
  let t = $("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1700);
}

function confetti() {
  if (reduceMotion) return;
  const cols = ["#f5b800", "#0d0d0d", "#ffffff", "#1b7a2f", "#e5483b"];
  for (let i = 0; i < 46; i++) {
    const c = document.createElement("i");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = cols[i % cols.length];
    c.style.animationDuration = (1.2 + Math.random() * 1.2) + "s";
    c.style.animationDelay = Math.random() * .3 + "s";
    c.style.setProperty("--dx", (Math.random() * 160 - 80) + "px");
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2800);
  }
}

function spark(host, x, y) {
  const s = document.createElement("i");
  s.className = "spark";
  s.style.left = x + "px";
  s.style.top = y + "px";
  s.style.setProperty("--sx", (Math.random() * 40 - 20) + "px");
  s.style.setProperty("--sy", (Math.random() * 40 + 10) + "px");
  host.appendChild(s);
  setTimeout(() => s.remove(), 700);
}

// =========================================================
//  MENU / DEALS: switch, tabs, cards
// =========================================================
const catList = () => ["All", ...new Set(MENU.filter(m => !isDeal(m)).map(m => m.cat))];
const matchQ = m => (m.name + " " + (m.desc || "") + " " + m.cat).toLowerCase().includes(q);

function visibleItems() {
  return MENU.filter(m => {
    if (!matchQ(m)) return false;
    if (view === "deals") return isDeal(m);
    if (isDeal(m)) return false;
    return cat === "All" || m.cat === cat;
  });
}

function swap() {
  const g = $("menu");
  g.classList.remove("swap");
  void g.offsetWidth;
  g.classList.add("swap");
}

function setView(v, scroll) {
  view = v;
  const vs = $("vswitch");
  vs.dataset.view = v;
  vs.querySelectorAll(".vs-btn").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.view === v)));
  $("secTitle").textContent = v === "deals" ? "🔥 Hot Deals" : "Our menu";
  $("search").placeholder = v === "deals" ? "Search deals" : "Search food (e.g. burger, pizza, biryani)";
  renderTabs();
  renderMenu();
  swap();
  if (scroll) $("menuSec").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
}

function renderTabs() {
  const box = $("tabs");
  box.style.display = view === "deals" ? "none" : "";
  const cats = catList();
  if (!cats.includes(cat)) cat = "All";
  box.innerHTML = cats.map(c =>
    `<button class="tab" type="button" aria-pressed="${c === cat}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
}

function renderSpecial() {
  const box = $("special");
  const deals = MENU.filter(isDeal);
  if (view !== "deals" || !deals.length || q) { box.className = "special"; box.innerHTML = ""; return; }
  const m = deals[Math.floor(Date.now() / 864e5) % deals.length];
  box.className = "special show";
  box.innerHTML = `
    <div class="sp-l"><small>⭐ TODAY'S SPECIAL DEAL</small><h3>${esc(m.name)}</h3><p>${esc(m.desc || "")}</p></div>
    <div class="sp-r"><span class="price">${fmt(m.price)}</span></div>`;
}

function renderMenu() {
  const list = visibleItems();
  const nDeals = MENU.filter(isDeal).length;
  $("cntMenu").textContent = MENU.length - nDeals;
  $("cntDeals").textContent = nDeals;

  const empty = view === "deals" && !nDeals ? "No deals right now." : "No items found. Try another name.";

  $("menu").innerHTML = list.length ? list.map((m, i) =>
    `<article class="item${isDeal(m) ? " deal" : ""}" style="animation-delay:${Math.min(i, 14) * 45}ms">
      ${m.img ? `<img class="em" src="${esc(m.img)}" alt="${esc(m.name)}" loading="lazy" onerror="this.style.display='none'">` : ""}
      <h3>${esc(m.name)}</h3>
      <p>${esc(m.desc || "")}</p>
      <span class="price">${fmt(m.price)}</span>
    </article>`).join("") : `<div class="no-result">${empty}</div>`;

  renderSpecial();
}

// =========================================================
//  EVENTS
// =========================================================
$("search").addEventListener("input", () => { q = $("search").value.trim().toLowerCase(); renderMenu(); });
$("tabs").addEventListener("click", e => {
  const b = e.target.closest(".tab");
  if (!b) return;
  cat = b.dataset.c;
  renderTabs();
  renderMenu();
  swap();
});
$("vswitch").addEventListener("click", e => {
  const b = e.target.closest(".vs-btn");
  if (b) setView(b.dataset.view);
});
$("menuBtn").onclick = () => setView("menu", true);
$("dealsBtn").onclick = () => setView("deals", true);

const baseTitle = document.title;
document.addEventListener("visibilitychange", () => {
  document.title = document.hidden ? "Come back 🍔 BS Smart" : baseTitle;
});

// =========================================================
//  RIPPLE + 3D TILT
// =========================================================
document.addEventListener("pointerdown", e => {
  const b = e.target.closest(".btn-gold,.btn-ghost,.nav-cta,.tab,.vs-btn");
  if (!b || reduceMotion) return;
  const r = b.getBoundingClientRect(), d = Math.max(r.width, r.height);
  const s = document.createElement("span");
  s.className = "ripple";
  s.style.width = s.style.height = d + "px";
  s.style.left = (e.clientX - r.left - d / 2) + "px";
  s.style.top = (e.clientY - r.top - d / 2) + "px";
  b.appendChild(s);
  setTimeout(() => s.remove(), 600);
});

(function () {
  if (reduceMotion || !canHover) return;
  const grid = $("menu");
  let cur = null;
  const reset = c => { c.style.removeProperty("--rx"); c.style.removeProperty("--ry"); };
  grid.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;
    const c = e.target.closest(".item");
    if (cur && cur !== c) reset(cur);
    cur = c;
    if (!c) return;
    const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    c.style.setProperty("--ry", ((x - .5) * 10).toFixed(2) + "deg");
    c.style.setProperty("--rx", ((.5 - y) * 10).toFixed(2) + "deg");
    c.style.setProperty("--mx", (x * 100) + "%");
    c.style.setProperty("--my", (y * 100) + "%");
  });
  grid.addEventListener("pointerleave", () => { if (cur) reset(cur); cur = null; });

  document.querySelectorAll(".feat").forEach(c => {
    c.addEventListener("pointermove", e => {
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      c.style.setProperty("--ry", ((x - .5) * 14).toFixed(2) + "deg");
      c.style.setProperty("--rx", ((.5 - y) * 14).toFixed(2) + "deg");
    });
    c.addEventListener("pointerleave", () => { c.style.removeProperty("--rx"); c.style.removeProperty("--ry"); });
  });
})();

// =========================================================
//  HERO: greeting, floating food, spotlight, 3D logo, orbit, scooter
// =========================================================
(function () {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const g = $("greet");
  if (g) {
    const h = new Date().getHours();
    g.textContent = h < 5 ? "Good night 🌙" : h < 12 ? "Good morning ☀️" : h < 16 ? "Lunch time 🍽️" : h < 19 ? "Good evening 🌇" : "Good night 🌙";
  }

  const fl = $("floaters");
  if (fl && !reduceMotion) {
    const em = ["🍔", "🍕", "🍟", "🌭", "🥤", "🍗", "🌮", "🍩"];
    for (let i = 0; i < 14; i++) {
      const s = document.createElement("span");
      s.textContent = em[i % em.length];
      s.style.left = (Math.random() * 96) + "%";
      s.style.fontSize = (18 + Math.random() * 26) + "px";
      s.style.animationDuration = (9 + Math.random() * 9) + "s";
      s.style.animationDelay = (-Math.random() * 14) + "s";
      fl.appendChild(s);
    }
  }

  const wrap = $("logoWrap");

  if (wrap && !reduceMotion) {
    const o = document.createElement("div");
    o.className = "orbit";
    const list = ["🍔", "🍕", "🍟", "🍗", "🥤", "🌮"];
    list.forEach((e, i) => {
      const s = document.createElement("span"), a = Math.PI * 2 * i / list.length;
      s.style.left = (50 + 50 * Math.cos(a)) + "%";
      s.style.top = (50 + 50 * Math.sin(a)) + "%";
      s.innerHTML = "<i>" + e + "</i>";
      o.appendChild(s);
    });
    wrap.appendChild(o);
  }

  if (!reduceMotion) {
    const s = document.createElement("div");
    s.className = "scooter";
    s.innerHTML = "<i>🛵</i>";
    hero.appendChild(s);
  }

  let taps = 0, tapT;
  if (wrap) wrap.addEventListener("click", () => {
    taps++;
    clearTimeout(tapT);
    tapT = setTimeout(() => { taps = 0; }, 1500);
    if (taps >= 5) { taps = 0; confetti(); toast("Good Food, Good Mood 😄"); }
  });

  if (reduceMotion || !canHover) return;

  let last = 0;
  hero.addEventListener("pointermove", e => {
    const r = hero.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    hero.style.setProperty("--hx", x + "px");
    hero.style.setProperty("--hy", y + "px");
    if (wrap) {
      const w = wrap.getBoundingClientRect();
      const dx = (e.clientX - (w.left + w.width / 2)) / r.width;
      const dy = (e.clientY - (w.top + w.height / 2)) / r.height;
      wrap.style.transform = `perspective(800px) rotateY(${(dx * 18).toFixed(2)}deg) rotateX(${(-dy * 18).toFixed(2)}deg)`;
    }
    const now = performance.now();
    if (now - last > 45) { last = now; spark(hero, x, y); }
  });
  hero.addEventListener("pointerleave", () => { if (wrap) wrap.style.transform = ""; });

  hero.querySelectorAll(".magnetic").forEach(b => {
    b.addEventListener("pointermove", e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${((e.clientX - r.left - r.width / 2) * .2).toFixed(1)}px, ${((e.clientY - r.top - r.height / 2) * .3).toFixed(1)}px)`;
    });
    b.addEventListener("pointerleave", () => { b.style.transform = ""; });
  });
})();

// =========================================================
//  PAGE ANIMATIONS: ticker, splash, scroll, reveal
// =========================================================
(function () {
  const t = $("tickerTrack");
  if (!t) return;
  const items = ["🔥 Hot deals running now", "🍔 Fresh & piping hot", "🛵 Dine-in · Takeaway · Delivery", "⭐ Good Food, Good Mood"];
  const half = [].concat(items, items, items).map(s => `<span>${s}</span>`).join("");
  t.innerHTML = half + half;
})();

(function () {
  const s = $("splash");
  if (!s) return;
  let seen = false;
  try { seen = sessionStorage.getItem("bsMenuSplash") === "1"; sessionStorage.setItem("bsMenuSplash", "1"); } catch (e) { }
  if (seen) { s.remove(); return; }
  setTimeout(() => { s.classList.add("hide"); setTimeout(() => s.remove(), 600); }, 1200);
})();

const navEl = document.querySelector(".nav");
const prog = $("progress");
const toTop = document.createElement("button");
toTop.id = "toTop";
toTop.type = "button";
toTop.setAttribute("aria-label", "Back to top");
toTop.textContent = "↑";
toTop.onclick = () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
document.body.appendChild(toTop);

function onScroll() {
  const y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
  if (navEl) navEl.classList.toggle("scrolled", y > 10);
  toTop.classList.toggle("show", y > 500);
  if (prog) prog.style.width = (h > 0 ? y / h * 100 : 0) + "%";
}
window.addEventListener("scroll", onScroll, { passive: true });

(function () {
  const rev = document.querySelectorAll(".sec-title,.vswitch,.search,.tabs,.foot-info,.foot-bottom,.ask");
  rev.forEach(el => el.classList.add("reveal"));
  const feats = $("features");
  const all = feats ? [...rev, feats] : [...rev];
  if (!("IntersectionObserver" in window)) { all.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .12 });
  all.forEach(el => io.observe(el));
})();

// =========================================================
//  CLOCK, DARK MODE, FOOTER YEAR
// =========================================================
function tickClock() {
  const n = new Date();
  const t = $("clockTime"), d = $("clockDate");
  if (t) t.textContent = n.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
  if (d) d.textContent = n.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short", year: "numeric" });
}

(function () {
  const b = $("darkBtn");
  document.body.classList.toggle("dark", !!lsGet("bsMenuDark", false));
  if (!b) return;
  const paint = () => { b.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙"; };
  b.onclick = () => {
    document.body.classList.toggle("dark");
    lsSet("bsMenuDark", document.body.classList.contains("dark"));
    paint();
  };
  paint();
})();

const yr = $("yr");
if (yr) yr.textContent = new Date().getFullYear();

// =========================================================
//  START
// =========================================================
setView("menu", false);
tickClock();
setInterval(tickClock, 1000);
onScroll();

// =========================================================
//  EXTRA ANIMATIONS: cursor trail, golden glow, typing placeholder
// =========================================================
(function () {
  if (reduceMotion || !canHover) return;

  const em = ["✨", "🍔", "🍕", "🍟", "⭐"];
  let last = 0;
  document.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;
    const n = performance.now();
    if (n - last < 70) return;
    last = n;
    const s = document.createElement("i");
    s.className = "trail";
    s.textContent = em[Math.random() * em.length | 0];
    s.style.left = e.clientX + "px";
    s.style.top = e.clientY + "px";
    s.style.setProperty("--tx", (Math.random() * 60 - 30) + "px");
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 900);
  });

  const g = document.createElement("div");
  g.className = "cglow";
  document.body.appendChild(g);
  let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
  addEventListener("pointermove", e => { tx = e.clientX; ty = e.clientY; g.style.opacity = 1; });
  document.addEventListener("mouseleave", () => { g.style.opacity = 0; });
  (function f() {
    x += (tx - x) * .12;
    y += (ty - y) * .12;
    g.style.transform = `translate(${x}px,${y}px)`;
    requestAnimationFrame(f);
  })();
})();

(function () {
  const inp = $("search");
  if (!inp || reduceMotion) return;
  const words = ["burger", "pizza", "biryani", "zinger", "chai", "fries"];
  let w = 0, c = 0, del = false;
  (function loop() {
    let d = 110;
    if (view === "menu" && document.activeElement !== inp && !inp.value) {
      const word = words[w];
      c += del ? -1 : 1;
      inp.placeholder = "Search food: " + word.slice(0, c) + "|";
      if (!del && c === word.length) { del = true; d = 1200; }
      else if (del && c === 0) { del = false; w = (w + 1) % words.length; d = 300; }
    }
    setTimeout(loop, d);
  })();
})();
