# NestFindr - Verified Second-Hand Homes Website

NestFindr (nestfindr.com) is a second-hand (resale) homes website built as a
single landing page with six anchor-navigated sections. Its central promise is
**verified resale**: every listing tells buyers what the previous owners left
behind - the build year, the renovation history and honest condition notes.

Live website: https://<username>.github.io/nestfindr/  *(GitHub Pages)*

## Course Information

- **Course**: ICT2215 Web Design and Development with Multimedia
- **Assessment**: Assessment 2 - Project / Assessment 3 - Digital Documentation
- **Student**: Ma Yueyang (i24029401)
- **Institution**: INTI International University
- **Date**: November 2026

## Project Structure

```
nestfindr/
├── index.html      Landing page: Home / Listings / Services / About /
│                   Safety / Contact (anchor navigation, display-only
│                   contact form)
├── css/
│   └── style.css   Design tokens, section styles, responsive rules
├── js/
│   └── main.js     Mobile menu toggle + form confirmation (display only)
├── image/          6 photos (p01-p06.jpg) + 6 original icons (icon01-06.png)
└── video_ad/       Embedded advertisement video (plays inside the page)
```

## Design System

- **Colours**: deep purple `#4B2E83` (primary), teal `#0F766E` (accent),
  charcoal `#20232A` (text), light gray `#F5F6F8` (surfaces), white
- **Typeface**: Noto Sans (system fallbacks)
- **Responsive**: two breakpoints - below 900 px hamburger navigation and
  two-column grids; below 600 px single-column stacking
- **Accessibility**: all text/background pairs pass WCAG AA (most pass AAA)

## Originality

All code, wireframes and icons are original work produced for this project.
Photos, icons and the video are the project's supplied assets, used unchanged
except for CSS resizing. No templates, frameworks or copied code were used.
