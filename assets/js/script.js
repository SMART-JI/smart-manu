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
const LOGO = "assets/img/logo.jpeg";   // shown for items without a photo

// Keep this list the same as your main site's menu.
// Items with category "Deals" only show in the Deals view.
const MENU = [
  { cat: "Deals", name: "Solo Deal", desc: "Zinger Burger + Fries + Soft Drink", price: 850, img: "" },
  { cat: "Deals", name: "Couple Deal", desc: "2 Zinger Burgers + Loaded Fries + 2 Soft Drinks", price: 1350, img: "" },
  { cat: "Deals", name: "Pizza Deal", desc: "Medium Tikka Pizza + 8 Nuggets + 2 Soft Drinks", price: 1650, img: "" },
  { cat: "Deals", name: "Family Deal", desc: "Medium Pizza + 2 Zinger Burgers + Loaded Fries + 4 Soft Drinks", price: 2650, img: "" },

  { cat: "Burgers", name: "Zinger Burger", desc: "Crispy chicken fillet, mayo, lettuce", price: 450, img: "assets/img/menu/zinger.jpg" },
  { cat: "Burgers", name: "Beef Smash Burger", desc: "Double patty, cheese, special sauce", price: 690, img: "assets/img/menu/smash-burger.jpg" },
  { cat: "Burgers", name: "Chicken Club Sandwich", desc: "Grilled chicken, egg, cheese, fries", price: 520, img: "assets/img/menu/club-sandwich.jpg" },
  { cat: "Burgers", name: "Chicken Mayo Roll", desc: "Crispy chicken fillet, mayo, lettuce", price: 200, img: "" },
  { cat: "Pizza", name: "Chicken Tikka Pizza", desc: "Medium, tikka chunks and onion", price: 1250, img: "assets/img/menu/tikka-pizza.jpg" },
  { cat: "Pizza", name: "Fajita Pizza", desc: "Medium, peppers, olives and cheese", price: 1250, img: "assets/img/menu/fajita-pizza.jpg" },
  { cat: "Pizza", name: "Pepperoni Pizza", desc: "Medium, beef pepperoni, mozzarella", price: 1350, img: "assets/img/menu/pepperoni-pizza.jpg" },
  { cat: "Snacks", name: "Loaded Fries", desc: "Fries with cheese sauce and chicken", price: 420, img: "assets/img/menu/loaded-fries.jpg" },
  { cat: "Snacks", name: "Chicken Nuggets", desc: "8 pieces with dip", price: 380, img: "assets/img/menu/nuggets.jpg" },
  { cat: "Snacks", name: "Crispy Wings", desc: "6 pieces, hot or BBQ", price: 450, img: "assets/img/menu/wings.jpg" },
  { cat: "Desi", name: "Chicken Tikka", desc: "Charcoal-grilled, 2 pieces with chutney", price: 480, img: "assets/img/menu/chicken-tikka.jpg" },
  { cat: "Desi", name: "Chicken Karahi (Half)", desc: "Tomato, ginger and green chilli", price: 1450, img: "assets/img/menu/karahi.jpg" },
  { cat: "Desi", name: "Chicken Biryani", desc: "With raita", price: 520, img: "assets/img/menu/biryani.jpg" },
  { cat: "Desi", name: "Roghni Naan", desc: "Tandoor-baked, sesame", price: 70, img: "assets/img/menu/naan.jpg" },
  { cat: "Drinks", name: "Mint Margarita", desc: "Mint, lemon, soda", price: 250, img: "assets/img/menu/margarita.jpg" },
  { cat: "Drinks", name: "Doodh Patti Chai", desc: "Kadak, made to order", price: 120, img: "assets/img/menu/chai.jpg" },
  { cat: "Drinks", name: "Soft Drink (345ml)", desc: "Cola, lemon-lime or orange", price: 100, img: "assets/img/menu/soft-drink.jpg" },
  { cat: "Drinks", name: "Chocolate Shake", desc: "Thick and cold", price: 350, img: "assets/img/menu/shake.jpg" }
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
  const m = deals[Math.floor(Date.now() / 864e5) % deals.length];   // a different deal every day
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
    ${m.img ? `<img class="em" src="${esc(m.img)}" alt="${esc(m.name)}" loading="lazy"
      onerror="this.style.display='none'">` : ""}
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

  // Food emojis orbiting the logo
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

  // Delivery scooter
  if (!reduceMotion) {
    const s = document.createElement("div");
    s.className = "scooter";
    s.innerHTML = "<i>🛵</i>";
    hero.appendChild(s);
  }

  // Hidden surprise: tap the logo 5 times quickly
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

  // Food emoji trail behind the mouse
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

  // Soft golden light following the mouse
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

// Search box types its own placeholder
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