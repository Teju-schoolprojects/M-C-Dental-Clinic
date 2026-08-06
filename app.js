/* ==========================================================================
   M C DENTAL CLINIC - APPLICATION LOGIC & INTERACTIVITY
   ========================================================================== */

// 1. DATASETS (Photos, Reviews, Services, FAQs)
const GALLERY_DATA = [
  {
    url: "https://images.jdmagicbox.com/v2/comp/bangalore/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-p-j-extension-davangere-davangere-dentists-izf262ui03.jpg",
    thumb: "https://images.jdmagicbox.com/v2/comp/bangalore/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-p-j-extension-davangere-davangere-dentists-izf262ui03-250.jpg",
    category: "certifications",
    categoryName: "Certificates & ISO",
    alt: "M.C. Dental Clinic 25th Anniversary Banner & ISO 9001:2015 Certification",
    caption: "25th Anniversary Celebration & ISO 9001:2015 Quality Certification"
  },
  {
    url: "https://images.jdmagicbox.com/comp/davangere/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-p-j-extension-davangere-davangere-dentists-5ra3gvupgq.jpg",
    thumb: "https://images.jdmagicbox.com/comp/davangere/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-p-j-extension-davangere-davangere-dentists-5ra3gvupgq-250.jpg",
    category: "certifications",
    categoryName: "Certificates & ISO",
    alt: "ISO 9001:2015 quality certification document for M.C Dental Clinic",
    caption: "Official ISO 9001:2015 International Quality Standard Certification"
  },
  {
    url: "https://images.jdmagicbox.com/v2/comp/davangere/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-pj-extension-davangere-davangere-dental-clinics-fz69ci1z1l.jpg",
    thumb: "https://images.jdmagicbox.com/v2/comp/davangere/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-pj-extension-davangere-davangere-dental-clinics-fz69ci1z1l-250.jpg",
    category: "exterior",
    categoryName: "Storefront & Exterior",
    alt: "Gayithri Medicals and M.C. Dental Clinic storefronts on 8th Main Road Davangere",
    caption: "Clinic Storefront on 8th Main Road, PJ Extension Davangere"
  },
  {
    url: "https://images.jdmagicbox.com/comp/davangere/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-davangere-ah1gg.jpg",
    thumb: "https://images.jdmagicbox.com/comp/davangere/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-davangere-ah1gg-250.jpg",
    category: "interior",
    categoryName: "Interior & Lounge",
    alt: "Dental consultation room interior",
    caption: "Doctor Consultation Desk & Patient Care Suite"
  },
  {
    url: "https://images.jdmagicbox.com/comp/davangere/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-davangere-mge5d.jpg",
    thumb: "https://images.jdmagicbox.com/comp/davangere/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-davangere-mge5d-250.jpg",
    category: "certifications",
    categoryName: "Certificates & ISO",
    alt: "Professional achievement certificate",
    caption: "State & National Dental Conference Recognition"
  },
  {
    url: "https://images.jdmagicbox.com/comp/davangere/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-davangere-u6nz9.jpg",
    thumb: "https://images.jdmagicbox.com/comp/davangere/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-davangere-u6nz9-250.jpg",
    category: "certifications",
    categoryName: "Certificates & ISO",
    alt: "Dental Council Registration Certificate",
    caption: "Karnataka State Dental Council Registration"
  },
  {
    url: "https://images.jdmagicbox.com/comp/davangere/71/9999PMULBLRSTD1007771/catalogue/m-c-dental-clinic-p-j-extension-davangere-davangere-dentists-43tkkes.jpg",
    thumb: "https://images.jdmagicbox.com/comp/davangere/71/9999PMULBLRSTD1007771/catalogue/m-c-dental-clinic-p-j-extension-davangere-davangere-dentists-43tkkes-250.jpg",
    category: "exterior",
    categoryName: "Storefront & Exterior",
    alt: "Main banner sign",
    caption: "M C Dental Clinic Name Banner & Contact Details"
  },
  {
    url: "https://images.jdmagicbox.com/comp/davangere/71/9999PMULBLRSTD1007771/catalogue/m-c-dental-clinic-p-j-extension-davangere-davangere-dentists-20jvd8e.jpg",
    thumb: "https://images.jdmagicbox.com/comp/davangere/71/9999PMULBLRSTD1007771/catalogue/m-c-dental-clinic-p-j-extension-davangere-davangere-dentists-20jvd8e-250.jpg",
    category: "interior",
    categoryName: "Interior & Lounge",
    alt: "Dental Chair Operatory",
    caption: "State-of-the-Art Dental Chair & Equipment"
  },
  {
    url: "https://images.jdmagicbox.com/comp/davangere/71/9999PMULBLRSTD1007771/catalogue/m-c-dental-clinic-p-j-extension-davangere-davangere-dentists-2codujy.jpg",
    thumb: "https://images.jdmagicbox.com/comp/davangere/71/9999PMULBLRSTD1007771/catalogue/m-c-dental-clinic-p-j-extension-davangere-davangere-dentists-2codujy-250.jpg",
    category: "interior",
    categoryName: "Interior & Lounge",
    alt: "Sterilized instrument station",
    caption: "Advanced Instrument Autoclave & Sterilization Area"
  },
  {
    url: "https://images.jdmagicbox.com/comp/davangere/71/9999PMULBLRSTD1007771/catalogue/m-c-dental-clinic-p-j-extension-davangere-davangere-dentists-35ny5lo.jpg",
    thumb: "https://images.jdmagicbox.com/comp/davangere/71/9999PMULBLRSTD1007771/catalogue/m-c-dental-clinic-p-j-extension-davangere-davangere-dentists-35ny5lo-250.jpg",
    category: "interior",
    categoryName: "Interior & Lounge",
    alt: "Reception counter",
    caption: "Patient Reception & Billing Desk"
  },
  {
    url: "https://images.jdmagicbox.com/comp/davangere/71/9999PMULBLRSTD1007771/catalogue/m-c-dental-clinic-p-j-extension-davangere-davangere-dentists-353fdkw.jpg",
    thumb: "https://images.jdmagicbox.com/comp/davangere/71/9999PMULBLRSTD1007771/catalogue/m-c-dental-clinic-p-j-extension-davangere-davangere-dentists-353fdkw-250.jpg",
    category: "exterior",
    categoryName: "Storefront & Exterior",
    alt: "Street building facade",
    caption: "Clinic Building Entrance behind Motiveerappa School"
  },
  {
    url: "https://images.jdmagicbox.com/comp/davangere/71/9999PMULBLRSTD1007771/catalogue/m-c-dental-clinic-p-j-extension-davangere-davangere-dentists-r0tdmn.jpg",
    thumb: "https://images.jdmagicbox.com/comp/davangere/71/9999PMULBLRSTD1007771/catalogue/m-c-dental-clinic-p-j-extension-davangere-davangere-dentists-r0tdmn-250.jpg",
    category: "interior",
    categoryName: "Interior & Lounge",
    alt: "Dental X-Ray Diagnostic Unit",
    caption: "Dental Digital X-Ray Diagnostic Station"
  },
  {
    url: "https://images.jdmagicbox.com/comp/davangere/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-pj-extension-davangere-davangere-dentists-oqa8w7u8l3.jpg",
    thumb: "https://images.jdmagicbox.com/comp/davangere/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-pj-extension-davangere-davangere-dentists-oqa8w7u8l3-250.jpg",
    category: "exterior",
    categoryName: "Storefront & Exterior",
    alt: "Front entry view by patient",
    caption: "Clinic Approach & Parking Area"
  },
  {
    url: "https://images.jdmagicbox.com/comp/davangere/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-pj-extension-davangere-davangere-dentists-pccd7foxe6.jpg",
    thumb: "https://images.jdmagicbox.com/comp/davangere/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-pj-extension-davangere-davangere-dentists-pccd7foxe6-250.jpg",
    category: "exterior",
    categoryName: "Storefront & Exterior",
    alt: "Exterior signage view",
    caption: "Gayithri Medicals & Dental Board Frontage"
  },
  {
    url: "https://images.jdmagicbox.com/comp/davangere/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-pj-extension-davangere-davangere-dentists-qegbw29tje.jpg",
    thumb: "https://images.jdmagicbox.com/comp/davangere/71/9999pmulblrstd1007771/catalogue/m-c-dental-clinic-pj-extension-davangere-davangere-dentists-qegbw29tje-250.jpg",
    category: "exterior",
    categoryName: "Storefront & Exterior",
    alt: "Daytime exterior shot",
    caption: "Daytime View of Clinic Facility"
  },
  {
    url: "https://images.jdmagicbox.com/comp/davangere/b1/9999p8192.8192.160225122019.y6b1/catalogue/m-c-dental-clinic-pj-extension-davangere-davangere-dentists-ar9wfm.jpg",
    thumb: "https://images.jdmagicbox.com/comp/davangere/b1/9999p8192.8192.160225122019.y6b1/catalogue/m-c-dental-clinic-pj-extension-davangere-davangere-dentists-ar9wfm-250.jpg",
    category: "certifications",
    categoryName: "Certificates & ISO",
    alt: "Quality certificate",
    caption: "ISO Quality Compliance & Safety Standard Audit"
  },
  {
    url: "https://images.jdmagicbox.com/comp/davangere/b1/9999p8192.8192.160225122019.y6b1/catalogue/m-c-dental-clinic-pj-extension-davangere-davangere-dentists-3kumiqk.jpg",
    thumb: "https://images.jdmagicbox.com/comp/davangere/b1/9999p8192.8192.160225122019.y6b1/catalogue/m-c-dental-clinic-pj-extension-davangere-davangere-dentists-3kumiqk-250.jpg",
    category: "interior",
    categoryName: "Interior & Lounge",
    alt: "Consultation corner",
    caption: "Patient Comfort Suite & Dental Consultation Setup"
  }
];

