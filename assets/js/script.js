// =========================================================
//  BS SMART - CUSTOMER MENU (sirf dekhne ke liye)
// =========================================================
const CURRENCY = "Rs.";
const PLACEHOLDER_IMG = "assets/img/logo.jpeg";   // jin items ki photo nahi, unke liye logo

// ---------------------------------------------------------
//  MENU DATA - qeemat ya item badalni ho to sirf yahan badlein.
//  Format: ["Naam", "Description", Price]   (photo ho to 4th: "assets/img/x.jpg")
//  "Deals" naam ka group sirf Deals view mein dikhta hai.
// ---------------------------------------------------------
const MENU_DATA = {
    "FastFood": [
        ["Zinger Burger", "Crispy chicken zinger burger", 300],
        ["Zinger Burger Cheese", "Zinger burger with cheese", 350],
        ["Zinger Burger Jumbo", "Jumbo crispy chicken zinger burger", 450],
        ["Beef Burger", "Juicy beef burger", 300],
        ["Beef Burger Cheese", "Beef burger with cheese", 350],
        ["Club Sandwich", "Fresh chicken club sandwich", 400],
        ["Chicken Sandwich", "Delicious chicken sandwich", 450],
        ["BBQ Sandwich", "Chicken sandwich with BBQ flavor", 450],
        ["Plan Fries", "Fries", 150],
        ["Plan Fries Small", "Fries small", 100],
        ["Mayo Fries", "Mayo Yammi Fries", 200],
        ["Cheese Fries", "Cheese Yammi Fries", 200],
        ["Zinger Roll Jumbo", "Jumbo crispy chicken zinger roll", 280]
    ],
    "EXTRAS": [
        ["Paratha (SMALL)", "Yammi", 50],
        ["Paratha (LARGE)", "Yammi", 100],
        ["Chapati", "Yammi", 20],
        ["Chai", "Hot chai", 80]
    ],
    "BBQ": [
        ["Zinger Roll", "Crispy chicken zinger roll", 150],
        ["Zinger Jumbo Roll", "Jumbo crispy chicken zinger roll", 250],
        ["Boti Roll", "Chicken boti roll", 150],
        ["Kabab Roll", "Chicken kabab roll", 150],
        ["Chicken Roll", "Chicken roll", 150],
        ["Chicken Mayo Garlic Roll", "Chicken roll with mayo garlic sauce", 150],
        ["Chicken Malai Boti Roll", "Creamy chicken malai boti roll", 150],
        ["Chicken Crispy Roll", "Crispy chicken roll", 150],
        ["Chicken Tikka (Chest)", "Chicken tikka chest piece", 350],
        ["Chicken Tikka (Leg)", "Chicken tikka leg piece", 300],
        ["Behari Tikka (Leg)", "Behari style tikka", 350],
        ["Behari Tikka (Chest)", "Behari style tikka", 300],
        ["Chicken Malai White Tikka (Plate)", "Creamy white malai chicken tikka", 400],
        ["Chicken Malai Boti (Plate)", "Tender malai chicken boti", 400],
        ["Behari Boti (Plate)", "Behari style boti plate", 400],
        ["Seekh Kabab (Plate)", "Seekh kabab plate", 400],
        ["Gola Kabab (Plate)", "Gola kabab plate", 400],
        ["Dhaga Kabab (Plate)", "Dhaga kabab plate", 400],
        ["Chicken Reshmi Kabab", "Soft and juicy reshmi kabab", 400],
        ["Turkish Kabab (Plate)", "Turkish kabab plate", 400],
        ["Chicken Boti (Plate)", "Classic chicken boti plate", 400],
        ["Chicken Balochi Boti (Plate)", "Balochi style chicken boti plate", 400],
        ["Chicken Malai Boti (Seekh)", "Tender malai chicken boti seekh", 100],
        ["Behari Boti (Seekh)", "Behari style boti seekh", 100],
        ["Seekh Kabab (Seekh)", "Seekh kabab seekh", 100],
        ["Chicken Boti (Seekh)", "Classic chicken boti seekh", 100],
        ["Chicken Balochi Boti (Seekh)", "Balochi style chicken boti seekh", 100],
        ["Gola Kabab (Stick)", "Gola kabab stick", 100],
        ["Broast (CHEST)", "Crispy broast chest piece", 500],
        ["Broast (LEG)", "Crispy broast leg piece", 450]
    ],
    "Pizza": [
        ["Chicken Fajita (SMALL)", "Chicken fajita pizza", 300],
        ["Chicken Fajita (MEDIUM)", "Chicken fajita pizza", 500],
        ["Chicken Fajita (LARGE)", "Chicken fajita pizza", 700],
        ["Chicken Tikka (SMALL)", "Chicken tikka pizza", 300],
        ["Chicken Tikka (MEDIUM)", "Chicken tikka pizza", 500],
        ["Chicken Tikka (LARGE)", "Chicken tikka pizza", 700],
        ["Chicken Malai (SMALL)", "Chicken malai pizza", 300],
        ["Chicken Malai (MEDIUM)", "Chicken malai pizza", 500],
        ["Chicken Malai (LARGE)", "Chicken malai pizza", 700],
        ["BBQ Chicken (SMALL)", "BBQ chicken pizza", 300],
        ["BBQ Chicken (MEDIUM)", "BBQ chicken pizza", 500],
        ["BBQ Chicken (LARGE)", "BBQ chicken pizza", 700],
        ["Chicken Supreme (SMALL)", "Chicken supreme pizza", 300],
        ["Chicken Supreme (MEDIUM)", "Chicken supreme pizza", 500],
        ["Chicken Supreme (LARGE)", "Chicken supreme pizza", 700],
        ["Chicken Shish (SMALL)", "Chicken shish pizza", 300],
        ["Chicken Shish (MEDIUM)", "Chicken shish pizza", 500],
        ["Chicken Shish (LARGE)", "Chicken shish pizza", 700],
        ["Chicken Cheese (SMALL)", "Chicken cheese pizza", 300],
        ["Chicken Cheese (MEDIUM)", "Chicken cheese pizza", 500],
        ["Chicken Cheese (LARGE)", "Chicken cheese pizza", 700],
        ["Vegetable (SMALL)", "Fresh vegetable pizza", 300],
        ["Vegetable (MEDIUM)", "Fresh vegetable pizza", 500],
        ["Vegetable (LARGE)", "Fresh vegetable pizza", 700],
        ["Special (BS Smart) (SMALL)", "Special signature pizza", 400],
        ["Special (BS Smart) (MEDIUM)", "Special signature pizza", 700],
        ["Special (BS Smart) (LARGE)", "Special signature pizza", 1000],
        ["Pizza Fries Small", "Pizza fries small", 300],
        ["Pizza Fries Large", "Pizza fries large", 500]
    ],
    "Biryani": [
        ["Chicken Biryani (1 KG)", "Chicken biryani 1 kg", 560],
        ["Chicken Biryani (3 Pao)", "Chicken biryani 3 pao", 420],
        ["Chicken Biryani (Half KG)", "Chicken biryani half kg", 280],
        ["Chicken Biryani (1 Pao)", "Chicken biryani 1 pao", 140],
        ["Chicken Biryani (Plate)", "Chicken biryani single plate", 210],
        ["Sada Biryani / Sada Pulao (1 KG)", "Plain biryani / pulao 1 kg", 400],
        ["Sada Biryani / Sada Pulao (3 Pao)", "Plain biryani / pulao 3 pao", 300],
        ["Sada Biryani / Sada Pulao (Half KG)", "Plain biryani / pulao half kg", 200],
        ["Sada Biryani / Sada Pulao (1 Pao)", "Plain biryani / pulao 1 pao", 100],
        ["Beef Pulao (1 KG)", "Beef pulao 1 kg", 760],
        ["Beef Pulao (3 Pao)", "Beef pulao 3 pao", 570],
        ["Beef Pulao (Half KG)", "Beef pulao half kg", 380],
        ["Beef Pulao (1 Pao)", "Beef pulao 1 pao", 190],
        ["Beef Pulao (Plate)", "Beef pulao single plate", 280]
    ],
    "Plater": [
        ["Plater 01", "Plater 01", 1499],
        ["Plater 02", "Plater 02", 1299],
        ["Plater 03", "Plater 03", 850],
        ["Plater 04", "Plater 04", 799]
    ],
    "Drinks": [
        ["REG Cold Drink", "Regular cold drink", 70],
        ["REG Cold Drink Sting", "Regular Sting", 80],
        ["300ml Coldrink", "300ml cold drink", 90],
        ["300ml Coldrink Sting", "300ml Sting", 100],
        ["500ml Coldrink", "500ml cold drink", 120],
        ["500ml Coldrink Sting", "500ml Sting", 140],
        ["1 ltr Coldrink", "1 litre cold drink", 170],
        ["1.5 ltr Coldrink", "1.5 litre cold drink", 220],
        ["Jumbo Coldrink", "Jumbo size cold drink", 270],
        ["Water 500ml", "500ml mineral water", 60],
        ["Water 1.5 Ltr", "1.5 litre mineral water", 120]
    ],
    "Deals": [
        ["Deal 1", "4 Zinger Burger with Fries", 999],
        ["Deal 2", "2 Zinger Burger with Fries, 2 x 300ml Coldrink", 699],
        ["Deal 3", "2 Zinger Burger with Fries, 1 Medium Pizza", 999],
        ["Deal 4", "2 Zinger Burger with Fries, 1 Broast Chest, 1 Medium Pizza, 1 Ltr Coldrink", 1499],
        ["Deal 5", "2 Club Sandwich, 2 Zinger Burger, Fries, 1 Ltr Coldrink", 1399],
        ["Deal 6", "1 Zinger Burger, 1 Club Sandwich, 1 Fries, 1 Small Pizza", 799],
        ["Deal 7", "2 Medium Pizza, 1 Pizza Fries (Small), 1 Ltr Coldrink", 1299],
        ["Deal 8", "1 Large Pizza, 1 Medium Pizza, 1 Small Pizza Fries", 1349]
    ]
};

