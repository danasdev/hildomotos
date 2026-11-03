---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface: Home / vitrine (index.html)

Mode: Persuade. Visitor arrives from Instagram on a phone, wants to see what's in stock and talk to a seller about one bike. Action: WhatsApp per bike, to the chosen unit, prefilled message. Proof: the stock itself, two real units, 50 mil seguidores. Constraints: no prices, rates or reviews invented; images are AI-generated illustrations, tagged "Imagem ilustrativa".

Direction pinned by the user (style ref image + yamaha-motor.com.br navigation), so no concept roll. Build path: code-led this session (not stored).

## Direction contract

THESIS: The site is a night showroom: every bike stands alone under red studio light inside a black chamfered frame, and every bike has its own WhatsApp door. Refuses the Instagram-reseller default of a banner carousel over a grid of price-tag cards.

OWN-WORLD: Black #0B0B0C frame/chassis with chamfered notches (45° cuts like a tank cover). Red studio field (#B3261E → #E0402B lit wall) drenched in the hero and the financing band. Bone white #F2EFEA for CTAs: rectangular, sharp, no radius. Archivo expanded (wdth 125, weight 800-900) uppercase display; Archivo regular for body; tabular numerals for specs. Reeded/fluted glass strips refract the photo.

STORY: Visitor sees a bike lit like a car commercial, understands "Hildo Motos, 0km e seminovas, São Luís", picks a model from the hero rail, opens it, chooses Cohab or Vila Flamengo, lands in WhatsApp with the model already typed.

FIRST VIEWPORT: Black frame, red lit stage fills it. Top-left logo, top-right notch with "Falar no WhatsApp". Left: brand mark, display headline "DIFERENTE DAS IGUAIS" ~2 lines at clamp(3rem,8vw,7.5rem)... capped 6rem, one paragraph, white CTA "Ver estoque" + "Quero esta moto" for the featured bike. Right 60%: featured bike profile, a reeded-glass panel over its rear half. Bottom: model rail (4 featured) in a chamfered black tab; right edge vertical "Role para descobrir".

FORM: User-pinned style reference (cinematic automotive hero), position 1. seed: none (user-pinned direction; roll not run, per new-work: "a user- or brief-pinned direction beats the roll")
Signature interaction: the reeded glass follows the pointer horizontally over the bike, and switching models wipes the glass across the stage as the new bike crossfades in. Motion grammar: exponential ease-out, 600-900ms; the shutter intro is the one longer in-out moment; reveal states are hidden only once JS opts in (html.motion), with a 3s failsafe.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
