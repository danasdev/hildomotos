---
name: Hildo Motos
description: Night showroom for a São Luís motorcycle dealer; every bike lit red inside a black chamfered frame, one tap from WhatsApp.
colors:
  ink: "#0b0b0c"
  chassis: "#141416"
  chassis-raised: "#1c1c1f"
  hairline: "rgba(242, 239, 234, 0.12)"
  hairline-strong: "rgba(242, 239, 234, 0.28)"
  bone: "#f2efea"
  bone-dim: "rgba(242, 239, 234, 0.74)"
  bone-mute: "rgba(242, 239, 234, 0.56)"
  studio-red: "#c8321f"
  lit-red: "#e5482f"
  oxide-red: "#6e120c"
  on-red-dim: "#fff3ef"
  signal-error: "#ffb4a6"
typography:
  wordmark-giant:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 10.4vw, 10rem)"
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 125"
  display-hero:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.8rem, 5.6vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 125"
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 5.5rem)"
    fontWeight: 850
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 2.4vw, 2rem)"
    fontWeight: 650
    lineHeight: 1.2
    fontVariation: "'wdth' 108"
  title-lg:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.9rem"
    fontWeight: 850
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 125"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 800
    lineHeight: 1.2
    fontVariation: "'wdth' 112"
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'wdth' 100"
  small:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 750
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 112"
  field-label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 650
    letterSpacing: "0.03em"
  nav:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    letterSpacing: "0.06em"
  caption:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 400
    letterSpacing: "0.06em"
  spec-label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 400
    letterSpacing: "0.1em"
  badge:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.66rem"
    fontWeight: 800
    letterSpacing: "0.12em"
    fontVariation: "'wdth' 112"
  numeric:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontWeight: 650
    fontFeature: "'tnum' 1, 'lnum' 1"
rounded:
  none: "0px"
  frame: "clamp(12px, 1.4vw, 20px)"
spacing:
  frame: "clamp(6px, 0.9vw, 12px)"
  gutter: "clamp(16px, 4vw, 56px)"
  grid-gap: "clamp(12px, 1.6vw, 20px)"
  field-gap: "18px"
  split-gap: "clamp(32px, 6vw, 96px)"
  section: "clamp(80px, 11vw, 150px)"
  section-tight: "clamp(64px, 8vw, 110px)"
components:
  button-solid:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "52px"
  button-solid-hover:
    backgroundColor: "#ffffff"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "52px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    padding: "0 4px"
    height: "52px"
  icon-button:
    backgroundColor: "{colors.chassis-raised}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    size: "44px"
  badge:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    typography: "{typography.badge}"
    rounded: "{rounded.none}"
    padding: "5px 9px 4px"
  badge-new:
    backgroundColor: "{colors.studio-red}"
    textColor: "{colors.bone}"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "52px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "8px 14px"
    height: "52px"
  chip-selected:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
  segmented:
    backgroundColor: "transparent"
    textColor: "{colors.bone-dim}"
    typography: "{typography.label}"
    padding: "0 18px"
    height: "44px"
  segmented-selected:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
  bike-card:
    backgroundColor: "{colors.chassis}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "18px 20px 20px"
  bike-card-hover:
    backgroundColor: "{colors.chassis-raised}"
  gallery-nav:
    backgroundColor: "rgba(11, 11, 12, 0.72)"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    size: "44px"
  gallery-nav-hover:
    backgroundColor: "{colors.ink}"
  gallery-thumb:
    rounded: "{rounded.none}"
    width: "76px"
---

# Design System: Hildo Motos

## Overview

**Creative North Star: "The Night Showroom"**

Every bike stands alone under red studio light, seen through a black chassis frame. The page is a dark room (ink and chassis blacks) with two kinds of light in it: the red of the studio wall, which lives in photography, in one drenched financing band and in the neon of the shield, and the bone white of the controls a buyer can press. Everything else is quiet: hairline rules, dimmed bone text, flat black surfaces.

The frame is the material. Large stage containers are inset from the viewport by a thin black margin and softly rounded, while everything inside them is cut, not curved: buttons, inputs, chips and badges are square-cornered, and cards, panels and the hero's black tabs carry a single 45° chamfer like the corner of a tank cover. Type is one family, Archivo, pushed to its widest and heaviest for uppercase display and relaxed to normal width for reading.

