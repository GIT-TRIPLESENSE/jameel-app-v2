# Jameel Home Feature

Owns the Jameel Motors umbrella home page, the cross-brand entry point for the MVP.
The current direction is Concept 2 Guide-Oriented: extended image hero with one primary CTA, immediate two-card Geely/Zeekr choice, attached full-width EV journey path banners under `An ecosystem that always guides you`, and then a compact people-led network carousel for Consultants, Dealers, and Customer care. The full-width quiz banner, EV expert hub/video stories, Membership continuity, and `Jameel as guide` media/storytelling section are intentionally hidden in the current Home iteration, with their render code left commented for quick restoration. Visual movement comes from distinct component treatments, not disaligned cards.
Keep this module mock-first until the brand, network, membership, video, and quiz flows are implemented or re-enabled.

Component convention:

- `components/JameelHomeScreen.tsx` is the page-level composer only.
- `components/organisms/` contains page sections such as hero, brand entries, stories, and closing decision.
- `components/molecules/` contains reusable content blocks such as cards and list items.
- `components/atoms/` contains small primitives such as buttons and section wrappers.
- Avoid defining render components inline inside the screen file. Each component gets its own file.
