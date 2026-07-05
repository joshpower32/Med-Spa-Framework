/* =====================================================================
   AURA — Medspa & Skin Clinic Framework
   Treatment finder (signature feature), treatments, team, memberships,
   consult form. All content lives in the arrays below.
   ===================================================================== */

const CONFIG = {
  spaQuery: "luxury spa interior",
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  ownerEmail: "hello@auramedspa.ca",
  businessName: "AURA Medspa & Skin Clinic",
  phone: "(905) 555-2872",
};

/* ---------- Concerns (treatment finder chips) ---------- */
const CONCERNS = [
  { id: "wrinkles", label: "Fine lines & wrinkles" },
  { id: "acne", label: "Acne & scarring" },
  { id: "tone", label: "Tone & texture" },
  { id: "volume", label: "Lost volume" },
  { id: "hair", label: "Unwanted hair" },
  { id: "body", label: "Body & contouring" },
];

/* ---------- Treatments ---------- */
const TREATMENTS = [
  { id: "signature-facial", name: "Signature Facial", cat: "Skin", desc: "Deep cleanse, exfoliation, and a hydration mask — tailored to your skin on the day.", price: "$139", unit: "", time: "60 min", downtime: "No downtime", concerns: ["acne", "tone"], query: "spa facial treatment" },
  { id: "hydraglow", name: "HydraGlow Facial", cat: "Skin", desc: "Vortex exfoliation and serum infusion. The red-carpet glow, no needles involved.", price: "$199", unit: "", time: "45 min", downtime: "No downtime", concerns: ["tone"], query: "face mask spa skincare" },
  { id: "relaxers", name: "Wrinkle Relaxers", cat: "Injectables", desc: "Precise neuromodulator dosing that softens lines and keeps your face moving naturally.", price: "$12", unit: "/ unit", time: "30 min", downtime: "Minimal", concerns: ["wrinkles"], query: "cosmetic injection clinic" },
  { id: "fillers", name: "Dermal Fillers", cat: "Injectables", desc: "Structure and balance restored with conservative, reversible hyaluronic filler.", price: "$599", unit: "/ syringe", time: "45 min", downtime: "1–2 days", concerns: ["volume", "wrinkles"], query: "lip filler injection" },
  { id: "laser-hair", name: "Laser Hair Removal", cat: "Laser", desc: "Medical-grade laser for all skin tones — face and body, packages available.", price: "$89", unit: "/ session", time: "15–60 min", downtime: "No downtime", concerns: ["hair"], query: "laser skin treatment" },
  { id: "ipl", name: "IPL Photofacial", cat: "Laser", desc: "Broadband light that clears sun damage, redness, and age spots in a lunch break.", price: "$249", unit: "/ session", time: "30 min", downtime: "Mild redness", concerns: ["tone", "wrinkles"], query: "ipl photofacial" },
  { id: "microneedling", name: "RF Microneedling", cat: "Skin", desc: "Collagen induction with radiofrequency — the workhorse for scarring and texture.", price: "$299", unit: "/ session", time: "60 min", downtime: "2–3 days", concerns: ["acne", "tone", "wrinkles"], query: "facial treatment clinic" },
  { id: "peel", name: "Medical-Grade Peels", cat: "Skin", desc: "Clinical peels graded to your skin — from glow-and-go to deep renewal.", price: "$159", unit: "/ session", time: "30 min", downtime: "Varies by depth", concerns: ["acne", "tone"], query: "chemical peel treatment" },
  { id: "body-contour", name: "Body Contouring", cat: "Body", desc: "Non-surgical sculpting and skin tightening, mapped to your goals at consult.", price: "$349", unit: "/ session", time: "60 min", downtime: "No downtime", concerns: ["body"], query: "body massage spa" },
];

/* ---------- Team ---------- */
const TEAM = [
  { name: "Dr. Camille Reyes", role: "Medical Director", bio: "Every plan at AURA is physician-reviewed. Camille oversees dosing, safety, and outcomes.", query: "woman doctor portrait" },
  { name: "Nadia Brooks, RN", role: "Lead Nurse Injector", bio: "A decade of injectables and a less-is-more philosophy you can see in her work.", query: "nurse portrait smiling" },
  { name: "Priya Anand", role: "Senior Medical Aesthetician", bio: "Laser, peels, and facials — Priya builds the skin programs our members swear by.", query: "spa therapist portrait" },
];

