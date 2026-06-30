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
} as const;