const REVIEWS_DATA = [
  {
    author: "Pushpa",
    date: "1st August, 2026",
    text: "I had a great experience at M C Dental Clinic. The care was of high standard, and the staff were very friendly. I appreciated that they had immediate availability for my appointment. The clinic was clean and well-organized. I felt comfortable and safe during my visit. Overall, I highly recommend M C Dental Clinic for excellent dental care!",
    rating: 5
  },
  {
    author: "Arjun B Power",
    date: "2nd July, 2026",
    text: "M C Dental Clinic is great! The customer service is friendly and helpful. Booking an appointment is easy, which I love. Prices are well-priced, and the doctors give accurate diagnoses. The staff responds quickly to questions. Treatment is excellent, and I feel safe with good supervision. The clinic is clean and hygienic too. Overall, a fantastic experience!",
    rating: 5
  },
  {
    author: "Zoostera",
    date: "1st July, 2026",
    text: "My experience at M C Dental Clinic was excellent! The facilities were modern and well-maintained, with advanced dental technology that ensured a comfortable visit. The staff was professional and friendly, making me feel at ease throughout my treatment. Cleanliness was top-notch, and the waiting area was inviting. Highly recommend for anyone seeking quality dental care!",
    rating: 5
  },
  {
    author: "Nandini B",
    date: "24th June, 2026",
    text: "I had a great experience at M C Dental Clinic! The staff was very friendly and helpful. The doctor explained everything clearly and made me feel comfortable. My treatment went smoothly, and I felt no pain. The clinic is clean and nice. I am very happy with my smile now! I highly recommend M C Dental Clinic for excellent dental care!",
    rating: 5
  },
  {
    author: "Shivaraj L G",
    date: "23rd June, 2026",
    text: "I had a great experience at M C Dental Clinic! They were very quick to see me. I called and got an appointment right away. The staff was friendly and helpful. The dentist was nice and made me feel comfortable. I didn't have to wait long at all. I really appreciate their immediate availability! Highly recommend this clinic for dental care!",
    rating: 5
  },
  {
    author: "Shivani BG",
    date: "22nd June, 2026",
    text: "I had a wonderful experience at M C Dental Clinic! The wait time was very short, which I really appreciated. The staff provided great customer service, making me feel comfortable and cared for. I also found out that they offer subsidies, which is helpful for those who need it. Overall, I highly recommend this clinic for anyone looking for quality dental care!",
    rating: 5
  },
  {
    author: "Keerthana",
    date: "12th January, 2026",
    text: "If you're seeking exceptional dental care in Davangere, look no further than M C Dental Clinic. Located conveniently behind Motiveerappa School in PJ Extension, this clinic boasts attentive and caring staff who prioritize your comfort. The supervision is top-notch, ensuring quality service at well-priced rates. With sterilized equipment and great customer service, it's a trustworthy choice for all your dental needs. Highly recommend!",
    rating: 5
  },
  {
    author: "Baji",
    date: "2nd September, 2024",
    text: "I recently visited M C Dental Clinic and I must say, it was excellent! The clinic was very clean & hygienic. It's easily accessible too. The doctors provided professional counselling and the service was quick. I highly recommend this clinic!",
    rating: 5
  },
  {
    author: "Gangadharappa P",
    date: "20th August, 2024",
    text: "M C Dental Clinic provides excellent customer service. The staff are friendly and helpful, making the experience pleasant for all patients.",
    rating: 5
  },
  {
    author: "Anuraag PG",
    date: "20th August, 2024",
    text: "I had an excellent experience at M C Dental Clinic. The treatment was excellent and the staff were very kind and professional. I highly recommend this clinic for anyone in need of dental care.",
    rating: 5
  }
];

