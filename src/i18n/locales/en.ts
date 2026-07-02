export const en = {
  scaffold: {
    placeholderTitle: 'TODO: product.md',
    placeholderBody: 'TODO: design.md',
  },
  navigation: {
    bottom: {
      home: {
        label: 'Home',
        accessibilityLabel: 'Open brand home',
      },
      products: {
        label: 'Our products',
        accessibilityLabel: 'Open products',
      },
      network: {
        label: 'Our network',
        accessibilityLabel: 'Open network',
      },
      support: {
        label: 'Support',
        accessibilityLabel: 'Open support',
      },
      event: {
        label: 'Event',
        accessibilityLabel: 'Open event',
      },
    },
    placeholder: {
      homeTitle: 'Brand home',
      productsTitle: 'Our products',
      networkTitle: 'Our network',
      supportTitle: 'Support',
      eventTitle: 'Event',
      body: 'Placeholder route for the bottom navigation prototype. Product content will land in a later phase.',
    },
  },
  brandSwitcher: {
    selectorHint: 'Choose Jameel, Zeekr, or Geely',
    menuLabel: 'Brand ecosystem selector',
    optionLabel: 'Switch to {{brand}}',
    options: {
      jameel: 'Jameel',
      zeekr: 'Zeekr',
      geely: 'Geely',
    },
  },
  brandProducts: {
    header: {
      selectorLabel: 'Open brand selector',
      profileLabel: 'Open guest menu',
    },
    brands: {
      zeekr: {
        selector: 'Zeekr',
        headlineBrand: 'Zeekr,',
        headlineRest: 'electric by design',
      },
      geely: {
        selector: 'Geely',
        headlineBrand: 'Geely,',
        headlineRest: 'electric by design',
      },
    },
    filters: {
      vehicles: 'Vehicles',
      services: 'Services',
    },
    price: {
      from: 'from',
    },
    metrics: {
      range: 'Range',
      power: 'Power',
      acceleration: '0-100',
      charge: 'Charge',
      comfort: 'Comfort',
      audio: 'Audio',
    },
    vehicleCard: {
      favoriteLabel: 'Save vehicle',
      discoverCta: 'Discover',
      testDriveCta: 'Book a test drive',
    },
    vehicles: {
      zeekr7gt: {
        titlePrefix: 'ZEEKR',
        titleAccent: '7GT',
        summary: 'Premium electric shooting brake with long-range performance.',
        imageAlt: 'Zeekr 7GT vehicle placeholder',
      },
      zeekr7x: {
        titlePrefix: 'ZEEKR',
        titleAccent: '7X',
        summary: 'Electric SUV focused on power, comfort, and confident travel.',
        imageAlt: 'Zeekr 7X vehicle placeholder',
      },
      geelyEx5Pro: {
        titlePrefix: 'GEELY',
        titleAccent: 'EX5',
        titleSuffix: 'Pro',
        summary: 'Compact electric SUV for daily confidence.',
        imageAlt: 'Geely EX5 Pro vehicle placeholder',
      },
      geelyEx5Launch: {
        titlePrefix: 'GEELY',
        titleAccent: 'EX5',
        titleSuffix: 'Launch Edition',
        summary: 'Premium comfort and technology package.',
        imageAlt: 'Geely EX5 Launch Edition vehicle placeholder',
      },
    },
    loading: {
      title: 'Loading models',
      body: 'Vehicle information is being prepared.',
    },
    error: {
      title: 'Models unavailable',
      body: 'Try again in a moment.',
    },
    invalidBrand: {
      title: 'Brand unavailable',
    },
  },
  dealerNetwork: {
    header: {
      selectorLabel: 'Open brand selector',
      profileLabel: 'Open guest menu',
    },
    brands: {
      zeekr: {
        selector: 'Zeekr',
        headlineBrand: 'Zeekr,',
        headlineRest: 'network near you',
      },
      geely: {
        selector: 'Geely',
        headlineBrand: 'Geely,',
        headlineRest: 'network near you',
      },
    },
    hero: {
      body: 'Certified locations for test drives, service, and first contact inside the Jameel network.',
    },
    searchTitle: 'Find a dealer',
    search: {
      placeholder: 'Search city, dealer, or workshop',
      accessibilityLabel: 'Search the dealer network',
    },
    filters: {
      all: 'All',
      dealer: 'Dealers',
      workshop: 'Workshops',
    },
    types: {
      dealer: 'Dealer',
      workshop: 'Workshop',
    },
    map: {
      title: 'Network map',
      summary:
        '{{dealerCount}} dealers, {{workshopCount}} workshops. Closest point: {{closestCity}}.',
      accessibilityLabel: 'Map of dealers and workshops',
      pinLabel: '{{name}} in {{city}}',
    },
    distanceLabel: '{{distance}} km from {{city}}',
    locationCard: {
      accessibilityLabel: 'Open {{name}} in {{city}}',
    },
    ctas: {
      contact: 'Contact',
      testDrive: 'Test drive',
      service: 'Service support',
    },
    hours: {
      weekdays: 'Mon-Fri 09:00-19:00',
      service: 'Service desk Mon-Fri 08:30-18:00',
      saturday: 'Mon-Sat 09:00-18:00',
    },
    certifications: {
      zeekrCertified: 'Zeekr certified dealer',
      geelyCertified: 'Geely certified dealer',
      authorizedWorkshop: 'Authorized workshop',
    },
    capabilities: {
      testDrive: 'Test drive',
      evExpert: 'EV expert',
      finance: 'Finance',
      service: 'Service',
      batteryCheck: 'Battery check',
      roadside: 'Roadside',
      delivery: 'Delivery',
      warranty: 'Warranty',
    },
    locations: {
      zeekrMilano: {
        name: 'Jameel Motors Milano Zeekr',
        city: 'Milano',
        address: 'Via Tortona 33, Milano',
      },
      zeekrRomaService: {
        name: 'Jameel Service Roma',
        city: 'Roma',
        address: 'Via Appia Nuova 124, Roma',
      },
      zeekrBologna: {
        name: 'Jameel Motors Bologna Zeekr',
        city: 'Bologna',
        address: 'Via Stalingrado 84, Bologna',
      },
      geelyMilano: {
        name: 'Jameel Motors Milano Geely',
        city: 'Milano',
        address: 'Via Rubattino 91, Milano',
      },
      geelyTorinoService: {
        name: 'Jameel Service Torino',
        city: 'Torino',
        address: 'Corso Giulio Cesare 168, Torino',
      },
      geelyNapoli: {
        name: 'Jameel Motors Napoli Geely',
        city: 'Napoli',
        address: 'Via Argine 112, Napoli',
      },
    },
    loading: {
      title: 'Loading network',
      body: 'Certified locations are being prepared.',
    },
    error: {
      title: 'Network unavailable',
      body: 'Try again in a moment, or search manually later.',
    },
    empty: {
      title: 'No locations found',
      body: 'Try another city, dealer name, or network type.',
    },
    invalidBrand: {
      title: 'Network unavailable',
    },
  },
  jameelHome: {
    header: {
      brandSelector: 'jameel',
      logoLabel: 'Jameel Motors logo',
      logoPrimary: 'JAMEEL',
      logoSecondary: 'MOTORS',
      profileLabel: 'Open guest menu',
      selectorLabel: 'Open brand selector',
    },
    hero: {
      title: 'Electric mobility\nis a journey.',
      body: 'Jameel helps you move from doubts to clear choices, before, during, and after the decision.',
      cta: 'Choose your brand',
      scrollHint: 'Start with the paths below',
      imageAlt: 'Night skyline with illuminated city highways',
    },
    solutions: {
      title: 'Our solution',
      geely: {
        meta: 'Concrete everyday mobility',
        title: 'Geely for a practical electrified routine.',
        body: 'A direct path for daily use, versatility, and simple confidence inside the Jameel experience.',
        cta: 'Discover Geely',
        imageAlt: 'Geely electric vehicle on the road',
      },
      zeekr: {
        meta: 'Premium full electric',
        title: 'Zeekr for a more distinctive EV experience.',
        body: 'Technology, comfort, and a premium electric direction for drivers ready to go further.',
        cta: 'Discover Zeekr',
        imageAlt: 'Zeekr electric vehicle on a dark road',
      },
      guided: {
        meta: 'Quick quiz',
        title: 'Not sure where to start?',
        body: "We'll help you choose with this quick quiz.",
        cta: 'Start the quiz',
        imageAlt: 'Electric vehicle charging as a guided mobility step',
      },
    },
    journey: {
      eyebrow: 'The EV path',
      title: 'An ecosystem that always guides you',
      before: {
        label: 'Before',
        title: 'Understand the essentials.',
        body: 'Charging, real range, habits, and incentives become clear before you choose.',
      },
      during: {
        label: 'During',
        title: 'Choose with confidence.',
        body: 'Compare brands, book a test drive, and get guidance from Jameel experts.',
      },
      after: {
        label: 'After',
        title: 'Stay supported.',
        body: 'Dealers, workshops, services, and benefits keep the journey connected.',
      },
    },
    guide: {
      eyebrow: 'Jameel as guide',
      title: 'One ecosystem around the EV journey.',
      body: 'Jameel connects brand discovery, vehicles, people, network, services, assistance, and future experiences into one clearer path.',
      imageAlt: 'People reviewing a mobility journey together',
      highlights: {
        brands: 'Brands',
        network: 'Network',
        services: 'Services',
        membership: 'Membership',
      },
    },
    people: {
      eyebrow: 'People behind the network',
      title: 'People by your side',
      cta: 'Our network',
      consultants: {
        title: 'Consultants',
        body: 'People who help turn needs, habits, and doubts into a clearer first step.',
        imageAlt: 'Consultant helping a customer',
      },
      dealers: {
        title: 'Dealers',
        body: 'Local touchpoints for welcome, test drives, brand discovery, and practical next steps.',
        imageAlt: 'Dealer representative in a showroom',
      },
      customerCare: {
        title: 'Customer care',
        body: 'A support team ready to answer questions and keep every next step clear.',
        imageAlt: 'Customer care team supporting a customer',
      },
    },
    quickActions: {
      testDrive: {
        title: 'Book a test drive',
        accessibilityLabel: 'Book a test drive',
      },
      dealer: {
        title: 'Find a dealer',
        accessibilityLabel: 'Find a dealer',
      },
      contact: {
        title: 'Contact us',
        accessibilityLabel: 'Contact us',
      },
    },
    brands: {
      title: 'Explore our brands',
      routeHint: 'Open the brand product listing.',
      zeekr: {
        logo: 'ZEEKR',
        titleAccent: 'Premium',
        titleRest: 'electric',
        cta: 'Discover Zeekr',
        imageAlt: 'Zeekr electric vehicle placeholder',
      },
      geely: {
        logo: 'GEELY',
        titleAccent: 'Everyday',
        titleRest: 'confidence',
        cta: 'Discover Geely',
        imageAlt: 'Geely electric vehicle placeholder',
      },
    },
    scenarios: {
      title: 'Choose by the way you move',
      city: {
        label: 'City routine',
        title: 'Daily moves, simple charging, clear next steps.',
        cta: 'Start a quiz',
      },
      family: {
        label: 'Family and weekend',
        title: 'Space, flexibility, and a brand that fits everyday plans.',
        cta: 'Discover Geely',
      },
      premium: {
        label: 'Premium EV',
        title: 'Technology, comfort, and a more distinctive electric drive.',
        cta: 'Discover Zeekr',
      },
    },
    ecosystem: {
      title: 'Explore Jameel ecosystem',
      dealers: {
        value: '42',
        label: 'Dealers',
      },
      charging: {
        value: '85K+',
        label: 'Charging points',
      },
      services: {
        value: '24/7',
        label: 'Services',
      },
    },
    expertHub: {
      title: 'EV Expert Hub',
      items: {
        firstEv: {
          question: 'First electric vehicle?',
          answer: 'Start from habits, charging access, and the support you want around the car.',
          cta: 'Start a quiz',
        },
        support: {
          question: 'How much does assistance matter?',
          answer: 'In electric mobility, the network behind the vehicle is part of the decision.',
          cta: 'Learn with Jameel',
        },
        brandChoice: {
          question: 'Geely or Zeekr?',
          answer:
            'Choose Geely for versatile electrified mobility, Zeekr for a premium EV experience.',
          cta: 'Compare paths',
        },
      },
    },
    stories: {
      title: 'Stories that move.',
      charging: {
        badge: 'EV premium',
        title: 'A clearer way to enter electric mobility.',
        body: 'Jameel connects brands, services, and network signals before the first contact.',
        imageAlt: 'Electric vehicle charging placeholder',
      },
      service: {
        badge: 'Network',
        title: 'Support is part of the choice.',
        imageAlt: 'Vehicle assistance and service placeholder',
      },
      road: {
        badge: 'People',
        title: 'The route starts with how you actually move.',
        imageAlt: 'Electric vehicle road trip placeholder',
      },
    },
    membership: {
      title: 'The benefits do not end here.',
      body: 'Entering the Jameel ecosystem means entering a community. Experiences, events, and benefits continue inside the app.',
      cta: 'Discover experiences',
      imageAlt: 'People smiling outdoors during a community experience',
      signals: {
        experiences: 'Experience',
        benefits: 'Benefit',
      },
    },
    faq: {
      titleAccent: 'EV expert',
      titleRest: ' hub',
      items: {
        start: {
          label: 'First EV',
          title: 'Range anxiety?',
          body: 'See how daily habits, charging access, and real routes change the answer.',
          cta: 'Watch story',
          duration: '1 min',
          imageAlt: 'Electric vehicle charging detail',
        },
        vehicle: {
          label: 'Choose well',
          title: 'Which car fits me?',
          body: 'Turn family, city, weekend, and tech needs into a clearer vehicle shortlist.',
          cta: 'Watch story',
          duration: '2 min',
          imageAlt: 'Electric vehicle on an open road',
        },
        network: {
          label: 'Support',
          title: 'What happens after?',
          body: 'Understand why dealers, workshops, service, and assistance matter before you choose.',
          cta: 'Watch story',
          duration: '90 sec',
          imageAlt: 'Vehicle assistance and workshop scene',
        },
      },
    },
    closing: {
      title: 'Where do you want to start?',
      body: 'Explore Geely, discover Zeekr, or let Jameel guide your first step into electric mobility.',
      geelyCta: 'Discover Geely',
      zeekrCta: 'Discover Zeekr',
      quizCta: 'Start a quiz',
    },
    prototypeActionHint: 'Prototype action, flow to be connected later.',
  },
} as const;
