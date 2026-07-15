// PestGuard Pro Interactive Logic

// --- PEST DATABASE FOR THE INTERACTIVE LIBRARY ---
const PEST_DATABASE = {
    termites: {
        name: "Subterranean Termites",
        risk: "Structural Risk: Extreme",
        riskClass: "risk-high",
        desc: "Termites operate silently inside wooden foundations. By the time visual signs appear, thousands of dollars in drywall and framing damage may already be done. Our sub-soil liquid barriers block them completely.",
        indicators: [
            "Mud tubes along concrete foundation walls",
            "Hollow-sounding wood joists or baseboards",
            "Discarded wings near doors and windows"
        ],
        prevention: [
            "Keep crawl spaces dry and verify proper venting",
            "Maintain a 6-inch soil-to-wood siding gap",
            "Redirect gutter runoff away from foundation"
        ],
        btnText: "Book Termite Shield Treatment",
        svg: `<svg viewBox="0 0 300 300" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="glow-termite" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#10b981" stop-opacity="0.15" />
                    <stop offset="100%" stop-color="#10b981" stop-opacity="0" />
                </radialGradient>
            </defs>
            <circle cx="150" cy="150" r="120" fill="url(#glow-termite)" />
            <g stroke="#10b981" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <!-- Legs -->
                <path d="M 110,120 Q 80,105 60,115" />
                <path d="M 110,150 Q 80,150 60,155" />
                <path d="M 110,180 Q 80,195 65,190" />
                <path d="M 190,120 Q 220,105 240,115" />
                <path d="M 190,150 Q 220,150 240,155" />
                <path d="M 190,180 Q 220,195 235,190" />
                <!-- Body segments -->
                <ellipse cx="150" cy="110" rx="18" ry="24" fill="var(--bg-primary)" stroke-width="3" />
                <ellipse cx="150" cy="150" rx="22" ry="26" fill="var(--bg-primary)" stroke-width="3" />
                <ellipse cx="150" cy="210" rx="20" ry="38" fill="var(--bg-primary)" stroke-width="3" />
                <!-- Antennae -->
                <path d="M 142,88 Q 130,70 115,60" />
                <path d="M 158,88 Q 170,70 185,60" />
                <!-- Pincers -->
                <path d="M 144,88 C 145,80 148,78 147,74" stroke-width="4" />
                <path d="M 156,88 C 155,80 152,78 153,74" stroke-width="4" />
            </g>
        </svg>`
    },
    rodents: {
        name: "Mice & Norway Rats",
        risk: "Health Risk: Severe",
        riskClass: "risk-high",
        desc: "Rodents chew through electrical wiring, creating immediate fire hazards, while transmitting biological pathogens through their nesting trails. Our bait traps and steel exclusion sealants block entry routes.",
        indicators: [
            "Chewed drywall corners, wiring insulation, or piping",
            "Scritch-scratch noises inside ceilings at night",
            "Small capsule-shaped droppings near food pantries"
        ],
        prevention: [
            "Seal baseboard gaps larger than 1/4 inch with steel wool",
            "Store pet food in air-tight plastic bins",
            "Keep tree branches pruned 6 feet away from roofs"
        ],
        btnText: "Schedule Rodent Exclusion",
        svg: `<svg viewBox="0 0 300 300" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="glow-rodent" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.15" />
                    <stop offset="100%" stop-color="#06b6d4" stop-opacity="0" />
                </radialGradient>
            </defs>
            <circle cx="150" cy="150" r="120" fill="url(#glow-rodent)" />
            <g stroke="#06b6d4" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <!-- Tail -->
                <path d="M 150,220 Q 135,260 110,270 Q 90,275 80,260" stroke-width="2" />
                <!-- Feet -->
                <path d="M 125,215 Q 115,225 110,225" />
                <path d="M 175,215 Q 185,225 190,225" />
                <!-- Body -->
                <path d="M 110,160 C 110,100 190,100 190,160 C 190,200 180,220 150,220 C 120,220 110,200 110,160 Z" fill="var(--bg-primary)" />
                <!-- Head -->
                <path d="M 125,120 Q 150,75 175,120" />
                <circle cx="150" cy="115" r="12" fill="var(--bg-primary)" />
                <!-- Ears -->
                <circle cx="125" cy="95" r="14" fill="var(--bg-primary)" />
                <circle cx="175" cy="95" r="14" fill="var(--bg-primary)" />
                <!-- Eyes -->
                <circle cx="142" cy="115" r="3" fill="#ef4444" stroke="none" />
                <circle cx="158" cy="115" r="3" fill="#ef4444" stroke="none" />
                <!-- Whiskers -->
                <path d="M 135,125 Q 105,120 95,115" stroke-width="1.5" />
                <path d="M 135,128 Q 100,130 90,132" stroke-width="1.5" />
                <path d="M 165,125 Q 195,120 205,115" stroke-width="1.5" />
                <path d="M 165,128 Q 200,130 210,132" stroke-width="1.5" />
            </g>
        </svg>`
    },
    bedbugs: {
        name: "Cimex Bed Bugs",
        risk: "Bite & Sleep Hazard: Severe",
        riskClass: "risk-high",
        desc: "Bed bugs nest in seams of mattresses, headboards, and luggage, emerging in dark hours to feed. Highly resistant to basic sprays, we eradicate them through localized thermal heat treatments.",
        indicators: [
            "Itchy clustered red welts on skin upon waking",
            "Tiny rusty or dark brown spots on bedsheets",
            "Shed bug husks located in mattress seams"
        ],
        prevention: [
            "Encase mattresses and box springs in certified covers",
            "Wash bedding at 140°F (60°C) after traveling",
            "Inspect hotel luggage racks and mattress seams"
        ],
        btnText: "Schedule Bed Bug Thermal Service",
        svg: `<svg viewBox="0 0 300 300" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="glow-bedbug" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#ef4444" stop-opacity="0.15" />
                    <stop offset="100%" stop-color="#ef4444" stop-opacity="0" />
                </radialGradient>
            </defs>
            <circle cx="150" cy="150" r="120" fill="url(#glow-bedbug)" />
            <g stroke="#ef4444" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <!-- Legs -->
                <path d="M 115,110 Q 80,95 70,105" />
                <path d="M 110,140 Q 75,140 65,145" />
                <path d="M 115,170 Q 75,190 70,205" />
                <path d="M 185,110 Q 220,95 230,105" />
                <path d="M 190,140 Q 225,140 235,145" />
                <path d="M 185,170 Q 225,190 230,205" />
                <!-- Abdomen Ribbed -->
                <ellipse cx="150" cy="165" rx="42" ry="50" fill="var(--bg-primary)" />
                <path d="M 112,145 Q 150,165 188,145" />
                <path d="M 109,165 Q 150,185 191,165" />
                <path d="M 112,185 Q 150,205 188,185" />
                <!-- Thorax & Head -->
                <path d="M 125,115 Q 150,130 175,115" />
                <ellipse cx="150" cy="100" rx="16" ry="12" fill="var(--bg-primary)" />
                <circle cx="150" cy="84" r="8" fill="var(--bg-primary)" />
                <!-- Antennae -->
                <path d="M 144,78 Q 135,65 125,65" />
                <path d="M 156,78 Q 165,65 175,65" />
            </g>
        </svg>`
    },
    ants: {
        name: "Carpenter & Sugar Ants",
        risk: "Food & Wood Threat: Moderate",
        riskClass: "risk-medium",
        desc: "Sugar ants contaminate kitchens, while Carpenter ants tunnel structural timbers to build colonies. We destroy nesting queens using botanical bait lines, cutting off trail paths permanently.",
        indicators: [
            "Steady lines of worker ants along baseboards or countertops",
            "Small piles of sawdust (frass) under wooden door frames",
            "Rustling sounds inside drywall cavities or columns"
        ],
        prevention: [
            "Wipe sticky food residue off kitchen counters immediately",
            "Keep shrubs and grass trimmed away from siding lines",
            "Fix plumbing leaks promptly to prevent moisture zones"
        ],
        btnText: "Book Custom Ant Treatment",
        svg: `<svg viewBox="0 0 300 300" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="glow-ant" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#10b981" stop-opacity="0.12" />
                    <stop offset="100%" stop-color="#10b981" stop-opacity="0" />
                </radialGradient>
            </defs>
            <circle cx="150" cy="150" r="120" fill="url(#glow-ant)" />
            <g stroke="#10b981" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <!-- Legs -->
                <path d="M 140,140 L 90,110 L 80,120" />
                <path d="M 145,150 L 85,150 L 75,160" />
                <path d="M 140,160 L 90,190 L 85,205" />
                <path d="M 160,140 L 210,110 L 220,120" />
                <path d="M 155,150 L 215,150 L 225,160" />
                <path d="M 160,160 L 210,190 L 215,205" />
                <!-- 3 Body Segments -->
                <circle cx="150" cy="110" r="14" fill="var(--bg-primary)" />
                <ellipse cx="150" cy="148" rx="12" ry="18" fill="var(--bg-primary)" />
                <ellipse cx="150" cy="195" rx="16" ry="26" fill="var(--bg-primary)" />
                <!-- Antennae -->
                <path d="M 144,98 Q 130,85 120,88" />
                <path d="M 156,98 Q 170,85 180,88" />
            </g>
        </svg>`
    },
    cockroaches: {
        name: "German & American Roaches",
        risk: "Allergen & Health Risk: Extreme",
        riskClass: "risk-high",
        desc: "Roaches breed extremely quickly, carrying pathogens that trigger severe asthma and allergies, especially in kids. We resolve roach issues using biological bait gels and growth regulators.",
        indicators: [
            "Sightings of bugs running under appliances when lights toggle",
            "Pepper-like specks on shelf surfaces or cabinet hinges",
            "Peculiar musty smells in kitchens or laundry zones"
        ],
        prevention: [
            "Avoid leaving dirty dishes or water pools overnight",
            "Seal plumbing pipe entries through drywall walls",
            "Regularly vacuum behind and beneath appliances"
        ],
        btnText: "Schedule Roach Eradication",
        svg: `<svg viewBox="0 0 300 300" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="glow-roach" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#ef4444" stop-opacity="0.12" />
                    <stop offset="100%" stop-color="#ef4444" stop-opacity="0" />
                </radialGradient>
            </defs>
            <circle cx="150" cy="150" r="120" fill="url(#glow-roach)" />
            <g stroke="#ef4444" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <!-- Legs with spine spikes -->
                <path d="M 115,120 Q 80,105 70,110" />
                <path d="M 110,150 Q 75,150 65,155" />
                <path d="M 115,180 Q 75,200 60,195" />
                <path d="M 185,120 Q 220,105 230,110" />
                <path d="M 190,150 Q 225,150 235,155" />
                <path d="M 185,180 Q 225,200 240,195" />
                <!-- Body Shield and wings -->
                <ellipse cx="150" cy="165" rx="30" ry="58" fill="var(--bg-primary)" />
                <path d="M 150,107 L 150,223" stroke-width="1.5" />
                <!-- Pronotum Head Shield -->
                <ellipse cx="150" cy="115" rx="22" ry="16" fill="var(--bg-primary)" />
                <circle cx="150" cy="100" r="6" fill="var(--bg-primary)" />
                <!-- Long Antennae -->
                <path d="M 146,95 Q 110,50 85,45" stroke-width="1.5" />
                <path d="M 154,95 Q 190,50 215,45" stroke-width="1.5" />
                <!-- Cerci (tail feelers) -->
                <path d="M 138,220 Q 130,240 125,245" />
                <path d="M 162,220 Q 170,240 175,245" />
            </g>
        </svg>`
    },
    spiders: {
        name: "Spiders (Widows & Recluses)",
        risk: "Bite Risk: Moderate",
        riskClass: "risk-medium",
        desc: "Most household spiders are harmless pest-hunters, but venomous species present health risks. We remove webs, dust crawlspaces, and apply organic perimeter barriers to keep them outside.",
        indicators: [
            "Tangled sticky webs in ceiling corners, joists, or garages",
            "Funnel-shaped webs in dark undisturbed firewood piles",
            "Sightings of spiders in damp basements or dark closets"
        ],
        prevention: [
            "Keep outdoor firewood bins 20 feet away from home siding",
            "De-clutter dark basements, closets, and storage spaces",
            "Clear outdoor webs weekly with a broom or brush"
        ],
        btnText: "Schedule Web Sweep & Sprays",
        svg: `<svg viewBox="0 0 300 300" class="pest-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="glow-spider" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.12" />
                    <stop offset="100%" stop-color="#06b6d4" stop-opacity="0" />
                </radialGradient>
            </defs>
            <circle cx="150" cy="150" r="120" fill="url(#glow-spider)" />
            <g stroke="#06b6d4" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <!-- 8 Jointed Legs -->
                <path d="M 135,135 Q 90,95 65,115" />
                <path d="M 135,142 Q 80,125 55,145" />
                <path d="M 135,150 Q 80,165 55,185" />
                <path d="M 135,158 Q 90,195 65,215" />
                
                <path d="M 165,135 Q 210,95 235,115" />
                <path d="M 165,142 Q 220,125 245,145" />
                <path d="M 165,150 Q 220,165 245,185" />
                <path d="M 165,158 Q 210,195 235,215" />
                <!-- Cephalothorax & Abdomen -->
                <circle cx="150" cy="140" r="12" fill="var(--bg-primary)" />
                <circle cx="150" cy="172" r="22" fill="var(--bg-primary)" />
                <!-- Eyes cluster representation -->
                <circle cx="145" cy="135" r="1.5" fill="#f9fafb" stroke="none" />
                <circle cx="150" cy="133" r="1.5" fill="#f9fafb" stroke="none" />
                <circle cx="155" cy="135" r="1.5" fill="#f9fafb" stroke="none" />
            </g>
        </svg>`
    }
};

