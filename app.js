const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.get('/', (req, res) => {
  res.render('pages/home', { title: 'Home - Queue Solutions' });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About - Queue Solutions' });
});

app.get('/services', (req, res) => {
  res.render('pages/services', { title: 'Services - Queue Solutions' });
});

app.get('/projects', (req, res) => {
  const projects = [
    { title: 'AI Dashboard', category: 'AI Automations' },
    { title: 'E-Commerce Template', category: 'Template Websites' },
    { title: 'Custom Mobile App', category: 'Mobile Applications' }
  ];
  res.render('pages/projects', { title: 'Projects - Queue Solutions', projects });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact - Queue Solutions', success: false, error: null });
});

app.post('/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) {
    return res.render('pages/contact', { title: 'Contact - Queue Solutions', success: false, error: 'Please fill in all required fields.' });
  }
  res.render('pages/contact', { title: 'Contact - Queue Solutions', success: true, error: null });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('pages/404', { title: 'Page Not Found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Queue Solutions website running on port ${PORT}`);
});
