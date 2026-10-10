const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const rates = { eeco: 8, rumion: 10, ertiga: 10 };
const vehicleNames = {
  eeco: { en: "Maruti Suzuki Eeco", hi: "मारुति सुज़ुकी ईको" },
  rumion: { en: "Toyota Rumion", hi: "टोयोटा रुमियन" },
  ertiga: { en: "Maruti Suzuki Ertiga", hi: "मारुति सुज़ुकी अर्टिगा" }
};

const translations = {
  en: {
    tagline:"आपका सफर, हमारी ज़िम्मेदारी",navHome:"Home",navVehicles:"Vehicles",navDestinations:"Destinations",navContact:"Contact",quickSettings:"Quick settings",language:"Language",
    heroEyebrow:"YOUR JOURNEY, OUR RESPONSIBILITY",heroTitle:"Every journey deserves<br><em>comfort & care.</em>",heroDesc:"Reliable rides for family trips, city travel and spiritual journeys across India.",bookTrip:"Plan Your Trip",tag24:"24×7 Availability",tagComfort:"Comfortable travel",tagTrust:"Trusted service",heroCaption:"MADE FOR THE MILES THAT MATTER",
    trust1Title:"Available 24×7",trust1Desc:"Plan your trip any time",trust2Title:"Comfort first",trust2Desc:"Travel with ease",trust3Title:"Pilgrimage trips",trust3Desc:"Popular destinations",trust4Title:"Personal service",trust4Desc:"Your journey matters",
    bookingEyebrow:"LET'S GET YOU MOVING",bookingTitle:"Plan your <em>next journey.</em>",bookingDesc:"Share a few details. We'll prepare your booking message in WhatsApp so you can send it directly to Amir Travelers.",important:"Important information",minimumRule:"Minimum 250 km per day charge may apply. Please confirm the applicable terms before booking.",tollRule:"Toll and parking charges are payable separately.",rateRule:"Rates may change.",needHelp:"Need help planning?",secondaryContact:"Secondary: 8007985771",
    formTitle:"Trip details",formSubtitle:"Fill in the details below",nameLabel:"Full name *",mobileLabel:"Mobile number *",pickupLabel:"Pickup location *",destinationLabel:"Destination *",tripTypeLabel:"Trip type *",oneway:"One-way",fullRoute:"Full route / round trip",vehicleLabel:"Choose vehicle *",distanceLabel:"Total distance (km) *",dateLabel:"Travel date (optional)",extraLabel:"Additional information (optional)",namePlaceholder:"Your name",mobilePlaceholder:"10-digit number",pickupPlaceholder:"City / address",destinationPlaceholder:"Where to?",distancePlaceholder:"Enter total km",extraPlaceholder:"Passengers, luggage, stops, timing...",estimatedFare:"Estimated fare",estimateNote:"Estimate only",fareDisclaimer:"Fare = entered distance × selected vehicle rate. Toll and parking are extra. Minimum-charge terms should be confirmed directly.",whatsappSubmit:"Continue on WhatsApp",whatsappNote:"WhatsApp will open with your details filled in. Review and press Send to submit your booking request.",
    fleetEyebrow:"OUR FLEET",fleetTitle:"The right ride for <em>your route.</em>",fleetDesc:"Choose a vehicle that suits your journey and budget.",sevenSeater:"7-seater as specified",practicalVan:"PRACTICAL & SPACIOUS",familyComfort:"FAMILY COMFORT",premiumComfort:"COMFORTABLE & VERSATILE",eecoDesc:"A practical option for everyday travel and group journeys. Confirm your exact seating variant when booking.",rumionDesc:"A spacious MPV for family outings, long drives and pilgrimage journeys.",ertigaDesc:"A comfortable family MPV for city-to-city travel and longer routes.",chooseVehicle:"Choose this vehicle",vehicleImageNote:"Vehicle photos are linked from manufacturer image sources where available. Tap a vehicle image to visit its official page.",
    destinationEyebrow:"PLACES WORTH THE JOURNEY",destinationTitle:"Go where your <em>heart leads.</em>",destinationDesc:"From nearby city rides to memorable spiritual journeys.",agra:"Agra",mathura:"Mathura & Vrindavan",varanasi:"Varanasi",dwarka:"Dwarka",kanpur:"Kanpur",etawah:"Etawah",ayodhya:"Ayodhya",haridwar:"Haridwar & Rishikesh",exploreMap:"Explore on map ↗",destinationCta:"Have another destination in mind?",askTrip:"Ask about your trip ↗",
    aboutEyebrow:"THE AMIR TRAVELERS PROMISE",aboutTitle:"Good journeys begin with <em>good care.</em>",aboutDesc:"Amir Travelers helps you plan city rides, family outings and spiritual trips with a focus on comfort, clear communication and dependable service. Share your route and preferences, and we'll discuss the details with you.",promise1:"Clear fare estimates",promise2:"Trip details confirmed directly",promise3:"Routes tailored to your plans",planWithUs:"Plan with us ↗",
    contactEyebrow:"LET'S TALK TRAVEL",contactTitle:"Your next trip starts <em>with a hello.</em>",contactDesc:"Call us or send your trip details on WhatsApp.",primaryPhone:"Primary contact",secondaryPhone:"Secondary contact",chatNow:"Chat now",footerDesc:"Thoughtful travel for the roads and moments that matter.",quickLinks:"Quick links",aboutUs:"About us",socialConnect:"Social & contact",footerTerms:"Toll and parking extra. Rates may change. Minimum 250 km per day charge may apply; confirm terms before booking.",createdBy:"WEBSITE DESIGNED & DEVELOPED BY",creatorDesc:"Need a website for your business? Let's build it.",rights:"All rights reserved.",backTop:"Back to top ↑",
    errDistance:"Please enter a valid distance greater than 0 km.",errMobile:"Please enter a valid mobile number.",toastVehicle:"Vehicle selected. Complete the booking form below.",toastRequired:"Please complete all required fields."
  },
  hi: {
    tagline:"आपका सफर, हमारी ज़िम्मेदारी",navHome:"होम",navVehicles:"गाड़ियाँ",navDestinations:"जगहें",navContact:"संपर्क",quickSettings:"त्वरित सेटिंग्स",language:"भाषा",
    heroEyebrow:"आपका सफर, हमारी ज़िम्मेदारी",heroTitle:"हर सफर बने<br><em>आरामदायक और यादगार।</em>",heroDesc:"परिवार के सफर, शहर की यात्रा और भारत के तीर्थ स्थलों के लिए भरोसेमंद गाड़ी सेवा।",bookTrip:"अपना सफर प्लान करें",tag24:"24×7 उपलब्धता",tagComfort:"आरामदायक सफर",tagTrust:"भरोसेमंद सेवा",heroCaption:"हर ज़रूरी सफर के लिए",
    trust1Title:"24×7 उपलब्धता",trust1Desc:"कभी भी सफर प्लान करें",trust2Title:"आराम सबसे पहले",trust2Desc:"सुकून से यात्रा करें",trust3Title:"तीर्थ यात्रा",trust3Desc:"लोकप्रिय तीर्थ स्थल",trust4Title:"व्यक्तिगत सेवा",trust4Desc:"आपका सफर मायने रखता है",
    bookingEyebrow:"चलिए आपका सफर प्लान करें",bookingTitle:"अपनी <em>अगली यात्रा</em> प्लान करें।",bookingDesc:"कुछ जानकारी भरें। WhatsApp पर बुकिंग मैसेज तैयार होगा, जिसे आप Amir Travelers को भेज सकेंगे।",important:"ज़रूरी जानकारी",minimumRule:"प्रति दिन न्यूनतम 250 km का चार्ज लागू हो सकता है। बुकिंग से पहले लागू नियमों की पुष्टि कर लें।",tollRule:"टोल और पार्किंग का भुगतान अलग से करना होगा।",rateRule:"रेट बदल सकते हैं।",needHelp:"सफर प्लान करने में मदद चाहिए?",secondaryContact:"दूसरा नंबर: 8007985771",
    formTitle:"सफर की जानकारी",formSubtitle:"नीचे दी गई जानकारी भरें",nameLabel:"पूरा नाम *",mobileLabel:"मोबाइल नंबर *",pickupLabel:"पिकअप की जगह *",destinationLabel:"कहाँ जाना है? *",tripTypeLabel:"सफर का प्रकार *",oneway:"वन-वे",fullRoute:"पूरा रूट / आने-जाने का सफर",vehicleLabel:"गाड़ी चुनें *",distanceLabel:"कुल दूरी (km) *",dateLabel:"यात्रा की तारीख (वैकल्पिक)",extraLabel:"अन्य जानकारी (वैकल्पिक)",namePlaceholder:"अपना नाम लिखें",mobilePlaceholder:"10 अंकों का नंबर",pickupPlaceholder:"शहर / पता",destinationPlaceholder:"मंज़िल लिखें",distancePlaceholder:"कुल दूरी लिखें",extraPlaceholder:"यात्री, सामान, स्टॉप, समय आदि",estimatedFare:"अनुमानित किराया",estimateNote:"सिर्फ अनुमान",fareDisclaimer:"किराया = दर्ज दूरी × चुनी गई गाड़ी का रेट। टोल और पार्किंग अलग से। न्यूनतम चार्ज के नियम सीधे पुष्टि करें।",whatsappSubmit:"WhatsApp पर आगे बढ़ें",whatsappNote:"आपकी जानकारी भरे हुए मैसेज के साथ WhatsApp खुलेगा। बुकिंग रिक्वेस्ट भेजने के लिए मैसेज देखकर Send दबाएँ।",
    fleetEyebrow:"हमारी गाड़ियाँ",fleetTitle:"आपके रूट के लिए <em>सही गाड़ी।</em>",fleetDesc:"अपने सफर और बजट के हिसाब से गाड़ी चुनें।",sevenSeater:"आपके बताए अनुसार 7-सीटर",practicalVan:"काम की और जगहदार",familyComfort:"परिवार के लिए आरामदायक",premiumComfort:"आरामदायक और उपयोगी",eecoDesc:"रोज़मर्रा और समूह में सफर के लिए उपयोगी विकल्प। बुकिंग के समय गाड़ी का सही सीटिंग वेरिएंट कन्फर्म करें।",rumionDesc:"परिवार, लंबी ड्राइव और तीर्थ यात्रा के लिए जगहदार MPV।",ertigaDesc:"शहर से शहर और लंबी यात्राओं के लिए आरामदायक फैमिली MPV।",chooseVehicle:"यह गाड़ी चुनें",vehicleImageNote:"जहाँ उपलब्ध हैं, गाड़ियों की तस्वीरें निर्माता के स्रोत से जोड़ी गई हैं। तस्वीर पर टैप करके आधिकारिक पेज देखें।",
    destinationEyebrow:"सफर के काबिल जगहें",destinationTitle:"जहाँ आपका <em>मन ले जाए।</em>",destinationDesc:"नज़दीकी शहरों से लेकर यादगार तीर्थ यात्राओं तक।",agra:"आगरा",mathura:"मथुरा और वृंदावन",varanasi:"वाराणसी",dwarka:"द्वारका",kanpur:"कानपुर",etawah:"इटावा",ayodhya:"अयोध्या",haridwar:"हरिद्वार और ऋषिकेश",exploreMap:"मैप पर देखें ↗",destinationCta:"किसी दूसरी जगह जाना है?",askTrip:"अपने सफर के बारे में पूछें ↗",
    aboutEyebrow:"AMIR TRAVELERS का वादा",aboutTitle:"अच्छा सफर शुरू होता है <em>अच्छी देखभाल से।</em>",aboutDesc:"Amir Travelers शहर की यात्रा, परिवार के सफर और तीर्थ यात्राओं की योजना बनाने में मदद करता है। हमारा ध्यान आराम, साफ बातचीत और भरोसेमंद सेवा पर है। अपना रूट और ज़रूरतें बताएं, बाकी जानकारी सीधे तय कर लें।",promise1:"किराये का साफ अनुमान",promise2:"सफर की जानकारी सीधे कन्फर्म",promise3:"आपकी योजना के मुताबिक रूट",planWithUs:"हमारे साथ प्लान करें ↗",
    contactEyebrow:"सफर की बात करें",contactTitle:"आपका अगला सफर शुरू होता है <em>एक कॉल से।</em>",contactDesc:"कॉल करें या WhatsApp पर सफर की जानकारी भेजें।",primaryPhone:"मुख्य संपर्क",secondaryPhone:"दूसरा संपर्क",chatNow:"अभी चैट करें",footerDesc:"आपके ज़रूरी सफर और यादगार पलों के लिए यात्रा सेवा।",quickLinks:"ज़रूरी लिंक",aboutUs:"हमारे बारे में",socialConnect:"सोशल और संपर्क",footerTerms:"टोल और पार्किंग अलग से। रेट बदल सकते हैं। प्रति दिन न्यूनतम 250 km का चार्ज लागू हो सकता है; बुकिंग से पहले पुष्टि करें।",createdBy:"वेबसाइट डिज़ाइन और डेवलपमेंट",creatorDesc:"अपने बिज़नेस के लिए वेबसाइट चाहिए? संपर्क करें।",rights:"सर्वाधिकार सुरक्षित।",backTop:"ऊपर जाएँ ↑",
    errDistance:"कृपया 0 km से ज़्यादा सही दूरी दर्ज करें।",errMobile:"कृपया सही मोबाइल नंबर दर्ज करें।",toastVehicle:"गाड़ी चुन ली गई है। नीचे बुकिंग फॉर्म भरें।",toastRequired:"कृपया सभी ज़रूरी जानकारी भरें।"
  }
};