// Data ko ek seedhi list mein badlo
const MENU = [];
Object.entries(MENU_DATA).forEach(([cat, rows]) => {
    rows.forEach(([name, desc, price, img]) => {
        MENU.push({ key: cat + "|" + name, cat, name, desc: desc || "", price, img: img || "" });
    });
});

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
const rnd = (a, b) => a + Math.random() * (b - a);

// =========================================================
//  STATE
// =========================================================
let view = "menu";     // "menu" ya "deals"
let cat = "All";
let q = "";
let favs = lsGet("bsMenuFavs", []);   // item ki key (cat|name) yaad rakhte hain

const catList = () => ["All", "__fav", ...new Set(MENU.filter(m => !isDeal(m)).map(m => m.cat))];
const catLabel = c => c === "__fav" ? "❤️ Favourites" : c;

// =========================================================
//  TOAST
// =========================================================
let toastTimer;
function toast(msg) {
    let t = $("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.remove("show");
    void t.offsetWidth;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 1600);
}

// =========================================================
//  CONFETTI
// =========================================================
function confetti(n = 60) {
    if (reduceMotion) return;
    const col = ["#f5b800", "#fff0a8", "#e5483b", "#ffffff", "#0d0d0d"];
    for (let i = 0; i < n; i++) {
        const c = document.createElement("i");
        c.className = "confetti";
        c.style.left = rnd(0, 100) + "vw";
        c.style.background = col[i % col.length];
        c.style.setProperty("--dx", rnd(-160, 160) + "px");
        c.style.animationDuration = rnd(1.6, 3.2) + "s";
        c.style.animationDelay = rnd(0, .5) + "s";
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 4200);
    }
}