// --- INITIALIZE ALL WIDGETS WHEN DOM LOADS ---
document.addEventListener("DOMContentLoaded", () => {
    // Render default Pest graphic inside HTML placeholder
    renderPestDetails("termites");

    // Initialize Lucide icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Set minimum date for booking form to today
    const dateInput = document.getElementById("book-date");
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        dateInput.min = `${yyyy}-${mm}-${dd}`;
    }

    // Run Price Estimator update
    updatePriceEstimate();
});

// --- NAVIGATION & DRAWER MENU LOGIC ---
const mobileMenuBtn = document.querySelector(".mobile-nav-toggle");
const mobileCloseBtn = document.querySelector(".mobile-drawer-close");
const mobileDrawer = document.querySelector(".mobile-drawer");
const drawerLinks = document.querySelectorAll(".mobile-drawer-link");

function openMobileDrawer() {
    mobileDrawer.classList.add("active");
}
function closeMobileDrawer() {
    mobileDrawer.classList.remove("active");
}

if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", openMobileDrawer);
if (mobileCloseBtn) mobileCloseBtn.addEventListener("click", closeMobileDrawer);
drawerLinks.forEach(link => {
    link.addEventListener("click", closeMobileDrawer);
});

// --- DARK & LIGHT THEME TOGGLING ---
const themeToggleBtn = document.getElementById("theme-toggle");
const moonIcon = document.querySelector(".icon-moon");
const sunIcon = document.querySelector(".icon-sun");

