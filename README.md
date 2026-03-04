# Queue Solutions - Production Ready Website

A premium, multi-page company website for Queue Solutions built with Node.js, Express.js, EJS, and Tailwind CSS.

## 🚀 Features

- **5+ Professional Pages**: Home, About, Services, Projects, and Contact
- **Premium Design**: Dark purple/blue gradient with glassmorphism effects
- **Responsive**: Fully mobile-optimized design
- **Modern Animations**: Smooth transitions and hover effects
- **Form Validation**: Client-side and server-side validation
- **Clean MVC Architecture**: Organized routes, controllers, and views
- **SaaS-Level UI**: Professional, conversion-optimized design

## 📁 Project Structure

```
Queue_Website/
├── app.js                     # Express server setup
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
│
├── routes/
│   ├── index.js             # Main routes
│   └── contact.js           # Contact form routes
│
├── controllers/
│   ├── homeController.js
│   ├── aboutController.js
│   ├── servicesController.js
│   ├── projectsController.js
│   └── contactController.js
│
├── views/
│   ├── layouts/
│   │   └── main.ejs
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   └── pages/
│       ├── home.ejs
│       ├── about.ejs
│       ├── services.ejs
│       ├── projects.ejs
│       ├── contact.ejs
│       └── 404.ejs
│
└── public/
    ├── css/
    │   └── styles.css
    └── js/
        └── main.js
```

## 🛠️ Installation

```bash
npm install
```

## ▶️ Running the Server

```bash
npm start
```

Visit `http://localhost:3000`

## 📧 Contact

- Email: hello@queuesolutions.com
- Phone: +1 (234) 567-890

## 📄 License

MIT