/* ---------- Memberships ---------- */
const MEMBERSHIPS = [
  { name: "Essential", price: "$129", unit: "/ month", features: ["One signature facial every month", "10% off all skin treatments", "Member pricing on skincare", "Unused visits roll over 60 days"] },
  { name: "Radiance", price: "$219", unit: "/ month", featured: true, badge: "Most loved", features: ["One advanced treatment monthly", "HydraGlow, peel, or microneedling", "15% off injectables & laser", "Priority booking, evenings included"] },
  { name: "Luminous", price: "$359", unit: "/ month", features: ["Two treatments every month", "20% off everything else", "Quarterly skin analysis & plan", "Bring-a-guest facial, twice a year"] },
];

/* ---------- Reviews ---------- */
const REVIEWS = [
  { quote: "Nadia talked me out of half the filler I asked for — and she was right. Nobody knows I've had anything done. They just think I sleep.", name: "Danielle R." },
  { quote: "Three IPL sessions cleared sun damage I'd carried for a decade. The plan from the free consult was worth the visit on its own.", name: "Sonia K." },
  { quote: "I've been to spas that upsell before you sit down. AURA plans, explains the why, and never pushes. Radiance member two years now.", name: "Marta L." },
];

// --- Demo photos: pinned Pexels shots, keyed by query -------------------
// Direct image URLs load with the page — no API call, no key, no pop-in.
// To change a photo: browse pexels.com, copy the image address, paste here.
const PEXELS_PHOTOS = {
  "spa facial treatment": { u: "https://images.pexels.com/photos/6187305/pexels-photo-6187305.jpeg", p: "Tima Miroshnichenko" },
  "face mask spa skincare": { u: "https://images.pexels.com/photos/3851674/pexels-photo-3851674.jpeg", p: "Anna Shvets" },
  "cosmetic injection clinic": { u: "https://images.pexels.com/photos/7446678/pexels-photo-7446678.jpeg", p: "Gustavo Fring" },
  "lip filler injection": { u: "https://images.pexels.com/photos/29648624/pexels-photo-29648624.jpeg", p: "Alexander Mass" },
  "laser skin treatment": { u: "https://images.pexels.com/photos/4586726/pexels-photo-4586726.jpeg", p: "Anna Shvets" },
  "ipl photofacial": { u: "https://images.pexels.com/photos/5069499/pexels-photo-5069499.jpeg", p: "Anna Shvets" },
  "facial treatment clinic": { u: "https://images.pexels.com/photos/7581072/pexels-photo-7581072.jpeg", p: "cottonbro studio" },
  "chemical peel treatment": { u: "https://images.pexels.com/photos/6543489/pexels-photo-6543489.jpeg", p: "Polina" },
  "body massage spa": { u: "https://images.pexels.com/photos/9146381/pexels-photo-9146381.jpeg", p: "Ron Lach" },
  "woman doctor portrait": { u: "https://images.pexels.com/photos/7904457/pexels-photo-7904457.jpeg", p: "Anna Tarazevich" },
  "nurse portrait smiling": { u: "https://images.pexels.com/photos/5430213/pexels-photo-5430213.jpeg", p: "Wundef Media" },
  "spa therapist portrait": { u: "https://images.pexels.com/photos/3998007/pexels-photo-3998007.jpeg", p: "cottonbro studio" },
  "luxury spa interior": { u: "https://images.pexels.com/photos/6634828/pexels-photo-6634828.jpeg", p: "Vlada Karpovich" },
};
// Size an image via Pexels CDN params (w = width; pxCrop also crops to w×h)
const px = (u, w) => `${u}?auto=compress&cs=tinysrgb&w=${w}`;
const pxCrop = (u, w, h) => `${u}?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

const $ = (id) => document.getElementById(id);
const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- Treatment finder (signature feature) ---------- */
let activeConcern = null;

function renderConcernChips() {
  $("finderChips").innerHTML = CONCERNS.map((c) =>
    `<button class="finder-chip ${c.id === activeConcern ? "active" : ""}" aria-pressed="${c.id === activeConcern}" onclick="setConcern('${c.id}')">${esc(c.label)}</button>`
  ).join("");
}

function renderFinderResults() {
  const results = $("finderResults");
  const note = $("finderNote");
  if (!activeConcern) {
    results.innerHTML = "";
    note.textContent = "Pick a concern above — we'll show you what actually treats it.";
    return;
  }
  const matches = TREATMENTS.filter((t) => t.concerns.includes(activeConcern));
  const label = (CONCERNS.find((c) => c.id === activeConcern) || {}).label || "";
  note.textContent = `${matches.length} match${matches.length === 1 ? "" : "es"} for “${label}” — every plan starts with a free consultation.`;
  results.innerHTML = matches.map((t, i) => `
    <div class="finder-card" data-tilt style="--fx-delay:${i * 70}ms">
      <span class="treat-tag">${esc(t.cat)}</span>
      <h3>${esc(t.name)}</h3>
      <p>${esc(t.desc)}</p>
      <div class="treat-meta"><span>from <strong>${esc(t.price)}</strong>${esc(t.unit)}</span><span>${esc(t.time)}</span><span>${esc(t.downtime)}</span></div>
      <button class="btn btn-ghost btn-block" onclick="askAbout('${t.id}')">Ask about this at my consult</button>
    </div>`).join("");
  results.querySelectorAll(".finder-card").forEach((el) => requestAnimationFrame(() => el.classList.add("fx-in")));
}

function setConcern(id) {
  activeConcern = id;
  renderConcernChips();
  renderFinderResults();
}

function askAbout(id) {
  const t = TREATMENTS.find((x) => x.id === id);
  if (!t) return;
  const concernLabel = (CONCERNS.find((c) => c.id === activeConcern) || {}).label;
  if (concernLabel) $("concern").value = concernLabel;
  $("treatment").value = t.name;
  document.getElementById("consult").scrollIntoView({ behavior: "smooth" });
  toast(`Added ${t.name} to your consult request — just fill in your details.`);
}

/* ---------- Treatments grid ---------- */
function renderTreatments() {
  $("treatmentsGrid").innerHTML = TREATMENTS.map((t, i) => {
    const ph = PEXELS_PHOTOS[t.query];
    return `
    <div class="treat-card" data-tilt data-fx style="--fx-delay:${(i % 3) * 90}ms">
      ${ph ? `<img src="${esc(pxCrop(ph.u, 640, 480))}" alt="${esc(t.name)} at AURA Medspa" ${i < 3 ? "" : 'loading="lazy"'}>` : ""}
      <div class="treat-body">
        <span class="treat-tag">${esc(t.cat)}</span>
        <h3>${esc(t.name)}</h3>
        <p>${esc(t.desc)}</p>
        <div class="treat-meta"><span>from <strong>${esc(t.price)}</strong>${esc(t.unit)}</span><span>${esc(t.time)}</span><span>${esc(t.downtime)}</span></div>
      </div>
    </div>`;
  }).join("");
}

/* ---------- Team ---------- */
function renderTeam() {
  $("teamGrid").innerHTML = TEAM.map((m, i) => {
    const ph = PEXELS_PHOTOS[m.query];
    return `
    <div class="team-card" data-tilt data-fx style="--fx-delay:${i * 90}ms">
      ${ph ? `<img src="${esc(pxCrop(ph.u, 600, 750))}" alt="${esc(m.name)}, ${esc(m.role)}" loading="lazy">` : ""}
      <div class="team-body">
        <h3>${esc(m.name)}</h3>
        <span class="team-role">${esc(m.role)}</span>
        <p>${esc(m.bio)}</p>
      </div>
    </div>`;
  }).join("");
}

/* ---------- Memberships ---------- */
function renderMemberships() {
  $("membershipsGrid").innerHTML = MEMBERSHIPS.map((m, i) => `
    <div class="rate-card ${m.featured ? "featured" : ""}" data-fx style="--fx-delay:${i * 90}ms">
      ${m.badge ? `<span class="rate-badge">${esc(m.badge)}</span>` : ""}
      <h3>${esc(m.name)}</h3>
      <div class="rate-amount">${esc(m.price)}<span> ${esc(m.unit)}</span></div>
      <ul>${m.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
      <a class="btn ${m.featured ? "btn-primary" : "btn-ghost"} btn-block" href="#consult">Start with a Free Consult</a>
    </div>`).join("");
}

/* ---------- Reviews ---------- */
function renderReviews() {
  $("reviewsGrid").innerHTML = REVIEWS.map((r, i) => `
    <div class="review-card" data-fx style="--fx-delay:${i * 90}ms">
      <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
      <blockquote>“${esc(r.quote)}”</blockquote>
      <cite>— ${esc(r.name)}</cite>
    </div>`).join("");
}

/* ---------- Consult form selects ---------- */
function renderFormOptions() {
  $("concern").innerHTML = `<option value="">— Pick one —</option>` +
    CONCERNS.map((c) => `<option value="${esc(c.label)}">${esc(c.label)}</option>`).join("") +
    `<option value="Just exploring">Just exploring</option>`;
  $("treatment").innerHTML = `<option value="">Not sure yet — that's what the consult is for</option>` +
    TREATMENTS.map((t) => `<option value="${esc(t.name)}">${esc(t.name)} (${esc(t.cat)})</option>`).join("");
}

