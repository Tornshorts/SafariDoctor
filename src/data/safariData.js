export const destinationsData = [
  {
    id: 'maasai-mara',
    name: 'MAASAI MARA',
    displayName: 'Maasai Mara',
    tagline: 'The ultimate wildlife experience',
    image: '/assets/reference_crops/ref_dest_mara.jpg',
    fallbackImage: '/assets/dest_mara.jpg',
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
    name: 'AMBOSELI',
    displayName: 'Amboseli National Park',
    tagline: 'Elephants & Kilimanjaro views',
    image: '/assets/reference_crops/ref_dest_amboseli.jpg',
    fallbackImage: '/assets/dest_amboseli.jpg',
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
    id: 'tsavo-east',
    name: 'TSAVO EAST',
    displayName: 'Tsavo East & West',
    tagline: 'Red elephants & boundless wilderness',
    image: '/assets/reference_crops/ref_dest_tsavo.jpg',
    fallbackImage: '/assets/tsavo.jpg',
    badge: 'Largest Park',
    description: 'Kenya\'s largest protected wilderness, celebrated for red-dust elephants, ancient volcanic lava flows at Shetani, Lugard Falls, and open safari van game tracking.',
    bestTime: 'June to October & January to March',
    keyWildlife: ['Red Dust Elephants', 'Lions', 'Buffalo', 'Hippos', 'Lesser Kudu'],
    highlights: ['Mzima Springs Underwater Chamber', 'Mudanda Rock & Lugard Falls', 'Shetani Lava Flow', 'Man-Eaters History'],
    recommendedDays: '2 - 3 Days',
    startingPriceKES: 28000,
    startingPriceUSD: 220
  },
  {
    id: 'serengeti',
    name: 'SERENGETI',
    displayName: 'Serengeti & Mara Ecosystem',
    tagline: 'Endless plains & migration corridors',
    image: '/assets/reference_crops/ref_dest_serengeti.jpg',
    fallbackImage: '/assets/hero_savanna.jpg',
    badge: 'Safari Icon',
    description: 'The legendary Serengeti expanse stretching beyond the border, offering dramatic big cat hunting action, golden horizons, and seasonal migration tracking.',
    bestTime: 'Year-round, Peak June to October',
    keyWildlife: ['Lions', 'Leopards', 'Cheetahs', 'Elephants', 'Giraffes', 'Hyenas'],
    highlights: ['Endless Savannah Horizons', 'Predator Tracking', 'Mobile Tented Camps', 'Seronera Valley Wildlife'],
    recommendedDays: '4 - 5 Days',
    startingPriceKES: 98000,
    startingPriceUSD: 760
  },
  {
    id: 'lake-nakuru',
    name: 'LAKE NAKURU',
    displayName: 'Lake Nakuru National Park',
    tagline: 'Rhinos, flamingos & birdlife',
    image: '/assets/reference_crops/ref_dest_nakuru.jpg',
    fallbackImage: '/assets/real_flamingos_in_flight.jpg',
    badge: 'UNESCO Sanctuary',
    description: 'Nestled in the Great Rift Valley, Lake Nakuru is a world-famous sanctuary for endangered white and black rhinos, Rothschild\'s giraffes, and vibrant bird populations.',
    bestTime: 'Year-round, especially dry seasons for birding',
    keyWildlife: ['Black & White Rhinos', 'Lesser Flamingos', 'Rothschild Giraffes', 'Tree-climbing Lions', 'Pelicans'],
    highlights: ['Rhino Sanctuary Tracking', 'Baboon Cliff Viewpoint', 'Makalia Falls', 'Rift Valley Escarpment'],
    recommendedDays: '2 - 3 Days',
    startingPriceKES: 38000,
    startingPriceUSD: 295
  },
  {
    id: 'lake-naivasha',
    name: 'LAKE NAIVASHA',
    displayName: 'Lake Naivasha & Crescent Island',
    tagline: 'Freshwater lake boat safaris & walking among wildlife',
    image: '/assets/reference_crops/ref_dest_naivasha.jpg',
    fallbackImage: '/assets/nakuru_flamingos.jpg',
    badge: 'Rift Valley Gem',
    description: 'A serene freshwater lake ringed by yellow-fever acacia trees, home to thousands of pink flamingos, pelicans, hippo pods, and the walking safari paradise of Crescent Island.',
    bestTime: 'Year-round (superb boating & walking conditions)',
    keyWildlife: ['Hippos', 'Fish Eagles', 'Giraffes', 'Zebras', 'Flamingos', 'Waterbucks'],
    highlights: ['Scenic Boat Safari to Crescent Island', 'Walking with Giraffes on Foot', 'Hell\'s Gate Gorge Biking', 'Geothermal Spa Relax'],
    recommendedDays: '1 - 2 Days',
    startingPriceKES: 24000,
    startingPriceUSD: 190
  }
];

