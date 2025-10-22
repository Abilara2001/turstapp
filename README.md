# TrustApp - Charitable Trust Website

A modern, responsive website for a charitable trust organization built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices and screen sizes
- **Modern UI/UX**: Clean, elegant design with smooth animations
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **React Router**: Client-side routing for seamless navigation
- **Framer Motion**: Smooth animations and transitions
- **Form Handling**: Contact and donation forms with validation
- **Interactive Gallery**: Photo gallery with filtering and modal view
- **Team Management**: Member profiles and team information
- **Cause Management**: Dynamic cause listing with progress tracking

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── BackToTop.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── CausesPage.tsx
│   ├── DonatePage.tsx
│   ├── MembersPage.tsx
│   ├── GalleryPage.tsx
│   └── ContactPage.tsx
├── hooks/              # Custom React hooks
│   ├── useForm.ts
│   └── useScrollToTop.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── helpers.ts
├── data/               # Mock data
│   └── mockData.ts
├── assets/             # Static assets
├── App.tsx             # Main App component
├── App.css             # App-specific styles
└── index.css           # Global styles with Tailwind
```

## 🛠️ Technologies Used

- **React 19** - Frontend library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Hook Form** - Form handling
- **Yup** - Form validation

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trustapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📱 Pages

- **Home** - Hero section, stats, featured causes, and call-to-action
- **About Us** - Mission, vision, values, team leadership, and achievements
- **Our Causes** - List of causes with filtering, search, and progress tracking
- **Donate** - Donation form with amount selection and payment processing
- **Members** - Team member profiles with search and filtering
- **Gallery** - Photo gallery and upcoming events
- **Contact** - Contact form, office information, and FAQ

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6)
- **Secondary**: Green (#22c55e)
- **Accent**: Orange (#f97316)
- **Neutral**: Gray scale

### Typography
- **Headings**: Inter (Bold)
- **Body**: Inter (Regular)
- **Serif**: Merriweather (for special content)

### Components
- Consistent button styles with hover effects
- Card components with shadows and animations
- Form inputs with validation states
- Responsive grid layouts

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

### Modifying Data
- Update mock data in `src/data/mockData.ts`
- Modify types in `src/types/index.ts` if needed

### Styling
- Global styles in `src/index.css`
- Component-specific styles in `src/App.css`
- Tailwind configuration in `tailwind.config.js`

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Styling by [Tailwind CSS](https://tailwindcss.com/)
- Images from [Placeholder.com](https://placeholder.com/)

## 📞 Support

For support or questions, please contact us at info@trustapp.org or through our contact form on the website.