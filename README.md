# KidZone Daycare - Mall Booking System

A React-based web application for booking daycare services at a shopping mall. The system provides a comprehensive booking interface with interactive time selection and responsive design for both desktop and mobile users.

## 🎯 Project Overview

This is a modern daycare booking system built with React and Vite, featuring:
- **Interactive booking form** with child and parent information
- **Custom time clock component** for appointment scheduling
- **Responsive design** optimized for all device sizes
- **Email integration** for booking confirmations
- **Pickup number system** for secure child collection

## 🏗️ Architecture

The application follows a component-based architecture with clean separation of concerns:

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Hero.jsx            # Landing section
│   ├── Booking.jsx         # Main booking form
│   ├── Services.jsx        # Services showcase
│   ├── Contact.jsx         # Contact information
│   ├── Footer.jsx          # Footer component
│   └── TimeClock.jsx       # Interactive time picker
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
├── index.css              # Global styles
└── App.css                # App-specific styles
```

## 🚀 Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.2** - Fast build tool and dev server
- **CSS3** - Custom styling with responsive design

### Development Tools
- **ESLint** - Code linting and quality
- **@vitejs/plugin-react** - React support for Vite

### External Services
- **EmailJS** - Email service integration for booking confirmations

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup
1. Clone the repository
```bash
git clone [repository-url]
cd Testing_1
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint code quality checks |
| `npm run preview` | Preview production build locally |

## 🎨 Key Features

### 1. Interactive Booking System
- **Multi-step form** with validation
- **Child information** collection (name, age, special needs)
- **Parent/guardian details** with emergency contacts
- **Appointment scheduling** with duration selection

### 2. Custom Time Clock Component
- **Draggable clock hands** for intuitive time selection
- **AM/PM toggle** functionality
- **Time range display** (start time + 2 hours)
- **Visual feedback** during interaction

### 3. Responsive Design
- **Mobile-first** approach
- **Flexible layouts** that work on all screen sizes
- **Touch-friendly** interface elements

### 4. Booking Confirmation System
- **Unique pickup numbers** generated for each booking
- **Print ticket** functionality
- **Email confirmations** via EmailJS integration

## 🏪 Business Logic

### Service Details
- **Location**: Central Mall, Level 2 (Next to Food Court)
- **Hours**: Monday - Sunday, 9:00 AM - 10:00 PM
- **Age Range**: 6-15 years
- **Cost**: Completely FREE service
- **Duration Options**: 1-4 hours or full day (8 hours)

### Services Offered
- Indoor playground and active play
- Arts and crafts activities
- Educational games and storytelling
- Professional supervision by certified staff
- Healthy snacks and refreshments
- Quiet rest areas for tired children

## 🔧 Component Documentation

### TimeClock Component
**Location**: `src/components/TimeClock.jsx`

A sophisticated time picker with draggable clock hands:
- **Props**: `value`, `onChange`, `required`
- **Features**: Interactive hour/minute selection, AM/PM toggle
- **Output**: Time range format (e.g., "09:00-11:00")

### Booking Component
**Location**: `src/components/Booking.jsx`

Main booking interface handling:
- Form validation and submission
- Integration with TimeClock component
- Pickup number generation
- EmailJS integration for confirmations

## 🎨 Styling

The application uses a combination of:
- **CSS custom properties** for consistent theming
- **Flexbox and Grid** for layouts
- **Media queries** for responsive behavior
- **CSS animations** for interactive elements

Main color scheme:
- Primary: Various shades of blue and purple
- Accent: Orange/yellow for call-to-action elements
- Background: Clean whites and light grays

## 🔧 Configuration Files

### Vite Configuration
**File**: `vite.config.js`
- React plugin integration
- Development server settings

### ESLint Configuration
**File**: `eslint.config.js`
- React-specific linting rules
- Code quality enforcement

### HTML Template
**File**: `index.html`
- Contains fallback HTML content
- Includes EmailJS SDK
- Progressive enhancement approach

## 🚀 Deployment

### Build Process
```bash
npm run build
```
Creates optimized production build in `dist/` directory.

### Deployment Options
- **Static hosting** (Netlify, Vercel, GitHub Pages)
- **CDN deployment** for global distribution
- **Traditional web servers** (Apache, Nginx)

## 🔒 Security Considerations

- **Input validation** on all form fields
- **XSS prevention** through React's built-in escaping
- **Email integration** via secure EmailJS service
- **No sensitive data** stored client-side

## 🐛 Troubleshooting

### Common Issues
1. **Dependencies not installing**: Clear `node_modules` and run `npm install`
2. **Build failures**: Check Node.js version (v16+ required)
3. **Email not sending**: Verify EmailJS configuration
4. **Styling issues**: Check CSS import paths

### Development Tips
- Use React DevTools for component debugging
- Check browser console for JavaScript errors
- Verify network requests in DevTools
- Test on multiple devices and browsers

## 🤝 Contributing

1. Follow existing code style and conventions
2. Test changes on multiple devices
3. Ensure ESLint passes: `npm run lint`
4. Build successfully: `npm run build`

## 📞 Contact Information

**Email**: nurullailizawawi@gmail.com  
**Phone**: (+60)018-9880 789  
**Business**: KelanaMall Daycare Services

---

## 📋 Project Status

✅ **Completed Features**
- Responsive booking interface
- Interactive time selection
- Email integration
- Mobile optimization

🔄 **Future Enhancements**
- User authentication system
- Admin dashboard for bookings
- Real-time availability checking
- Multi-language support

---

*This documentation covers the complete KidZone Daycare booking system. For technical support or feature requests, please contact the development team.*
