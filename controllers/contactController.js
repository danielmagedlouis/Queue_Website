exports.showContact = (req, res) => {
  res.render('pages/contact', { title: 'Contact Us - Queue Solutions', success: false, error: null, page: 'contact' });
};

exports.handleForm = (req, res) => {
  const { name, email, phone, message } = req.body;
  // simple server-side validation
  if (!name || !email || !message) {
    return res.render('pages/contact', { title: 'Contact Us - Queue Solutions', success: false, error: 'Please fill in all required fields.', page: 'contact' });
  }
  // normally you'd save to DB or send an email
  res.render('pages/contact', { title: 'Contact Us - Queue Solutions', success: true, error: null, page: 'contact' });
};