/* ---------- Consult form ---------- */
const consultForm = $("consultForm");
const consultNote = $("consultNote");
const KEY_PLACEHOLDER = "YOUR_WEB3FORMS_ACCESS_KEY";

async function submitConsult(formData) {
  const firstName = String(formData.get("name") || "there").split(" ")[0];
  const btn = consultForm.querySelector('button[type="submit"]');

  if (formData.get("botcheck")) return; // honeypot

  if (!CONFIG.web3formsKey || CONFIG.web3formsKey === KEY_PLACEHOLDER) {
    const subject = encodeURIComponent(`Consult request — ${formData.get("name") || ""} · ${formData.get("concern") || ""}`);
    const body = encodeURIComponent([...formData.entries()].filter(([k]) => k !== "botcheck").map(([k, v]) => `${k}: ${v}`).join("\n"));
    window.location.href = `mailto:${CONFIG.ownerEmail}?subject=${subject}&body=${body}`;
    toast(`Opening your email app to send your consult request…`);
    return;
  }

  const fd = new FormData();
  fd.append("access_key", CONFIG.web3formsKey);
  fd.append("subject", `✨ NEW CONSULT — ${formData.get("name") || "website"} · ${formData.get("concern") || ""}`);
  fd.append("from_name", CONFIG.businessName);
  fd.append("botcheck", "");
  fd.append("Name", formData.get("name") || "");
  fd.append("Phone", formData.get("phone") || "");
  fd.append("Email", formData.get("email") || "");
  fd.append("Concern", formData.get("concern") || "");
  fd.append("Treatment interest", formData.get("treatment") || "Not sure yet");
  fd.append("Best time", formData.get("timing") || "");
  fd.append("Notes", formData.get("notes") || "");

  btn.disabled = true;
  const orig = btn.textContent;
  btn.textContent = "Sending…";

  try {
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { Accept: "application/json" }, body: fd });
    const data = await res.json();
    if (res.ok && data.success) {
      consultForm.reset();
      toast(`Thanks ${firstName}! Your consult request is in — we'll reply within one business day.`);
      consultNote.textContent = "Sent ✓ — we'll reply within one business day with available times.";
    } else {
      throw new Error(data.message || "Send failed");
    }
  } catch (_) {
    toast(`Couldn't send your request — please call ${CONFIG.phone} or email ${CONFIG.ownerEmail}.`);
    consultNote.textContent = `Something went wrong. Please call ${CONFIG.phone} or email ${CONFIG.ownerEmail}.`;
  } finally {
    btn.disabled = false;
    btn.textContent = orig;
  }
}

consultForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitConsult(new FormData(consultForm));
});

/* ---------- Mobile nav toggle ---------- */
const navToggle = $("navToggle");
const navLinks = $("navLinks");
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", false);
}));

/* ---------- Toast notifications ---------- */
let toastTimer;
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.hidden = false;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => (t.hidden = true), 300);
  }, 3500);
}

/* ---------- Spa strip background ---------- */
function loadSpaStrip() {
  const ph = PEXELS_PHOTOS[CONFIG.spaQuery];
  if (ph) $("spaImg").style.backgroundImage = `url("${px(ph.u, 1600)}")`;
}

/* ---------- Init ---------- */
renderConcernChips();
renderFinderResults();
renderTreatments();
renderTeam();
renderMemberships();
renderReviews();
renderFormOptions();
loadSpaStrip();