export const tabbedPackagesData = {
  featured: [
    {
      id: 'mara-nakuru-naivasha-amboseli-7d',
      title: '7 DAYS, 6 NIGHTS SAFARI TO MASAI MARA, LAKE NAKURU, LAKE NAIVASHA AND AMBOSELI SAFARI.',
      shortTitle: '7 Days Mara, Nakuru, Naivasha & Amboseli',
      subtitle: 'The comprehensive Kenyan circuit: Big Five, bird sanctuary, boat safari and Kilimanjaro backdrop.',
      badge: 'FEATURED',
      category: 'Featured Safari',
      days: 7,
      nights: 6,
      type: 'Wildlife & Scenic',
      image: '/assets/reference_crops/ref_pkg_kili.jpg',
      fallbackImage: '/assets/hero_elephants_kili.jpg',
      priceKES: 135000,
      priceUSD: 1050,
      groupType: 'Small Group or Private 4x4 Cruiser',
      pickup: 'Nairobi Hotel / JKIA Airport',
      dropoff: 'Nairobi Hotel / JKIA Airport',
      itinerary: [
        { day: 'Day 1', title: 'Nairobi to Maasai Mara National Reserve', desc: 'Depart Nairobi early through the Great Rift Valley escarpment. Arrive in Maasai Mara in time for lunch and camp check-in. Afternoon game drive tracking lions and cheetahs.' },
        { day: 'Day 2', title: 'Full Day Maasai Mara & Mara River', desc: 'Spend the entire day exploring the Mara plains. Witness migration herds, visit the hippo and crocodile-packed Mara River, and enjoy a wild picnic lunch under an acacia.' },
        { day: 'Day 3', title: 'Maasai Mara to Lake Nakuru National Park', desc: 'Morning drive to Lake Nakuru in the Rift Valley. Afternoon game drive tracking black and white rhinos, Rothschild giraffes, and flamingo flocks along the shores.' },
        { day: 'Day 4', title: 'Lake Nakuru to Lake Naivasha Boat Safari', desc: 'Short scenic drive to Lake Naivasha. Afternoon motorized boat safari gliding past hippos to Crescent Island Sanctuary for a guided walking safari with giraffes and zebras.' },
        { day: 'Day 5', title: 'Lake Naivasha to Amboseli National Park', desc: 'Journey southeast past Nairobi to the base of Mount Kilimanjaro. Arrive at Amboseli with evening game drive as elephants graze against the mountain silhouette.' },
        { day: 'Day 6', title: 'Full Day Amboseli Wildlife & Observation Hill', desc: 'Morning and afternoon game drives with clear mountain views. Climb Observation Hill overlooking the Enkongo Narok swamps crowded with bathing elephants and birdlife.' },
        { day: 'Day 7', title: 'Sunrise Game Drive & Return to Nairobi', desc: 'Early morning game drive followed by hot breakfast. Check out and journey back to Nairobi with drop-off at your hotel or international airport.' }
      ],
      inclusions: [
        'Transport in customized 4x4 Safari Land Cruiser with pop-up photography roof',
        '6 Nights accommodation in handpicked safari lodges and tented camps',
        'All meals on safari (Breakfast, Lunch, Dinner)',
        'Services of certified KPSGA driver-guide (Chris & team)',
        'Lake Naivasha boat safari & Crescent Island walking guide',
        'Unlimited game drives as per itinerary',
        'Complimentary bottled drinking water throughout'
      ],
      exclusions: [
        'National Park entrance fees',
        'Optional Maasai cultural village visit ($25-$30)',
        'Optional Sunrise Hot Air Balloon Safari ($450)',
        'Tips and driver gratuities',
        'Personal travel insurance'
      ]
    },
    {
      id: 'mara-nakuru-4d',
      title: '4 DAYS, 3 NIGHTS MASAI MARA AND LAKE NAKURU NATIONAL PARK GROUP JOINING BUDGET SAFARI',
      shortTitle: '4 Days Maasai Mara & Lake Nakuru Budget Safari',
      subtitle: 'Our top affordable safari: witness the Big Five in Mara and rhino paradise in Lake Nakuru.',
      badge: 'TOP VALUE',
      category: 'Budget Group Joining',
      days: 4,
      nights: 3,
      type: 'Wildlife',
      image: '/assets/reference_crops/ref_pkg_cruiser_open.jpg',
      fallbackImage: '/assets/safari_jeep.jpg',
      priceKES: 58000,
      priceUSD: 450,
      groupType: 'Daily Group Joining / Budget 4x4',
      pickup: 'Nairobi Central / Westlands / JKIA',
      dropoff: 'Nairobi Central / Westlands / JKIA',
      itinerary: [
        { day: 'Day 1', title: 'Nairobi to Maasai Mara', desc: 'Early pickup in Nairobi and drive through the Great Rift Valley. Check into tented camp, lunch, followed by late afternoon game drive.' },
        { day: 'Day 2', title: 'Full Day Maasai Mara Game Tracking', desc: 'Full day exploring the savannah with packed picnic lunch. Seek out lion prides, leopards, cheetahs, and herds of wildebeest and zebra.' },
        { day: 'Day 3', title: 'Maasai Mara to Lake Nakuru', desc: 'Morning departure to Lake Nakuru National Park. Afternoon game drive in the rhino sanctuary and bird paradise.' },
        { day: 'Day 4', title: 'Morning Drive & Return to Nairobi', desc: 'Breakfast and morning game viewing before heading back to Nairobi, arriving late afternoon.' }
      ],
      inclusions: [
        'Transport in safari van / 4x4 cruiser with pop-up roof',
        '3 Nights accommodation in budget tented camp / lodge',
        'All meals on safari',
        'Professional English-speaking driver-guide',
        'Drinking water on game drives'
      ],
      exclusions: [
        'Park entry fees',
        'Maasai village tour',
        'Personal expenses and tips'
      ]
    },
    {
      id: 'mara-nakuru-amboseli-6d',
      title: '6 DAYS 5 NIGHTS MAASAI MARA, LAKE NAKURU AND AMBOSELI GROUP JOINING SAFARI',
      shortTitle: '6 Days Mara, Nakuru & Amboseli Safari',
      subtitle: 'The golden triangle of Kenya: predator savannahs, Great Rift Valley lakes, and elephant herds of Kilimanjaro.',
      badge: 'BEST SELLER',
      category: 'Group Joining & Private',
      days: 6,
      nights: 5,
      type: 'Wildlife & Big Five',
      image: '/assets/reference_crops/ref_pkg_cheetah.jpg',
      fallbackImage: '/assets/mara_lion.jpg',
      priceKES: 110000,
      priceUSD: 850,
      groupType: 'Small Group Joining / Private',
      pickup: 'Nairobi Hotel / Airport',
      dropoff: 'Nairobi Hotel / Airport',
      itinerary: [
        { day: 'Day 1', title: 'Nairobi to Maasai Mara Reserve', desc: 'Scenic journey to Maasai Mara, lunch at camp, and first exciting afternoon game drive.' },
        { day: 'Day 2', title: 'Full Day in Maasai Mara', desc: 'All day game viewing in search of the Big Five, with bush picnic lunch in the heart of the reserve.' },
        { day: 'Day 3', title: 'Maasai Mara to Lake Nakuru', desc: 'Transfer to Lake Nakuru, check-in, lunch, and game drive spotting both black and white rhinos.' },
        { day: 'Day 4', title: 'Lake Nakuru to Amboseli National Park', desc: 'Drive across the plains to Amboseli with Mount Kilimanjaro in view. Evening game drive.' },
        { day: 'Day 5', title: 'Full Day Amboseli Wildlife Spectacle', desc: 'Full day tracking big tuskers and predators across the swamps, Observation Hill picnic.' },
        { day: 'Day 6', title: 'Amboseli to Nairobi', desc: 'Final morning game drive, breakfast, and smooth return drive to Nairobi for flight connections.' }
      ],
      inclusions: [
        '4x4 safari cruiser / minivan with pop-up photography roof',
        '5 Nights comfortable lodge/camp accommodation',
        'Full board meals',
        'Experienced naturalist driver-guide',
        'All game drives'
      ],
      exclusions: ['Park entry fees', 'Drinks & tips', 'Optional village visit']
    },
    {
      id: 'mara-nakuru-budget-track-4d',
      title: '4 DAYS, 3 NIGHTS MASAI MARA AND LAKE NAKURU NATIONAL PARK GROUP JOINING BUDGET SAFARI (EXPEDITION)',
      shortTitle: '4 Days Mara & Nakuru Expedition',
      subtitle: 'Experience authentic African dirt-track expeditions with guaranteed window seats and seasoned guides.',
      badge: 'POPULAR',
      category: 'Expedition',
      days: 4,
      nights: 3,
      type: 'Adventure',
      image: '/assets/reference_crops/ref_pkg_cruiser_track.jpg',
      fallbackImage: '/assets/safari_camp.jpg',
      priceKES: 58000,
      priceUSD: 450,
      groupType: 'Daily Departures',
      pickup: 'Nairobi',
      dropoff: 'Nairobi',
      itinerary: [
        { day: 'Day 1', title: 'Nairobi to Mara Expedition', desc: 'Depart Nairobi early and travel through Narok town into the Mara for afternoon wildlife search.' },
        { day: 'Day 2', title: 'The Great Mara Safari', desc: 'Complete day tracking predators, large herds, and viewing the Mara River wildlife.' },
        { day: 'Day 3', title: 'Mara to Lake Nakuru Sanctuary', desc: 'Drive to Nakuru and explore the UNESCO World Heritage bird and rhino park.' },
        { day: 'Day 4', title: 'Return Journey to Nairobi', desc: 'Morning game drive and return transfer to Nairobi.' }
      ],
      inclusions: ['Transport with pop-up roof', '3 Nights accommodation', 'All meals', 'Guide & water'],
      exclusions: ['Park fees', 'Tips']
    }
  ],
  bestSelling: [
    {
      id: 'mara-3day-bestseller',
      title: '3-DAY MAASAI MARA NATIONAL RESERVE MIGRATION & BIG FIVE SAFARI',
      shortTitle: '3-Day Maasai Mara Classic',
      subtitle: 'The quintessential African safari: lions, leopards, cheetahs, and vast savannah herds.',
      badge: 'TOP SELLER',
      category: 'Classic Safari',
      days: 3,
      nights: 2,
      type: 'Big Five Wildlife',
      image: '/assets/reference_crops/ref_dest_mara.jpg',
      fallbackImage: '/assets/pkg_mara.jpg',
      priceKES: 45000,
      priceUSD: 350,
      groupType: 'Daily Group Joining or Private 4x4',
      pickup: 'Nairobi Hotel / JKIA Airport',
      dropoff: 'Nairobi Hotel / JKIA Airport',
      itinerary: [
        { day: 'Day 1', title: 'Nairobi to Maasai Mara', desc: 'Scenic morning drive down the Great Rift Valley. Arrive at camp for lunch. Afternoon game drive searching for the Big Five.' },
        { day: 'Day 2', title: 'Full Day in Maasai Mara Reserve', desc: 'Full-day game drive with bush picnic lunch by the Mara River. High chance of big cat encounters.' },
        { day: 'Day 3', title: 'Sunrise Game Drive & Return to Nairobi', desc: 'Early morning game drive, breakfast, and return journey to Nairobi arriving late afternoon.' }
      ],
      inclusions: ['4x4 Safari Land Cruiser / Minivan with pop-up roof', '2 Nights tented camp full board', 'All meals', 'Professional guide', 'Bottled water'],
      exclusions: ['Park entry fees', 'Tips and personal items']
    },
    {
      id: 'amboseli-4day-bestseller',
      title: '4-DAY AMBOSELI & KILIMANJARO ELEPHANT SPECTACULAR',
      shortTitle: '4-Day Amboseli Safari',
      subtitle: 'Up-close giant elephant herds framed by the majestic snow-capped peak of Mount Kilimanjaro.',
      badge: 'ICONIC',
      category: 'Photography Safari',
      days: 4,
      nights: 3,
      type: 'Wildlife & Landscapes',
      image: '/assets/reference_crops/ref_pkg_kili.jpg',
      fallbackImage: '/assets/pkg_amboseli.jpg',
      priceKES: 52000,
      priceUSD: 400,
      groupType: 'Private 4x4 or Small Group',
      pickup: 'Nairobi or Mombasa',
      dropoff: 'Nairobi or Mombasa',
      itinerary: [
        { day: 'Day 1', title: 'Nairobi to Amboseli', desc: 'Drive through Athi Plains to Amboseli. Afternoon game drive under Kilimanjaro.' },
        { day: 'Day 2', title: 'Full Day Exploring Amboseli', desc: 'Track elephant herds, lions, cheetahs. Observation Hill panoramic lunch.' },
        { day: 'Day 3', title: 'Morning & Afternoon Game Drives', desc: 'Dawn photography session when skies are clearest. Cultural village experience.' },
        { day: 'Day 4', title: 'Final Drive & Return', desc: 'Morning game drive, breakfast, and return transfer to Nairobi or Diani Beach.' }
      ],
      inclusions: ['Transport in custom 4x4', '3 Nights lodge accommodation', 'All meals', 'Certified guide', 'Bottled water'],
      exclusions: ['Amboseli park fees', 'Gratuities']
    },
    {
      id: 'safari-beach-5day-bestseller',
      title: '5-DAY WILDLIFE SAFARI & TROPICAL DIANI BEACH COMBO',
      shortTitle: '5-Day Safari & Beach Combo',
      subtitle: 'The best of Kenya: thrill of Tsavo red elephants followed by pure relaxation on Diani Beach.',
      badge: 'TOP COMBO',
      category: 'Safari & Beach',
      days: 5,
      nights: 4,
      type: 'Wildlife & Beach',
      image: '/assets/reference_crops/ref_dest_tsavo.jpg',
      fallbackImage: '/assets/pkg_beach.jpg',
      priceKES: 85000,
      priceUSD: 660,
      groupType: 'Private Experience',
      pickup: 'Nairobi or Mombasa',
      dropoff: 'Diani Beach / Ukunda Airport',
      itinerary: [
        { day: 'Day 1', title: 'Nairobi to Tsavo West', desc: 'Journey south, Mzima Springs hippo pools, afternoon game drive.' },
        { day: 'Day 2', title: 'Tsavo West to Tsavo East', desc: 'Morning drive to Tsavo East, home to famous red dust elephants.' },
        { day: 'Day 3', title: 'Tsavo East to Diani Beach Resort', desc: 'Morning drive, transfer to Diani white sandy beaches and turquoise waters.' },
        { day: 'Day 4', title: 'Diani Beach Relaxation & Ocean Dhow Cruise', desc: 'Relaxation and optional dhow trip to Kisite Marine Park for dolphins and snorkeling.' },
        { day: 'Day 5', title: 'Leisure & Departure', desc: 'Morning ocean stroll and transfer to Ukunda airstrip or Mombasa SGR station.' }
      ],
      inclusions: ['3 Days 4x4 safari cruiser + 2 Nights beach resort', 'All meals on safari, half board at beach', 'Park transfers', 'Guide'],
      exclusions: ['Park entry fees', 'Optional water sports']
    }
  ],
  scheduledSafaris: [
    {
      id: 'scheduled-mara-3d',
      title: 'WEEKLY SCHEDULED JOINING: 3-DAY MAASAI MARA SAFARI (DEPARTS MON & FRI)',
      shortTitle: 'Scheduled 3-Day Maasai Mara (Mon & Fri)',
      subtitle: 'Guaranteed group departures every Monday and Friday. Perfect for solo travelers and couples.',
      badge: 'FIXED DEPARTURE',
      category: 'Scheduled Group',
      days: 3,
      nights: 2,
      type: 'Group Joining',
      image: '/assets/reference_crops/ref_pkg_cruiser_open.jpg',
      fallbackImage: '/assets/safari_jeep.jpg',
      priceKES: 42000,
      priceUSD: 330,
      groupType: 'Guaranteed Weekly Departure (Mon & Fri)',
      pickup: 'Nairobi Central Pickups',
      dropoff: 'Nairobi Central Pickups',
      itinerary: [
        { day: 'Day 1', title: 'Monday / Friday: Nairobi to Mara', desc: 'Depart 7:30 AM, arrive at camp for hot lunch, 3:30 PM sunset game drive.' },
        { day: 'Day 2', title: 'Full Day Safari Tracking', desc: 'Full day game tracking across the vast reserve, packed picnic lunch in wilderness.' },
        { day: 'Day 3', title: 'Morning Drive & Return', desc: '6:30 AM sunrise game drive, breakfast, and return to Nairobi by 4:00 PM.' }
      ],
      inclusions: ['Pop-up roof safari vehicle', '2 Nights tented camp', 'Full board meals', 'Guide & water'],
      exclusions: ['Park admission fees', 'Tips']
    },
    {
      id: 'scheduled-mara-nakuru-4d',
      title: 'WEEKLY SCHEDULED JOINING: 4-DAY MARA & LAKE NAKURU (DEPARTS WED & SAT)',
      shortTitle: 'Scheduled 4-Day Mara & Nakuru (Wed & Sat)',
      subtitle: 'Guaranteed departures every Wednesday and Saturday covering Masai Mara and Lake Nakuru rhino park.',
      badge: 'FIXED DEPARTURE',
      category: 'Scheduled Group',
      days: 4,
      nights: 3,
      type: 'Group Joining',
      image: '/assets/reference_crops/ref_pkg_cheetah.jpg',
      fallbackImage: '/assets/dest_nakuru.jpg',
      priceKES: 55000,
      priceUSD: 430,
      groupType: 'Guaranteed Departures (Wed & Sat)',
      pickup: 'Nairobi Pickups',
      dropoff: 'Nairobi Pickups',
      itinerary: [
        { day: 'Day 1', title: 'Wednesday / Saturday: Nairobi to Mara', desc: 'Rift valley viewpoint, camp check-in, late afternoon game drive.' },
        { day: 'Day 2', title: 'All Day Mara Wildlife Encounter', desc: 'Full day in search of big cats, hippos, and migratory herds.' },
        { day: 'Day 3', title: 'Mara to Lake Nakuru', desc: 'Morning journey to Lake Nakuru for afternoon rhino tracking.' },
        { day: 'Day 4', title: 'Morning Drive & Dropoff', desc: 'Morning lake tour and return journey to Nairobi.' }
      ],
      inclusions: ['Transport with open roof hatch', '3 Nights accommodation', 'All meals', 'Guide services'],
      exclusions: ['Park fees', 'Gratuities']
    },
    {
      id: 'scheduled-tsavo-2d',
      title: 'DAILY SCHEDULED DEPARTURE: 2-DAY TSAVO EAST WILDERNESS QUICK ESCAPE',
      shortTitle: 'Daily 2-Day Tsavo East Escape',
      subtitle: 'Daily departures from Nairobi or Mombasa to experience the legendary red elephants and Aruba Dam.',
      badge: 'DAILY DEPARTURE',
      category: 'Short Safari',
      days: 2,
      nights: 1,
      type: 'Quick Escape',
      image: '/assets/reference_crops/ref_dest_tsavo.jpg',
      fallbackImage: '/assets/tsavo.jpg',
      priceKES: 28000,
      priceUSD: 220,
      groupType: 'Daily Departures from Nairobi or Coast',
      pickup: 'Nairobi / Mombasa / Diani',
      dropoff: 'Nairobi / Mombasa / Diani',
      itinerary: [
        { day: 'Day 1', title: 'Morning Pickup & Tsavo Game Drive', desc: 'Early transfer to Tsavo East. Afternoon game drive around Aruba Dam tracking red elephants and lions.' },
        { day: 'Day 2', title: 'Dawn Drive & Return Journey', desc: 'Early morning game drive, breakfast, and return transfer to your destination.' }
      ],
      inclusions: ['Safari cruiser transport', '1 Night lodge full board', 'Game drives', 'Guide'],
      exclusions: ['Park fees', 'Tips']
    }
  ]
};

