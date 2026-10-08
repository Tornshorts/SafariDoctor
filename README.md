# SafariDoctor - Capture Nature at Its Best 🦁🇰🇪

A modern, high-conversion tourist safari website built for **SafariDoctor** (founded by Chris), inspired by industry benchmarks (**Perfect Safaris Africa**, **Jungle Roar**, **Jockey Tours**, and **Perfect Wilderness Safaris**) and crafted according to the design mockup and brand identity assets.

---

## 🌟 Key Features

### 1. Visual Design & Brand Alignment
- **Custom Logo Integration**: Features the official giraffe with orange binoculars icon and "SafariDoctor - CAPTURE NATURE AT ITS BEST" typography across navbar, hero, about section, and footer.
- **Color Palette**: Safari Vibrant Orange (`#FF6700`), warm savanna golden tones, crisp white surfaces, and dark charcoal (`#12181F`).
- **Responsive Layout**: Designed for both desktop widescreen and mobile smartphones.

### 2. Floating Search & Booking Filter
- Destination selector (*Maasai Mara, Amboseli, Lake Nakuru & Naivasha, Diani Beach, Tsavo, Samburu*).
- Interactive travel date selector.
- Adults and children traveler counter.
- One-click package filtering and smooth scroll.

### 3. Top Destinations Showcase
- **Maasai Mara**: The ultimate wildlife experience (Big Five & Great Migration).
- **Amboseli**: Elephants & panoramic Mount Kilimanjaro backdrop.
- **Lake Nakuru**: Rhinos, flamingos, and Great Rift Valley birdlife.
- **Diani Beach**: Pristine white sands, turquoise waters, and dhow boat cruises.
- Interactive destination guides with signature wildlife, best time to visit, and recommended durations.

### 4. Popular Safari Packages & Itinerary Engine
- **3-Day Maasai Mara Safari** (*Best Seller*) – from KES 45,000 / $350
- **4-Day Amboseli Safari** (*Popular*) – from KES 52,000 / $400
- **3-Day Lake Nakuru & Naivasha** (*Great Value*) – from KES 38,000 / $295
- **5-Day Safari & Beach Combo** (*Top Combo*) – from KES 85,000 / $660
- **7-Day Classic Kenya Big Five Expedition** – from KES 135,000 / $1,050
- **2-Day Tsavo East Wilderness Quick Escape** – from KES 28,000 / $220
- **Interactive Package Modal**:
  - Full Day-by-Day Itineraries
  - Included & Excluded checklist
  - Accommodation tiers (*Budget Camping, Mid-Range Tented, Luxury Lodge*)
  - 1-Click "Book via WhatsApp" with prefilled tour details

### 5. Multi-Currency Support (KES & USD)
- Dynamic toggle between Kenyan Shillings (`KES`) and US Dollars (`USD`) with real-time recalculation across all packages and destination prices.

### 6. Industry Trust & Conversion Tools
- **Why Travel With Us**: Certified KPSGA guides, guaranteed window seats, custom 4x4 Land Cruisers, and 24/7 support.
- **Safari 4x4 Fleet**: Showcase of pop-up roof Toyota Land Cruisers with onboard USB chargers, cooler box, and long-range VHF radio.
- **Kenya Travel Guide**: eTA visa requirements, Great Migration calendar, soft duffle packing tips, and interactive FAQ accordion.
- **Traveler Reviews**: Verified 5.0 TripAdvisor & SafariBookings ratings from international guests.
- **Instant WhatsApp Widget**: Floating bottom-right chat widget with prefilled inquiries.

---

## 🚀 Getting Started

### Development Server
```bash
npm install
npm run dev
```

### Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
SafariDoctor/
├── public/
│   └── assets/                  # Extracted logo, mockup photography & high-res images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav, currency toggle, mobile menu
│   │   ├── Hero.jsx             # Savanna hero banner with video trigger
│   │   ├── SearchFilter.jsx     # Floating booking search bar
│   │   ├── Destinations.jsx     # Top Destinations grid
│   │   ├── DestinationModal.jsx # Full destination explorer modal
│   │   ├── Packages.jsx         # Popular Safari Packages & category filters
│   │   ├── PackageDetailModal.jsx # Day-by-day itinerary & booking modal
│   │   ├── WhyUs.jsx            # 4 core value propositions & stat strip
│   │   ├── SafariFleet.jsx      # 4x4 pop-up roof Land Cruiser showcase
│   │   ├── TravelInfo.jsx       # Kenya eTA guide, migration timing, FAQs
│   │   ├── Reviews.jsx          # TripAdvisor & SafariBookings reviews
│   │   ├── AboutSection.jsx     # Story of Chris SafariDoctor & ethics
│   │   ├── BookingSection.jsx   # Custom safari inquiry builder & WhatsApp
│   │   ├── VideoModal.jsx       # Safari documentary trailer modal
│   │   ├── WhatsAppFloating.jsx # Floating live WhatsApp chat widget
│   │   └── Footer.jsx           # Newsletter, accreditation badges & contacts
│   ├── data/
│   │   └── safariData.js        # Tours, parks, pricing, fleet, FAQs
│   ├── App.jsx                  # Main application state & layout
│   ├── index.css                # Tailwind CSS v4 styling & theme tokens
│   └── main.jsx                 # React root entry
├── vite.config.js
└── package.json
```
