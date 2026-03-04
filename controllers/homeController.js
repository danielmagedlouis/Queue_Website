exports.showHome = (req, res) => {
  res.render('pages/home', { title: 'Home - Queue Solutions', page: 'home' });
};