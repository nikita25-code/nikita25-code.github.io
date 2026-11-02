# Nikita C. Seiler — Portfolio Website

A responsive, original portfolio website showcasing applied AI, data engineering, backend systems and analytical decision-making. Inspired by the strong typography, project storytelling and polished motion of the three websites provided as design references, without copying their code or visual assets.

## Open the website

Double-click **index.html** to open it in a modern browser. You do not need to install Node, npm, React or any dependencies. The Google Fonts are optional; the site uses system fallbacks when offline.

For local development with a simple server, from the `nikita-portfolio` directory run:

```bash
python -m http.server 8000
```

Open <http://localhost:8000> in a browser. If port 8000 is occupied by your FastAPI app, use `python -m http.server 8080` instead.

## Publish free on GitHub Pages

1. Create a public repository, such as `nikita-portfolio`.
2. Upload the full contents of this directory to the repository root.
3. Under the repository's **Settings → Pages**, choose **Deploy from a branch**, `main`, `/ (root)` and save.
4. Once Pages publishes, your site will have a URL similar to `https://YOUR-USERNAME.github.io/nikita-portfolio/`.

Alternative: upload this folder to Netlify or Vercel as a static site.

## Change the content

- `index.html`: headings, navigation, contact, expertise, About, social links.
- `script.js`: the `projects` array holds all six case studies. Edit project descriptions, categories, technology tags, outcome caveats and methods there.
- `styles.css`: layout, themes, motion, breakpoints, accents and mobile styling. The static capability map is a responsive six-domain section with subtle hover emphasis.
- `assets/favicon.svg` and `assets/social-preview.svg`: branding.

### Notes before sharing publicly

- The contact email and LinkedIn URL were derived from a user-supplied English CV; confirm that you want both public.
- Project visualizations are **stylized mock interfaces**. Data in the example UI graphic is illustrative, not a connection to the real app or a live API.
- Verify projects, project statuses, metrics and public descriptions before deploying.
- **GitHub card:** Configured to open `https://github.com/nikita25-code`. LinkedIn and email links are also configured.
- No individual GitHub repository links have been guessed. Add verified project/demo links when ready.
- The Energy Portfolio Intelligence project explicitly identifies the dataset as synthetic and its cost model as scenario-based. The Indoor Climate saving is a modelled estimate, not a measured real-world reduction.

## Accessibility and performance

Uses semantic landmarks, responsive layout, accessible project dialogs and filters, keyboard navigation, `prefers-reduced-motion` support, and no runtime JavaScript libraries, external analytics or tracking. Works on static hosting.

## References (inspiration only)

- <https://www.pszostak.pl/> — striking hero, personal perspective, work showcase.
- <https://www.dipakdev.in/> — service/expertise hierarchy, engineering storytelling, project case studies.
- <https://www.redoyanulhaque.me/> — AI-engineering positioning, interactive portfolio concepts.

© 2026 Nikita C. Seiler. Original site implementation for this portfolio.

### Version 3 – original lime color consistency

The GitHub, LinkedIn, and Email icon illustrations, their outlines, focus/hover states, and north-east shortcut arrows are all lime green to match the original portfolio palette. Project visualizations, content and responsive layout otherwise remain unchanged.


### Version 5 – structured capability map

The endlessly scrolling technology ribbon was replaced with an editorial, four-column capabilities section containing the 16 technologies and tools specified by the site owner. The four domains are **Data Platforms**, **Backend & APIs**, **AI & Intelligence**, and **Enterprise Systems**. Small architectural line drawings, an understated data-to-decision footer, lime highlights, and fine rules give the section more personality while keeping it calm and easy to scan. At tablet widths it becomes 2 columns; at mobile widths each domain is stacked with a two-column item list. No carousel, repetitive ticker markup, or animation runtime is required.

To edit the categories or technologies, update the `.capabilities-grid` articles in `index.html`. Styling is in the `/* V5 */` section of `styles.css`. The remainder of the portfolio is unchanged.

### Version 6 – corrected technology taxonomy and responsive grid

Six domains now distinguish Data Engineering (including Delta Sharing as an open protocol), Backend & APIs, AI & Intelligence, Databases (PostgreSQL, MySQL, MongoDB, SAP HANA Cloud), Enterprise & Analytics (including SAP BTP), and Architecture & Delivery (including BPMN as a process modeling method). There are 24 uniquely listed capabilities, with no duplicate entries. The section uses three columns on desktop, two on tablets, and one on phones. At 360px and below, capability entries switch to a single column to prevent cramped labels. No marquee or third-party dependencies.

### Version 7 — precision updates to capability cards

Data Engineering card: **Data Pipelines** → **ETL / ELT Pipelines**. Architecture & Delivery card: **Solution Architecture** → **System Architecture**. The six capability groups, visual design, and all other content remain unchanged.


Version 11: Rebuilt hero visual as four fully separated, stacked stages with labeled data handoffs and animated signal dots. SYSTEM.LOG uses illustrative design checks rather than invented live metrics.

## V16 hero update
The hero uses four 96 × 74 px architecture cards with SVG elbow connectors anchored by a small ResizeObserver helper. The animated signal dots follow the connector paths.


## Adjusting the hero dotted connectors (Version 22)

Open `script.js`, find the heading **EDIT DOTTED CONNECTORS HERE**, and edit `PATH_ADJUST_PX`.
For the one-file edition, open `Nikita_Seiler_Portfolio_Standalone_v22.html` in a text editor and find that same heading.

