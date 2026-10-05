# Hijinks visual system

Derived from all eight boards in the supplied `HD2.rar`, with Robin Thomasson's Helldivers II style-guide overview as the reference. The site is an original editorial mod catalog, rather than a reconstruction of an official game menu or official website.

## Reference observations

- **Board 1:** Military interface framing, strong title hierarchy, restrained geometric body typography, cinematic environments. It names Nimbus Sans Extended for screen titles and FS Sinclair Medium/Regular for UI text. These licensed font files were not supplied, so this site uses system fallbacks rather than claiming to ship them.
- **Board 2:** Functional color hierarchy and discrete default/hover/selected states. The reference yellow is `#FFE900`, ready/equip green `#4EE077`, and locked red `#AF4141`.
- **Board 3:** Thin panel edges, dense but orderly equipment grids, navigation tabs, and consistent icon framing.
- **Boards 4–6:** High-contrast silhouette icons, geometric badges, reticle/map marks, and weapon identity through shape.
- **Board 7:** Warm environmental imagery, sharp yellow section breaks, and a consistent information grid.
- **Board 8:** List/detail page composition, contained information panels, narrow metadata labels, and scan-friendly tabular blocks.

## Website tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0C1011` | Main canvas |
| `--surface` | `#14191A` | Cards and documentation panels |
| `--surface-2` | `#1B2122` | Secondary controls |
| `--ink` | `#F0F0E5` | Primary text |
| `--muted` | `#A5ABA6` | Secondary copy |
| `--yellow` | `#FFE900` | Primary action, current selection, key labels |
| `--green` | `#7BD594` | Release status marker |
| `--line` | `#323B39` | Panel divisions |
| `--max` | `1240px` | Page width |

The website uses warmer neutral text and a quieter green than the guide. The central hierarchy is yellow primary actions, white headings, muted descriptions, and compact technical metadata. Status always includes text as well as color.

## Components

- **Brand:** Original chamfered H badge, compact HIJINKS wordmark, and a smaller descriptive line. This is not the official Helldivers emblem.
- **Hero:** Large two-line title, a reference-derived environmental crop, short descriptive copy, and two direct paths: projects or installation.
- **Project cards:** Local project art, category, version, concise description, feature labels, a packaged download, project details, and secondary source links.
- **Panels:** One-pixel borders, flat charcoal surfaces, 22–32px internal padding, and no rounded pill surfaces.
- **Buttons:** Yellow primary actions with small clipped corners. Secondary actions use outlined rectangles. Hover/focus remains distinct.
- **Guides:** Independent icon/title panels. Guide graphics are original SVG linework.
- **Manual:** Numbered steps and project-specific requirements. The install path is kept short and readable.
- **Media:** Native modal dialog with keyboard dismissal, descriptive captions, and honest asset labels.

CSS uses an 8px base spacing idea. Breakpoints at 1050, 800, and 540px progressively simplify layouts; phone screens keep large tap targets and collapse cards to one column. Reduced-motion preferences disable transitions and smooth scrolling. All assets and page links are relative for repository-hosted Pages sites.