// =========================================================
//  RENDER
// =========================================================
function renderTabs() {
    const box = $("tabs");
    box.style.display = view === "deals" ? "none" : "";
    const cats = catList();
    if (!cats.includes(cat)) cat = "All";
    box.innerHTML = cats.map(c =>
        `<button type="button" class="tab" aria-pressed="${c === cat}" data-c="${esc(c)}">${esc(catLabel(c))}</button>`).join("");
}

const matchQ = m => !q || (m.name + " " + m.desc + " " + m.cat).toLowerCase().includes(q);

function visibleItems() {
    return MENU.filter(m => {
        if (!matchQ(m)) return false;
        if (view === "deals") return isDeal(m);
        if (isDeal(m)) return false;
        if (cat === "__fav") return favs.includes(m.key);
        return cat === "All" || m.cat === cat;
    });
}

// Aaj ki special deal (roz alag)
function renderSpecial() {
    const box = $("special");
    const deals = MENU.filter(isDeal);
    if (view !== "deals" || !deals.length || q) {
        box.className = "special";
        box.innerHTML = "";
        return;
    }
    const m = deals[Math.floor(Date.now() / 864e5) % deals.length];
    box.className = "special show";
    box.innerHTML = `
    <div class="sp-l">
      <img src="${PLACEHOLDER_IMG}" alt="">
      <div><small>⭐ TODAY'S SPECIAL DEAL</small><h3>${esc(m.name)}</h3><p>${esc(m.desc)}</p></div>
    </div>
    <div class="sp-r"><span class="price">${fmt(m.price)}</span></div>`;
}

