# Vinkimya - Premium Chemical Solutions Website

A modern, multi-language React/Next.js website for Vinkimya, a leading chemical company. Built with stunning animations, professional design, and full i18n support.

## Features

✨ **Multi-Language Support**
- English
- Urdu (اردو)
- Turkish (Türkçe)
- Arabic (العربية)

🎨 **Modern Design**
- Green and white color scheme (matching Vinkimya branding)
- Professional layout with smooth animations
- Fully responsive design for all devices
- Minimalist aesthetic with Tailwind CSS

📱 **Pages Included**
- **Home** - Hero section with company highlights
- **About Us** - Company vision, mission, and values
- **Products** - Filterable product catalog with dropdown categories
- **Exclusive Olive Oil** - Premium product showcase page
- **Contact Us** - Contact form and location information
- **FAQ** - Frequently asked questions
- **Reviews** - Customer testimonials and statistics
- **Company Profile** - Detailed company information and timeline
- **Privacy Policy** - Privacy and data protection policy
- **Terms & Conditions** - Website terms of service

🎯 **Key Components**
- Header with language switcher and mobile navigation
- Footer with links, contact info, and social media
- Product dropdown filter system
- Smooth animations and hover effects
- Contact form with validation
- Responsive grid layouts

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: JSX/React 19
- **Styling**: Tailwind CSS 4
- **Internationalization**: react-i18next
- **Icons**: Lucide React
- **Animations**: Tailwind CSS animations

## Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Project Structure

```
/app
  /about
  /products
  /olive-oil
  /contact
  /faq
  /reviews
  /company
  /privacy
  /terms
  layout.tsx
  page.jsx
  globals.css

/components
  Header.jsx
  Footer.jsx
  Home.jsx
  About.jsx
  Products.jsx
  OliveOil.jsx
  Contact.jsx
  FAQ.jsx
  Reviews.jsx
  CompanyProfile.jsx
  App.jsx
  I18nProvider.jsx

/locales
  en.json
  ur.json
  tr.json
  ar.json

/lib
  i18n.jsx
```

## Language Support

The website automatically detects the user's browser language and displays content accordingly. Users can manually switch languages using the language selector in the header.

**Supported Languages:**
- English (en)
- Urdu (ur) - اردو
- Turkish (tr) - Türkçe
- Arabic (ar) - العربية

To add a new language:
1. Create a new translation file in `/locales/` (e.g., `fr.json`)
2. Add it to the i18n configuration in `/lib/i18n.jsx`
3. Add the language option to the language switcher in `/components/Header.jsx`

## Customization

### Colors
The website uses a green and white color scheme. To customize:
- Update Tailwind CSS classes in components (search for `green-` and `white`)
- Modify color values in `tailwind.config.ts` if needed

### Add Products
Edit `/components/Products.jsx` and add items to the `allProducts` array:
```javascript
{
  id: 9,
  name: 'Your Product Name',
  category: 'category-name',
  description: 'Product description',
}
```

### Contact Information
Update contact details in:
- `/components/Footer.jsx` - Social links and contact info
- `/components/Contact.jsx` - Contact form and address details

## Features Explained

### Product Filtering
The Products page includes a dropdown menu to filter products by category:
- All Products
- Cleaning Agents
- Industrial Chemicals
- Specialty Products
- Pharmaceutical

Users can select a category to view only products in that category.

### Multi-Language
All content is translatable through JSON files in `/locales/`. The website respects browser language preferences and allows manual language switching.

### Responsive Design
The website is fully responsive and works seamlessly on:
- Desktop devices (1920px and above)
- Tablets (768px - 1024px)
- Mobile devices (320px - 767px)

### Animations
The website includes smooth animations:
- Fade-in effects on page load
- Hover scale effects on cards
- Smooth transitions on buttons
- Dropdown menu animations
- Accordion effects on FAQ

## Deployment

To deploy to Vercel:

```bash
# Push to GitHub (if using Git)
git push origin main

# Or deploy directly from Vercel dashboard
# Import the repository and deploy
```

## Support

For questions or customization needs, contact Vinkimya at:
- Email: info@vinkimya.com
- Website: www.vinkimya.com

## License

This project is proprietary to Vinkimya. All rights reserved.
