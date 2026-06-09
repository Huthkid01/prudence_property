# Prudence Property

A modern, professional, responsive real estate and property management website built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React.js** – UI library
- **React Router** – Client-side routing
- **Vite** – Build tool and dev server
- **Tailwind CSS v4** – Utility-first styling
- **Framer Motion** – Page and scroll animations
- **React Icons** – Icon library
- **FormSubmit** – Contact and career form submissions to email

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## FormSubmit Setup

Contact and career forms send submissions to **info@prudenceproperty.com** via [FormSubmit](https://formsubmit.co/).

1. Submit a test message through the Contact page (after deploying or on localhost).
2. Check **info@prudenceproperty.com** for a FormSubmit activation email and click the confirmation link.
3. After activation, all form submissions will arrive in that inbox.

Career applications support resume file attachments (PDF, DOC, DOCX).

## Project Structure

```
src/
├── components/
│   ├── forms/          # ContactForm, CareerForm
│   ├── gallery/        # GalleryGrid, Lightbox
│   ├── layout/         # Navbar, Footer, Layout
│   └── ui/             # Reusable UI components
├── data/
│   └── content.js      # Static content and configuration
├── hooks/
│   └── useFormSubmit.js # FormSubmit integration
├── pages/              # Route pages
├── App.jsx
├── main.jsx
└── index.css
```

## Pages

| Page     | Route       |
|----------|-------------|
| Home     | `/`         |
| About    | `/about`    |
| Services | `/services` |
| Gallery  | `/gallery`  |
| Careers  | `/careers`  |
| Contact  | `/contact`  |

## Color Palette

| Role       | Hex       |
|------------|-----------|
| Primary    | `#0F172A` |
| Secondary  | `#1E40AF` |
| Accent     | `#F59E0B` |
| Background | `#FFFFFF` |

## License

Private – Prudence Property