The visit opens like the shop does: a steel roll-up door is down, the shield on it draws itself and flickers on like neon, then the door lifts and the lit showroom is behind it. After that, motion is the same material as the hero's reeded glass: things are wiped, unclipped or risen into view with an exponential ease-out, once, and only when script has opted in. Density is showroom, not catalogue: one display headline per section, generous section padding, and cards that give the photograph most of their height.

**Key Characteristics:**
- Black chassis world; red is light, not paint.
- Bone white is reserved for actions and selection.
- Rounded outer frames, square controls, one chamfered corner on content blocks.
- Single variable family (Archivo) using width as the hierarchy axis.
- Reeded-glass refraction over the hero photograph as the signature effect.
- A roll-up shutter intro, once per session, that hands off into the hero's entrance.
- Every product image carries an "Imagem ilustrativa" provenance tag.

## Colors

A near-black chassis palette lit by a single studio red, with bone white as the only action color.

### Primary
- **Studio Red** (`studio-red`): the brand red. Mid-stop of the financing band's radial gradient, the "0km" badge, checked checkbox fills and the selected chip's diamond marker, the red tint on the WhatsApp icon inside solid buttons, the text-selection highlight, the scrollbar thumb and its hover.
- **Lit Red** (`lit-red`): the hot highlight of the studio wall. Used as a line, a mark or a glow, never a field: nav hover underline, active filter underline, rail progress bar, the wordmark's "MOTOS", the shield mark, the intro's neon shield and its glow, the red light spilling under the lifting shutter, contact-sheet icons, the input caret, the invalid-field border.
- **Oxide Red** (`oxide-red`): the dark end of the studio light. The placeholder fill behind every product photograph, the gallery and the hero, so images load into red darkness rather than gray.

### Neutral
- **Ink** (`ink`): page background, the shutter's base, notches cut into the stage, the form panel on the red band, badges, the drawer close button, text on bone buttons.
- **Chassis** (`chassis`): product cards, the stores block, drawer and sheet surfaces, select option lists.
- **Raised Chassis** (`chassis-raised`): card hover, icon-button fill, sheet option hover, the shutter's bottom rail, the ghost footer wordmark.
- **Hairline** (`hairline`) and **Strong Hairline** (`hairline-strong`): 1px dividers between list rows and the strokes of outline buttons, inputs, chips and segmented controls. Strong for interactive edges and the shutter rail's lip, regular for dividers and gallery arrows.
- **Bone** (`bone`): primary text, the solid button fill, focus outlines, the active gallery thumbnail border.
- **Bone Dim** (`bone-dim`): ledes, paragraph copy, nav links and filter labels at rest, provenance tags.
- **Bone Mute** (`bone-mute`): metadata, spec labels, counts, placeholders, footer.
- **On-Red Dim** (`on-red-dim`): secondary text on the red band, where bone-dim would turn pink.
- **Signal Error** (`signal-error`): field error messages on dark surfaces.

### Named Rules
**The Red Is Light Rule.** Red appears as photographed light, as a thin line, as neon glow, as a small status marker (the "0km" badge, a checked box, the chip diamond), or as the single drenched band. It never fills a button or a card. If a red surface is needed beyond the financing band, it must be a lit gradient, not a flat fill.

**The Bone Means Press Rule.** A bone-white fill means "this is an action" or "this is selected" (solid button, checked chip, active segment). Never use bone as a decorative surface.

## Typography

**Display Font:** Archivo variable (wdth 62-125, wght 100-900), self-hosted Latin subset (`archivo-latin.woff2`, preloaded, `font-display: swap`), with system-ui fallback
**Body Font:** Archivo at normal width (100)
**Label Font:** Archivo at 112% width

**Character:** One family doing every job through the width axis: fully expanded and near-black-weight for shouting, semi-expanded for labels and names, normal for reading. The result reads like a vehicle's badge set: same letterforms, different stance.

