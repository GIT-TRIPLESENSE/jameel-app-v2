export const ar = {
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
    modelsTitle: 'Models',
    filters: {
      all: 'All',
      suv: 'SUV',
      shootingBrake: 'Shooting brake',
      electric: 'Electric',
      ex5: 'EX5',
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
  jameelHome: {
    header: {
      logoLabel: 'Jameel Motors logo',
    },
    brands: {
      routeHint: 'Open the brand product listing.',
    },
  },
} as const;