// Load theme state from localstorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    if (moonIcon && sunIcon) {
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline-block";
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const isLight = document.body.classList.contains("light-theme");
        
        if (isLight) {
            localStorage.setItem("theme", "light");
            if (moonIcon && sunIcon) {
                moonIcon.style.display = "none";
                sunIcon.style.display = "inline-block";
            }
        } else {
            localStorage.setItem("theme", "dark");
            if (moonIcon && sunIcon) {
                moonIcon.style.display = "inline-block";
                sunIcon.style.display = "none";
            }
        }
    });
}

// --- PEST IDENTIFIER LIBRARY TABS LOGIC ---
const pestTabBtns = document.querySelectorAll(".pest-tab-btn");

pestTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // Toggle Active Tab style
        pestTabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const targetPestKey = btn.dataset.pest;
        renderPestDetails(targetPestKey);
    });
});

function renderPestDetails(key) {
    const data = PEST_DATABASE[key];
    if (!data) return;

    // Grab elements
    const nameEl = document.getElementById("pest-name");
    const riskEl = document.getElementById("pest-risk");
    const descEl = document.getElementById("pest-desc");
    const indicatorsEl = document.getElementById("pest-indicators");
    const preventionEl = document.getElementById("pest-prevention");
    const artCanvasEl = document.getElementById("pest-art-canvas");
    const actionBtnEl = document.getElementById("pest-action-btn");

    if (nameEl) nameEl.textContent = data.name;
    
    if (riskEl) {
        riskEl.className = `risk-badge ${data.riskClass}`;
        riskEl.innerHTML = `<i data-lucide="alert-triangle"></i> ${data.risk}`;
    }

    if (descEl) descEl.textContent = data.desc;

    // Bullet loops
    if (indicatorsEl) {
        indicatorsEl.innerHTML = data.indicators.map(item => `<li>${item}</li>`).join("");
    }
    if (preventionEl) {
        preventionEl.innerHTML = data.prevention.map(item => `<li>${item}</li>`).join("");
    }

    // Insert SVG Vector
    if (artCanvasEl) artCanvasEl.innerHTML = data.svg;

    // Hook schedule action button to select proper pest and scroll to booking
    if (actionBtnEl) {
        actionBtnEl.textContent = data.btnText;
        actionBtnEl.onclick = () => {
            selectPestInBooking(key);
            document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
        };
    }

    // Re-trigger Lucide icons to paint dynamic items
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function selectPestInBooking(pestKey) {
    const selectPest = document.getElementById("book-pest");
    if (selectPest) {
        selectPest.value = pestKey;
    }
}

// --- INSTANT PRICE ESTIMATOR LOGIC ---
const homeSizeSlider = document.getElementById("home-size");
const homeSizeDisplay = document.getElementById("home-size-display");
const pestSelect = document.getElementById("pest-select");
const frequencySelect = document.getElementById("frequency-select");

const calculatedPriceEl = document.getElementById("calculated-price");
const priceFrequencyEl = document.getElementById("price-frequency");
const surchargeDisplayEl = document.getElementById("surcharge-display");
const multiplierDisplayEl = document.getElementById("multiplier-display");
const discountDisplayEl = document.getElementById("discount-display");
const discountLabelEl = document.getElementById("discount-label");

const estimatorBookBtn = document.getElementById("estimator-book-btn");

// Pricing Constants
const BASE_RATE = 99.00;
const SURCHARGES = {
    ants: 30.00,
    cockroaches: 50.00,
    rodents: 75.00,
    termites: 150.00,
    bedbugs: 200.00
};

function getHomeMultiplier(sqft) {
    if (sqft <= 1000) return 1.00;
    if (sqft <= 2000) return 1.25;
    if (sqft <= 3500) return 1.50;
    return 1.85; // 3500 - 5000 sq ft
}

function updatePriceEstimate() {
    if (!homeSizeSlider) return;

    const sqft = parseInt(homeSizeSlider.value);
    const pest = pestSelect.value;
    const frequency = frequencySelect.value;

    // Label updates
    homeSizeDisplay.textContent = `${sqft.toLocaleString()} sq ft`;

    // Calculations
    const multiplier = getHomeMultiplier(sqft);
    const surcharge = SURCHARGES[pest] || 0.00;
    
    let frequencyText = "";
    let discountPercent = 0;
    let discountLabel = "Discount";

    if (frequency === "onetime") {
        frequencyText = "/ one-time";
        discountPercent = 0;
        discountLabel = "No recurring discount";
    } else if (frequency === "monthly") {
        frequencyText = "/ month";
        discountPercent = 0.20; // 20% Off
        discountLabel = "Monthly Program Discount (20%)";
    } else {
        frequencyText = "/ quarterly";
        discountPercent = 0.10; // 10% Off
        discountLabel = "Quarterly Shield Discount (10%)";
    }

    // Math calculation
    const rawTotal = (BASE_RATE + surcharge) * multiplier;
    const discountAmount = rawTotal * discountPercent;
    const finalTotal = Math.round(rawTotal - discountAmount);

    // Update displays
    if (calculatedPriceEl) calculatedPriceEl.textContent = finalTotal;
    if (priceFrequencyEl) priceFrequencyEl.textContent = frequencyText;
    
    if (surchargeDisplayEl) surchargeDisplayEl.textContent = `+$${surcharge.toFixed(2)}`;
    if (multiplierDisplayEl) multiplierDisplayEl.textContent = `x${multiplier.toFixed(2)}`;
    if (discountLabelEl) discountLabelEl.textContent = discountLabel;
    if (discountDisplayEl) {
        if (discountPercent > 0) {
            discountDisplayEl.textContent = `-${(discountPercent * 100)}%`;
            discountDisplayEl.parentElement.classList.remove("text-muted");
            discountDisplayEl.parentElement.classList.add("text-emerald");
        } else {
            discountDisplayEl.textContent = "$0.00";
            discountDisplayEl.parentElement.classList.remove("text-emerald");
            discountDisplayEl.parentElement.classList.add("text-muted");
        }
    }
}

// Bind Estimator Inputs
if (homeSizeSlider) homeSizeSlider.addEventListener("input", updatePriceEstimate);
if (pestSelect) pestSelect.addEventListener("change", updatePriceEstimate);
if (frequencySelect) frequencySelect.addEventListener("change", updatePriceEstimate);

// "Lock rate and Book" transition
if (estimatorBookBtn) {
    estimatorBookBtn.addEventListener("click", () => {
        // Sync parameters to Booking form step 1
        const bookPest = document.getElementById("book-pest");
        const bookSize = document.getElementById("book-size");
        
        if (bookPest && pestSelect) {
            bookPest.value = pestSelect.value;
        }
        
        if (bookSize) {
            const sqft = parseInt(homeSizeSlider.value);
            if (sqft <= 1000) bookSize.value = "small";
            else if (sqft <= 2500) bookSize.value = "medium";
            else if (sqft <= 4000) bookSize.value = "large";
            else bookSize.value = "xlarge";
        }
        
        // Scroll to booking form
        document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
    });
}

// --- SIMPLE CONTACT FORM LOGIC ---
const bookingForm = document.getElementById("booking-form");
const successView = document.getElementById("booking-success-view");
const resetBookingBtn = document.getElementById("reset-booking-btn");

// Validation helper functions
function validateInput(inputEl) {
    const group = inputEl.closest(".control-group");
    if (!group) return true;

    let isValid = true;

    // Required fields check
    if (inputEl.hasAttribute("required") && !inputEl.value.trim()) {
        isValid = false;
    }

    // Specific field pattern checks
    if (isValid && inputEl.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(inputEl.value);
    }

    if (isValid && inputEl.type === "tel") {
        // Simple phone numeric check
        const phoneDigits = inputEl.value.replace(/\D/g, "");
        isValid = phoneDigits.length >= 8; // Indian/Global contact number formats
    }

    if (!isValid) {
        group.classList.add("has-error");
    } else {
        group.classList.remove("has-error");
    }

    return isValid;
}

// Live Validation on User Blur/Input
const formInputs = bookingForm ? bookingForm.querySelectorAll("input[required]") : [];
formInputs.forEach(input => {
    input.addEventListener("blur", () => validateInput(input));
    input.addEventListener("input", () => {
        const group = input.closest(".control-group");
        if (group && group.classList.contains("has-error")) {
            validateInput(input);
        }
    });
});

// Form Submit Handler
if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Validate all inputs before proceeding
        let isFormValid = true;
        const requiredInputs = bookingForm.querySelectorAll("input[required]");
        requiredInputs.forEach(input => {
            if (!validateInput(input)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            return;
        }

        const name = document.getElementById("book-name").value;
        const email = document.getElementById("book-email").value;
        const phone = document.getElementById("book-phone").value;

        // Update booking success screen data
        const sumName = document.getElementById("sum-name");
        const sumEmail = document.getElementById("sum-email");
        const sumPhone = document.getElementById("sum-phone");

        if (sumName) sumName.textContent = name;
        if (sumEmail) sumEmail.textContent = email;
        if (sumPhone) sumPhone.textContent = phone;

        // Prepare payload for backend email dispatch (PHP fallback requirements)
        const payload = {
            name: name,
            email: email,
            phone: phone,
            date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
            address: "Callback Requested",
            pest: "General Inquiry",
            size: "N/A",
            notes: "Immediate callback requested from single contact form.",
            price: "Free Consultation"
        };

        // Fire-and-forget booking notification email to receiver
        fetch("send_booking.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Email dispatch status:", data);
        })
        .catch(err => {
            console.error("Failed to dispatch email:", err);
        });

        // Switch containers to Success View
        bookingForm.style.display = "none";
        if (successView) successView.classList.add("active");
    });
}