let currentLanguage = "en";
function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang === "hi" ? "hi" : "en";
  $$("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const value = translations[lang][key];
    if (value !== undefined) el.innerHTML = value;
  });
  $$("[data-i18n-placeholder]").forEach(el => {
    const value = translations[lang][el.dataset.i18nPlaceholder];
    if (value !== undefined) el.placeholder = value;
  });
  $$(".lang-btn[data-lang]").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  updateFare();
}
$$(".lang-btn[data-lang]").forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));

const vehicleSelect = $("#vehicle");
const distanceInput = $("#distance");
const fareAmount = $("#fareAmount");
const fareBreakdown = $("#fareBreakdown");
function updateFare() {
  const distance = Number(distanceInput.value);
  const rate = rates[vehicleSelect.value] || 8;
  const total = Number.isFinite(distance) && distance > 0 ? distance * rate : 0;
  fareAmount.textContent = new Intl.NumberFormat(currentLanguage === "hi" ? "hi-IN" : "en-IN", {
    style: "currency", currency: "INR", maximumFractionDigits: 0
  }).format(total);
  fareBreakdown.textContent = `${Number.isFinite(distance) && distance > 0 ? distance : 0} km × ₹${rate}/km`;
}
vehicleSelect.addEventListener("change", updateFare);
distanceInput.addEventListener("input", updateFare);

