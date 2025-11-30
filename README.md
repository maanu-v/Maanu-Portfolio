# Maanu Portfolio

A modern, responsive personal portfolio website built with React and Vite, featuring smooth animations and an eye-catching design.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Smooth Animations**: Powered by Framer Motion for fluid, professional animations
- **Dynamic Background**: Interactive animated background with floating particles
- **Modern UI/UX**: Clean, contemporary design with smooth transitions and hover effects
- **Comprehensive Sections**:
  - Hero section with animated introduction
  - About section with personal information
  - Experience timeline
  - Project showcase
  - Skills display with visual indicators
  - Education history
  - Contact information with social links

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Animation Library**: Framer Motion 12.23.24
- **Icons**: React Icons 5.5.0
- **Styling**: Vanilla CSS with modern features
- **Code Quality**: ESLint with React-specific rules

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Maanu-Portfolio
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build

Create a production build:
```bash
npm run build
```

The optimized files will be generated in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
Maanu-Portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Background.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── assets/          # Images and other assets
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Project dependencies
└── vite.config.js       # Vite configuration
```

## 🎨 Customization

To customize the portfolio for your own use:

1. Update personal information in the component files
2. Replace project data in `Projects.jsx`
3. Update skills in `Skills.jsx`
4. Modify experience and education in their respective components
5. Update contact information in `Contact.jsx`
6. Customize colors and styles in `index.css`

## 🌐 Deployment

This project can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Other platforms**: Any static hosting service that supports React applications

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Maanu**

Feel free to reach out for any questions or collaborations!

---

Built with ❤️ using React and Vite