// Reset Form Handler
if (resetBookingBtn) {
    resetBookingBtn.addEventListener("click", () => {
        if (bookingForm) {
            bookingForm.reset();
            bookingForm.style.display = "block";
        }
        if (successView) successView.classList.remove("active");
    });
}

// --- FAQ ACCORDION TRANSITIONS ---
const accordionTriggers = document.querySelectorAll(".accordion-trigger");

accordionTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
        const item = trigger.closest(".accordion-item");
        if (!item) return;

        const isCurrentlyActive = item.classList.contains("active");

        // Close all other open items
        document.querySelectorAll(".accordion-item").forEach(acc => {
            acc.classList.remove("active");
            const content = acc.querySelector(".accordion-content");
            if (content) {
                content.style.maxHeight = null;
                content.style.paddingTop = null;
                content.style.paddingBottom = null;
            }
        });

        // Toggle clicked item
        if (!isCurrentlyActive) {
            item.classList.add("active");
            const content = item.querySelector(".accordion-content");
            if (content) {
                // Compute scrollHeight dynamically for clean transition
                content.style.maxHeight = `${content.scrollHeight + 32}px`;
                content.style.paddingTop = "1rem";
                content.style.paddingBottom = "1.5rem";
            }
        }
    });
});

// --- INTERACTIVE COCKROACH SCUTTLING SYSTEM ---
let activeRoaches = [];
let mouseX = -1000;
let mouseY = -1000;

