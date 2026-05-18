# Discover Taiwan - Astro One-Page Theme 🇹🇼

A high-performance, fully responsive, content-driven single-page (One-Page) website theme built with **Astro** and **Tailwind CSS**. Originally crafted to showcase the breathtaking beauty of Taiwan (migrated from Mozilla Solo), this theme features a highly modular layout and a strict "separation of content and style." It is perfectly suited for anyone looking to quickly deploy personal portfolios, corporate landing pages, or event promotional sites.

---

## ✨ Core Features

- **🚀 Extreme Performance**: Powered by the modern Astro framework. It delivers zero client-side JavaScript by default, resulting in lightning-fast loading speeds and perfect Core Web Vitals.
- **📱 Fluid Responsive Design (RWD)**: Built from the ground up with Tailwind CSS. It features a hardware-accelerated mobile drawer menu and perfectly adapts from small smartphone screens to large desktop monitors.
- **🖼️ Native Image Optimization**: Utilizes Astro's native asset pipeline to automatically generate multi-width responsive WebP images. It serves lightweight assets to mobile devices on 4G networks while rendering crystal-clear, high-pixel graphics on high-DPI (Retina) or 2K/4K displays. Enhanced with `fetchpriority="high"` for critical hero images to maximize LCP performance.
- **🗂️ Content & Data Driven**: All text content, navigation configurations, external links, and image asset paths are centrally managed within a single data hub: `src/data/siteData.json`. You can completely customize the website content without writing a single line of HTML/CSS code.
- **📸 Premium Zero-Dependency Gallery**: Integrated with the latest **Fancybox v5** (`@fancyapps/ui`). Rewritten entirely in pure Vanilla JS with zero jQuery dependencies, it provides smooth touch gestures, smart mobile navigation arrows, slide indexing, and an immersive lightbox layout.
- **✉️ Form Integration**: Pre-configured with an AJAX contact form via Web3Forms, allowing you to securely receive visitor messages directly in your inbox without setting up a backend server.
- **🛡️ Distraction-Free Custom 404 Page**: Includes a localized, full-screen `404.astro` error page tailored specifically for single-page applications. It strips out broken anchor navigation links to ensure a flawless user experience and includes proper meta tags to prevent search engines from indexing error pages.
- **🔍 SEO & Social Share Optimization**: Fully semantic HTML structure pre-configured with Open Graph (OG) and Twitter Card tags to automatically pull rich snippet previews when sharing links on social media platforms.

---

## 🚀 Getting Started

### 1. Install Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed on your local machine. Clone or download this repository, navigate to the project root directory, and run the following command in your terminal to install the required packages:

```bash
npm install
```

### 2. Configure Environment Variables (Contact Form)

This theme leverages [Web3Forms](https://web3forms.com/) to process form submissions.

1. Visit the Web3Forms official website and register for a free **Access Key**.
2. Create a file named `.env` in the root directory of your project (on the same level as `package.json`).
3. Add your unique access key to the `.env` file:

```env
PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

*(Note: The `.env` file is already listed in `.gitignore` to prevent your private credentials from accidentally leaking on public repositories.)*

### 3. Start the Local Development Server

```bash
npm run dev
```

Once the development server initializes, open your browser and navigate to `http://localhost:4321`. The setup features Hot Module Replacement (HMR)—any edits made to your components or JSON data files will instantly reflect in the browser without reloading the page.

---

## 🛠️ Customization Guide

The architecture cleanly isolates visual layout layers from structured content fields, allowing you to transform this theme into your own dedicated website with minimal effort:

### 📝 1. Modifying Text Fields and Links

Open **`src/data/siteData.json`**.
Almost every piece of user-facing copy—including navigation menus, CTA buttons, section headings, custom image captions, and footer copyright data—is controlled here. Updating values inside this JSON file automatically synchronizes changes across all layout structures.

### 🖼️ 2. Swapping Visual Assets

* **Hero / Section Backgrounds**: Place your high-resolution graphics into the `src/assets/` directory and update the corresponding filenames inside the `.astro` templates or the central site configuration JSON.
* **Photo Gallery Grid**: Simply drop your image assets into `src/assets/gallery/` and append or modify the image metadata entries in the `gallery` block within `siteData.json`. The dynamic grid automatically recalibrates masonry alignments.
* **Social Preview Image (OG Image)**: Save a standard `1200x630` pixels graphical asset under the filename `og-image.jpg` and place it directly inside the `public/` folder.

### ✍️ 3. Introducing Dedicated Editorial Content

The core structure fully supports rich semantic Markdown rendering. Navigate to `src/content/article/` and edit the `.md` content files. You can use standard Markdown tags alongside Frontmatter variables (such as explicit `imageCaption` metadata with native HTML anchor support) to render immersive, typographic-focused content layouts.

---

## 📦 Bundling & Deployment

When you are ready to ship your website to a production environment, execute the build wrapper command:

```bash
npm run build
```

The Astro compiler will run deep static analysis, compile your layouts into pure static HTML, minimize CSS assets, trigger responsive picture slicing, and generate a fully optimized target distribution bundle inside the local `dist/` directory.

You can drop the contents of the `dist/` directory onto any modern static web hosting service, such as **Cloudflare Pages**, GitHub Pages, Vercel, or Netlify, to experience instantaneous global load times.

---

## 📄 License

This project is licensed under the MIT License.
