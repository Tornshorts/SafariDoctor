export const destinationsData = [
  {
    id: 'maasai-mara',
    name: 'Maasai Mara',
    tagline: 'The ultimate wildlife experience',
    image: '/assets/dest_mara.jpg',
    hiresImage: '/assets/dest_mara.jpg',
    badge: 'World Wonder',
    description: 'Renowned globally for the annual Great Migration of over two million wildebeest and zebras, Maasai Mara is Kenya\'s premier wildlife reserve, boasting exceptional Big Five viewing all year round.',
    bestTime: 'July to October (Migration), Year-round for Big Five',
    keyWildlife: ['Lions', 'Leopards', 'Cheetahs', 'Elephants', 'Wildebeest', 'Black Rhinos'],
    highlights: ['Great Wildebeest River Crossing', 'Big Five Safari Drives', 'Maasai Cultural Village Visits', 'Sunrise Hot Air Balloon Safaris'],
    recommendedDays: '3 - 4 Days',
    startingPriceKES: 45000,
    startingPriceUSD: 350
  },
  {
    id: 'amboseli',
    name: 'Amboseli',
    tagline: 'Elephants & Kilimanjaro views',
    image: '/assets/dest_amboseli.jpg',
    hiresImage: '/assets/dest_amboseli.jpg',
    badge: 'Iconic Scenery',
    description: 'Famed for its free-ranging herds of majestic African elephants and unmatched panoramic vistas of snow-capped Mount Kilimanjaro rising across the border.',
    bestTime: 'June to October & January to February',
    keyWildlife: ['Giant Tusker Elephants', 'Lions', 'Cheetahs', 'Giraffes', 'Hippos', 'Over 400 Bird Species'],
    highlights: ['Kilimanjaro Backdrop Photography', 'Observation Hill Panorama', 'Elephant Research Encounters', 'Swamp Game Viewing'],
    recommendedDays: '2 - 3 Days',
    startingPriceKES: 52000,
    startingPriceUSD: 400
  },
  {
    id: 'lake-nakuru',
    name: 'Lake Nakuru',
    tagline: 'Rhinos, flamingos & birdlife',
    image: '/assets/dest_nakuru.jpg',
    hiresImage: '/assets/dest_nakuru.jpg',
    badge: 'UNESCO Heritage',
    description: 'Nestled in the Great Rift Valley, Lake Nakuru National Park is a sanctuary for endangered white and black rhinos, Rothschild\'s giraffes, and millions of fuchsia flamingos.',
    bestTime: 'Year-round, especially dry seasons for birding',
    keyWildlife: ['Black & White Rhinos', 'Lesser Flamingos', 'Rothschild Giraffes', 'Tree-climbing Lions', 'Pelicans'],
    highlights: ['Rhino Sanctuary Tracking', 'Baboon Cliff Viewpoint', 'Makalia Falls', 'Rift Valley Escarpment'],
    recommendedDays: '2 - 3 Days',
    startingPriceKES: 38000,
    startingPriceUSD: 295
  },
  {
    id: 'diani-beach',
    name: 'Diani Beach',
    tagline: 'Pristine beaches & water activities',
    image: '/assets/dest_diani.jpg',
    hiresImage: '/assets/dest_diani.jpg',
    badge: 'Best African Beach',
    description: 'Crowned Africa\'s leading beach destination multiple times, Diani features powdery white sands, warm turquoise Indian Ocean waters, swaying coconut palms, and vibrant coral reefs.',
    bestTime: 'October to April (Calm waters & sunny days)',
    keyWildlife: ['Whale Sharks', 'Dolphins', 'Sea Turtles', 'Colobus Monkeys'],
    highlights: ['Kisite-Mpunguti Dhow Cruise', 'Kite Surfing & Scuba Diving', 'Shimba Hills Day Safari', 'Ali Barbour\'s Cave Dining'],
    recommendedDays: '3 - 5 Days',
    startingPriceKES: 85000,
    startingPriceUSD: 660
  },
  {
    id: 'samburu',
    name: 'Samburu National Reserve',
    tagline: 'Rugged northern wilderness & rare species',
    image: '/assets/samburu.jpg',
    hiresImage: '/assets/samburu.jpg',
    badge: 'Special Five',
    description: 'A dramatic semi-arid frontier bisected by the Ewaso Nyiro River, home to unique wildlife species found nowhere else in southern Kenya.',
    bestTime: 'June to October & December to March',
    keyWildlife: ['Grevy Zebra', 'Reticulated Giraffe', 'Beisa Oryx', 'Gerenuk', 'Somali Ostrich', 'Leopards'],
    highlights: ['Northern Special Five', 'Samburu Cultural Tours', 'Riverine Birdwatching', 'Untamed Landscapes'],
    recommendedDays: '3 - 4 Days',
    startingPriceKES: 58000,
    startingPriceUSD: 450
  },
  {
    id: 'tsavo',
    name: 'Tsavo National Parks',
    tagline: 'Red elephants & boundless wilderness',
    image: '/assets/tsavo.jpg',
    hiresImage: '/assets/tsavo.jpg',
    badge: 'Largest Park',
    description: 'Split into Tsavo East and Tsavo West, this vast wilderness is celebrated for the iconic red-dust elephants, ancient lava flows at Shetani, and underwater hippo viewing at Mzima Springs.',
    bestTime: 'June to October & January to March',
    keyWildlife: ['Red Dust Elephants', 'Lions', 'Buffalo', 'Hippos', 'Lesser Kudu'],
    highlights: ['Mzima Springs Underwater Chamber', 'Mudanda Rock & Lugard Falls', 'Shetani Lava Flow', 'Man-Eaters History'],
    recommendedDays: '2 - 3 Days',
    startingPriceKES: 28000,
    startingPriceUSD: 220
  }
];