// Flattened packagesData for backwards compatibility with existing modals & search
export const packagesData = [
  ...tabbedPackagesData.featured,
  ...tabbedPackagesData.bestSelling,
  ...tabbedPackagesData.scheduledSafaris
];

// USER REAL PHOTOS & LIVE SAFARI VIDEOS DATA: Authentic moments with Chris & travelers
export const realPhotosData = [
  {
    id: 'chris-guests-thumbsup',
    type: 'image',
    title: 'Chris With Happy Safari Guests',
    subtitle: 'Maasai Mara Open Plains',
    image: '/assets/real_chris_guests_thumbs_up.jpg',
    description: 'Lead naturalist guide Chris ("Black Santa") giving thumbs up with delighted international safari guests in front of our customized 4x4 Land Cruiser with open pop-up photography roof.',
    location: 'Maasai Mara National Reserve',
    guide: 'Chris SafariDoctor',
    tag: 'Happy Guests',
    category: 'travelers'
  },
  {
    id: 'video-rhino-nakuru',
    type: 'video',
    title: 'Black Rhino Sanctuary Live Dispatch',
    subtitle: 'Rare Endangered Rhino on the Move',
    poster: '/assets/poster_black_rhino_nakuru.jpg',
    image: '/assets/poster_black_rhino_nakuru.jpg',
    video: '/assets/video_black_rhino_nakuru.mp4',
    duration: '0:19',
    description: 'Breathtaking live video dispatch of a majestic endangered black rhino trotting across the open grasslands with an oxpecker bird perched on its ear and zebras grazing in the background.',
    location: 'Lake Nakuru National Park',
    guide: 'Chris SafariDoctor',
    tag: 'Live 4K Video',
    category: 'video'
  },
  {
    id: 'lioness-carrying-cub',
    type: 'image',
    title: 'Rare Sighting: Lioness Carrying Her Cub',
    subtitle: 'Intimate Maternal Moment in Mara',
    image: '/assets/real_lioness_carrying_cub.jpg',
    description: 'An extraordinary, once-in-a-lifetime wildlife encounter captured right alongside our safari vehicle: a protective lioness gently carrying her tiny newborn cub in her jaws.',
    location: 'Maasai Mara National Reserve',
    guide: 'Chris SafariDoctor',
    tag: 'Rare Sighting',
    category: 'wildlife'
  },
  {
    id: 'video-elephant-crossing',
    type: 'video',
    title: 'Giant Tusker Road Crossing Encounter',
    subtitle: 'Uncut Safari Cruiser Experience',
    poster: '/assets/poster_elephant_crossing.jpg',
    image: '/assets/poster_elephant_crossing.jpg',
    video: '/assets/video_elephant_crossing.mp4',
    duration: '0:25',
    description: 'Live field video as a magnificent African elephant tusker strides calmly across the safari track right beside our customized SafariDoctor Land Cruisers with live guide commentary.',
    location: 'Amboseli National Park',
    guide: 'Chris SafariDoctor',
    tag: 'Live 4K Video',
    category: 'video'
  },
  {
    id: 'wildebeest-migration-line',
    type: 'image',
    title: 'The Great Migration From the Pop-Up Roof',
    subtitle: 'Thousands of Wildebeest on the Horizon',
    image: '/assets/real_migration_cruiser_line.jpg',
    description: 'Travelers leaning out of the pop-up roof hatch of our Land Cruiser with telephoto cameras ready as endless columns of the Great Migration trek across the golden Mara plains.',
    location: 'Maasai Mara Savannah',
    guide: 'Chris SafariDoctor',
    tag: 'Great Migration',
    category: 'travelers'
  },
  {
    id: 'flamingos-flight-nakuru',
    type: 'image',
    title: 'Flock of Pink Flamingos in Flight',
    subtitle: 'Rift Valley Alkaline Lake Spectacle',
    image: '/assets/real_flamingos_in_flight.jpg',
    description: 'A breathtaking sight of thousands of pink lesser and greater flamingos taking flight simultaneously across the shallow alkaline waters of the Great Rift Valley.',
    location: 'Lake Nakuru National Park',
    guide: 'Chris SafariDoctor',
    tag: 'Bird Sanctuary',
    category: 'wildlife'
  },
  {
    id: 'chris-cockpit-guiding',
    type: 'image',
    title: 'Chris Guiding at the Cruiser Wheel',
    subtitle: 'Expert Bush Naturalist in Action',
    image: '/assets/real_chris_cockpit_smile.jpg',
    description: 'Founder Chris "Black Santa" smiling at the wheel of our custom safari cruiser, navigating rough wilderness tracks and spotting elusive big cats for eager travelers behind him.',
    location: 'Maasai Mara Game Reserve',
    guide: 'Chris "Black Santa"',
    tag: 'Expert Guide',
    category: 'travelers'
  },
  {
    id: 'male-lion-relaxing',
    type: 'image',
    title: 'King of the Savannah Resting in Lush Grass',
    subtitle: 'Majestic Big Cat Close Encounter',
    image: '/assets/real_male_lion_relaxing.jpg',
    description: 'An intimate close-up of a handsome mature male lion with a full dark-tipped mane, relaxing contentedly with his tongue out in the green savannah grass after morning hunting.',
    location: 'Maasai Mara National Reserve',
    guide: 'Chris SafariDoctor',
    tag: 'Big Five Pride',
    category: 'wildlife'
  },
  {
    id: 'baboon-mother-baby',
    type: 'image',
    title: 'Olive Baboon Mother & Baby on Back',
    subtitle: 'Rift Valley Escarpment Wildlife',
    image: '/assets/real_baboon_mother_baby.jpg',
    description: 'A maternal olive baboon standing on the grassy hillside with her wide-eyed infant clinging safely to her back as our safari group drives along the scenic park tracks.',
    location: 'Great Rift Valley Escarpment',
    guide: 'Chris SafariDoctor',
    tag: 'Wildlife Family',
    category: 'wildlife'
  },
  {
    id: 'bush-breakfast',
    type: 'image',
    title: 'Bush Breakfast on Cruiser Bonnet',
    subtitle: 'Maasai Mara Savannah Picnic',
    image: '/assets/real_breakfast_bush.jpg',
    description: 'Chris and smiling travelers sharing morning picnic boxes and fresh coffee right on the hood of our 4x4 cruiser in the heart of Maasai Mara.',
    location: 'Maasai Mara National Reserve',
    guide: 'Chris "Black Santa"',
    tag: 'Savannah Picnic',
    category: 'travelers'
  },
  {
    id: 'group-celebration',
    type: 'image',
    title: 'Pure Celebration in the Wild',
    subtitle: 'Hands Up Under African Skies',
    image: '/assets/real_group_celebration.jpg',
    description: 'Unforgettable group camaraderie after an exhilarating morning game drive spotting four lions and a cheetah family.',
    location: 'Great Rift Valley Plains',
    guide: 'Chris "Black Santa"',
    tag: 'Big Five Joy',
    category: 'travelers'
  },
  {
    id: 'sunrise-van',
    type: 'image',
    title: 'Golden Hour Pop-Up Roof Tour',
    subtitle: 'Sunrise Game Drive with Family',
    image: '/assets/real_sunrise_van.jpg',
    description: 'Early morning dawn patrol with travelers enjoying unobstructed 360-degree photography views through our customized open roof.',
    location: 'Amboseli National Park',
    guide: 'Chris "Black Santa"',
    tag: 'Sunrise Tour',
    category: 'travelers'
  },
  {
    id: 'chris-tactical-group',
    type: 'image',
    title: 'Wilderness Expedition with Guide Chris',
    subtitle: 'On-the-Ground Wildlife Tracking',
    image: '/assets/real_chris_tactical_group.jpg',
    description: 'Chris in the field with international travelers, sharing authentic Kenyan bush lore and pointing out hidden predator tracks.',
    location: 'Maasai Mara Triangle',
    guide: 'Chris SafariDoctor',
    tag: 'Expert Guide',
    category: 'travelers'
  }
];