const menuToggle = $("#menuToggle");
const settingsPanel = $("#settingsPanel");
menuToggle.addEventListener("click", () => {
  const willOpen = settingsPanel.hidden;
  settingsPanel.hidden = !willOpen;
  menuToggle.setAttribute("aria-expanded", String(willOpen));
});
$$(".settings-inner a").forEach(link => link.addEventListener("click", () => {
  settingsPanel.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
}));

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

$$(".choose-vehicle").forEach(button => button.addEventListener("click", () => {
  vehicleSelect.value = button.dataset.vehicle;
  updateFare();
  $("#booking").scrollIntoView({ behavior: "smooth" });
  showToast(translations[currentLanguage].toastVehicle);
}));

$("#bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const name = $("#customerName").value.trim();
  const mobile = $("#customerMobile").value.trim();
  const pickup = $("#pickup").value.trim();
  const destination = $("#destination").value.trim();
  const tripType = $("#tripType").value;
  const vehicleKey = vehicleSelect.value;
  const distance = Number(distanceInput.value);
  const rate = rates[vehicleKey];
  if (!Number.isFinite(distance) || distance <= 0) {
    showToast(translations[currentLanguage].errDistance);
    distanceInput.focus();
    return;
  }
  const digits = mobile.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) {
    showToast(translations[currentLanguage].errMobile);
    $("#customerMobile").focus();
    return;
  }
  const total = distance * rate;
  const date = $("#travelDate").value;
  const extra = $("#extraInfo").value.trim();
  const enTrip = tripType === "oneway" ? "One-way" : "Full route / round trip";
  const hiTrip = tripType === "oneway" ? "वन-वे" : "पूरा रूट / आने-जाने का सफर";
  const vehicleEn = vehicleNames[vehicleKey].en;
  const vehicleHi = vehicleNames[vehicleKey].hi;
  const fare = `₹${total.toLocaleString("en-IN")} (${distance} km × ₹${rate}/km)`;
  const message = [
    "नमस्ते Amir Travelers! मुझे अपनी यात्रा बुक करने की जानकारी देनी है।",
    "",
    "Booking details / बुकिंग जानकारी:",
    `Name / नाम: ${name}`,
    `Mobile / मोबाइल: ${mobile}`,
    `Pickup / पिकअप: ${pickup}`,
    `Destination / मंज़िल: ${destination}`,
    `Trip type / सफर: ${hiTrip} (${enTrip})`,
    `Vehicle / गाड़ी: ${vehicleHi} (${vehicleEn})`,
    `Distance / दूरी: ${distance} km`,
    `Estimated fare / अनुमानित किराया: ${fare}`,
    `Travel date / यात्रा की तारीख: ${date || "Not specified / नहीं बताई"}`,
    `Additional info / अन्य जानकारी: ${extra || "None / नहीं"}`,
    "",
    "कृपया बुकिंग कन्फर्म करने के लिए लागू नियम, उपलब्धता और अंतिम किराया बता दें।",
    "Please confirm availability, applicable terms and final fare.",
    "",
    "बुकिंग के लिए कृपया यह मैसेज भेजें। / Please press Send to submit this request."
  ].join("\n");
  const whatsappUrl = `https://wa.me/917451952707?text=${encodeURIComponent(message)}`;
  const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  if (!opened) window.location.href = whatsappUrl;
});

$("#year").textContent = new Date().getFullYear();
updateFare();
