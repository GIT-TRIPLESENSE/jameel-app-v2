# Design System: Jameel Motors App

This `DESIGN.md` is the single source of truth for the Jameel Motors app UI. The project is a mobile-first product surface: the user must be able to choose a brand, explore models, book test drives, find dealers, receive support, and read content without perceiving system changes between sections.

## 1. Context And Principles

Jameel Motors is the master brand. Header, navbar, CTA patterns, grid, spacing, radius, typography, icons, and interactive states remain coherent across the whole app. When the user enters Zeekr or Geely, only brand-specific tokens change: accents, active states, metrics, service icons, focus rings, and small highlights.

The UI must feel premium, automotive, direct, and concrete. The visual language derives from the screens: clean surfaces, dark cards with highly readable vehicle images, consistent 16px rounded elements, 100px rounded white or black CTAs, and accents used sparingly. Avoid any generic landing-page effect: no decorative gradients, no neon glow, no nested cards, no abstract copy.

Visual register:

- Density: 6/10. Mobile product app with many actions, but always airy.
- Variation: 4/10. Predictable layout, with controlled differences between hub and brands.
- Motion: 4/10. Smooth and brief transitions, never cinematic.
- Tone: premium utility, automotive, clear, confident.

## 2. Brand Architecture

### Master Rule

Jameel Motors governs structure and behavior. Zeekr and Geely are chromatic modes applied on top of the same system.

Invariant elements across all sections:

- Mobile header: Jameel Motors logo centered. On the Jameel Home hero, do not render the brand selector chip. On brand PLP pages, use a left back arrow to the Jameel Home, the centered logo, and the brand selector chip on the right. The profile icon is intentionally hidden in the current iteration, with render code left commented for restoration.
- Bottom navbar: same shape, same position, same states, same dimensions.
- CTA: always white or black based on the background; never accent-colored primary CTAs.
- Model card: vehicle image, favorite heart, title/price, metrics tray, dual action.
- Radius, spacing, Urbanist typography, icon style, shadow, and elevation.

Elements that adapt to the brand:

- First word of the section headline.
- Chip/filter active state.
- Key numbers, metrics, and technical data.
- Icons in included services.
- Focus ring and selected state.
- Editorial badges or tags, when present.

## 3. Palette And Color Tokens

Use semantic variables. Do not hardcode colors outside these tokens without updating this document.

```css
:root {
  --font-primary:
    'Urbanist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  --cta-dark: #111111;
  --cta-light: #ffffff;
  --surface-white: #ffffff;
  --surface-soft: #f7f7f5;
  --border-soft: rgba(17, 17, 17, 0.12);
  --shadow-soft: 0 10px 28px rgba(17, 17, 17, 0.12);

  --glass-fill: rgba(255, 255, 255, 0.08);
  --glass-fill-strong: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.18);
  --glass-blur: 16px;
}

[data-brand='jameel'] {
  --brand-primary: #21424e;
  --brand-secondary: #202529;
  --brand-background: #f7f7f5;
  --brand-accent: #f7c303;
  --brand-accent-soft: #fff4cc;
  --brand-tag-text: #21424e;
}

[data-brand='zeekr'] {
  --brand-primary: #232323;
  --brand-secondary: #c5bfb8;
  --brand-background: #f1efec;
  --brand-accent: #e8432e;
}

[data-brand='geely'] {
  --brand-primary: #171717;
  --brand-secondary: #6c737c;
  --brand-background: #dedfe2;
  --brand-accent: #0090d6;
}
```

### Jameel Global

- Jameel Primary `#21424E`: hero overlay, circular icon backgrounds, dark teal surfaces.
- Jameel Secondary `#202529`: dark card base, text on light surfaces, deep UI controls.
- Jameel Accent `#F7C303`: icons, badges, small highlights, ecosystem stats.
- Jameel Accent Soft `#FFF4CC`: opaque, much lighter tint derived from Jameel Accent `#F7C303` for Membership tag backgrounds only.
- Jameel Tag Text `#21424E`: Jameel petrol text for Membership tags.
- Jameel Background `#F7F7F5`: app canvas derived from the screen; use for hub sections below the hero.
- Jameel Petrol Deep `#17323B` and Petrol Soft `#2D5663`: compact path-card surfaces when the Home needs multiple petrol shades without introducing non-brand colors.

### Zeekr