// LATEST NEWS & SAFARI BLOG (from Reference Website Screenshot 4)
export const newsArticlesData = [
  {
    id: 'news-elewana-bushplane',
    category: 'UNCATEGORIZED',
    badge: 'Luxury Safaris',
    title: 'ELEWANA SAND RIVER MARA FLYING HONEYMOON PACKAGE',
    image: '/assets/reference_crops/ref_news_bushplane.jpg',
    fallbackImage: '/assets/safari_camp.jpg',
    date: 'MAY 20, 2021',
    author: 'Chris SafariDoctor',
    comments: 0,
    summary: 'Thousands of visitors come to the Mara every year to enjoy some of the most authentic safari experiences in Africa. Here are a few reasons why we love a Masai Mara safari: PRIVATE LOCATION The camp is located in a secluded corner along the Sand River, offering intimate wildlife encounters and luxury fly-in convenience...',
    readTime: '4 min read'
  },
  {
    id: 'news-amboseli-elephants',
    category: 'ADVENTURES',
    badge: 'Destination Guide',
    title: 'Amboseli National Park',
    image: '/assets/reference_crops/ref_news_amboseli.jpg',
    fallbackImage: '/assets/hero_elephants_kili.jpg',
    date: 'FEBRUARY 15, 2021',
    author: 'Chris SafariDoctor',
    comments: 0,
    summary: 'The #amboselinationalpark is indeed one of the extraordinary wildlife destinations in Kenya with beautiful views, a chance to see Mt. Kilimanjaro in Tanzania, large herds of elephants and the big cats. Browse our curated selection of Amboseli Tours & Safaris for your next dream holiday...',
    readTime: '3 min read'
  },
  {
    id: 'news-nairobi-daytours',
    category: 'ADVENTURES',
    badge: 'Day Excursions',
    title: 'Fun Filled Day Tours',
    image: '/assets/reference_crops/ref_news_giraffe_city.jpg',
    fallbackImage: '/assets/nakuru_rhinos.jpg',
    date: 'FEBRUARY 15, 2021',
    author: 'Chris SafariDoctor',
    comments: 0,
    summary: 'Don\'t let yourself and family get bored by staying indoors all days during this period! Let\'s go out and have a fun filled day tour at a perfect place within Nairobi city, enjoy the sunshine while viewing the wildlife against the city skyline at Nairobi National Park, Giraffe Centre and Elephant Orphanage...',
    readTime: '5 min read'
  }
];