### Hierarchy
- **Giant wordmark** (900, wdth 125, clamp 2.6-10rem, line-height 0.85, -0.03em, uppercase): the footer's full-bleed "HILDO MOTOS", set in raised chassis on ink so it reads as embossed, not shouted. Decorative and `aria-hidden`.
- **Display, hero** (850, wdth 125, clamp 2.8-6rem, line-height 0.9, -0.02em, uppercase, balanced wrap): the hero headline only. On desktop viewports under 860px tall it caps by height (`min(5.6vw, 9vh)`); on mobile it runs clamp(2.2rem, 10vw, 4rem).
- **Display** (850, wdth 125, clamp 2.4-5.5rem, line-height 0.9, -0.02em, uppercase): one per section. Half-width split sections scale it down: sell to clamp(2.4rem, 4.6vw, 4.6rem), stores to clamp(2.2rem, 4.4vw, 4.4rem) at line-height 1.
- **Headline** (650, wdth 108, clamp 1.3-2rem, line-height 1.2, 30ch max): the Instagram proof line; its number switches to 900 / wdth 125 in lit red.
- **Large title** (1.9rem, line-height 1.05): the drawer heading, a two-line split of brand (500, wdth 112, bone-dim) over model (850, wdth 125, uppercase, bone, -0.01em).
- **Title** (800, wdth 112, 1.3rem, line-height 1.2): bike names. Store names and the sheet heading use the same stance at 1.25rem, the empty-state title at 1.5rem, hero model name at 1.15rem. Bike names split into brand at weight 400 in bone-dim plus model at 800 in bone ("Honda **CB 300F Twister**").
- **Lede** (400, 1.05rem, line-height 1.55): section paragraphs at 46-48ch, in bone-dim (on-red-dim on the red band). The hero lede is fluid, clamp(0.95rem, 1.05vw, 1.05rem).
- **Body** (400, 1rem, line-height 1.55): default text and input values.
- **Small** (0.85-0.95rem): counts, spec lines, field errors, footer, link buttons (0.9rem), plain filters and chips (0.92rem, 600).
- **Label** (750, wdth 112, 0.8rem, 0.08em, uppercase): buttons; the segmented filter at 700 / 0.78rem.
- **Field label** (650, 0.8rem, 0.03em, sentence case): above inputs and chip groups.
- **Nav** (600, 0.78rem, 0.06em, uppercase): top-bar links.
- **Caption** (0.72rem): provenance tags (uppercase, 0.06em, bone-dim), rail category, photo-count indicator (650, 0.04em), price footnotes. The gallery counter sits at 0.78rem / 650.
- **Spec label** (0.68rem, 0.1em, uppercase, bone-mute): the term half of spec pairs (ANO, KM, MOTOR) above a 650-700-weight tabular value. The vertical "Role para descobrir" rail uses 0.68rem / 700 / 0.16em.
- **Badge** (800, wdth 112, 0.66rem, 0.12em, uppercase): condition tags.
- **Intro word** (900, wdth 125, 1.35rem, 0.02em, uppercase): "HILDO" in bone, "MOTOS" in lit red, under the neon shield.

### Named Rules
**The Width Is Hierarchy Rule.** Change stance with `font-stretch` (125 / 112 / 108 / 100) before reaching for a new size. Never introduce a second typeface.

**The Tabular Numbers Rule.** Years, mileage, displacement, phone numbers, prices, counts and the gallery counter always set in tabular lining numerals.

## Layout

Content sits in a 1440px max wrap with a fluid gutter (16-56px). Feature blocks (hero, financing band, stores) break out of the wrap and sit inside the viewport with only the thin frame margin (6-12px), so the page reads as a series of framed stages on a black wall. Plain sections (stock, sell, Instagram) sit directly on ink with section padding of clamp(80px, 11vw, 150px) top and the tighter clamp(64px, 8vw, 110px) where a section closes into the next frame.

The hero is a full-viewport stage (100svh minus the frame, 620-1000px) with copy anchored left at about 46% width and the bike on the right. On short desktop viewports the hero mark hides below 860px tall and the lede below 700px. Two-column splits (financing, sell, stores) run 1.1:0.9 to 1:1 with the split gap and collapse to one column at 900px. The stock grid is auto-fill with a 330px minimum. Forms stack at an 18px field gap; the sell form runs 2fr / 1fr / 1fr.