Each of the four corners (`topLeft`, `topRight`, `bottomLeft`, `bottomRight`) has four pixel offsets:

- `x`: move the end attached to its card horizontally (+ right, - left).
- `y`: move the end attached to its card vertically (+ down, - up).
- `bendX`: shift that corner's vertical elbow horizontally (+ right, - left).
- `nearCircleY`: shift the horizontal line at the circle vertically (+ down, - up).

For example, to shift the **upper-left** vertical bend 10px to the right, change:

```js
topLeft: { x: 0, y: 0, bendX: 10, nearCircleY: 0 },
```

**Save and refresh.** There are two rendered dashed routes: green goes from top-left to bottom-right, and purple goes from bottom-left to top-right. The animation reads the very same path as the visible line, so the dots continue to follow after adjustment. Smaller adjustments (typically 2–15px) are best; extremely large values can cause paths to cross or leave the panel. The routes continue to adapt to window resizing.


## V23 layout tweak
Bottom architecture cards were moved down so their spacing mirrors the top cards.


## V24 connector tweak
- Adjusted the bottom-left dotted connector so it attaches from the top area of the AI card and better matches the reference sketch.


## V25: bottom-left connector simplification
The purple path leaves the top of the AI card as one vertical line. Its small sideward hook at the card border has been removed. Adjust `bottomLeft.x` or `bottomLeft.bendX` within the `EDIT DOTTED CONNECTORS HERE` section of `script.js` if you want to move that vertical connection left/right. The moving purple dot uses the same generated SVG path.


### V26 — Experience & Education
The background panel now presents three entries: SAP internship and bachelor project combined; EK professional bachelor’s degree; and Copenhagen Business Academy AP degree. Titles appear before dates, with years aligned right. The certifications remain below.


### Version 27: theme contrast
The site uses independent color tokens `--acid` (readable green for text, borders and icons) and `--acid-fill` (lime backgrounds on buttons, badges and the contact panel). In light mode, `--acid` is forest green (`#426b24`) while `--acid-fill` is lime (`#b9e77d`). Project illustrations and social shortcut cards retain bright accents on their dark backgrounds. To change the colors, edit these tokens at the top of `styles.css`.


## Version 28 — Architecture labels
Updated the four architecture card titles and metadata, central hub, and SYSTEM.DNA footer. No changes to signal animation geometry.


## V29 architecture card cleanup
- Removed the stage labels (e.g. "01 / INPUT") and top icons from all four architecture cards.


## V30 text alignment tweak
- Centered the architecture card content vertically within each box after removing the top labels and icons.


## V31 — Architecture card text positioning
In the four small hero boxes, the title + meta text is centered both horizontally and vertically. The active override is `.architecture-hub .hub-card` in styles.css (or the embedded CSS of the standalone HTML).


## Adjust architecture-card font size (Version 32)

Open **styles.css** and search for **EDIT ARCHITECTURE BOX TEXT SIZES HERE**.
In the standalone HTML version, search for the same heading in the `<style>` section.

- `--box-title-size`: Finance & ERP, AI & tools, and Decisions title text.
- `--box-long-title-size`: Data architecture title, which needs a little less space.
- `--box-meta-size`: the small technology lines under each title.
- The `@media (max-width: 430px)` block holds separate settings for smaller phones.

Increase values slowly (0.3–0.5px at a time), save, and reload. The four cards remain 100 × 78px and the connector animation remains automatically positioned relative to the cards.


## V33 readability update
- Enlarged the four architecture boxes and moved them inward symmetrically.
- Increased the active title and meta font sizes in the architecture diagram.
- Added smaller enlarged card sizes for tablet and mobile breakpoints.


## V34 architecture size update
- Increased the four architecture boxes to 130 × 97px on larger screens.
- Increased architecture box text to 13px titles and 10px meta text.
- Added more spacing between the title and meta lines.
- Increased the center-circle text for better readability.


## V35 spacing update
- Increased the active architecture card width to 138px.
- Moved the four architecture boxes outward toward the edges to create more room for the dashed connector paths to travel.
- Kept the movement symmetrical for the left pair and right pair of cards.


## Version 36 · Hub caption font size
The text “Economics + Systems” below the N hub is now controlled by `--box-meta-size` (same size as the four cards’ metadata). In `styles.css`, search for `EDIT THE HUB CAPTION HERE`.


## Version 37 — Capability matrix cleanup
Removed decorative card numbering and icons from all six capability cards.
Removed the footer's right-hand ornament. Reduced the upper whitespace and
card height so categories, titles, and skills move upward, without changing
their wording or the rest of the site's layout.


## Version 38 — Visual cleanup and back-to-top fix
Removed the decorative hero micro-line and scroll cue, capability counts, project
filter counts and helper notes, the two top labels on each project illustration,
expertise card icons/numbers, and the oversized contact arrow. Section labels
remain but no longer have numerical prefixes. Content spacing was tightened.

The **Back to top** link now targets a real document-top anchor, not the sticky
header, and has a smooth-scrolling JavaScript handler (respecting reduced motion).
It continues to work as a regular anchor with JavaScript disabled.


## Version 39
Removed the decorative northeast arrow from the Experience & Education heading. The heading, timeline, certifications, and all other elements remain unchanged.


## V41 branding
- Removed the slash separator between NIKITA and SEILER in the header logo.


## Version 42 — Contact link
The “Have something similar in mind?” link now opens an email addressed to nikita_seiler@outlook.com (subject: Project inquiry) rather than jumping to #contact.