export const packagesData = [
  {
    id: 'mara-3day',
    title: '3-Day Maasai Mara Safari',
    subtitle: 'The quintessential African wildlife adventure in Kenya\'s world-famous reserve.',
    badge: 'BEST SELLER',
    category: 'Wildlife Safaris',
    days: 3,
    nights: 2,
    type: 'Wildlife',
    image: '/assets/pkg_mara.jpg',
    hiresImage: '/assets/pkg_mara.jpg',
    priceKES: 45000,
    priceUSD: 350,
    groupType: 'Daily Join-In or Private 4x4',
    pickup: 'Nairobi Hotel / JKIA Airport',
    dropoff: 'Nairobi Hotel / JKIA Airport',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Nairobi to Maasai Mara & Afternoon Game Drive',
        desc: 'Depart Nairobi early in the morning heading through the Great Rift Valley with a brief scenic viewpoint stop. Arrive at Maasai Mara in time for lunch and camp check-in. In the late afternoon, set off on your first exhilarating game drive searching for the Big Five. Return to camp for dinner around the bonfire.'
      },
      {
        day: 'Day 2',
        title: 'Full Day Game Drive in Maasai Mara & Mara River',
        desc: 'Rise early with breakfast or packed breakfast boxes for a full day traversing the vast plains. Seek out lion prides, cheetahs on termite mounds, leopards in acacia branches, and elephants. Head to the Mara River where hippos and giant Nile crocodiles reside. Enjoy an unforgettable picnic lunch in the wilderness before evening return.'
      },
      {
        day: 'Day 3',
        title: 'Sunrise Game Drive / Maasai Village & Return to Nairobi',
        desc: 'Optional early sunrise game drive or visit an authentic Maasai cultural village to experience traditional dances and customs. Enjoy breakfast, check out, and journey back to Nairobi with scenic Rift Valley views, arriving late afternoon for drop-off.'
      }
    ],
    inclusions: [
      'Transport in customized 4x4 Safari Land Cruiser with pop-up roof',
      '2 Nights accommodation in selected tented camp or luxury lodge',
      'All meals on safari (Breakfast, Lunch, Dinner)',
      'Services of a professional English/German-speaking KPSGA certified guide',
      'Unlimited game drives as per itinerary',
      'Complimentary bottled mineral water throughout the safari',
      'Pick-up and drop-off from your Nairobi hotel or airport'
    ],
    exclusions: [
      'Maasai Mara Park Entry Fees ($100-$200 per adult per day based on season)',
      'Optional Maasai Village visit ($20-$30 per person)',
      'Optional Sunrise Hot Air Balloon Safari ($450 per person)',
      'Gratuities for driver-guide & lodge staff',
      'Personal travel insurance & drinks at camp'
    ],
    accommodations: [
      { tier: 'Budget Tented Camp', name: 'Miti Mingi / Rhino Tented Camp', priceNote: 'Included in base price' },
      { tier: 'Mid-Range Camp', name: 'Mara Sopa Lodge / Zebra Plains Mara', priceNote: '+$90 / KES 12,000 per night' },
      { tier: 'Luxury Lodge', name: 'Ashnil Mara Camp / Sarova Mara Game Camp', priceNote: '+$210 / KES 27,000 per night' }
    ]
  },
  {
    id: 'amboseli-4day',
    title: '4-Day Amboseli Safari',
    subtitle: 'Up-close giant elephant herds framed by the majestic Mount Kilimanjaro.',
    badge: 'POPULAR',
    category: 'Wildlife Safaris',
    days: 4,
    nights: 3,
    type: 'Wildlife',
    image: '/assets/pkg_amboseli.jpg',
    hiresImage: '/assets/pkg_amboseli.jpg',
    priceKES: 52000,
    priceUSD: 400,
    groupType: 'Private 4x4 or Small Group',
    pickup: 'Nairobi / Diani / Mombasa',
    dropoff: 'Nairobi / Diani / Mombasa',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Nairobi to Amboseli National Park',
        desc: 'Morning departure from Nairobi driving through the scenic Athi Plains. Arrive at Amboseli with clear views of Mt Kilimanjaro. Check in, hot lunch, and rest. Afternoon game drive capturing elephant herds against the snow peak.'
      },
      {
        day: 'Day 2',
        title: 'Full Day Exploring Amboseli & Observation Hill',
        desc: 'Spend the full day tracking large elephant tuskers, cheetahs, zebras, and giraffes. Ascend Observation Hill for a panoramic view of the vast swamps filled with bathing hippos and pelicans. Bush picnic lunch and sundowner game drive.'
      },
      {
        day: 'Day 3',
        title: 'Morning & Afternoon Game Drives & Cultural Experience',
        desc: 'Early morning game drive when Kilimanjaro skies are clearest for photography. Midday relaxation at lodge pool. Afternoon visit to local Maasai community and evening game drive.'
      },
      {
        day: 'Day 4',
        title: 'Final Morning Game Drive & Return Journey',
        desc: 'Dawn game drive followed by hearty breakfast. Check out and embark on your return transfer to Nairobi or onward to the coast.'
      }
    ],
    inclusions: [
      'Transport in custom 4x4 Safari Land Cruiser with pop-up roof',
      '3 Nights accommodation in full-board safari lodge/camp',
      'All meals (3 Breakfasts, 4 Lunches, 3 Dinners)',
      'Expert certified Kenyan naturalist guide',
      'Bottled drinking water in safari vehicle',
      'Hotel/Airport transfers'
    ],
    exclusions: [
      'Amboseli National Park entry fees ($100 per adult per day)',
      'Tips & porterage',
      'Beverages (alcoholic & soft drinks)',
      'Personal items & medical insurance'
    ],
    accommodations: [
      { tier: 'Mid-Range Tented', name: 'Kibo Safari Camp / AA Amboseli', priceNote: 'Included in base price' },
      { tier: 'Luxury Safari Lodge', name: 'Amboseli Serena Safari Lodge / Ol Tukai Lodge', priceNote: '+$140 / KES 18,000 per night' }
    ]
  },
  {
    id: 'nakuru-naivasha-3day',
    title: '3-Day Lake Nakuru & Naivasha',
    subtitle: 'Rift Valley birding, rhino sanctuary tracking, and walking safari at Crescent Island.',
    badge: 'GREAT VALUE',
    category: 'Wildlife Safaris',
    days: 3,
    nights: 2,
    type: 'Wildlife',
    image: '/assets/pkg_nakuru.jpg',
    hiresImage: '/assets/pkg_nakuru.jpg',
    priceKES: 38000,
    priceUSD: 295,
    groupType: 'Daily Join-In or Private Tour',
    pickup: 'Nairobi Hotel / JKIA Airport',
    dropoff: 'Nairobi Hotel / JKIA Airport',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Nairobi to Lake Nakuru National Park',
        desc: 'Drive northwest into the Great Rift Valley. Enter Lake Nakuru National Park for a game drive en route to the lodge. Spot rhinos, Rothschild giraffes, and flamingo flocks around the lake shores.'
      },
      {
        day: 'Day 2',
        title: 'Lake Nakuru to Lake Naivasha & Boat Safari',
        desc: 'Morning game drive in Nakuru, then drive south to freshwater Lake Naivasha. Afternoon boat safari navigating past pods of hippos to Crescent Island Sanctuary for a unique walking safari alongside giraffes and zebras.'
      },
      {
        day: 'Day 3',
        title: 'Hell\'s Gate National Park & Return to Nairobi',
        desc: 'Visit Hell\'s Gate National Park where you can cycle past wild buffalo and warthogs, or hike the spectacular gorge with a local guide. Return to Nairobi by late afternoon.'
      }
    ],
    inclusions: [
      'Round-trip transport in 4x4 safari cruiser',
      '2 Nights accommodation in Rift Valley lodges',
      'All meals on safari',
      'Naivasha Boat Safari experience',
      'Crescent Island walking guide',
      'Professional driver-guide'
    ],
    exclusions: [
      'Park admission fees (Nakuru & Hell\'s Gate)',
      'Bicycle rental at Hell\'s Gate ($10)',
      'Tips and gratuities',
      'Personal expenses'
    ],
    accommodations: [
      { tier: 'Standard Lodge', name: 'Lake Nakuru Lodge / Fish Eagle Naivasha', priceNote: 'Included' },
      { tier: 'Luxury Resort', name: 'Sarova Lion Hill / Enashipai Resort & Spa', priceNote: '+$110 / KES 14,000 per night' }
    ]
  },
  {
    id: 'safari-beach-5day',
    title: '5-Day Safari & Beach Combo',
    subtitle: 'The best of both worlds: Big Five safari in Tsavo/Amboseli followed by tropical Diani Beach.',
    badge: 'TOP COMBO',
    category: 'Safari & Beach',
    days: 5,
    nights: 4,
    type: 'Wildlife & Beach',
    image: '/assets/pkg_beach.jpg',
    hiresImage: '/assets/pkg_beach.jpg',
    priceKES: 85000,
    priceUSD: 660,
    groupType: 'Private Experience',
    pickup: 'Nairobi or Mombasa',
    dropoff: 'Diani Beach / Ukunda Airport',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Nairobi to Tsavo West National Park',
        desc: 'Journey south to Tsavo West. Visit Mzima Springs where submerged hippos and fish can be viewed through underwater glass chambers. Afternoon game drive in the rhino sanctuary.'
      },
      {
        day: 'Day 2',
        title: 'Tsavo West to Tsavo East National Park',
        desc: 'Morning drive to Tsavo East, home to the famous red elephants and the Yatta Plateau. Track lions, leopards, and herds of buffalo across the golden plains.'
      },
      {
        day: 'Day 3',
        title: 'Tsavo East to Diani Beach Resort',
        desc: 'Early morning game drive. Breakfast, check out and drive towards the South Coast. Arrive in Diani Beach in the afternoon. Check into your beach resort and unwind on the white sands.'
      },
      {
        day: 'Day 4',
        title: 'Relaxation & Coral Reef Dhow Cruise',
        desc: 'Enjoy a leisurely beach day. Optional traditional dhow boat excursion to Kisite-Mpunguti Marine Park for dolphin spotting, snorkeling, and fresh seafood lunch.'
      },
      {
        day: 'Day 5',
        title: 'Diani Beach Leisure & Airport Transfer',
        desc: 'Morning beach walks, swim in the turquoise Indian Ocean. Transfer to Ukunda Airstrip or Mombasa SGR Station / Airport for your onward journey.'
      }
    ],
    inclusions: [
      '4x4 Land Cruiser safari with dedicated guide for 3 days',
      '2 Nights Safari Lodge (Full Board) + 2 Nights Diani Beach Resort (Half Board)',
      'Inter-park transport and beach transfer',
      'Unlimited safari game drives',
      'Bottled drinking water throughout safari'
    ],
    exclusions: [
      'Park fees for Tsavo West and East',
      'Marine park dhow boat trip (optional $85)',
      'Water sports & personal spa treatments',
      'Gratuities'
    ],
    accommodations: [
      { tier: 'Comfort Tier', name: 'Ngulia Lodge + Diani Sea Resort', priceNote: 'Included' },
      { tier: 'Luxury Tier', name: 'Kilaguni Serena + The Sands at Nomad Diani', priceNote: '+$180 / KES 23,000 per night' }
    ]
  },
  {
    id: 'classic-kenya-7day',
    title: '7-Day Classic Kenya Big Five Expedition',
    subtitle: 'Nairobi, Amboseli, Lake Naivasha, Lake Nakuru and Maasai Mara comprehensive loop.',
    badge: 'ULTIMATE KENYA',
    category: 'Wildlife Safaris',
    days: 7,
    nights: 6,
    type: 'Wildlife',
    image: '/assets/mara_lion.jpg',
    hiresImage: '/assets/hero_elephants_kili.jpg',
    priceKES: 135000,
    priceUSD: 1050,
    groupType: 'Small Group or Private 4x4',
    pickup: 'Nairobi Hotel / JKIA Airport',
    dropoff: 'Nairobi Hotel / JKIA Airport',
    itinerary: [
      { day: 'Day 1', title: 'Nairobi to Amboseli National Park', desc: 'Arrive and afternoon game drive under Kilimanjaro.' },
      { day: 'Day 2', title: 'Full Day Amboseli Wildlife Spectacle', desc: 'All day game viewing and Observation Hill panorama.' },
      { day: 'Day 3', title: 'Amboseli to Lake Naivasha', desc: 'Rift Valley descent, afternoon boat cruise and Crescent Island walk.' },
      { day: 'Day 4', title: 'Lake Nakuru National Park Day Excursion', desc: 'Sanctuary for rhinos and birdlife, Makalia falls.' },
      { day: 'Day 5', title: 'Rift Valley to Maasai Mara National Reserve', desc: 'Afternoon game drive in the premier Mara ecosystem.' },
      { day: 'Day 6', title: 'Full Day Maasai Mara Big Cat Tracking', desc: 'Vast Mara plains, river crossing points, picnic lunch.' },
      { day: 'Day 7', title: 'Sunrise Mara Drive & Return to Nairobi', desc: 'Breakfast, morning departure back to Nairobi.' }
    ],
    inclusions: [
      '6 Nights accommodation in premium safari lodges/tents',
      'Exclusive 4x4 Safari Land Cruiser with pop-up roof',
      'All meals on safari (Full Board)',
      'Lake Naivasha boat safari & Crescent Island walk',
      'Professional silver-rated KPSGA guide',
      'All road taxes and hotel pickups'
    ],
    exclusions: [
      'Park admission fees',
      'Hot air balloon flight',
      'Tips and personal items'
    ],
    accommodations: [
      { tier: 'Mid-Range Tented', name: 'Curated 4-star Safari Camps', priceNote: 'Included' },
      { tier: 'Luxury Lodge Collection', name: 'Serena & Sopa Lodge Portfolio', priceNote: '+$350 total' }
    ]
  },
  {
    id: 'tsavo-east-2day',
    title: '2-Day Tsavo East Wilderness Quick Escape',
    subtitle: 'Perfect short break from Nairobi or Mombasa to witness the iconic red dust elephants.',
    badge: 'WEEKENDER',
    category: 'Short Safaris',
    days: 2,
    nights: 1,
    type: 'Wildlife',
    image: '/assets/tsavo.jpg',
    hiresImage: '/assets/tsavo.jpg',
    priceKES: 28000,
    priceUSD: 220,
    groupType: 'Daily Departures',
    pickup: 'Nairobi / Mombasa / Diani',
    dropoff: 'Nairobi / Mombasa / Diani',
    itinerary: [
      { day: 'Day 1', title: 'Transfer to Tsavo East & Afternoon Game Drive', desc: 'Enter through Bachuma or Manyani gate. Afternoon game drive tracking red elephants, lions, and gazelles around Aruba Dam.' },
      { day: 'Day 2', title: 'Dawn Game Drive & Return Journey', desc: 'Early morning game drive when predators are active. Breakfast, check out, and scenic drive back to destination.' }
    ],
    inclusions: [
      'Transport in 4x4 safari cruiser',
      '1 Night lodge accommodation full board',
      'Morning and afternoon game drives',
      'Guide services and bottled water'
    ],
    exclusions: ['Park entrance fees', 'Tips and drinks'],
    accommodations: [
      { tier: 'Standard Safari Lodge', name: 'Voi Wildlife Lodge / Ashnil Aruba', priceNote: 'Included' }
    ]
  }
];