// Track mouse position globally
window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

const ROACH_SVG_MARKUP = `
<svg viewBox="0 0 100 100" style="width: 100%; height: 100%;" xmlns="http://www.w3.org/2000/svg">
  <g fill="#5c2c16" stroke="#2c1205" stroke-width="2">
    <!-- Legs (animated via CSS wiggle class) -->
    <path class="scuttle-legs" d="M 32,35 Q 12,25 6,32 M 32,50 Q 8,50 6,56 M 32,65 Q 12,80 8,76" stroke="#2c1205" stroke-width="3" fill="none" />
    <path class="scuttle-legs" d="M 68,35 Q 88,25 94,32 M 68,50 Q 92,50 94,56 M 68,65 Q 88,80 92,76" stroke="#2c1205" stroke-width="3" fill="none" />
    <!-- Long Antennae -->
    <path d="M 44,22 Q 25,4 8,8" stroke="#2c1205" stroke-width="1.5" fill="none" />
    <path d="M 56,22 Q 75,4 92,8" stroke="#2c1205" stroke-width="1.5" fill="none" />
    <!-- Cerci feelers -->
    <path d="M 38,82 L 32,92 M 62,82 L 68,92" stroke="#2c1205" stroke-width="2" />
    <!-- Abdomen body segments -->
    <ellipse cx="50" cy="55" rx="18" ry="28" fill="#5c2c16" />
    <!-- Wings overlapping -->
    <path d="M 33,40 C 33,85 50,85 50,85 C 50,85 67,85 67,40 Z" fill="#4a200e" opacity="0.9" />
    <!-- Thorax shield -->
    <ellipse cx="50" cy="32" rx="14" ry="10" fill="#3a180a" />
    <!-- Small Head -->
    <circle cx="50" cy="22" r="6" fill="#2c1205" />
  </g>
</svg>
`;

