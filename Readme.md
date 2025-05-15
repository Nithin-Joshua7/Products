Product Page
Overview
This project is a responsive e-commerce product page designed to showcase a T-shirt with interactive features, inspired by platforms like Flipkart. It includes a product gallery, variant selection, modals, tabs, a "Pair Well With" carousel, a "Buy These Together" bundle, and related products. The page is built using HTML, CSS, and JavaScript, with a focus on clean design, smooth interactions, and mobile responsiveness.
The "Pair Well With" section features a horizontal scrolling carousel with uniform card sizes and aligned "Add to Cart" buttons, while the "Buy These Together" section ensures centered images in mobile view. The project is optimized for both desktop and mobile devices, providing a seamless user experience.
Features Implemented

Product Gallery:
Main image with zoom-on-hover effect.
Thumbnail gallery with clickable images to update the main image.
Smooth scrolling for thumbnails on mobile.


Product Details:
Color swatches and size buttons for variant selection, with active state styling.
LocalStorage to persist selected color and size.
"Add to Cart" button with hover effect.


Modals:
Size Chart modal with a responsive table.
Compare Colours modal with swatch selection and dynamic display of selected colors.
Modals close via close button, outside click, or ESC key.


Tabs:
Switchable tabs for Description, Reviews, and Shipping details.
Active tab highlighted with a border.


Pair Well With Carousel:
Horizontal scrolling carousel with snap-to-card behavior, 
Uniform card sizes (desktop: 180px × 300px, mobile: 150px × 260px).
Aligned "Add to Cart" buttons in mobile view using flexbox (margin-top: auto).
Left/right navigation arrows (circular, semi-transparent, hover effect).
Smooth scrolling with scroll-behavior: smooth and scroll-snap-type: x mandatory.
Image error handling with fallback image (images/fallback.jpeg).


Buy These Together:
Bundle section with centered images in mobile view (justify-content: center).
Responsive layout with flexbox for desktop and mobile.


Related Products:
Grid layout with product cards and badges (e.g., "Best Seller").
Responsive design with auto-fit grid columns.


Responsive Design:
Mobile view (≤768px) optimizes card sizes, button alignment, and centering.
Smooth transitions and touch-friendly scrolling for mobile devices.


How to Run Locally
Follow these steps to set up and run the project on your local machine.
Prerequisites

A modern web browser (e.g., Chrome, Firefox, Safari).
A code editor (e.g., VS Code) for viewing/editing files.
A local server to serve the HTML file (to avoid CORS issues with images and scripts).

Project Structure
project/
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assests/
│   ├── black.jpeg
│   ├── red.webp
│   ├── blue.jpeg
│   ├── jeans.jpeg
│   ├── jacket.jpeg
│   ├── sneakers.jpg
│   ├── bjeans.webp
│   ├── wjacket.jpeg
│   ├── bsneakers.jpeg
│   ├── fallback.jpeg
└── product-page.html

Steps

Clone or Download the Project:

If using a repository, clone it: git clone <https://github.com/Nithin-Joshua7/Products.git>.
Alternatively, download the project files and extract them to a folder (e.g., project/).
Ensure all files (product-page.html, styles.css, script.js, and images/ folder) are in the correct structure as shown above.


Verify Images:

Confirm the images/ folder contains all required files:
black.jpeg, red.webp, blue.jpeg (T-shirt colors).
jeans.jpeg, jacket.jpeg, sneakers.jpg, bjeans.webp, wjacket.jpeg, bsneakers.jpeg (Pair Well With and bundle items).
fallback.jpeg (for image error handling).


Images should be at least 180px × 180px to avoid upscaling issues.


Set Up a Local Server:

Option 1: VS Code Live Server:
Open the project folder in VS Code.
Install the "Live Server" extension.
Right-click product-page.html → "Open with Live Server".
Browser opens at http://localhost:5500/product-page.html.



Test the Application:

Open the URL in a browser (e.g., Chrome or Firefox).
Desktop View:
Verify "Pair Well With" carousel scrolls horizontally with arrows.
Check cards are uniform (180px × 300px) and "Add to Cart" buttons are aligned.
Test modals, gallery, tabs, and "Buy These Together" section.


