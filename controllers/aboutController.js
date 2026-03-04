exports.showAbout = (req, res) => {
  res.render('pages/about', { title: 'About Us - Queue Solutions', page: 'about' });
};