const SERVICES_DATA = [
  {
    id: "laser-dentistry",
    category: "laser",
    categoryName: "Laser Dentistry",
    title: "Advanced Laser Dentistry & Pain Relief",
    image: "services/laser-dentistry.jpg",
    icon: "fa-solid fa-wand-magic-sparkles",
    desc: "State-of-the-art dental laser therapy for painless soft tissue procedures, gum treatment, and accelerated healing without stitches or bleeding.",
    highlights: ["Minimal bleeding", "Fast tissue healing", "Pain-free procedures"]
  },
  {
    id: "oral-maxillofacial",
    category: "surgery",
    categoryName: "Oral & Maxillofacial Surgery",
    title: "Oral & Maxillofacial Surgery",
    image: "services/oral-maxillofacial.jpg",
    icon: "fa-solid fa-user-doctor",
    desc: "Expert surgical care for complex tooth extractions, impacted wisdom teeth removal, jaw realignment, and facial trauma reconstruction.",
    highlights: ["Impacted wisdom teeth", "Jaw surgery", "30+ years surgical expertise"]
  },
  {
    id: "dental-implants",
    category: "implants",
    categoryName: "Implants & Prosthetics",
    title: "Dental Implantation & Maxillofacial Prosthetics",
    image: "services/dental-implants.jpg",
    icon: "fa-solid fa-tooth",
    desc: "Permanent titanium dental implants and custom artificial prosthetics to restore complete natural chewing function and aesthetic appearance.",
    highlights: ["Permanent replacement", "Natural aesthetics", "ISO certified implants"]
  },
  {
    id: "root-canal",
    category: "restorative",
    categoryName: "Restorative & Root Canal",
    title: "Single-Visit Root Canal Procedures",
    image: "services/root-canal.jpg",
    icon: "fa-solid fa-syringe",
    desc: "Advanced endodontic therapy using rotary technology to eliminate tooth pain, clear infection, and save your natural tooth seamlessly.",
    highlights: ["Painless procedure", "Rotary endodontics", "Single visit option"]
  },
  {
    id: "teeth-whitening",
    category: "cosmetic",
    categoryName: "Cosmetic & Aligners",
    title: "Teeth Whitening & Aesthetic Dentistry",
    image: "services/teeth-whitening.jpg",
    icon: "fa-solid fa-sparkles",
    desc: "Professional LED laser teeth whitening, composite bonding, porcelain veneers, and complete smile makeover procedures.",
    highlights: ["Instant brightness", "Stain removal", "Veneers & bonding"]
  },
  {
    id: "orthodontics",
    category: "cosmetic",
    categoryName: "Cosmetic & Aligners",
    title: "Orthodontics & Invisible Braces",
    image: "services/orthodontics.jpg",
    icon: "fa-solid fa-teeth-open",
    desc: "Braces adjustment, ceramic braces, and clear invisible aligners for teenagers and adults to straighten teeth and fix bite misalignment.",
    highlights: ["Invisible aligners", "Ceramic & metal braces", "Custom treatment plan"]
  },
  {
    id: "crowns-bridges",
    category: "restorative",
    categoryName: "Restorative & Root Canal",
    title: "Ceramic Crowns & Bridges Fixing",
    image: "services/crowns-bridges.jpg",
    icon: "fa-solid fa-crown",
    desc: "High-strength Zirconia and full ceramic crowns to reinforce damaged teeth and fill missing tooth gaps with seamless shade matching.",
    highlights: ["Zirconia ceramic", "Long-lasting durability", "Precision fit"]
  },
  {
    id: "dentures",
    category: "restorative",
    categoryName: "Restorative & Root Canal",
    title: "Complete & Partial Dentures Fixing",
    image: "services/dentures.jpg",
    icon: "fa-solid fa-teeth",
    desc: "Custom-crafted lightweight full and partial dentures designed for maximum comfort, stability, and ease of eating.",
    highlights: ["Flexible dentures", "Custom shade matching", "Elderly patient care"]
  },
  {
    id: "periodontics",
    category: "laser",
    categoryName: "Laser Dentistry",
    title: "Bleeding Gums & Periodontal Therapy",
    image: "services/periodontics.jpg",
    icon: "fa-solid fa-heart-pulse",
    desc: "Specialized treatment for swollen bleeding gums, deep ultrasonic scaling, root planing, and periodontitis gum disease control.",
    highlights: ["Ultrasonic scaling", "Gum infection control", "Laser gum contouring"]
  },
  {
    id: "dental-xray",
    category: "diagnostics",
    categoryName: "Diagnostics",
    title: "Digital Dental X-Ray & Diagnostics",
    image: "services/dental-xray.jpg",
    icon: "fa-solid fa-x-ray",
    desc: "Low-radiation digital radiography for accurate diagnostic evaluation of tooth roots, bone density, and hidden decay.",
    highlights: ["Instant digital result", "Low radiation", "Precise diagnosis"]
  }
];