function spawnCockroach() {
    // Avoid spawning too many bugs
    if (activeRoaches.length >= 50) return;

    const roach = document.createElement("div");
    roach.className = "scuttling-roach";
    roach.innerHTML = ROACH_SVG_MARKUP;
    document.body.appendChild(roach);

    // Initial position randomly inside viewport
    const startX = Math.random() * (window.innerWidth - 60) + 30;
    const startY = Math.random() * (window.innerHeight - 60) + 30;

    roach.style.left = startX + "px";
    roach.style.top = startY + "px";

    const roachObj = {
        element: roach,
        x: startX,
        y: startY,
        targetX: Math.random() * window.innerWidth,
        targetY: Math.random() * window.innerHeight,
        angle: Math.random() * 360,
        speed: 3,
        panicState: false,
        timeSinceNewTarget: 0
    };

    // Click handler to squash roach
    roach.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        squashRoach(roachObj);
    });

    activeRoaches.push(roachObj);
}

function squashRoach(roachObj) {
    // Create splat effect
    const splat = document.createElement("div");
    splat.className = "splat-effect";
    splat.style.left = roachObj.x + "px";
    splat.style.top = roachObj.y + "px";
    document.body.appendChild(splat);

    // Clean up splat node after animation finishes
    setTimeout(() => splat.remove(), 600);

    // Remove roach element
    roachObj.element.remove();
    activeRoaches = activeRoaches.filter(r => r !== roachObj);

    // Show custom toast notification
    const toast = document.getElementById("roach-toast");
    if (toast) {
        toast.classList.add("active");
        setTimeout(() => toast.classList.remove("active"), 2500);
    }
}

