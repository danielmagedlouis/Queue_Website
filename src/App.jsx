import { useState } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Process from './pages/Process';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showForm, setShowForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false); // close mobile menu
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages = ['home', 'services', 'portfolio', 'process', 'contact'];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative font-sans">

      {/* Floating Social Sidebar */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6 hidden lg:flex">
        <a href="https://www.instagram.com/queue.solutions/" target="_blank" rel="noreferrer" className="social-btn">📱</a>
        <a href="https://www.facebook.com/profile.php?id=61585024646035" target="_blank" rel="noreferrer" className="social-btn" style={{ animationDelay: '0.2s' }}>f️</a>
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur transition-all">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <button onClick={() => navTo('home')} className="flex items-center gap-2 hover:opacity-80 transition">
            <img src="/queue-logo.jpeg" alt="Queue Solutions" className="h-10 w-10 object-contain rounded-full" />
            <span className="font-bold text-white text-lg tracking-wide">Queue Solutions</span>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {pages.map(page => (
              <button
                key={page}
                onClick={() => navTo(page)}
                className={`transition-all duration-200 ${
                  currentPage === page ? 'text-purple-400' : 'text-white/70 hover:text-white'
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex flex-col gap-1">
              <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-slate-900/95 backdrop-blur border-t border-white/10">
            <div className="flex flex-col items-center gap-6 py-6">
              {pages.map(page => (
                <button
                  key={page}
                  onClick={() => navTo(page)}
                  className={`text-lg font-medium transition ${
                    currentPage === page ? 'text-purple-400' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Page Content */}
      <main className="pt-20 transition-all duration-300">
        {currentPage === 'home' && <Home navTo={navTo} setShowForm={setShowForm} />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'process' && <Process />}
        {currentPage === 'contact' && <Contact setShowForm={setShowForm} />}
      </main>

      {/* Contact Form Modal */}
      {showForm && <ContactForm setShowForm={setShowForm} />}
    </div>
  );
}

// Social button styles
const socialBtnClass = `flex h-14 w-14 items-center justify-center rounded-full border border-purple-500/30 bg-purple-600/20 text-2xl transition hover:scale-110 hover:border-purple-500/60 hover:bg-purple-600/40 animate-float`;

// Contact Form Modal
function ContactForm({ setShowForm }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', idea: '' });

  const handleInputChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailBody = `
New Project Inquiry
Name: ${formData.name}
Email: ${formData.email || 'Not provided'}
Phone: ${formData.phone}
Project Idea:
${formData.idea}
    `;
    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(emailBody);

    try {
      const response = await fetch('https://formspree.io/f/xyzazpje', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `New Project Inquiry from ${formData.name}`
        })
      });

      if (response.ok) {
        alert('Thank you! Your inquiry has been sent successfully.');
        setFormData({ name: '', email: '', phone: '', idea: '' });
        setShowForm(false);
      } else {
        window.location.href = `mailto:queuesolutions25@gmail.com?subject=${subject}&body=${body}`;
      }
    } catch {
      window.location.href = `mailto:queuesolutions25@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur p-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl animate-fadeIn">
        <h2 className="text-2xl font-bold text-white mb-2">Start Your Project</h2>
        <p className="text-white/70 mb-6">Tell us about your idea</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your name" required onChange={handleInputChange} value={formData.name} className="input-field" />
          <input type="email" name="email" placeholder="Email (optional)" onChange={handleInputChange} value={formData.email} className="input-field" />
          <input type="tel" name="phone" placeholder="Phone number" required onChange={handleInputChange} value={formData.phone} className="input-field" />
          <textarea name="idea" placeholder="Your project idea" rows="4" required onChange={handleInputChange} value={formData.idea} className="input-field" />

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={() => setShowForm(false)} className="flex-1 cancel-btn">Cancel</button>
            <button type="submit" className="flex-1 submit-btn">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Tailwind input & button reusable classes
const inputField = "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-purple-500/50 focus:outline-none transition";
const cancelBtn = "flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-medium text-white transition hover:bg-white/10";
const submitBtn = "flex-1 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-3 font-medium text-white transition hover:scale-[1.02]";