// 2. DOM INITIALIZATION & EVENT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initMobileMenu();
  initClinicStatusDetector();
  renderServices(SERVICES_DATA);
  renderGallery(GALLERY_DATA);
  initGalleryCarouselControls();
  renderReviews(REVIEWS_DATA);
  initReviewsCarouselControls();
  initFaqAccordion();
  initBookingModal();
  initLightboxModal();
  initReviewModal();
});

// 3. CLINIC OPEN/CLOSED STATUS CALCULATOR
function initClinicStatusDetector() {
  const statusElement = document.getElementById("clinicStatusBadge");
  const timeElement = document.getElementById("clinicStatusTime");
  if (!statusElement) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeInMinutes = hours * 60 + minutes;

  // Clinic Schedule:
  // Mon-Sat: Shift 1: 10:30 AM (630m) to 3:00 PM (900m)
  //          Shift 2: 5:30 PM (1050m) to 8:30 PM (1230m)
  // Sunday: Closed

  let isOpen = false;
  let statusText = "";

  if (day === 0) {
    isOpen = false;
    statusText = "Closed Today (Sunday) • Opens Mon 10:30 AM";
  } else {
    const shift1Start = 10 * 60 + 30; // 10:30 AM
    const shift1End = 15 * 60;        // 3:00 PM
    const shift2Start = 17 * 60 + 30; // 5:30 PM
    const shift2End = 20 * 60 + 30;   // 8:30 PM

    if (timeInMinutes >= shift1Start && timeInMinutes < shift1End) {
      isOpen = true;
      statusText = "OPEN NOW • Shift 1 until 3:00 PM";
    } else if (timeInMinutes >= shift2Start && timeInMinutes < shift2End) {
      isOpen = true;
      statusText = "OPEN NOW • Evening shift until 8:30 PM";
    } else if (timeInMinutes < shift1Start) {
      isOpen = false;
      statusText = "Closed Now • Opens Today at 10:30 AM";
    } else if (timeInMinutes >= shift1End && timeInMinutes < shift2Start) {
      isOpen = false;
      statusText = "Closed for Lunch • Evening Shift 5:30 PM";
    } else {
      isOpen = false;
      statusText = "Closed Now • Opens Tomorrow at 10:30 AM";
    }
  }

  if (isOpen) {
    statusElement.className = "clinic-status-badge open";
    statusElement.innerHTML = `<span class="dot"></span> <span>${statusText}</span>`;
  } else {
    statusElement.className = "clinic-status-badge closed";
    statusElement.innerHTML = `<span class="dot"></span> <span>${statusText}</span>`;
  }

  // Highlight current day in Working Hours Table
  const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const currentDayRow = document.getElementById(`row-${dayNames[day]}`);
  if (currentDayRow) {
    currentDayRow.classList.add("today");
  }
}