// Cockroach scuttle tracking loop
function updateRoachMovement() {
    activeRoaches.forEach(roach => {
        roach.timeSinceNewTarget += 40;

        const dxMouse = roach.x - mouseX;
        const dyMouse = roach.y - mouseY;
        const distMouse = Math.hypot(dxMouse, dyMouse);

        // Escape cursor mode
        if (distMouse < 140) {
            roach.panicState = true;
            roach.speed = 10; // Scurry fast!
            
            // Compute vector away from mouse
            const angleAway = Math.atan2(dyMouse, dxMouse);
            roach.targetX = roach.x + Math.cos(angleAway) * 250;
            roach.targetY = roach.y + Math.sin(angleAway) * 250;

            // Keep within viewport bounds
            roach.targetX = Math.max(30, Math.min(window.innerWidth - 30, roach.targetX));
            roach.targetY = Math.max(30, Math.min(window.innerHeight - 30, roach.targetY));
        } else {
            // Calm down if far from mouse
            if (roach.panicState) {
                roach.panicState = false;
                roach.speed = 3;
                roach.targetX = Math.random() * window.innerWidth;
                roach.targetY = Math.random() * window.innerHeight;
            }

            const dxTarget = roach.targetX - roach.x;
            const dyTarget = roach.targetY - roach.y;
            const distTarget = Math.hypot(dxTarget, dyTarget);

            // Choose a new random coordinate if destination reached or stuck
            if (distTarget < 30 || roach.timeSinceNewTarget > 4000) {
                roach.targetX = Math.random() * (window.innerWidth - 60) + 30;
                roach.targetY = Math.random() * (window.innerHeight - 60) + 30;
                roach.timeSinceNewTarget = 0;
            }
        }

        // Steer step towards target
        const dx = roach.targetX - roach.x;
        const dy = roach.targetY - roach.y;
        const distance = Math.hypot(dx, dy);

        if (distance > 2) {
            // Update coordinates
            roach.x += (dx / distance) * roach.speed;
            roach.y += (dy / distance) * roach.speed;

            // Calculate rotation angle (SVG faces up, so add 90 deg offset)
            const targetAngle = Math.atan2(dy, dx) * 180 / Math.PI + 90;
            
            // Interpolate rotation angle to make turn transitions look natural
            let diff = targetAngle - roach.angle;
            while (diff < -180) diff += 360;
            while (diff > 180) diff -= 360;
            roach.angle += diff * 0.2; // turn rate
        }

        // Apply styles to element
        roach.element.style.left = roach.x + "px";
        roach.element.style.top = roach.y + "px";
        roach.element.style.transform = `translate(-50%, -50%) rotate(${roach.angle}deg)`;
    });
}