- Zeekr Primary `#232323`: model-card background, primary text on light background.
- Zeekr Secondary `#C5BFB8`: secondary text on dark cards, subtle dividers, or inactive dark-surface metadata.
- Zeekr Background `#F1EFEC`: page background.
- Zeekr Accent `#E8432E`: active filters, metric values, brand word in headline, icons.

### Geely

- Geely Primary `#171717`: model-card background, primary text.
- Geely Secondary `#6C737C`: non-text secondary UI, inactive icon strokes, large metadata only.
- Geely Background `#DEDFE2`: page background.
- Geely Accent `#0090D6`: active filters, metric values on dark cards, icons, selected states.

## 4. Contrast Rules

Minimum target: WCAG 2.2 AA.

- Normal text and images of text: at least `4.5:1`.
- Large text: at least `3:1`. Treat text as large only when it is at least `24px` regular or `18.66px` bold.
- Non-text UI components, interactive borders, informative icons, and focus indicators: at least `3:1` against the adjacent color.
- Ideal target for important text: `7:1` whenever possible.
- Color must never be the only signal: selected chips, errors, favorites, and active tabs must also have shape, weight, border, text, or icon signals.

### Allowed Pairs

| Context                   | Pair                   | Ratio | Rule                              |
| ------------------------- | ---------------------- | ----: | --------------------------------- |
| Jameel hero               | `#FFFFFF` on `#21424E` | 10.75 | OK for normal text and AAA        |
| Jameel dark               | `#FFFFFF` on `#202529` | 15.46 | OK for normal text and AAA        |
| Jameel accent             | `#F7C303` on `#21424E` |  6.53 | OK for normal text                |
| Jameel accent             | `#F7C303` on `#202529` |  9.40 | OK for normal text and AAA        |
| Jameel CTA accent inverse | `#111111` on `#F7C303` | 11.48 | OK, but do not use as primary CTA |
| Zeekr page                | `#232323` on `#F1EFEC` | 13.69 | OK for normal text and AAA        |
| Zeekr dark                | `#FFFFFF` on `#232323` | 15.72 | OK for normal text and AAA        |
| Zeekr secondary dark      | `#C5BFB8` on `#232323` |  8.62 | OK for normal text and AAA        |
| Zeekr accent on page      | `#E8432E` on `#F1EFEC` |  3.47 | Large text, icons, UI only        |
| Zeekr accent fill         | `#111111` on `#E8432E` |  4.74 | OK for normal text                |
| Geely page                | `#171717` on `#DEDFE2` | 13.45 | OK for normal text and AAA        |
| Geely dark                | `#FFFFFF` on `#171717` | 17.93 | OK for normal text and AAA        |
| Geely accent dark         | `#0090D6` on `#171717` |  5.09 | OK for normal text                |
| Geely accent fill         | `#111111` on `#0090D6` |  5.36 | OK for normal text                |
| Geely white on accent     | `#FFFFFF` on `#0090D6` |  3.52 | Large text, icons, UI only        |

### Forbidden Or Limited Pairs

- `#FFFFFF` on `#F7C303`: ratio 1.65, forbidden for text and informative icons.
- `#FFFFFF` on `#E8432E`: ratio 3.98, do not use for normal text; allowed only for large text or very short chips with non-critical labels. Prefer `#111111` on `#E8432E`.
- `#E8432E` on `#232323`: ratio 3.95, use for large metrics or UI, not body copy.
- `#6C737C` on `#DEDFE2`: ratio 3.60, use only for large text, non-critical labels, or non-text elements. Geely body text must use `#171717`.
- `#0090D6` on `#DEDFE2`: ratio 2.64, avoid for body text and small labels. Current PLP direction uses it only for the large, bold `Geely,` brand word in the headline.

## 5. Typography

Single font: Urbanist.

```css
body {
  font-family:
    'Urbanist',
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
}
```

Allowed weights:

- `400`: body, descriptions, long labels.
- `500`: nav labels, inactive chips, metadata.
- `600`: UI labels only when needed, such as chips or nav labels.
- `700`: all titles, CTAs, numbers, and headlines.
- `800`: available in the font family, but do not use it for app titles unless a future art direction explicitly changes the scale.

Current app scale:

- Hero title: `32px`, line-height `36px`, weight `700`.
- Section title: `20px`, line-height `24px`, weight `700`.
- Card title: `16px`, line-height `20px`, weight `700`.
- Card body: `14px`, line-height `18px`, weight `400`.
- Stat number: `34px`, line-height `34px`, weight `700`.
- Nav label: `11px`, line-height `12px`, weight `600`.