// 4. NAVBAR SCROLL & MOBILE MENU
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

function initMobileMenu() {
  const toggle = document.querySelector(".mobile-nav-toggle");
  const menu = document.querySelector(".nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    const icon = toggle.querySelector("i");
    if (menu.classList.contains("active")) {
      icon.className = "fa-solid fa-xmark";
    } else {
      icon.className = "fa-solid fa-bars";
    }
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      const icon = toggle.querySelector("i");
      if (icon) icon.className = "fa-solid fa-bars";
    });
  });
}

// 5. SERVICES RENDERING & FILTERING
function renderServices(services) {
  const container = document.getElementById("servicesGrid");
  if (!container) return;

  container.innerHTML = services.map(service => `
    <div class="service-card" data-category="${service.category}">
      ${service.image ? `
        <div class="service-card-img-wrapper">
          <img src="${service.image}" alt="${service.title}" class="service-card-img">
        </div>
      ` : `
        <div class="service-icon">
          <i class="${service.icon}"></i>
        </div>
      `}
      <h3 class="service-title">${service.title}</h3>
      <p class="service-desc">${service.desc}</p>
      <div style="margin-bottom: 1.25rem;">
        ${service.highlights.map(h => `<span class="iso-badge-tag" style="margin-right: 0.3rem; font-size: 0.75rem; background: #e0f2fe; color: #0369a1; border-color: #bae6fd;"><i class="fa-solid fa-check" style="font-size: 0.65rem;"></i> ${h}</span>`).join('')}
      </div>
      <div class="service-meta">
        <span>${service.categoryName}</span>
        <button class="btn btn-secondary" style="padding: 0.4rem 0.9rem; font-size: 0.85rem;" onclick="openBookingModalForService('${service.title}')">
          Book Treatment <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  `).join('');

  // Filter Buttons
  const filterBtns = document.querySelectorAll("#serviceFilters .filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      const cards = container.querySelectorAll(".service-card");
      cards.forEach(card => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// 6. GALLERY CAROUSEL RENDERING, AUTO-SLIDING (1s TIMER) & LIGHTBOX
let currentGalleryIndex = 0;
let filteredGalleryData = [...GALLERY_DATA];
let galleryAutoSlideTimer = null;
let currentSlideIndex = 0;

function renderGallery(photos) {
  const container = document.getElementById("galleryCarouselTrack");
  if (!container) return;

  filteredGalleryData = photos;
  currentSlideIndex = 0;
  container.style.transform = "translateX(0px)";

  // Render clean image slide cards WITHOUT text overlay
  container.innerHTML = photos.map((item, index) => `
    <div class="gallery-slide-card" data-category="${item.category}" onclick="openLightbox(${index})">
      <img src="${item.url}" alt="${item.alt}" loading="lazy">
    </div>
  `).join('');

  startGalleryAutoSlide();
}

function initGalleryCarouselControls() {
  const prevBtn = document.getElementById("gallerySliderPrev");
  const nextBtn = document.getElementById("gallerySliderNext");
  const wrapper = document.querySelector(".gallery-carousel-wrapper");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      stopGalleryAutoSlide();
      moveGallerySlide(-1);
      startGalleryAutoSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      stopGalleryAutoSlide();
      moveGallerySlide(1);
      startGalleryAutoSlide();
    });
  }

  if (wrapper) {
    wrapper.addEventListener("mouseenter", stopGalleryAutoSlide);
    wrapper.addEventListener("mouseleave", startGalleryAutoSlide);
    wrapper.addEventListener("touchstart", stopGalleryAutoSlide, { passive: true });
    wrapper.addEventListener("touchend", startGalleryAutoSlide, { passive: true });
  }

  // Filter Buttons for Gallery
  const galleryFilters = document.querySelectorAll("#galleryFilters .filter-btn");
  galleryFilters.forEach(btn => {
    btn.addEventListener("click", () => {
      galleryFilters.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      if (filter === "all") {
        filteredGalleryData = GALLERY_DATA;
      } else {
        filteredGalleryData = GALLERY_DATA.filter(item => item.category === filter);
      }
      renderGallery(filteredGalleryData);
    });
  });
}

