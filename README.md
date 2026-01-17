# Emile Dimas - Portfolio Website

A modern, colorful portfolio website built with React and Vite, showcasing a multidisciplinary background in Machine Learning, Data Science, Software Engineering, Data Engineering, and DevOps.

## 🚀 Features

- **Modern Tech Stack**: React 18 + Vite for lightning-fast development
- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **Colorful & Creative**: Gradient designs and smooth animations
- **Sections Include**:
  - Hero with animated floating cards
  - About section highlighting polyvalent expertise
  - Skills organized by technical domains
  - Personal interests (Philosophy, Finance, Geopolitics)
  - Project showcase with sample projects
  - Contact form and social links

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Git

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/emiled16/emiled16.github.io.git
   cd emiled16.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   
   The production build will be in the `dist/` directory

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚢 Deployment to GitHub Pages

This repository is configured with automatic CI/CD deployment via GitHub Actions.

### Setup Instructions:

1. **Configure GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Build and deployment", select **GitHub Actions** as the source

2. **Update the base path** (if needed):
   - Open `vite.config.js`
   - Update the `base` property to match your repository name:
     ```javascript
     base: '/your-repo-name/'
     ```
   - For `username.github.io` repositories, use `base: '/'`

3. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

4. **Automatic Deployment**:
   - Every push to the `main` branch triggers the GitHub Actions workflow
   - The site is automatically built and deployed to GitHub Pages
   - Check the Actions tab to monitor deployment status

5. **Access your site**:
   - Your site will be live at: `https://emiled16.github.io/emiled16.github.io/`
   - Or `https://emiled16.github.io/` if using a user/organization page

## 📝 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and description
   - Update social media links (GitHub, LinkedIn, Email)

2. **About Section** (`src/components/About.jsx`):
   - Customize your bio and highlights

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skill categories
   - Update technologies for each domain

4. **Interests Section** (`src/components/Interests.jsx`):
   - Customize personal interests and topics

5. **Projects Section** (`src/components/Projects.jsx`):
   - Replace sample projects with your real projects
   - Update GitHub links and live demo URLs

6. **Contact Section** (`src/components/Contact.jsx`):
   - Update email address and social media handles
   - Connect form to a backend service (Formspree, EmailJS, etc.)

### Color Scheme

Colors are defined in `src/index.css` using CSS variables:

```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  --accent: #10b981;
  --dark: #1e293b;
  --light: #f8fafc;
}
```

## 📁 Project Structure

```
emiled16.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD workflow
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Top navigation bar
│   │   ├── Hero.jsx            # Landing section
│   │   ├── About.jsx           # About section
│   │   ├── Skills.jsx          # Technical skills
│   │   ├── Interests.jsx       # Personal interests
│   │   ├── Projects.jsx        # Project showcase
│   │   └── Contact.jsx         # Contact form & footer
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App styles
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── docs/                       # Project documentation
├── index.html                  # HTML entry point
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## 🔧 Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **React Icons**: Icon library
- **GitHub Actions**: CI/CD automation
- **GitHub Pages**: Hosting

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork it and adapt it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

- **Email**: emile.dimas@example.com
- **LinkedIn**: [linkedin.com/in/emile-dimas](https://linkedin.com/in/emile-dimas)
- **GitHub**: [github.com/emiled16](https://github.com/emiled16)

---

Built with ❤️ using React + Vite
