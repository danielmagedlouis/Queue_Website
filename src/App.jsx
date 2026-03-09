import { useState } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Process from './pages/Process';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showForm, setShowForm] = useState(false);

  const navTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Floating Social Sidebar */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6 hidden lg:flex">
        <a
          href="https://www.instagram.com/queue.solutions/"
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-purple-500/30 bg-purple-600/20 text-2xl transition hover:scale-110 hover:border-purple-500/60 hover:bg-purple-600/40 animate-float"
        >
          📱
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61585024646035"
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-purple-500/30 bg-purple-600/20 text-2xl transition hover:scale-110 hover:border-purple-500/60 hover:bg-purple-600/40 animate-float"
          style={{ animationDelay: '0.2s' }}
        >
          f️
        </a>
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => navTo('home')}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
          >
            <img src="/queue-logo.jpeg" alt="Queue Solutions" className="h-10 w-10 object-contain" />
            <span className="font-semibold">Queue</span>
          </button>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => navTo('home')} className={`transition ${currentPage === 'home' ? 'text-purple-400' : 'text-white/70 hover:text-white'}`}>Home</button>
            <button onClick={() => navTo('services')} className={`transition ${currentPage === 'services' ? 'text-purple-400' : 'text-white/70 hover:text-white'}`}>Services</button>
            <button onClick={() => navTo('portfolio')} className={`transition ${currentPage === 'portfolio' ? 'text-purple-400' : 'text-white/70 hover:text-white'}`}>Portfolio</button>
            <button onClick={() => navTo('process')} className={`transition ${currentPage === 'process' ? 'text-purple-400' : 'text-white/70 hover:text-white'}`}>Process</button>
            <button onClick={() => navTo('contact')} className={`transition ${currentPage === 'contact' ? 'text-purple-400' : 'text-white/70 hover:text-white'}`}>Contact</button>
          </nav>

          <button
            onClick={() => setShowForm(true)}
            className="rounded-lg bg-purple-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-purple-700"
          >
            Start Project
          </button>
        </div>
      </header>

      {/* Page Content */}
      <main className="pt-20">
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

function ContactForm({ setShowForm }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', idea: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xyzazpje', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || 'noreply@queuesolutions.com',
          phone: formData.phone,
          idea: formData.idea,
          _subject: `New Project Inquiry from ${formData.name}`
        })
      });

      if (response.ok) {
        alert('Thank you! Your inquiry has been sent successfully. We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', idea: '' });
        setShowForm(false);
      } else {
        // Fallback: Open email client with pre-filled details
        const emailContent = `
New Project Inquiry

Name: ${formData.name}
Email: ${formData.email || 'Not provided'}
Phone: ${formData.phone}

Project Idea:
${formData.idea}
        `;
        const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
        const body = encodeURIComponent(emailContent);
        window.location.href = `mailto:queuesolutions25@gmail.com?subject=${subject}&body=${body}`;
      }
    } catch (error) {
      // Error: Open email client with pre-filled details
      const emailContent = `
New Project Inquiry

Name: ${formData.name}
Email: ${formData.email || 'Not provided'}
Phone: ${formData.phone}

Project Idea:
${formData.idea}
      `;
      const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
      const body = encodeURIComponent(emailContent);
      window.location.href = `mailto:queuesolutions25@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur p-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-2">Start Your Project</h2>
        <p className="text-white/70 mb-6">Tell us about your idea</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your name" required onChange={handleInputChange} value={formData.name} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-purple-500/50 focus:outline-none" />
          <input type="email" name="email" placeholder="Email (optional)" onChange={handleInputChange} value={formData.email} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-purple-500/50 focus:outline-none" />
          <input type="tel" name="phone" placeholder="Phone number" required onChange={handleInputChange} value={formData.phone} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-purple-500/50 focus:outline-none" />
          <textarea name="idea" placeholder="Your project idea" rows="4" required onChange={handleInputChange} value={formData.idea} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-purple-500/50 focus:outline-none" />

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={() => setShowForm(false)} className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-medium text-white transition hover:bg-white/10">Cancel</button>
            <button type="submit" className="flex-1 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-3 font-medium text-white transition hover:scale-[1.02]">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}