function startGalleryAutoSlide() {
  stopGalleryAutoSlide();
  if (filteredGalleryData.length <= 1) return;

  galleryAutoSlideTimer = setInterval(() => {
    moveGallerySlide(1);
  }, 1000); // 1 second timer for automated side-by-side sliding
}

function stopGalleryAutoSlide() {
  if (galleryAutoSlideTimer) {
    clearInterval(galleryAutoSlideTimer);
    galleryAutoSlideTimer = null;
  }
}

function moveGallerySlide(direction) {
  const track = document.getElementById("galleryCarouselTrack");
  const trackContainer = document.getElementById("galleryCarouselTrackContainer");
  if (!track || !trackContainer || filteredGalleryData.length === 0) return;

  const card = track.querySelector(".gallery-slide-card");
  if (!card) return;

  const cardWidth = card.offsetWidth;
  const gap = 20; // 1.25rem
  const step = cardWidth + gap;

  const containerWidth = trackContainer.offsetWidth;
  const visibleCards = Math.round(containerWidth / step) || 1;
  const maxIndex = Math.max(0, filteredGalleryData.length - visibleCards);

  currentSlideIndex += direction;
  if (currentSlideIndex > maxIndex) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = maxIndex;
  }

  track.style.transform = `translateX(-${currentSlideIndex * step}px)`;
}

