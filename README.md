# Creative Digital Agency Website

A modern, fully responsive creative digital agency website built with React, TypeScript, and TailwindCSS.

![Website Preview](https://99c971b2c1cf4ef2a6f78e3ce014a8e5-f51857a29aec4f59b897365a0.fly.dev/)

## 🚀 Live Demo

[View Live Website](https://99c971b2c1cf4ef2a6f78e3ce014a8e5-f51857a29aec4f59b897365a0.fly.dev/)

## ✨ Features

- **Complete Multi-Page Website** with 9+ pages
- **Responsive Design** - Works on all devices
- **Modern Tech Stack** - React 18, TypeScript, TailwindCSS
- **Shared Components** - Reusable Header/Footer across all pages
- **Interactive Elements** - Hover effects, animations, forms
- **Professional Design** - Dark theme with yellow accents

## 📱 Pages Included

- **Homepage** - Hero, services, portfolio, testimonials
- **About Us** - Team, process, company story
- **Services** - Service listing and individual detail pages
- **Portfolio** - Project showcase and detail pages  
- **Blog** - Blog listing and article detail pages
- **Contact** - Contact form and information

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS 3 + Radix UI components
- **Routing**: React Router 6
- **Backend**: Express.js (integrated)
- **Build Tool**: Vite
- **Testing**: Vitest

## 🏗️ Project Structure

```
client/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (buttons, cards, etc.)
│   ├── Header.tsx       # Shared navigation header
│   └── Footer.tsx       # Shared footer
├── pages/               # Page components
│   ├── Index.tsx        # Homepage
│   ├── About.tsx        # About page
│   ├── Services.tsx     # Services listing
│   ├── ServiceDetails.tsx # Individual service pages
│   ├── Portfolio.tsx    # Portfolio listing
│   ├── PortfolioDetails.tsx # Individual portfolio pages
│   ├── Blog.tsx         # Blog listing
│   ├── BlogDetails.tsx  # Individual blog posts
│   └── Contact.tsx      # Contact page
└── App.tsx              # Router setup

server/                  # Express backend
└── routes/              # API endpoints

shared/                  # Shared types
└── api.ts               # API interfaces
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd creative-agency-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Design Features

- **Dark Theme** with professional gray color scheme
- **Yellow Accents** for CTAs and highlights
- **Consistent Typography** using modern font stack
- **Smooth Animations** and hover effects
- **Mobile-First** responsive design
- **Accessible** UI components

## 🔧 Key Components

### Shared Header
- Dynamic active page highlighting
- Responsive mobile menu
- Consistent navigation across all pages

### Shared Footer
- Service links and resources
- Social media integration
- Newsletter subscription

### Page Features
- **Services**: Individual detail pages with FAQs
- **Portfolio**: Project showcases with case studies
- **Blog**: Article system with categories and search
- **Contact**: Functional contact form

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Built With Love

Created with modern web technologies and best practices for performance, accessibility, and maintainability.

---

⭐ Star this repo if you found it helpful!