function renderMenu() {
    const list = visibleItems();
    const nDeals = MENU.filter(isDeal).length;
    $("cntMenu").textContent = MENU.length - nDeals;
    $("cntDeals").textContent = nDeals;

    const empty = view === "menu" && cat === "__fav" && !q
        ? "Abhi koi favourite nahi. Kisi bhi item par ❤️ dabayein."
        : "Koi item nahi mila. Doosra naam try karein.";

    $("menu").innerHTML = list.length ? list.map((m, i) => {
        const on = favs.includes(m.key);
        return `<article class="item${isDeal(m) ? " deal" : ""}" style="animation-delay:${Math.min(i, 14) * 40}ms">
      ${isDeal(m) ? "" : `<button type="button" class="fav${on ? " on" : ""}" data-k="${esc(m.key)}" aria-pressed="${on}" aria-label="Favourite">${on ? "♥" : "♡"}</button>`}
      <img class="em${m.img ? "" : " ph"}" src="${esc(m.img || PLACEHOLDER_IMG)}" alt="" loading="lazy">
      <h3>${esc(m.name)}</h3>
      <p>${esc(m.desc)}</p>
      <div class="row"><span class="price">${fmt(m.price)}</span></div>
    </article>`;
    }).join("") : `<div class="no-result">${empty}</div>`;

    renderSpecial();
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

// =========================================================
//  EVENTS
// =========================================================
$("vswitch").addEventListener("click", e => {
    const b = e.target.closest(".vs-btn");
    if (b) setView(b.dataset.view);
});
$("menuBtn").onclick = () => setView("menu", true);
$("dealsBtn").onclick = () => setView("deals", true);

$("tabs").addEventListener("click", e => {
    const b = e.target.closest(".tab");
    if (!b) return;
    cat = b.dataset.c;
    renderTabs();
    renderMenu();
    swap();
    // Chuni hui category bar ke andar nazar aaye
    const t = $("tabs"), a = t.querySelector(".tab[aria-pressed='true']");
    if (a) t.scrollTo({ left: a.offsetLeft - (t.clientWidth - a.offsetWidth) / 2, behavior: "smooth" });
});

// Favourite (heart)
$("menu").addEventListener("click", e => {
    const f = e.target.closest(".fav");
    if (!f) return;
    const k = f.dataset.k, i = favs.indexOf(k);
    if (i >= 0) favs.splice(i, 1); else favs.push(k);
    lsSet("bsMenuFavs", favs);
    if (view === "menu" && cat === "__fav") { renderMenu(); return; }
    const isOn = i < 0;
    f.classList.toggle("on", isOn);
    f.textContent = isOn ? "♥" : "♡";
    f.setAttribute("aria-pressed", String(isOn));
    toast(isOn ? "Favourites mein add ❤️" : "Favourites se hata diya");
});

// Search (thora ruk kar)
let searchT;
$("search").addEventListener("input", () => {
    clearTimeout(searchT);
    searchT = setTimeout(() => { q = $("search").value.trim().toLowerCase(); renderMenu(); }, 130);
});
document.addEventListener("keydown", e => {
    if (e.key === "/" && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) {
        e.preventDefault();
        $("search").focus();
    }
    if (e.key === "Escape" && document.activeElement === $("search")) {
        $("search").value = "";
        q = "";
        renderMenu();
        $("search").blur();
    }
});

// =========================================================
//  DARK MODE
// =========================================================
(function () {
    const b = $("darkBtn");
    document.body.classList.toggle("dark", !!lsGet("bsMenuDark", false));
    const paint = () => { if (b) b.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙"; };
    paint();
    if (b) b.onclick = () => {
        document.body.classList.toggle("dark");
        lsSet("bsMenuDark", document.body.classList.contains("dark"));
        paint();
    };
})();

// =========================================================
//  PAGE EFFECTS: splash, ticker, hero, scroll, reveal
// =========================================================
(function () {
    const s = $("splash");
    if (!s) return;
    let seen = false;
    try { seen = sessionStorage.getItem("bsMenuSplash") === "1"; sessionStorage.setItem("bsMenuSplash", "1"); } catch (e) { }
    if (seen) { s.remove(); return; }
    setTimeout(() => { s.classList.add("hide"); setTimeout(() => s.remove(), 600); }, 1000);
})();

(function () {
    const t = $("tickerTrack");
    if (!t) return;
    const items = ["🔥 Hot deals running now", "🍔 Fresh & piping hot", "🛵 Dine-in · Takeaway · Delivery", "⭐ Good Food, Good Mood"];
    const half = [].concat(items, items, items).map(s => `<span>${s}</span>`).join("");
    t.innerHTML = half + half;
})();

(function () {
    const g = $("greet");
    if (g) {
        const h = new Date().getHours();
        g.textContent = h < 5 ? "Good night 🌙" : h < 12 ? "Good morning ☀️" : h < 16 ? "Lunch time 🍽️" : h < 19 ? "Good evening 🌇" : "Good night 🌙";
    }
    const fl = $("floaters");
    if (fl && !reduceMotion) {
        const em = ["🍔", "🍕", "🍟", "🌭", "🥤", "🍗", "🌮", "🍩"];
        for (let i = 0; i < 8; i++) {
            const s = document.createElement("span");
            s.textContent = em[i % em.length];
            s.style.left = (Math.random() * 96) + "%";
            s.style.fontSize = (18 + Math.random() * 26) + "px";
            s.style.animationDuration = (9 + Math.random() * 9) + "s";
            s.style.animationDelay = (-Math.random() * 14) + "s";
            fl.appendChild(s);
        }
    }
    // Logo 5 baar tap = surprise
    const wrap = $("logoWrap");
    let taps = 0, tapT;
    if (wrap) wrap.addEventListener("click", () => {
        taps++;
        clearTimeout(tapT);
        tapT = setTimeout(() => { taps = 0; }, 1500);
        if (taps >= 5) { taps = 0; toast("Good Food, Good Mood 😄"); confetti(120); }
    });
})();

// Mouse ke saath hero spotlight (sirf desktop)
(function () {
    const hero = document.querySelector(".hero");
    if (!hero || !canHover || reduceMotion) return;
    hero.addEventListener("pointermove", e => {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty("--hx", (e.clientX - r.left) + "px");
        hero.style.setProperty("--hy", (e.clientY - r.top) + "px");
    });
})();

// Button ripple
document.addEventListener("pointerdown", e => {
    const b = e.target.closest(".btn-gold,.btn-ghost,.nav-cta,.tab,.vs-btn,.round");
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

// Scroll: navbar saaya, progress bar, upar jane ka button
const navEl = document.querySelector(".nav");
const prog = $("progress");
const toTop = document.createElement("button");
toTop.id = "toTop";
toTop.type = "button";
toTop.setAttribute("aria-label", "Back to top");
toTop.textContent = "↑";
toTop.onclick = () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
document.body.appendChild(toTop);

let scrollTick = false;
function onScroll() {
    const y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    if (navEl) navEl.classList.toggle("scrolled", y > 10);
    toTop.classList.toggle("show", y > 500);
    if (prog) prog.style.width = (h > 0 ? y / h * 100 : 0) + "%";
}
window.addEventListener("scroll", () => {
    if (scrollTick) return;
    scrollTick = true;
    requestAnimationFrame(() => { scrollTick = false; onScroll(); });
}, { passive: true });

// Scroll par ubharna
(function () {
    const rev = document.querySelectorAll(".sec-title,.vswitch,.search,.tabs,.order-note,.foot-info");
    rev.forEach(el => el.classList.add("reveal"));
    const feats = $("features");
    const all = feats ? [...rev, feats] : [...rev];
    if (!("IntersectionObserver" in window)) { all.forEach(el => el.classList.add("in")); return; }
    const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: .12 });
    all.forEach(el => io.observe(el));
})();

const yr = $("yr");
if (yr) yr.textContent = new Date().getFullYear();

// =========================================================
//  START
// =========================================================
setView("menu", false);
onScroll();

// =========================================================
//  EXTRA ANIMATIONS (end level)
// =========================================================
(function () {
    if (reduceMotion) return;
    const hero = document.querySelector(".hero");
    const lw = $("logoWrap");

    // 1) Cursor glow + emoji trail (sirf desktop)
    if (canHover) {
        const g = document.createElement("div");
        g.className = "cglow";
        document.body.appendChild(g);
        const EM = ["✨", "🍔", "🍕", "🍟", "⭐", "🔥"];
        let last = 0;
        document.addEventListener("pointermove", e => {
            if (e.pointerType === "touch") return;
            g.style.opacity = 1;
            g.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
            const now = performance.now();
            if (now - last < 70) return;
            last = now;
            const t = document.createElement("i");
            t.className = "trail";
            t.textContent = EM[Math.random() * EM.length | 0];
            t.style.left = e.clientX + "px";
            t.style.top = e.clientY + "px";
            t.style.setProperty("--tx", rnd(-30, 30) + "px");
            document.body.appendChild(t);
            setTimeout(() => t.remove(), 900);
        }, { passive: true });
        document.documentElement.addEventListener("mouseleave", () => { g.style.opacity = 0; });
    }

    // 2) Cards: 3D tilt + chamak
    const menu = $("menu");
    let cur = null;
    const reset = c => { if (c) { c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); } };
    menu.addEventListener("pointermove", e => {
        if (e.pointerType === "touch") return;
        const c = e.target.closest(".item");
        if (c !== cur) { reset(cur); cur = c; }
        if (!c) return;
        const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        c.style.setProperty("--ry", ((x - .5) * 14) + "deg");
        c.style.setProperty("--rx", ((.5 - y) * 14) + "deg");
        c.style.setProperty("--mx", x * 100 + "%");
        c.style.setProperty("--my", y * 100 + "%");
    });
    menu.addEventListener("pointerleave", () => { reset(cur); cur = null; });

    // 3) Magnetic buttons
    document.querySelectorAll(".magnetic").forEach(b => {
        b.addEventListener("pointermove", e => {
            if (e.pointerType === "touch") return;
            const r = b.getBoundingClientRect();
            b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px,${(e.clientY - r.top - r.height / 2) * .35}px)`;
        });
        b.addEventListener("pointerleave", () => { b.style.transform = ""; });
    });

    if (hero && lw) {
        // 4) Hero logo 3D parallax
        hero.addEventListener("pointermove", e => {
            if (e.pointerType === "touch") return;
            const r = hero.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
            lw.style.transform = `perspective(700px) rotateY(${x * 18}deg) rotateX(${-y * 18}deg)`;
        });
        hero.addEventListener("pointerleave", () => { lw.style.transform = ""; });

        // 5) Hero par click = sparks
        hero.addEventListener("click", e => {
            if (e.target.closest("a,button")) return;
            const r = hero.getBoundingClientRect();
            for (let i = 0; i < 16; i++) {
                const s = document.createElement("i");
                s.className = "spark";
                s.style.left = (e.clientX - r.left) + "px";
                s.style.top = (e.clientY - r.top) + "px";
                const a = rnd(0, Math.PI * 2), d = rnd(40, 120);
                s.style.setProperty("--sx", Math.cos(a) * d + "px");
                s.style.setProperty("--sy", Math.sin(a) * d + "px");
                hero.appendChild(s);
                setTimeout(() => s.remove(), 750);
            }
        });

        // 6) Logo ke gird ghoomte emojis
        const em = ["🍔", "🍕", "🍟", "🥤", "🍗", "🌭"];
        const o = document.createElement("div");
        o.className = "orbit";
        o.innerHTML = em.map((s, i) => {
            const a = i / em.length * Math.PI * 2;
            return `<span style="left:${50 + 50 * Math.cos(a)}%;top:${50 + 50 * Math.sin(a)}%"><i>${s}</i></span>`;
        }).join("");
        lw.appendChild(o);

        // 7) Delivery scooter
        const sc = document.createElement("div");
        sc.className = "scooter";
        sc.innerHTML = "<i>🛵</i>";
        hero.appendChild(sc);
    }

    // 8) Favourite par hearts udte hain
    menu.addEventListener("click", e => {
        const f = e.target.closest(".fav");
        if (!f) return;
        const r = f.getBoundingClientRect();
        for (let i = 0; i < 6; i++) {
            const h = document.createElement("i");
            h.className = "trail up";
            h.textContent = "❤️";
            h.style.left = (r.left + r.width / 2) + "px";
            h.style.top = (r.top + r.height / 2) + "px";
            h.style.setProperty("--tx", rnd(-40, 40) + "px");
            document.body.appendChild(h);
            setTimeout(() => h.remove(), 900);
        }
    });

    // 9) Deals khulte hi confetti
    document.addEventListener("click", e => {
        if (e.target.closest("#dealsBtn,.vs-btn[data-view='deals']")) confetti(70);
    });

    // 10) Counters badalte hi bump
    ["cntMenu", "cntDeals"].forEach(id => {
        const el = $(id);
        if (!el) return;
        new MutationObserver(() => {
            el.classList.remove("bump");
            void el.offsetWidth;
            el.classList.add("bump");
        }).observe(el, { childList: true });
    });
})();

// =========================================================
//  OWNER PANEL: sirf aap menu mein item add kar sakein
//  Footer ke logo par 5 baar tap -> PIN -> panel
// =========================================================
const ADMIN_HASH = "d1e8e78cd7147a641b63528b9d97838ee0f75036395c9b773ac49eeb319e457e";

(function () {
    const sha = async s => [...new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)))]
        .map(b => b.toString(16).padStart(2, "0")).join("");

    let custom = lsGet("bsMenuCustom", []);
    let authed = false;

    const addToMenu = it => {
        const key = it.cat + "|" + it.name;
        if (MENU.some(m => m.key === key)) return false;
        MENU.push({ key, cat: it.cat, name: it.name, desc: it.desc || "", price: it.price, img: it.img || "", custom: true });
        return true;
    };
    const refresh = () => { renderTabs(); renderMenu(); swap(); };

    custom.forEach(addToMenu);
    renderTabs(); renderMenu();

    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `<div class="modal-box" role="dialog" aria-modal="true"><button type="button" class="modal-x" aria-label="Close">✕</button><div id="admBody"></div></div>`;
    document.body.appendChild(modal);
    const body = modal.querySelector("#admBody");
    const box = modal.querySelector(".modal-box");
    const close = () => modal.classList.remove("open");
    modal.addEventListener("click", e => { if (e.target === modal || e.target.closest(".modal-x")) close(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

    function showPin() {
        body.innerHTML = `<h3>🔐 Owner Login</h3>
          <input id="pinIn" type="password" placeholder="PIN" autocomplete="off" autocapitalize="none">
          <button type="button" class="btn-gold" id="pinGo">Open</button>
          <p class="adm-err" id="pinErr"></p>`;
        const go = async () => {
            if (!(window.crypto && crypto.subtle)) { $("pinErr").textContent = "HTTPS zaroori hai."; return; }
            if (await sha($("pinIn").value) === ADMIN_HASH) { authed = true; showPanel(); confetti(40); }
            else {
                $("pinErr").textContent = "Galat PIN";
                box.classList.remove("shake"); void box.offsetWidth; box.classList.add("shake");
                $("pinIn").value = "";
            }
        };
        $("pinGo").onclick = go;
        $("pinIn").onkeydown = e => { if (e.key === "Enter") go(); };
        setTimeout(() => $("pinIn").focus(), 50);
    }

    function showPanel() {
        const cats = [...new Set(MENU.map(m => m.cat))];
        body.innerHTML = `<h3>🛠️ Menu mein item add karein</h3>
          <label>Category<select id="aCat">${cats.map(c => `<option>${esc(c)}</option>`).join("")}<option value="__new">➕ Nayi category…</option></select></label>
          <input id="aNewCat" placeholder="Nayi category ka naam" hidden>
          <label>Naam<input id="aName" maxlength="60"></label>
          <label>Description<input id="aDesc" maxlength="120"></label>
          <label>Price (Rs.)<input id="aPrice" type="number" min="1" inputmode="numeric"></label>
          <label>Photo link (optional)<input id="aImg" placeholder="assets/img/x.jpg"></label>
          <button type="button" class="btn-gold" id="aAdd">➕ Add item</button>
          <p class="adm-err" id="aErr"></p>
          <h4>Aap ke add kiye hue items (${custom.length})</h4>
          <ul class="adm-list">${custom.map((c, i) => `<li><span>${esc(c.name)} · ${fmt(c.price)}</span><button type="button" data-i="${i}" aria-label="Delete">🗑️</button></li>`).join("") || "<li>Abhi koi nahi</li>"}</ul>
          <button type="button" class="btn-ghost" id="aCopy">📋 Code copy karein (sab ke liye)</button>`;

        $("aCat").onchange = () => { $("aNewCat").hidden = $("aCat").value !== "__new"; };

        $("aAdd").onclick = () => {
            const cat = $("aCat").value === "__new" ? $("aNewCat").value.trim() : $("aCat").value;
            const name = $("aName").value.trim();
            const price = Number($("aPrice").value);
            const img = $("aImg").value.trim();
            const err = m => { $("aErr").textContent = m; };
            if (!cat) return err("Category likhein.");
            if (!name) return err("Naam likhein.");
            if (!(price > 0)) return err("Sahi price likhein.");
            if (img && !/^(https?:\/\/|assets\/)/i.test(img)) return err("Photo link http(s):// ya assets/ se shuru ho.");
            const it = { cat, name, desc: $("aDesc").value.trim(), price, img };
            if (!addToMenu(it)) return err("Ye item is category mein pehle se hai.");
            custom.push(it);
            lsSet("bsMenuCustom", custom);
            refresh();
            toast("Item add ho gaya ✅");
            confetti(50);
            showPanel();
        };

        body.querySelectorAll(".adm-list button").forEach(b => b.onclick = () => {
            const it = custom.splice(+b.dataset.i, 1)[0];
            const k = MENU.findIndex(m => m.custom && m.key === it.cat + "|" + it.name);
            if (k >= 0) MENU.splice(k, 1);
            lsSet("bsMenuCustom", custom);
            refresh();
            showPanel();
        });

        $("aCopy").onclick = () => {
            const g = {};
            custom.forEach(c => (g[c.cat] = g[c.cat] || []).push(
                `        [${JSON.stringify(c.name)}, ${JSON.stringify(c.desc)}, ${c.price}${c.img ? ", " + JSON.stringify(c.img) : ""}]`));
            const txt = Object.entries(g).map(([c, r]) => `// "${c}" ke andar ye lines daalein:\n` + r.join(",\n")).join("\n\n");
            (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject())
                .then(() => toast("Code copy ho gaya 📋"), () => toast("Copy nahi hua"));
        };
    }

    // Footer logo 5 baar tap
    const fl = document.querySelector(".foot-logo");
    let taps = 0, tt;
    if (fl) fl.addEventListener("click", () => {
        taps++; clearTimeout(tt); tt = setTimeout(() => { taps = 0; }, 1500);
        if (taps >= 5) { taps = 0; authed ? showPanel() : showPin(); modal.classList.add("open"); }
    });
})();
