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
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 1600);
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
        if (taps >= 5) { taps = 0; toast("Good Food, Good Mood 😄"); }
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
