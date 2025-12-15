# Static Teclaris Clone

A minimal, clean, and fully responsive static website that reproduces the visual structure and aesthetic of teclaris.com for both desktop and mobile devices. This implementation uses only HTML, CSS, and SVG assets—no JavaScript or external frameworks.

## Design Constraints

This project is **not** a copy of the original teclaris.com HTML/CSS. Instead, it is an original implementation that:
- Matches the visual structure and overall aesthetic (layout, spacing, color palette, typography)
- Uses semantic HTML5 and clean, maintainable CSS
- Implements mobile-first responsive design
- Keeps code small and readable
- Ensures accessibility with proper focus states, contrast, and keyboard navigation

## What's Included

```
static-site/
├── index.html                  # Main single-page site with semantic HTML
├── css/
│   └── styles.css             # Mobile-first responsive stylesheet with CSS variables
└── assets/
    ├── logo.svg               # Custom geometric wordmark logo
    └── hero-illustration.svg  # Abstract network/technology illustration
```

## Features

### Sections
- **Header with Navigation**: Sticky header with logo and navigation links
- **Hero Section**: Eye-catching intro with call-to-action buttons and illustration
- **Services Grid**: Responsive grid showcasing six service offerings with icons
- **About Section**: Company information with feature list and statistics
- **Contact/CTA**: Call-to-action section with contact information
- **Footer**: Multi-column footer with links and branding

### Responsive Design
- **Mobile-first approach**: Base styles for mobile, progressively enhanced for larger screens
- **Tablet breakpoint (768px)**: Two-column service grid, adjusted spacing
- **Desktop breakpoint (1024px)**: Three-column service grid, side-by-side hero layout, full footer layout

### Accessibility
- Semantic HTML5 elements (header, nav, section, article, footer)
- Proper heading hierarchy (h1-h4)
- Keyboard-focusable interactive elements with visible focus states
- WCAG-compliant color contrast
- Alt text for images
- Support for reduced motion preferences

### Design System
- **Color Palette**: Muted blue/gray theme inspired by professional tech sites
- **Typography**: System font stack for fast loading and native feel
- **Spacing**: Consistent spacing scale using CSS variables
- **Layout**: Flexbox and CSS Grid for modern, maintainable layouts

## Running Locally

### Using Python (Python 3.x)
```bash
cd static-site
python -m http.server 8000
```
Then open http://localhost:8000 in your browser.

### Using Python 2.x
```bash
cd static-site
python -m SimpleHTTPServer 8000
```

### Using Node.js (with npx)
```bash
cd static-site
npx serve
```

### Using PHP
```bash
cd static-site
php -S localhost:8000
```

### Using any static file server
Simply serve the `static-site` directory with any web server. The site consists only of static files and requires no build step or server-side processing.

## Deployment

### GitHub Pages
1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Set source to your branch (e.g., `main` or `static/teclaris-clone`)
4. Set the folder to `/static-site` (or root if you move files there)
5. Save and wait for deployment

The site will be available at `https://[username].github.io/[repo-name]/`

### Other Static Hosts
This site can be deployed to any static hosting service:
- **Netlify**: Drag and drop the `static-site` folder or connect your repo
- **Vercel**: Import your repo and set the root directory to `static-site`
- **Cloudflare Pages**: Connect your repo and set build output to `static-site`
- **AWS S3 + CloudFront**: Upload the `static-site` contents to an S3 bucket configured for static hosting

## Acceptance Criteria

✅ All code is static (HTML, CSS, SVG only - no JavaScript required)  
✅ Reproduces look/feel and layout for both mobile and desktop  
✅ Mobile-first responsive CSS with clear breakpoints  
✅ Semantic markup and accessible buttons/links  
✅ Small asset sizes and minimal CSS  
✅ No external frameworks used  

## Browser Support

This site uses modern CSS (Grid, Flexbox, CSS Variables) and works in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

For older browsers (IE11), consider adding a polyfill or a fallback message.

## Development Notes

- CSS follows a mobile-first approach with `min-width` media queries
- CSS Variables are used for the design system (colors, spacing, typography)
- All SVG assets are inline or external files (no icon fonts or external dependencies)
- The color palette uses muted blues and grays for a professional tech aesthetic
- Generous white space and clear hierarchy improve readability
- Hover states and transitions provide interactive feedback

## License

This is a demonstration project. Feel free to use and modify as needed.