Rules:

- Do not use fonts other than Urbanist.
- Do not use negative tracking. Letter spacing is `0`, except official logo assets.
- Titles use `Urbanist_700Bold`. Body and descriptive text use `Urbanist_400Regular`.
- White text over imagery must sit on a dark scrim strong enough for AA contrast at 14px regular. If readability drops, darken the image overlay rather than increasing text weight.
- Maximum 65 characters per line for long text.
- Brand headlines have one accent word only: `Zeekr,` or `Geely,`. The rest remains primary.
- Avoid casual language mixing in the same screen. Choose one locale per screen: Italian or English.

## 6. Spacing

Spacing follows a `4px` base. Do not create intermediate values or arbitrary combinations: choose the nearest token.

| Token         | Value | Use                                   |
| ------------- | ----: | ------------------------------------- |
| `space-none`  |   0px | Reset                                 |
| `space-sm`    |   4px | Micro-gap, tight icon/text            |
| `space-md`    |   8px | Chip gap, icon padding, compact stack |
| `space-base`  |  16px | Card padding, standard gap            |
| `space-lg`    |  24px | Mobile page margins, compact sections |
| `space-xl`    |  32px | Hero content, section stack           |
| `space-xxl`   |  40px | Separation between main blocks        |
| `space-xxxl`  |  64px | Desktop/tablet layouts, airy sections |
| `space-xxxxl` |  96px | Large desktop canvases only           |

Application:

- Mobile page margin: `24px`; reduce to `16px` only where a full-width card needs better breathing room.
- Gap between header and content: `24px`.
- Gap between section title and content: `16px`.
- Gap between model cards: `8px` or `16px` depending on screen density.
- Model-card padding: `16px` for content, `0` for edge-to-edge image.
- Service-card padding: `16px`.
- CTA padding: `16px 24px`.
- Navbar distance from bottom edge: respect safe area + `8px`.
- Desktop/tablet: content max-width `1200px`, side padding `32px` or `64px`.

Use auto-layout/Flex/Grid with fixed tokens. Do not calculate spacing by eye.

## 7. Radius, Borders, And Shadows

Radius:

- Standard element radius: `16px` for cards, panels, filters, selectors, media, badges, icon frames, controls, and the active bottom-navbar tab. The bottom navbar container is fully rounded.
- Tag radius: `8px` for non-interactive editorial tags, such as Membership `Experience` and `Benefit`.
- CTA radius: `100px` for primary and secondary CTAs, including model-card CTAs, detail CTAs, hero CTAs, Membership CTA, and compact play/action CTAs.
- Square-edged full-width bands may use `0px` only when the section is intentionally edge-to-edge, such as attached journey banners.

Borders:

- Borders on light surfaces: `1px solid rgba(17, 17, 17, 0.10)`.
- Borders on dark surfaces: `1px solid rgba(255, 255, 255, 0.18)`.
- Vertical dividers in metrics: `1px solid rgba(255, 255, 255, 0.22)` on dark cards; `rgba(17, 17, 17, 0.12)` on light.

Shadows:

- Use soft shadows only on light cards and floating navbar.
- Dark model cards must not have heavy shadows; depth comes from image, overlay, and contrast.
- External colored glows and neon shadows are forbidden.

## 8. Header

The header keeps the centered Jameel Motors logo across all areas, while side controls vary by surface.

Mobile structure:

- Minimum header area height: `72px` + safe area.
- Side padding: `24px`.
- Brand selector on brand pages: white `48px` button, `100px` radius, current label, chevron down, dark text and icon. On brand PLP pages it sits on the right, and its compact contextual menu is right-aligned to the selector so the dropdown never exits the mobile frame or dominates the header.
- Brand PLP back control on the left: icon-only arrow button inside a `44px` touch target, dark icon on light brand pages, returning to the Jameel Home.
- Jameel Motors logo centered: use official asset, do not recreate with text if the asset exists.
- Account/profile icon is intentionally hidden in the current iteration. If re-enabled, use a `32px` icon inside a minimum `44px` touch target, stroke `2px`.

Colors:

- On dark hero or dark image: logo and icons `#FFFFFF`; the Jameel Home hero does not render the brand selector chip.
- On light brand pages: logo and icons `#111111`; the brand selector remains the same white 48px button with dark text and icon.
- Do not color the header with Zeekr or Geely accents. The brand changes in the content, not in the structure.