// GOOGLE REVIEWS DATA (from Reference Website Screenshot 5)
export const googleReviewsData = [
  {
    id: 'hal-howens',
    author: 'HAL HOWENS',
    date: 'OCTOBER 10, 2024',
    rating: 5,
    verified: true,
    text: 'We were attracted to SafariDoctor as a local company offering an 11-day midrange private safari in Kenya and Tanzania for our family of four for a fraction of the price of international booking agents. Chris arranged every lodge, park entry and transfer flawlessly. Highly recommended!',
    hasGallery: true,
    galleryImage: '/assets/real_chris_guests_thumbs_up.jpg'
  },
  {
    id: 'safaa-t',
    author: 'SAFAA T.',
    date: 'SEPTEMBER 10, 2024',
    rating: 5,
    verified: true,
    text: 'We recently returned from a memorable family adventure in Kenya, and our experience with Chris / SafariDoctor was outstanding. From the moment we touched down in Nairobi to our departure from the bush, every detail was handled with sincere care and warmth.',
    hasGallery: true,
    galleryImage: '/assets/reference_crops/ref_review_thumbs_safaa.jpg'
  },
  {
    id: 'olivier-piederriere',
    author: 'OLIVIER PIEDERRIERE',
    date: 'SEPTEMBER 10, 2024',
    rating: 5,
    verified: true,
    text: 'Very professional. The 3 landing points Mara Masai, Lake Naivasha and Amboseli near Kilimanjaro was very fantastic. Thank very much to Chris a really professional, reserved, nice and attentive guide who spotted every animal!',
    hasGallery: true,
    galleryImage: '/assets/reference_crops/ref_review_thumbs_olivier.jpg'
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
  },
  {
    title: 'Custom Safari Minivan (Budget Tours)',
    badge: 'Comfortable & Budget-Friendly',
    image: '/assets/real_sunrise_van.jpg',
    features: [
      'Customized pop-up roof for open game viewing',
      'Comfortable reclining high-back bucket seats',
      'Air conditioning and charging ports',
      'Ideal for group joining safaris and city tours',
      'Experienced certified naturalist driver-guide'
    ]
  }
];