export const fleetData = [
  {
    title: 'Custom 4x4 Safari Land Cruiser',
    badge: 'Our Flagship Vehicle',
    image: '/assets/safari_jeep.jpg',
    features: [
      'High pop-up roof for 360° unobstructed photography',
      'Guaranteed window seat for every traveler (Max 6-7 guests)',
      'Onboard inverter 220V/USB charging sockets for cameras & phones',
      'Built-in cooler box stocked with chilled drinking water',
      'Long-range VHF radio communication for wildlife sightings',
      'Heavy-duty off-road suspension & all-terrain mud tires',
      'Full emergency medical first-aid kit on board'
    ]
  }
];

export const reviewsData = [
  {
    name: 'Sarah & Michael Jensen',
    country: 'United Kingdom',
    rating: 5,
    title: 'Unbelievable 3-day Mara trip with SafariDoctor!',
    text: 'Chris and our driver-guide Peter made our dream safari unforgettable. We saw a leopard with its kill on day one, and hundreds of thousands of wildebeest crossing the Mara River. The 4x4 Land Cruiser was spotless and comfortable. 10/10 recommendation!',
    tour: '3-Day Maasai Mara Safari',
    date: 'September 2026'
  },
  {
    name: 'Dr. Lucas Bauer',
    country: 'Germany',
    rating: 5,
    title: 'True professionals – best safari experience in Kenya',
    text: 'We compared Jungle Roar and SafariDoctor before booking, and SafariDoctor provided the exact custom itinerary we wanted. Amboseli elephants right before Mt Kilimanjaro at sunrise was breathtaking. Honest pricing, no hidden costs.',
    tour: '4-Day Amboseli Safari',
    date: 'August 2026'
  },
  {
    name: 'Emily & David Zhao',
    country: 'Canada',
    rating: 5,
    title: 'Magical 5-Day Safari & Diani Beach combo',
    text: 'Having a seamless transition from the dusty red savannah of Tsavo to the crystal turquoise waters of Diani Beach was pure luxury. Chris checked in on us every day via WhatsApp to ensure everything was perfect.',
    tour: '5-Day Safari & Beach Combo',
    date: 'July 2026'
  }
];

