exports.showProjects = (req, res) => {
  // mock data
  const projects = [
    { title: 'AI Dashboard', category: 'AI Automations' },
    { title: 'E-Commerce Template', category: 'Template Websites' },
    { title: 'Custom Mobile App', category: 'Mobile Applications' }
  ];
  res.render('pages/projects', { title: 'Projects - Queue Solutions', projects, page: 'projects' });
};