Breakpoints: 1180px hides the top nav links; 900px stacks two-column sections; 760px is the mobile layout, where the hero becomes a vertical flow (headline, lede, masked photo, model, actions, horizontally-snapping model rail), filters scroll horizontally, gallery arrows hide in favor of swipe, the drawer goes full width, and a fixed bottom dock carries the WhatsApp action. Desktop only (761px and up, motion on), scrolling out of the hero drifts the stage down (0.22x) and scales it up to 1.05 while the copy rises (0.12x) and fades.

## Elevation & Depth

Flat. There are no box shadows on surfaces. Depth comes from tonal steps (ink, chassis, raised chassis), from the photograph and its shade gradients, and from black shapes cut into the stage. The only shadow-like effects are functional or light: a soft text-shadow keeping text legible over photos, a blurred darkened backdrop behind dialogs, an inset 1px ring completing input focus, and the neon glow on the intro shield, which is light emitted by the sign, not a lifted surface. The shutter's relief is drawn with a repeating gradient, not shadows.

### Shadow Vocabulary
- **Over-photo legibility** (`text-shadow: 0 1px 6px rgba(0, 0, 0, 0.6)`): provenance tags, the card's photo count, the gallery counter.
- **Dialog backdrop** (`background: rgba(5, 5, 6, 0.72); backdrop-filter: blur(3px)`): behind the drawer and the store sheet.
- **Focus inset** (`box-shadow: inset 0 0 0 1px` bone): second pixel of the focused input edge.
- **Neon** (`filter: drop-shadow(0 0 5px rgba(229, 72, 47, 0.9)) drop-shadow(0 0 18px rgba(229, 72, 47, 0.5))`): the intro shield only, once lit.