export const faqData = [
  {
    question: 'Do I need a Visa for Kenya (eTA)?',
    answer: 'Kenya now uses an Electronic Travel Authorization (eTA) system for all foreign visitors (except East African citizens). You should apply online at least 2 weeks prior to travel via the official Kenya eTA portal (etakenya.go.ke). We can assist you with your flight details and accommodation confirmations needed for the application.'
  },
  {
    question: 'When is the best time to see the Great Wildebeest Migration?',
    answer: 'The Great Migration is typically present in Kenya\'s Maasai Mara between July and October. However, Kenya is a phenomenal year-round destination: January to March offers fantastic dry weather and newborn wildlife, while November to April is paradise for bird watchers.'
  },
  {
    question: 'What is included in SafariDoctor safari packages?',
    answer: 'All our safari packages include professional 4x4 Land Cruiser transport with pop-up roof, certified KPSGA driver-guide, full-board accommodation (breakfast, lunch, dinner), unlimited game drives, and chilled mineral water. Park entry fees can be prepaid or settled directly depending on your preference.'
  },
  {
    question: 'Can I pay in Kenyan Shillings (KES) or US Dollars (USD)?',
    answer: 'Yes! We accept payments in both KES and USD. We accept major credit cards (Visa, Mastercard), direct international wire transfers, and Kenya\'s M-Pesa mobile money.'
  },
  {
    question: 'What should I pack for my Kenya safari?',
    answer: 'Pack lightweight neutral-colored clothing (khaki, olive, tan), a warm fleece or windbreaker for cool early morning game drives, comfortable walking shoes, high-SPF sunscreen, sunglasses, hat, personal medications, camera with telephoto lens, and binoculars (though we also provide binoculars on board).'
  }
];

export const companyContact = {
  name: 'SafariDoctor',
  tagline: 'Capture Nature At Its Best',
  founder: 'Chris SafariDoctor',
  phone: '+254 712 345 678',
  whatsapp: '+254712345678',
  email: 'info@safaridoctor.co.ke',
  address: 'Nairobi Office: Gateway Park, Mombasa Road, Nairobi, Kenya | Coast Branch: Diani Beach Road, Kwale',
  openingHours: 'Mon - Sun: 7:00 AM - 10:00 PM EAT (24/7 Safari Assistance)'
};
