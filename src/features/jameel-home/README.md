# Jameel Home Feature

Owns the Jameel Motors umbrella home page, the cross-brand entry point for the MVP.
Keep this module mock-first and product-light until the brand, network, membership, and quiz flows are implemented.

Component convention:

- `components/JameelHomeScreen.tsx` is the page-level composer only.
- `components/organisms/` contains page sections such as hero, brand entries, stories, and closing decision.
- `components/molecules/` contains reusable content blocks such as cards and list items.
- `components/atoms/` contains small primitives such as buttons and section wrappers.
- Avoid defining render components inline inside the screen file. Each component gets its own file.