// Start animation loop (every 40ms)
setInterval(updateRoachMovement, 40);

// Set up UI Event listeners
const spawnBtn = document.getElementById("spawn-roach-trigger");
if (spawnBtn) {
    spawnBtn.addEventListener("click", () => {
        spawnCockroach();
    });
}

// Automatically spawn a surprise pack of cockroaches on a delay
setTimeout(() => {
    for (let i = 0; i < 12; i++) {
        setTimeout(() => spawnCockroach(), i * 200);
    }
}, 2000);

// --- GALLERY LIGHTBOX SYSTEM ---
function openLightbox(src, caption) {
    const lightbox = document.getElementById("gallery-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCap = document.getElementById("lightbox-caption");
    if (lightbox && lightboxImg && lightboxCap) {
        lightboxImg.src = src;
        lightboxCap.textContent = caption;
        lightbox.style.display = "flex";
        document.body.style.overflow = "hidden"; // disable body scrolling
    }
}

function closeLightbox() {
    const lightbox = document.getElementById("gallery-lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
        document.body.style.overflow = ""; // restore body scrolling
    }
}

// --- WHATSAPP WIDGET POPUP LOGIC ---
function toggleWhatsAppPopup(e) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }
    const chatBox = document.getElementById("whatsapp-chat-box");
    if (chatBox) {
        chatBox.classList.toggle("active");
    }
}

// Close WhatsApp popup when clicking anywhere else
document.addEventListener("click", (e) => {
    const chatBox = document.getElementById("whatsapp-chat-box");
    const toggleBtn = document.getElementById("whatsapp-toggle-btn");
    if (chatBox && chatBox.classList.contains("active")) {
        // If click is outside chat box and toggle button, close it
        if (!chatBox.contains(e.target) && !toggleBtn.contains(e.target)) {
            chatBox.classList.remove("active");
        }
    }
});