### Named Rules
**The Cut-Out Rule.** Layering is expressed by black notches cut into a lit surface (the hero's top tab, side rail and model rail; the ink panel on the red band), never by lifting a card with a shadow.

## Shapes

Three shape behaviors, each with one job:

- **Frames** (outer stage containers: hero, financing band, stores block) take the soft `frame` radius and clip their contents.
- **Controls** (buttons, inputs, chips, segmented controls, badges, icon buttons, gallery arrows and thumbnails, checkboxes) are square-cornered, always.
- **Chamfers** mark content blocks: one 45° cut at the top-right corner of bike cards (28px), the financing form panel (32px) and the contact sheet (24px). The hero's notches use the same 45° geometry as angled tab edges, and the shutter's bottom rail uses it for the pull-handle notch (a 12px-wide 45° step down 7px, 96px flat, centered).

A rotated 10px square (diamond) is the selection marker inside chips, filled studio red when checked. Icons are drawn SVG strokes with square caps and miter joins, matching the cut geometry.

## Components

### Buttons
Rectangular, heavy, uppercase; they look stamped.
- **Shape:** square corners (0), 52px default height, 44-46px in cards, notches and store rows (42px on mobile notch).
- **Solid:** bone fill, ink text, label type; the leading WhatsApp icon is tinted studio red. Hover brightens to pure white. Active nudges down 1px. Transitions at 180ms ease-out.
- **Outline:** transparent with a strong hairline border; hover turns the border bone. Used where the button sits on a cut-out black notch.
- **Ghost:** text-only label with a trailing arrow that slides 4px right on hover (420ms), plus underline. Used for secondary navigation ("Ver estoque completo", "Como chegar").
- **Icon button:** 44px square, raised chassis fill, hairline border, bone border on hover.
- **Link button:** unstyled 0.9rem bone-dim text with icon; underlines and brightens on hover ("Compartilhar esta moto").

### Chips
- **Style:** 52px tall, strong hairline border, transparent, a diamond marker before the label; optional second line in small text (store phone, tabular).
- **State:** checked inverts to bone fill with ink text and a red diamond; hover dims the border to bone-dim; keyboard focus outlines the whole chip. Used as radio choices (store selection, sell/trade/consign).

### Segmented control
- Primary filter: bordered group of uppercase label buttons separated by strong hairlines, 44px tall; the selected segment inverts to bone. Arrow keys move and select.
- Plain variant: borderless sentence-case text (0.92rem, 600); the selected one gains a 2px lit-red underline.

### Cards / Containers
- **Bike card:** chassis background, top-right 28px chamfer, 16:10 photo on an oxide-red fill, condition badge top-left, provenance tag bottom-right. Body holds the split-weight title and a four-column spec row; the foot pairs the price ("Consulte / valor pelo WhatsApp" when unpriced) with a compact 44px solid WhatsApp button. Hover raises to raised chassis (420ms) and slowly scales the photo 1.04 (900ms).
- **Photo indicator and hover crossfade:** when a bike has extra photos, a bottom-left caption reads "N fotos" (a 14px stacked-frames icon plus count, bone with the legibility shadow), and on hover-capable pointers the first extra photo crossfades over the main one (opacity at 420ms, scale riding the same 900ms). Touch devices keep the main photo.
- **Badge:** small heavy uppercase tag on ink; "0km" on studio red.
- **Financing panel:** ink block with a 32px chamfer and fluid 22-36px padding, sitting on the red band.

### Inputs / Fields
- **Style:** 52px, transparent, strong hairline border, square corners, 14px side padding; field label above.
- **Focus:** border turns bone plus a 1px inset bone ring. Hover dims the border to bone-dim. Caret is lit red.
- **Error:** lit-red border, signal-error message below, wired with `aria-invalid` and `aria-describedby`.
- **Selects** use a CSS-drawn chevron; currency fields prefix "R$" in bone-mute inside the same frame and take the focus ring on the wrapper.
- **Checkbox:** 20px square, strong hairline; checked fills studio red with a bone tick.

### Navigation
- Top bar sits inside the hero: stacked wordmark (HILDO in bone, MOTOS in lit red, 125 width, 900 weight, line-height 0.86) with the shield mark, then uppercase links in bone-dim with a 1px lit-red underline that wipes in from the left on hover (420ms). The WhatsApp action lives in a black notch cut into the top-right corner of the stage.
- Mobile hides links; a fixed bottom dock (ink at 94%, hairline top) with a full-width solid WhatsApp button slides up (420ms) once the hero leaves view.

### Model rail (signature)
A four-tab strip in a chamfered black tab along the hero's bottom edge: 56px thumbnail, model name, category, and a 2px progress bar filling in lit red while that model is featured (7s linear auto-advance; pauses on hover, focus and hidden tab; stops once the visitor picks). Selecting a model fades the glass out (160ms), sweeps it across the stage (1000ms cubic in-out) while the new photo is unclipped behind it, then settles it back to rest (700ms quartic ease-out). On mobile the rail becomes a snap-scrolling strip with 62%-wide tabs.

### Reeded glass (signature)
A strip of vertical flutes (about 24px each, at least 8) over the left third of the hero photograph; each flute shows a magnified, slightly blurred slice of the image (blur 2.5px) with a lit ridge left of center and dark edges. On fine pointers it eases toward the pointer horizontally (8% per frame) and returns to rest on leave; it doubles as the model-change wipe.

### Roll-up shutter intro (signature)
The shop door, down when the visitor arrives, then lifted.
- **Material:** a fixed full-screen ink layer with steel slats drawn by a 26px repeating gradient (1px lit lip, faint body, shadow groove, dark fold), and a 16px raised-chassis bottom rail with a strong-hairline lip and a centered 45°-chamfered pull-handle notch.
- **Sign:** the shield mark (84 x 98px, 2.4 stroke) draws its three paths in sequence (900ms ease-out each, starting at 0 / 260 / 480ms), then switches on as neon at 900ms with two flickers before holding steady (`steps(1, end)`, 900ms). "HILDO MOTOS" wipes in left to right under it (700ms ease-out, 650ms delay).
- **Lift:** at 1700ms the door rises out of view (`translateY(-101%)`, 1000ms `cubic-bezier(0.7, 0, 0.2, 1)`) with a 120px lit-red gradient spilling from under its bottom edge. Any pointer, key, wheel or touch skips straight to the lift at 320ms.
- **Hand-off:** as the door lifts, the hero enters: the glass sweeps in from the left to rest (900ms), the model rail rises from below (800ms, +120ms), the headline unclips upward while rising 30px (800ms, +180ms), lede / model / actions rise 18px and fade in (700ms at +320 / +400 / +480ms), the mark fades (600ms, +120ms), then the top notch drops in (700ms, +700ms) and the side notch slides in from the right (700ms, +760ms). All on the system ease-out.
- **Guards:** runs once per session (`sessionStorage`), never when the URL has a hash (deep links to a bike open directly), never under reduced motion (the class is never set and the CSS hides it). The door is `aria-hidden`. A 3s inline failsafe removes the intro and every hidden reveal state if the main script never boots; a 1400ms timer finishes the hand-off if `transitionend` never fires.

### Scroll reveals
One material with the glass: content is wiped or unclipped, not faded in from nothing. Hidden states exist only under `html.motion`, which the head script sets only when reduced motion is off; without it every element is visible. Each reveal fires once when its host enters the viewport (bottom 14% margin), and clipped elements are observed through their parent.
- **Wipe** (section display headlines): clip opens left to right, 800ms ease-out, with 10% vertical bleed so descenders and accents are not cut.
- **Door** (the stores photo): clip opens bottom to top like the shutter, 800ms ease-out, while the photo settles from 1.06 scale to 1.
- **Rise** (the two forms): translateY(28px) to rest, opacity 600ms and transform 700ms ease-out, both after 120ms.
- **List** (the stock grid): cards hold invisible until the grid enters, then each runs `rise` (14px, 640ms ease-out) with a 50ms stagger per card. The same rise replays on every filter change.

### Drawer gallery
Product detail opens as a right-side drawer (560px, full height, enters 40px from the right at 520ms; mobile full width, rising 16px at 420ms). The gallery heads it.
- **Track:** 16:10 on oxide red, a native horizontal scroll-snap track (mandatory, hidden scrollbar, contained overscroll), one full-width slide per photo, focusable with arrow-key navigation; alt text names the bike and "foto N de M".
- **Arrows:** 44px square, ink at 72% with hairline border, vertically centered 12px from each edge; hover goes solid ink with a bone border. Hidden on mobile.
- **Counter:** "N / M" tabular, 0.78rem / 650, bottom-left over the photo, announced politely.
- **Thumbnails:** 76px 16:10 square-cornered buttons in a 6px-gap row under the photo, 55% opacity at rest, 90% on hover; the current one is full opacity with a bone 1px border and `aria-current="true"`.
- **Single photo:** arrows, counter and thumbnails all hide.
- Below: badge, large title, price, hairline-ruled spec grid, store chips, checkboxes, share link, and a sticky bottom WhatsApp bar.

### Store sheet
Store choice for generic actions opens as a centered chamfered (24px) chassis sheet, 460px max, rising 16px at 420ms, listing both units as bordered rows with a lit-red WhatsApp icon; rows go bone-bordered on raised chassis on hover.

## Do's and Don'ts

### Do:
- **Do** keep every product photograph on an oxide-red placeholder fill and tag it "Imagem ilustrativa" bottom-right when it is illustrative.
- **Do** give every bike its own solid WhatsApp button with the red-tinted WhatsApp icon.
- **Do** use one 45° top-right chamfer on content blocks (24-32px) and square corners on every control.
- **Do** set display headlines in Archivo at width 125, weight 850, uppercase, line-height 0.9.
- **Do** use the system ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`) for state, entrances and reveals: 180ms for state, 420ms for underlines, crossfades and small entrances, 600-900ms for reveals and photo scale.
- **Do** reserve the heavy in-out curve (`cubic-bezier(0.7, 0, 0.2, 1)` in CSS, cubic in-out in script) for things with mass that travel the whole stage: the shutter lift and the glass sweep.
- **Do** gate every hidden-until-revealed state behind `html.motion`, with a failsafe that clears it if script never boots.
- **Do** honor reduced motion: no intro, no hidden reveal states, transitions collapse, the rail bar shows full instead of animating, gallery scrolling jumps instead of smoothing.

### Don't:
- **Don't** round buttons, inputs, chips, badges or gallery controls.
- **Don't** fill buttons or cards with flat red; red is light (photos, the lit financing gradient, neon) or a thin line.
- **Don't** add drop shadows to cards or panels; use tonal steps and cut-outs.
- **Don't** introduce a second typeface or a system display face.
- **Don't** use bone fills for anything that is not an action or a selection.
- **Don't** play the shutter more than once per session or in front of a deep link.