export const faqData = [
  {
    question: 'Do I need a Visa for Kenya (eTA)?',
    answer: 'Kenya uses an Electronic Travel Authorization (eTA) system for all foreign visitors (except East African citizens). You should apply online at least 2 weeks prior to travel via the official Kenya eTA portal (etakenya.go.ke). We provide you with the flight details and accommodation vouchers required for your eTA application.'
  },
  {
    question: 'When is the best time to see the Great Wildebeest Migration?',
    answer: 'The Great Migration is typically present in Kenya\'s Maasai Mara between July and October. However, Kenya is a phenomenal year-round destination: January to March offers fantastic dry weather and newborn wildlife, while November to April is paradise for bird watchers.'
  },
  {
    question: 'What is included in SafariDoctor safari packages?',
    answer: 'All our safari packages include professional 4x4 Land Cruiser or minivan transport with pop-up roof, certified KPSGA driver-guide (Chris & team), full-board accommodation (breakfast, lunch, dinner), unlimited game drives, and chilled mineral water. Park entry fees can be prepaid or settled directly.'
  },
  {
    question: 'Can I pay in Kenyan Shillings (KES) or US Dollars (USD)?',
    answer: 'Yes! We accept payments in both KES and USD. We support Pesapal secure online card payments (Visa, Mastercard, American Express), direct bank wire transfers, and Kenya\'s M-Pesa mobile money.'
  },
  {
    question: 'What should I pack for my Kenya safari?',
    answer: 'Pack lightweight neutral-colored clothing (khaki, olive, tan), a warm fleece or windbreaker for cool early morning game drives, comfortable walking shoes, high-SPF sunscreen, sunglasses, hat, personal medications, camera with telephoto lens, and binoculars (we also provide binoculars on board).'
  }
];

