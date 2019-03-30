const checklist = [
  {
    id: 'check-list-head',
    heading: 'Head',
    list: [
      {
        type: 'Doctype',
        description: 'The Doctype is HTML5 and is at the top of all HTML pages.',
        tags: ['meta tag'],
        checked: false,
      },
      {
        type: 'Charset',
        description: 'The charset declared (UTF-8) is declared correctly.',
        tags: ['meta tag'],
        checked: false,
      },
      {
        type: 'Viewport',
        description: 'The viewport is declared correctly.',
        tags: ['meta tag'],
        checked: false,
      },
      {
        type: 'Title',
        description: 'A title is used on all pages',
        tags: ['meta tag'],
        checked: false,
      },
      {
        type: 'Description',
        description: 'A meta description is provided, it is unique and doesn\'t possess more than 150 characters.',
        tags: ['meta tag'],
        checked: false,
      },
      {
        type: 'Favicons',
        description: 'Each favicon has been created and displays correctly.',
        tags: ['meta tag'],
        checked: false,
      },
      {
        type: 'Apple web app meta',
        description: 'Apple meta-tags are present.',
        tags: ['meta tag'],
        checked: false,
      },
      {
        type: 'Windows tiles',
        description: 'Windows tiles are present and linked.',
        tags: ['meta tag'],
        checked: false,
      },
      {
        type: 'Canonical',
        description: 'Use rel="canonical" are being used to avoid duplicate content.',
        tags: ['meta tag'],
        checked: false,
      },
      {
        type: 'Language attribute',
        description: 'The `<code>lang</code>` attribute of website is specified and related to the language of the current page.',
        tags: ['meta tag'],
        checked: false,
      },
      {
        type: 'Alternate language',
        description: 'The language tag of website is specified and related to the language of the current page.',
        tags: ['html tag'],
        checked: false,
      },
      {
        type: 'Conditional comments',
        description: 'Conditional comments are present for IE if needed.',
        tags: ['html tag'],
        checked: false,
      },
      {
        type: 'RSS feed',
        description: 'If project is a blog or has articles, RSS link is provided.',
        tags: ['html tag'],
        checked: false,
      },
      {
        type: 'Inline critical CSS',
        description: 'The inline critical CSS is correctly injected in the HEAD tag.',
        tags: ['html tag', 'css', 'performance'],
        checked: false,
      },
      {
        type: 'CSS order',
        description: 'All CSS files are loaded before any JavaScript files in the HEAD tag.',
        tags: ['html tag'],
        checked: false,
      },
      {
        type: 'Facebook Open Graph',
        description: 'Tags with attributes are added correctly.',
        tags: ['social meta', 'testing'],
        checked: false,
      },
      {
        type: 'Twitter Card',
        description: 'Tags with attributes are added correctly.',
        tags: ['social meta', 'testing'],
        checked: false,
      },
    ],
  },
  {
    id: 'check-list-html',
    heading: 'HTML',
    list: [
      {
        type: 'HTML5 Semantic Elements',
        description: 'HTML5 Semantic Elements are used appropriately (header, section, footer, main,...).',
        tags: ['html', 'best practices'],
        checked: false,
      },
      {
        type: 'Error pages',
        description: 'Error 404 page and 5xx exist.',
        tags: ['html', 'best practices'],
        checked: false,
      },
      {
        type: 'Noopener',
        description: 'If project uses external links with target="_blank", link should have a rel="noopener" attribute to prevent tab nabbing.',
        tags: ['html', 'best practices', 'security'],
        checked: false,
      },
      {
        type: 'Clean up comments',
        description: 'Unnecessary code needs to be removed before sending the page to production.',
        tags: ['html', 'best practices'],
        checked: false,
      },
      {
        type: 'W3C compliant',
        description: 'All pages need to be tested with the W3C validator to identify possible issues in the HTML code.',
        tags: ['html', 'testing'],
        checked: false,
      },
      {
        type: 'HTML Lint',
        description: 'Using tools to help analyze any issues that could be in HTML code.',
        tags: ['html', 'testing'],
        checked: false,
      },
      {
        type: 'Link checker',
        description: 'There are no broken links in project, verify that there isn\'t any 404 error.',
        tags: ['html', 'testing'],
        checked: false,
      },
      {
        type: 'Adblockers test',
        description: 'Website shows content correctly with adblockers enabled.',
        tags: ['html', 'best practices'],
        checked: false,
      },
    ],
  },
  {
    id: 'check-list-css',
    heading: 'CSS',
    list: [
      {
        type: 'Responsive Web Design',
        description: 'The website is using responsive web design.',
        tags: ['css'],
        checked: false,
      },
      {
        type: 'CSS Print',
        description: 'A print stylesheet is provided and is correct on each page.',
        tags: ['css'],
        checked: false,
      },
      {
        type: 'Unique ID',
        description: 'If IDs are used, they are unique to a page.',
        tags: ['css'],
        checked: false,
      },
      {
        type: 'Reset CSS',
        description: 'A CSS reset (reset, normalize or reboot) is used and up to date.',
        tags: ['css'],
        checked: false,
      },
      {
        type: 'JS prefix',
        description: 'All classes (or IDs used in JavaScript files) begin with `js-` and are not styled in the CSS files.',
        tags: ['javascript', 'best practices'],
        checked: false,
      },
      {
        type: 'Embedded or inline CSS',
        description: 'Avoid at all cost embeding CSS in `<style>` tags or using inline CSS.',
        tags: ['css'],
        checked: false,
      },
      {
        type: 'Vendor prefixes',
        description: 'CSS vendor prefixes are used and are generated accordingly with project\'s browser support compatibility.',
        tags: ['css'],
        checked: false,
      },
      {
        type: 'Concatenation',
        description: 'CSS files are concatenated in a single file (Not for HTTP/2).',
        tags: ['css', 'performance'],
        checked: false,
      },
      {
        type: 'Minification',
        description: 'All CSS files are minified.',
        tags: ['css', 'performance'],
        checked: false,
      },
      {
        type: 'Non-blocking',
        description: 'CSS files need to be non-blocking to prevent the DOM from taking time to load.',
        tags: ['css', 'performance'],
        checked: false,
      },
      {
        type: 'Stylelint',
        description: 'All CSS or SCSS files are without any errors.',
        tags: ['css', 'testing'],
        checked: false,
      },
      {
        type: 'Responsive web design',
        description: 'All pages were tested with the correct breakpoints.',
        tags: ['css', 'testing'],
        checked: false,
      },
      {
        type: 'CSS Validator',
        description: 'The CSS was tested and pertinent errors were corrected.',
        tags: ['css', 'testing'],
        checked: false,
      },
      {
        type: 'Desktop browsers',
        description: 'All pages were tested on all current desktop browsers (Safari, Firefox, Chrome, Internet Explorer, EDGE,...).',
        tags: ['css', 'testing'],
        checked: false,
      },
      {
        type: 'Mobile browsers',
        description: 'All pages were tested on all current mobile browsers (Native browser, Chrome, Safari, ...).',
        tags: ['css', 'testing'],
        checked: false,
      },
      {
        type: 'Operating systems',
        description: 'All pages were tested on all current OS (Windows, Android, iOS, macOS, ...).',
        tags: ['css', 'testing'],
        checked: false,
      },
      {
        type: 'Reading direction',
        description: 'All pages were tested for LTR and RTL languages if they need to be supported.',
        tags: ['css', 'testing'],
        checked: false,
      },
    ],
  },
  {
    id: 'check-list-javascript',
    heading: 'JavaScript',
    list: [
      {
        type: 'JavaScript inline',
        description: 'There isn\'t any JavaScript code inline (mixed with HTML code).',
        tags: ['javascript'],
        checked: false,
      },
      {
        type: 'Concatenation',
        description: 'JavaScript files are concatenated.',
        tags: ['javascript'],
        checked: false,
      },
      {
        type: 'Minification',
        description: 'JavaScript files are minified (there can be .min suffix added).',
        tags: ['javascript'],
        checked: false,
      },
      {
        type: 'Noscript tag',
        description: 'Use `<noscript>` tag in the HTML body if a script type on the page is unsupported or if scripting is currently turned off in the browser. This will be helpful in client-side rendering heavy apps such as React.js.',
        tags: ['javascript'],
        checked: false,
      },
      {
        type: 'Non-blocking',
        description: 'JavaScript files are loaded asynchronously using async or deferred using defer attribute.',
        tags: ['javascript', 'performance'],
        checked: false,
      },
      {
        type: 'Modernizr',
        description: 'If there is need to target some specific features, there can be used a custom Modernizr to add classes in `<html>` tag.',
        tags: ['javascript'],
        checked: false,
      },
      {
        type: 'ESLint',
        description: 'No errors are flagged by ESLint (based on project configuration or standards rules).',
        tags: ['javascript', 'testing'],
        checked: false,
      },
    ],
  },
  {
    id: 'check-list-images',
    heading: 'Images',
    list: [
      {
        type: 'Optimization',
        description: 'All images are optimized to be rendered in the browser. WebP format could be used for critical pages (like Homepage).',
        tags: ['images, best practices'],
        checked: false,
      },
      {
        type: 'Picture and srcset',
        description: 'Use picture and srcset to provide the most appropriate image for the current viewport of the user.',
        tags: ['images'],
        checked: false,
      },
      {
        type: 'Retina',
        description: 'Provide layout images 2x or 3x, support retina display.',
        tags: ['images'],
        checked: false,
      },
      {
        type: 'Sprite',
        description: 'Small images are in a sprite file (in the case of icons, they can be in an SVG sprite image).',
        tags: ['images'],
        checked: false,
      },
      {
        type: 'Width and height',
        description: 'Set width and height attributes on `<img>` if the final rendered image size is known (can be omitted for CSS sizing).',
        tags: ['images'],
        checked: false,
      },
      {
        type: 'Alternative text',
        description: 'All `<img>` have an alternative text which describe the image visually.',
        tags: ['images'],
        checked: false,
      },
      {
        type: 'Lazy loading',
        description: 'Images are lazyloaded (A `<noscript>` fallback is always provided).',
        tags: ['images', 'performance'],
        checked: false,
      },
    ],
  },
  {
    id: 'check-list-performance',
    heading: 'Performance',
    list: [
      {
        type: 'Page weight',
        description: 'The weight of each page is between 0 and 500 KB.',
        tags: ['performance'],
        checked: false,
      },
      {
        type: 'Minified HTML',
        description: 'HTML has been minified.',
        tags: ['html', 'performance'],
        checked: false,
      },
      {
        type: 'Lazy loading',
        description: 'Images, scripts and CSS need to be lazy loaded to improve the response time of the current page (see details in their respective sections).',
        tags: ['best practices'],
        checked: false,
      },
      {
        type: 'Cookie size',
        description: 'If there are cookies being used, be sure each cookie doesn\'t exceed 4096 bytes and domain name doesn\'t have more than 20 cookies.',
        tags: ['best practices'],
        checked: false,
      },
      {
        type: 'DNS resolution',
        description: 'DNS of third-party services that may be needed are resolved in advance during idle time using dns-prefetch.',
        tags: ['requests'],
        checked: false,
      },
      {
        type: 'Preconnection',
        description: 'DNS lookup, TCP handshake and TLS negotiation with services that will be needed soon is done in advance during idle time using preconnect.',
        tags: ['requests'],
        checked: false,
      },
      {
        type: 'Prefetching',
        description: 'Resources that will be needed soon (e.g. lazy loaded images) are requested in advance during idle time using prefetch.',
        tags: ['requests'],
        checked: false,
      },
      {
        type: 'Preloading',
        description: 'Resources needed in the current page (e.g. scripts placed at the end of `<body>`) in advance using preload.',
        tags: ['requests'],
        checked: false,
      },
      {
        type: 'Google PageSpeed',
        description: 'All pages were tested (not only the homepage) and have a score of at least 90/100.',
        tags: ['testing'],
        checked: false,
      },
    ],
  },
  {
    id: 'check-list-seo',
    heading: 'SEO',
    list: [
      {
        type: 'Google Analytics',
        description: 'Google Analytics is installed and correctly configured.',
        tags: ['seo'],
        checked: false,
      },
      {
        type: 'Headings logic',
        description: 'Heading text helps to understand the content in the current page.',
        tags: ['seo', 'accessibility', 'html'],
        checked: false,
      },
      {
        type: 'sitemap.xml',
        description: 'A `sitemap.xml` exists and was submitted to Google search console.',
        tags: ['seo'],
        checked: false,
      },
      {
        type: 'robots.txt',
        description: 'The `robots.txt` is not blocking webpages.',
        tags: ['seo', 'testing'],
        checked: false,
      },
      {
        type: 'Structured data',
        description: 'Pages using structured data are tested and are without errors. Structured data helps crawlers understand the content in the current page.',
        tags: ['seo', 'testing'],
        checked: false,
      },
      {
        type: 'Sitemap HTML',
        description: 'An HTML sitemap is provided and is accessible via a link in the footer of your website.',
        tags: ['seo', 'html'],
        checked: false,
      },
      {
        type: 'Pagination link tags',
        description: 'Provide `rel="prev"` and `rel="next"` to indicate paginated content.',
        tags: ['seo', 'html'],
        checked: false,
      },
    ],
  },
  {
    id: 'check-list-webfonts',
    heading: 'Webfonts',
    list: [
      {
        type: 'Webfont format',
        description: 'WOFF, WOFF2 and TTF are supported by all modern browsers.',
        tags: ['webfont'],
        checked: false,
      },
      {
        type: 'Webfont size',
        description: 'Webfont sizes don\'t exceed 2 MB (all variants included).',
        tags: ['webfont'],
        checked: false,
      },
      {
        type: 'Webfont loader',
        description: 'Control loading behavior with a webfont loader.',
        tags: ['webfont'],
        checked: false,
      },
    ],
  },
  {
    id: 'check-list-accessibility',
    heading: 'Accessibility',
    list: [
      {
        type: 'Progressive enhancement',
        description: 'Major functionality like main navigation and search should work without JavaScript enabled.',
        tags: ['best practices'],
        checked: false,
      },
      {
        type: 'Color contrast',
        description: 'Color contrast should at least pass WCAG AA (AAA for mobile).',
        tags: ['best practices'],
        checked: false,
      },
      {
        type: 'H1',
        description: 'All pages have an `<h1>` tag which is not the title of the website.',
        tags: ['best practices', 'seo'],
        checked: false,
      },
      {
        type: 'Headings',
        description: 'Headings should be used properly and in the right order (H1 to H6).',
        tags: ['best practices'],
        checked: false,
      },
      {
        type: 'Specific HTML5 input types are used',
        description: 'This is especially important for mobile devices that show customized keypads and widgets for different types.',
        tags: false,
        checked: false,
      },
      {
        type: 'Label',
        description: 'A label is associated with each input form element. In case a label can\'t be displayed, use aria-label instead.',
        tags: false,
        checked: false,
      },
      {
        type: 'Accessibility standards testing',
        description: 'Use the WAVE tool to test if your page respects the accessibility standards.',
        tags: ['testing'],
        checked: false,
      },
      {
        type: 'Keyboard navigation',
        description: 'Test your website using only your keyboard in a previsible order. All interactive elements are reachable and usable.',
        tags: ['testing'],
        checked: false,
      },
      {
        type: 'Screen reader',
        description: 'All pages were tested in two or more screen readers (such as JAWS, VoiceOver and NVDA).',
        tags: ['testing'],
        checked: false,
      },
      {
        type: 'Focus style',
        description: 'If the focus is disabled, it is replaced by visible state in CSS.',
        tags: ['testing'],
        checked: false,
      },
    ],
  },
];

export default checklist;