function initLightboxModal() {
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;

  const closeBtn = modal.querySelector(".modal-close");
  closeBtn.addEventListener("click", closeLightbox);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLightbox();
  });

  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
}

function openLightbox(index) {
  currentGalleryIndex = index;
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");

  if (!modal || !img || !filteredGalleryData[index]) return;

  const item = filteredGalleryData[index];
  img.src = item.url;
  img.alt = item.alt;
  caption.textContent = `${item.caption} (${index + 1} of ${filteredGalleryData.length})`;

  modal.classList.add("active");
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (modal) modal.classList.remove("active");
}

function navigateLightbox(direction) {
  currentGalleryIndex += direction;
  if (currentGalleryIndex < 0) {
    currentGalleryIndex = filteredGalleryData.length - 1;
  } else if (currentGalleryIndex >= filteredGalleryData.length) {
    currentGalleryIndex = 0;
  }
  openLightbox(currentGalleryIndex);
}

// 7. REVIEWS RENDERING, CAROUSEL & 1s AUTOMATED SLIDING
let reviewsAutoSlideTimer = null;
let currentReviewSlideIndex = 0;

function renderReviews(reviews) {
  const container = document.getElementById("reviewsCarouselTrack");
  if (!container) return;

  currentReviewSlideIndex = 0;
  container.style.transform = "translateX(0px)";

  container.innerHTML = reviews.map(rev => {
    const stars = Array(rev.rating).fill('<i class="fa-solid fa-star"></i>').join('');
    const initial = rev.author.charAt(0).toUpperCase();

    return `
      <div class="review-slide-card">
        <div class="review-header">
          <div class="reviewer-profile">
            <div class="avatar-circle">${initial}</div>
            <div class="reviewer-info">
              <h5>${rev.author}</h5>
              <span>${rev.date}</span>
            </div>
          </div>
          <div class="review-stars">${stars}</div>
        </div>
        <p class="review-text">"${rev.text}"</p>
      </div>
    `;
  }).join('');

  startReviewsAutoSlide();
}

function initReviewsCarouselControls() {
  const prevBtn = document.getElementById("reviewsSliderPrev");
  const nextBtn = document.getElementById("reviewsSliderNext");
  const wrapper = document.querySelector(".reviews-carousel-wrapper");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      stopReviewsAutoSlide();
      moveReviewSlide(-1);
      startReviewsAutoSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      stopReviewsAutoSlide();
      moveReviewSlide(1);
      startReviewsAutoSlide();
    });
  }

  if (wrapper) {
    wrapper.addEventListener("mouseenter", stopReviewsAutoSlide);
    wrapper.addEventListener("mouseleave", startReviewsAutoSlide);
    wrapper.addEventListener("touchstart", stopReviewsAutoSlide, { passive: true });
    wrapper.addEventListener("touchend", startReviewsAutoSlide, { passive: true });
  }
}

function startReviewsAutoSlide() {
  stopReviewsAutoSlide();
  if (REVIEWS_DATA.length <= 1) return;

  reviewsAutoSlideTimer = setInterval(() => {
    moveReviewSlide(1);
  }, 1000); // 1-second automated sliding
}

function stopReviewsAutoSlide() {
  if (reviewsAutoSlideTimer) {
    clearInterval(reviewsAutoSlideTimer);
    reviewsAutoSlideTimer = null;
  }
}

function moveReviewSlide(direction) {
  const track = document.getElementById("reviewsCarouselTrack");
  const trackContainer = document.getElementById("reviewsCarouselTrackContainer");
  if (!track || !trackContainer || REVIEWS_DATA.length === 0) return;

  const card = track.querySelector(".review-slide-card");
  if (!card) return;

  const cardWidth = card.offsetWidth;
  const gap = 24; // 1.5rem gap
  const step = cardWidth + gap;

  const containerWidth = trackContainer.offsetWidth;
  const visibleCards = Math.round(containerWidth / step) || 1;
  const maxIndex = Math.max(0, REVIEWS_DATA.length - visibleCards);

  currentReviewSlideIndex += direction;
  if (currentReviewSlideIndex > maxIndex) {
    currentReviewSlideIndex = 0;
  } else if (currentReviewSlideIndex < 0) {
    currentReviewSlideIndex = maxIndex;
  }

  track.style.transform = `translateX(-${currentReviewSlideIndex * step}px)`;
}