Behavior:

- Header remains stable when changing brand inside the same surface.
- The selector opens a compact contextual menu with `Jameel`, `Zeekr`, and `Geely`; the current page context must be visually selected with background treatment and a check icon. The selector is hidden on the Jameel Home header.
- On desktop/web, contextual menu rows must show a visible hover state before click, using a subtle surface change and border treatment without shifting row size.
- The brand selector menu must render above hero/headline content and remain fully clickable on both brand PLPs.
- Selecting `Jameel` returns to the umbrella Home. Selecting `Zeekr` or `Geely` preserves the current section when possible: Products switches directly between `/brands/zeekr/products` and `/brands/geely/products`, Network stays in Network, and the Jameel Home routes to the selected brand Products page.
- The brand menu must have items at least `44px` high, with selected state shown by check or weight, not color alone.

## 9. Bottom Navbar

The navbar is invariant across all areas.

Structure:

- Fixed bottom position, above safe area.
- Rounded container `76px`-`84px` high, full rounded radius.
- `#FFFFFF` background with soft shadow.
- Maximum 5 items.
- Items are spaced by `12px` inside the navbar.
- Each item has a `24px` line icon above and label below.
- Minimum touch target `44px`.

Active state:

- Active item inside dark `#111111` rounded 16px control or brand primary dark.
- The active control must be wide enough for the longest nav label, including `Our products`, without clipping.
- Active icon and label `#FFFFFF`.
- Inactive items use `#111111` on white navbar.
- Do not use accent as the fill for the main active tab; accents stay in brand content.

Labels:

- Jameel/global: `Home`, `Brands`, `Network`, `Support`, `Events` if needed.
- Zeekr: `Home`, `Our products`, `Our network`, `Support`, `Event`.
- Geely: `Home`, `Modelli`, `Rete`, `Supporto`, `Eventi`.
- The structure remains identical; only localization changes when the screen is localized.

## 10. CTAs

CTAs must be white or black based on the background.

### CTA On Dark Background

- Primary: `#FFFFFF` fill, `#111111` text.
- Secondary: transparent or dark fill, `rgba(255,255,255,0.70)` border, `#FFFFFF` text.
- Example model card: `Scopri` outline + `Book a test drive` / `Test drive` white fill.

### CTA On Light Background

- Primary: `#111111` or brand primary dark fill, `#FFFFFF` text.
- Secondary: `#FFFFFF` fill, `rgba(17,17,17,0.16)` border, `#111111` text.
- Jameel hero on dark image can use white primary as in the screen.

Dimensions:

- Height `48px` for all CTAs.
- CTA radius `100px`.
- Horizontal padding `24px`.
- Font `16px`-`17px`, weight `700`.
- Tertiary/text CTAs must include a trailing action icon, usually a chevron or arrow, in the same color as the label.
- Active/tap: translateY `1px`, no layout change.
- Disabled: preserve readability; do not drop below `4.5:1` for text. Prefer explicit text or an obvious non-clickable state.

Forbidden:

- Do not use `#F7C303`, `#E8432E`, or `#0090D6` as primary CTA.
- Do not use gradient CTAs.
- Do not place more than two CTAs in the same card.

## 11. Main Components

### Brand Selector

- Pill with current brand label and chevron.
- Height `36px`-`44px`.
- Neutral background, never accent.
- In the menu, active brand uses check + weight `700`.

### Filter Chips

- Rounded 16px shape, height `32px`.
- Inactive: light gray surface, primary text.
- Active: brand accent fill, text chosen for contrast.
- Zeekr: if active chip uses `#E8432E`, prefer `#111111` text for AA. If white text is kept for visual fidelity, it must be short, bold, and not below `18.66px`.
- Geely: active chip `#0090D6` with `#111111` text for AA; white only for large text or icons.
- Active state must be distinguishable by shape/weight too, not color alone.

### Model Card

Mandatory pattern for Zeekr and Geely:

- Full-width card on mobile, radius `16px`.
- Dark background: Zeekr `#232323`, Geely `#171717`.
- Vehicle image at the top, edge-to-edge, readable, not too dark.
- Heart/favorite in top right, `44px` touch target, white stroke.
- Title on the left, price on the right.
- Metrics tray with 3 columns, slightly lighter dark or glass background, soft border.
- Internal spacing uses `16px` between title/price, metrics tray, and CTA row; metric values and labels use an `8px` internal gap.
- Metrics tray minimum height is `72px` so values do not feel compressed.
- Metric numbers in brand accent only on dark card: Zeekr `#E8432E`, Geely `#0090D6`.
- Final actions: secondary outline on the left, primary white on the right.