export const companyContact = {
  name: 'SafariDoctor Tours & Safaris',
  tagline: 'CAPTURE NATURE AT ITS BEST',
  founder: 'Chris SafariDoctor ("Black Santa")',
  phone: '+254734392478',
  phoneDisplay: '+254 734 392 478',
  mobile1: '+254724843457',
  mobile1Display: '+254 724 843 457',
  mobile2: '+254715325418',
  mobile2Display: '+254 715 325 418',
  officeNumbers: [
    { number: '+254734392478', display: '+254 734 392 478', label: 'Office Line 1 (Main & WhatsApp)' },
    { number: '+254724843457', display: '+254 724 843 457', label: 'Office Line 2' },
    { number: '+254715325418', display: '+254 715 325 418', label: 'Office Line 3' }
  ],
  whatsapp: '+254734392478',
  whatsappDisplay: '+254 734 392 478',
  email: 'Chrissafaridoctortravells@gmail.com',
  officialEmail: 'info@safaridoctor.com',
  address: 'P.O. Box 26958-00100 G.P.O, Gateway mall, 4th floor North Airport Road Syokimau. Nairobi, Kenya',
  toskMemberNo: 'TOSK/MEMBER/NO: 0236',
  openingHours: 'Mon - Sun: 7:00 AM - 10:00 PM EAT (24/7 Field & Emergency Safari Assistance)'
};