// 8. FAQ ACCORDION
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// 9. BOOKING MODAL & APPOINTMENT LOGIC
function initBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (!modal) return;

  const openBtns = document.querySelectorAll("[data-open-modal='booking']");
  const closeBtn = modal.querySelector(".modal-close");

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => openBookingModal());
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeBookingModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeBookingModal();
  });

  // Set min date to today
  const dateInput = document.getElementById("bookDate");
  if (dateInput) {
    const todayStr = new Date().toISOString().split("T")[0];
    dateInput.min = todayStr;
    dateInput.value = todayStr;
  }

  // Handle Form Submit
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", handleBookingSubmit);
  }
}

function openBookingModal(serviceName = "") {
  const modal = document.getElementById("bookingModal");
  if (!modal) return;

  if (serviceName) {
    const serviceSelect = document.getElementById("bookService");
    if (serviceSelect) serviceSelect.value = serviceName;
  }

  modal.classList.add("active");
}

function openBookingModalForService(serviceName) {
  openBookingModal(serviceName);
}

function closeBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) modal.classList.remove("active");
}

function handleBookingSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("bookName").value;
  const phone = document.getElementById("bookPhone").value;
  const doctor = document.getElementById("bookDoctor").value;
  const service = document.getElementById("bookService").value;
  const date = document.getElementById("bookDate").value;
  const slot = document.getElementById("bookSlot").value;
  const notes = document.getElementById("bookNotes").value;

  const message = `Hello M C Dental Clinic Davangere,\nI would like to book an appointment:\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n👨‍⚕️ *Doctor:* ${doctor}\n🦷 *Treatment:* ${service}\n📅 *Date:* ${date}\n⏰ *Time Slot:* ${slot}\n📝 *Notes:* ${notes || 'None'}\n\nPlease confirm availability. Thank you!`;

  const whatsappUrl = `https://wa.me/919742377661?text=${encodeURIComponent(message)}`;

  // Display success message inside modal
  const modalBody = document.querySelector("#bookingModal .modal-body");
  modalBody.innerHTML = `
    <div style="text-align: center; padding: 2rem 1rem;">
      <div style="width: 70px; height: 70px; background: #ccfbf1; color: #0d9488; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 1.5rem auto;">
        <i class="fa-solid fa-circle-check"></i>
      </div>
      <h3 style="font-size: 1.5rem; color: #0f172a; margin-bottom: 0.5rem;">Appointment Requested!</h3>
      <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 1.5rem; max-width: 450px; margin-left: auto; margin-right: auto;">
        Thank you <strong>${name}</strong>. Your appointment request for <strong>${service}</strong> on <strong>${date} (${slot})</strong> with <strong>${doctor}</strong> has been logged.
      </p>

      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-align: left; margin-bottom: 1.5rem; font-size: 0.875rem;">
        <p style="margin-bottom: 0.4rem;"><strong>Clinic Address:</strong> M C Dental Clinic, 8th Main, Behind Motiveerappa School, PJ Extension, Davangere</p>
        <p style="margin-bottom: 0.4rem;"><strong>Clinic Phone:</strong> +91 9742377661 / +91 9972326796</p>
        <p><strong>Operating Hours:</strong> 10:30 AM – 3:00 PM & 5:30 PM – 8:30 PM (Mon-Sat)</p>
      </div>

      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp">
          <i class="fa-brands fa-whatsapp" style="font-size: 1.2rem;"></i> Confirm via WhatsApp
        </a>
        <button class="btn btn-primary" onclick="location.reload()">
          Done
        </button>
      </div>
    </div>
  `;
}

// 10. REVIEW SUBMISSION MODAL
function initReviewModal() {
  const modal = document.getElementById("reviewModal");
  if (!modal) return;

  const openBtn = document.getElementById("openReviewModal");
  const closeBtn = modal.querySelector(".modal-close");

  if (openBtn) {
    openBtn.addEventListener("click", () => modal.classList.add("active"));
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  const form = document.getElementById("reviewForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const author = document.getElementById("reviewAuthor").value;
      const rating = parseInt(document.getElementById("reviewRating").value);
      const text = document.getElementById("reviewText").value;

      REVIEWS_DATA.unshift({
        author,
        date: "Just Now",
        text,
        rating
      });

      renderReviews(REVIEWS_DATA);
      modal.classList.remove("active");
      form.reset();

      alert("Thank you! Your review has been added to the feedback wall.");
    });
  }
}

// Global scope helpers
window.openLightbox = openLightbox;
window.openBookingModalForService = openBookingModalForService;