Do not compress the metrics tray until labels or values wrap. If space is reduced, shorten copy and keep values readable.

### Glass Elements Inside Cards

Glass elements are allowed only inside dark cards, not as the whole card style. Use them for metrics tray, internal pills, and small data panels. Do not apply glass to service cards, navbar, primary CTAs, or light ecosystem cards.

Glass specs:

- Background: `rgba(255, 255, 255, 0.06)` up to `rgba(255, 255, 255, 0.10)`.
- Blur: `backdrop-filter: blur(16px)`.
- Border: `1px solid rgba(255, 255, 255, 0.18)`.
- Inner shadow: very light, for example `inset 0 1px 0 rgba(255,255,255,0.10)`.
- External shadow: forbidden if it creates a glow effect. No colored halo.
- Radius: `16px`.
- Text: always checked for AA. Use `#FFFFFF` for primary labels and brand accent only for large values or metrics that pass contrast.
- Fallback: if `backdrop-filter` is unsupported, use static dark fill `rgba(255,255,255,0.08)` without losing contrast.
- Performance: do not animate blur or background-filter; animate only `opacity` and `transform`.

### Service Cards

- Dark background on brand pages.
- Brand-accent icon.
- Title `16px`-`18px`, weight `700`.
- Description `12px`-`14px`, weight `500`.
- Chevron on the right, do not use "Open" text.
- Minimum card height `72px`.
- If two cards side by side do not remain readable on narrow mobile, switch to one column.

### Dealer And Workshop Locator

- Lives in the brand Network tab and uses the same shell as brand Product pages: stable Jameel header, brand selector, brand background, and bottom-nav reserved space.
- Search is manual-first for MVP. If device location is added later, permission denial must still leave manual search available.
- Filters use the standard chip pattern: `All`, `Dealers`, `Workshops`; active state uses brand accent fill with contrast-safe text and selected state that is not color-only.
- The map is currently a selectable mock panel, not a live map SDK. Keep it dark on brand pages, with brand-accent active pins and separate dealer/workshop iconography.
- Location cards use dark brand surfaces with accent icons, short metadata, and a chevron. Detail content stays inline below the map, not in a modal.
- Detail CTAs follow the global CTA rule: white primary on dark, outline secondary on dark, maximum two visible actions.

### Ecosystem Stat Cards

- Used in the Jameel hub.
- Light cards with radius `16px`.
- Jameel accent icon `#F7C303`.
- Large primary/secondary dark number.
- Short label.
- Chevron on the right.
- Three cards can sit in one row only if every card stays readable; otherwise use horizontal scroll with snap or 2+1.

### Story Cards

- Real image or credible render as background.
- Dark gradient overlay for readability.
- Jameel accent badge with dark text.
- White title, white body if contrast remains at least `4.5:1`.
- Radius `16px`.
- Avoid text over image areas that are too bright without scrim.

### Icons

- Linear style, stroke `2px`.
- Standard size `24px`; hero service icon `36px`-`44px`.
- Informative icons must respect `3:1` contrast.
- Do not mix different icon sets in the same screen.

## 12. Sections And Layout

### Jameel Hub

First screen:

- Hero with the local night skyline image, an evident left-to-right Jameel petrol gradient scrim, immersive extended height, low-positioned copy, and one primary white CTA. Do not replace the current hero image when refining the overlay.
- Jameel Motors logo visible and centered.
- Large headline centered on the EV journey, not a corporate claim.
- Subtitle max 3 lines about guidance before, during, and after the choice.
- One primary CTA in the hero; it acts as an anchor to the vehicle/brand choice section, not as a quiz entry.
- Hero bottom with `16px` radius.

Below hero:

- Current visible Concept 2 Guide-Oriented architecture: primary hero CTA, vehicle choice, EV journey path banners (`Before`, `During`, `After`) under the title `An ecosystem that always guides you`, and people behind the ecosystem.
- Home sections use a fixed `32px` vertical gap between each top-level section.
- Sections must alternate visually through different component treatments: long photographic hero, two compact brand cards, full-width attached journey banners, and a neutral-background full-width people carousel for the network.
- Do not create movement by disaligning cards. Card grids and stacked cards should stay aligned unless a product pattern explicitly requires otherwise.
- Geely and Zeekr must appear immediately after the hero under the title `Our solution`, with no `Choose your first step` eyebrow. Use two side-by-side brand cards without visible internal CTAs. These cards use a neutral dark surface, the official brand logo at the top in a compact `24px`-high frame, a brand headline at `18px`, `12px` between logo and headline, and a large isolated vehicle image positioned absolutely at bottom-left so the vehicle front remains visible. Do not use lifestyle/photo backgrounds for these brand-choice cards. The compact full-width guided quiz banner is intentionally hidden in the current Home iteration; keep its implementation commented so it can return without rebuilding the component.
- In the journey path section, keep only the path banners beneath the title. Do not add extra explanatory copy or duplicate CTAs inside that section. Path banners are full-viewport width, square-edged, attached to each other, and use one unified Jameel Primary petrol fill. Separate banners with simple geometric angled shapes, not spacing, and keep the final banner bottom edge angled into the following page background. Each banner has a short label, one-line title, two-line subtitle, and the representative icon on the right.
- Do not render the `Jameel as guide` media/storytelling section in the current Home iteration.
- The knowledge-pill video story section is intentionally hidden in the current Home iteration. When re-enabled, it sits directly below the EV journey ecosystem banners on the page background, without a petrol section fill. It has no yellow eyebrow; its title is `EV expert hub` and must stay contrast-safe on the light page background. Cards render as a horizontal stacked carousel: one central card is active, lateral cards remain partially visible behind it with parallax-style scale and slight rotation, and horizontal swipe changes the active card. Do not animate card-level opacity in this carousel; keep every rendered card fully opaque and darken lateral cards only through the internal image scrim.
- Membership is intentionally hidden in the current Home iteration. When re-enabled, it uses the supplied community image as a dark editorial background with no decorative icon and no `MEMBERSHIP` eyebrow. The card height is hug-content, not fixed: solid pale-yellow 32px tags (`Experience`, `Benefit`) sit above the strong white title with `8px` radius, Jameel petrol `#21424E` text, and an opaque much lighter yellow background derived from the Jameel accent. These are editorial tags, not filter chips, and must not use transparent fills. Keep all membership copy in English until localization is explicitly planned.
- The network section must show people and roles, not coverage numbers. It sits after the visible journey ecosystem section on the neutral page background, uses the global 20pt section heading, a black text `Our network` CTA with a trailing chevron icon, and compact horizontal image cards for Consultants, Dealers, and Customer care.

### Zeekr Brand Section

- Background `#F1EFEC`.
- Stable Jameel Motors header.
- Headline: `Zeekr,` in `#E8432E`, rest `#232323`.
- Do not render a separate `Models` section label between headline and chips.
- Top chips: `Vehicles`, `Services`; `Vehicles` is selected by default and sits `16px` below the headline. Active Zeekr chip uses the Zeekr accent with white text.
- Zeekr dark model card `#232323`, metrics in red accent.
- Metrics tray and small data panels can use controlled glass.
- Dark service card with red iconography.
- CTAs always white/black.

### Geely Brand Section

- Background `#DEDFE2`.
- Stable Jameel Motors header.
- Headline: `Geely,` in brand accent `#0090D6`; rest of the title remains primary text.
- Do not render a separate `Models` section label between headline and chips.
- Top chips: `Vehicles`, `Services`; `Vehicles` is selected by default and sits `16px` below the headline. Active Geely chip uses Geely accent with dark text for AA.
- Geely dark model card `#171717`, metrics in blue accent.
- Metrics tray and small data panels can use controlled glass.
- Dark service card with blue iconography.
- CTAs always white/black.

## 13. Images And Media

- Cars must be clear, large, and recognizable. Do not use decorative or generic stock images.
- Avoid crops that cut off the vehicle front, wheels, or profile.
- The Jameel hero background must communicate urban mobility and infrastructure, not just skyline.
- Every image with text overlaid requires a dedicated overlay: controlled gradient or scrim, not heavy blur. The Jameel Home hero specifically uses a strong petrol gradient from left to right over the existing image.
- Prefer real images or premium automotive renders, with color temperature coherent with the brand.
- Do not use broken images, placeholders, or assets with watermarks.

## 14. Accessibility

### Contrast

- Every new color pair must be tested before entering UI.
- Normal text must respect `4.5:1`.
- Large text and non-text UI must respect `3:1`.
- Clickable icons, input borders, selected states, and focus rings must be at least `3:1` against the background.
- On images, measure contrast at the weakest point, not on the average image.
- If a brand accent does not pass on a light background, do not force it as text: use it on a dark card, as fill with dark text, as a thick border, or as a non-informative decorative element.
- In glass elements, verify contrast on the real rendered result, not only on the `rgba` formula, because image and blur change perceived luminance.

### Focus And Keyboard

- Every interactive element must have a visible focus state.
- Recommended focus: external `2px` ring, `2px` offset, brand accent + second white/dark outline when the accent alone does not have enough contrast.
- Focus must not be covered by navbar, sticky header, or bottom sheet.
- Focus order: header, main content, card/actions, navbar.
- Do not remove outline without a visible replacement.

### Touch Target

- Minimum app target: `44px x 44px`.
- Heart icons, account, selector, navbar item, and chevron must have extended clickable area even if the icon is smaller.
- Minimum distance between nearby targets: `8px`.

### Text And Readability

- Minimum body `14px` when text must be read; nav label can go down to `10px`-`12px` only with icon and clear context.
- Do not rely on color alone for information: for example `Range 655km` must have label + value, not only a red/blue value.
- Avoid lines that are too long; max `65ch`.
- Support Dynamic Type / font scaling at least up to 200% without content loss or overlap.

### States And Feedback

- Errors: explicit text + icon + color; not red alone.
- Loading: skeleton that replicates card dimensions, not generic spinner.
- Empty state: explain what is missing and offer a useful action.
- Disabled state: keep text readable, avoid opacity that is too low.

### Motion

- Respect `prefers-reduced-motion`.
- Micro-interaction duration: `120ms`-`220ms`.
- Page or card transitions: `220ms`-`320ms`.
- Animate only `transform` and `opacity`.
- No aggressive autoplay, heavy parallax, or perpetual loops that distract.

## 15. Responsive

Mobile is the base of the system.

- Below `768px`: primarily single-column layout, with controlled exceptions for brand tiles/stat tiles when readable.
- No unintended horizontal overflow.
- Model cards remain full-width on mobile.
- Chips can scroll horizontally with snap and coherent side padding, but must not cut off the first or last item.
- Header and navbar must respect iOS safe area.
- On tablet/desktop, content max-width `1200px`; model cards can become a 2-column grid only if metrics remain readable.

## 16. Copy Rules

- CTAs short and operative: `Start quiz`, `Book a test drive`, `Test drive`, `Scopri`, `Find a dealer`, `Contact us`.
- Avoid generic claims such as "next-gen", "seamless", "unleash", "elevate".
- Use real numbers or clearly declared placeholders; do not use fake perfect metrics.
- Maintain language consistency inside each screen.
- Navigation labels short, scannable, not descriptive.

## 17. Forbidden Anti-Patterns

- No fonts other than Urbanist.
- No `#000000`; use `#111111` or brand primary.
- No accent-colored CTAs.
- No decorative gradients or neon glow.
- No cards inside cards.
- No glass on the whole card, navbar, or primary CTAs.
- No incoherent overlapping elements.
- No text wrapping inside buttons, chips, or navbar.
- No vehicle images that are small, blurry, or badly cropped.
- No structure changes between brand sections.
- No accents used as body text when they do not pass contrast.
- No active states recognizable only by color.
- No emojis in UI.

## 18. Pre-Release Checklist

- Header identical across Jameel, Zeekr, and Geely.
- Navbar identical across Jameel, Zeekr, and Geely.
- CTAs only white or black.
- Urbanist loaded and applied everywhere.
- Brand palette applied through tokens, not scattered values.
- Spacing only on the documented 4px scale.
- Glass elements limited to metrics tray, internal pills, and small data panels inside dark cards.
- Glass verified in fallback without `backdrop-filter`.
- Every text passes `4.5:1`, or `3:1` only if it is large text.
- Every informative icon and control passes `3:1`.
- Visible focus, not covered.
- Touch target at least `44px`.
- No mobile overflow.
- Images readable and without watermark.
- Screen localized in a single language.

## 19. References

- Impeccable Design Context: https://impeccable.style/docs/context/
- Skyscanner Backpack spacing: https://www.skyscanner.design/latest/foundations/spacing/overview-jCiTHnBD
- WCAG 2.2 contrast: https://www.w3.org/TR/WCAG22/
