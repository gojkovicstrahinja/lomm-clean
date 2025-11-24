import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SERVICES, TESTIMONIALS, LOGO_URL } from './constants';
import { Icon } from './components/Icon';

const App: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });
      // Reset status after delay
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
          {/* Decorative Blob */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
          
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-blue-700 text-sm font-semibold">
                <Icon name="Check" className="w-4 h-4" />
                <span>Nürnbergs Nr. 1 für Sauberkeit</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Glänzende Ergebnisse für <span className="text-primary">Ihr Unternehmen</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl">
                L.O.M.M Clean ist Ihr zuverlässiger Partner für professionelle Gebäudereinigung in Nürnberg und Umgebung. Gründlich, pünktlich und fair.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="bg-primary hover:bg-blue-700 text-white text-center px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                >
                  Kostenloses Angebot
                </a>
                <a 
                  href="#services" 
                  onClick={(e) => scrollToSection(e, '#services')}
                  className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-center px-8 py-4 rounded-lg font-semibold transition-all hover:border-slate-300 cursor-pointer"
                >
                  Unsere Leistungen
                </a>
              </div>
              <div className="pt-6 flex items-center gap-6 text-slate-500 text-sm font-medium">
                <span className="flex items-center gap-1"><Icon name="Check" className="w-4 h-4 text-primary" /> Monatliche Pauschalen</span>
                <span className="flex items-center gap-1"><Icon name="Check" className="w-4 h-4 text-primary" /> Kurzfristige Termine</span>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="/images/cleaning.png" 
                    alt="Professionelle Reinigung eines Büros" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                    <p className="font-bold text-lg">Qualität, die man sieht.</p>
                  </div>
               </div>
               {/* Floating Badge */}
               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow hidden md:flex">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <Icon name="Sparkles" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Kundenzufriedenheit</p>
                    <p className="text-lg font-bold text-slate-900">100% Garantie</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Was wir tun</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Umfassende Reinigungslösungen</h3>
              <p className="text-slate-600">
                Egal ob Bürokomplex, Baustelle oder Privathaushalt – wir haben das passende Konzept für Ihre Bedürfnisse.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <div key={service.id} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon name={service.iconName} className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <a 
                    href="#contact" 
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all cursor-pointer"
                  >
                    Angebot anfragen <Icon name="Check" className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION (NEW) */}
        <section id="about" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded-2xl -z-0"></div>
              <img 
                src="/images/cleaning1.png" 
                alt="L.O.M.M Clean Team" 
                className="w-full h-auto rounded-2xl shadow-xl z-10 relative"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Über Uns</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Wir reinigen mit Leidenschaft</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Als in Nürnberg ansässiges Reinigungsunternehmen steht <strong>L.O.M.M Clean</strong> für Zuverlässigkeit, Gründlichkeit und vertrauensvolle Zusammenarbeit. Wir verstehen, dass saubere Räume die Visitenkarte Ihres Unternehmens sind.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded-full text-primary mt-1"><Icon name="Check" className="w-4 h-4" /></div>
                  <span className="text-slate-700">Erfahrenes und geschultes Personal</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded-full text-primary mt-1"><Icon name="Check" className="w-4 h-4" /></div>
                  <span className="text-slate-700">Verwendung umweltschonender Reinigungsmittel</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded-full text-primary mt-1"><Icon name="Check" className="w-4 h-4" /></div>
                  <span className="text-slate-700">Faire Preise und transparente Angebote</span>
                </li>
              </ul>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-colors cursor-pointer inline-block"
              >
                Team kennenlernen
              </a>
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold mb-4">Bereit für Sauberkeit?</h3>
              <p className="text-blue-100 text-lg mb-0">
                Lassen Sie uns gemeinsam für eine saubere Arbeitsatmosphäre sorgen. Wir erstellen Ihnen ein unverbindliches Angebot, maßgeschneidert auf Ihre Flächen.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-end">
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-white text-primary hover:bg-blue-50 px-8 py-4 rounded-lg font-bold shadow-lg transition-colors w-full md:w-auto text-center cursor-pointer"
              >
                Jetzt Kontakt aufnehmen
              </a>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Das sagen unsere Kunden</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {[1,2,3,4,5].map(i => <Icon key={i} name="Sparkles" className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION & CONTACT */}
        <section id="contact" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Info */}
              <div className="lg:w-1/3 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Kontaktieren Sie uns</h3>
                  <p className="text-slate-600 mb-8">
                    Haben Sie Fragen oder wünschen Sie ein individuelles Angebot? Wir sind für Sie da.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-primary">
                      <Icon name="MapPin" className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Anschrift</h4>
                      <p className="text-slate-600">Musterstraße 123<br/>90402 Nürnberg</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-primary">
                      <Icon name="Phone" className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Telefon</h4>
                      <p className="text-slate-600">+49 911 12345678</p>
                      <p className="text-sm text-slate-400">Mo-Fr: 8:00 - 18:00 Uhr</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-primary">
                      <Icon name="Mail" className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">E-Mail</h4>
                      <p className="text-slate-600">info@lomm-clean.de</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:w-2/3 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={formStatus !== 'idle'}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:bg-slate-50" 
                        placeholder="Max Mustermann" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">E-Mail</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={formStatus !== 'idle'}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:bg-slate-50" 
                        placeholder="max@beispiel.de" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Dienstleistung</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      disabled={formStatus !== 'idle'}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white disabled:bg-slate-50"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="Unterhaltsreinigung">Unterhaltsreinigung</option>
                      <option value="Grundreinigung">Grundreinigung</option>
                      <option value="Fensterreinigung">Fensterreinigung</option>
                      <option value="Baureinigung">Baureinigung</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nachricht</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4} 
                      required
                      disabled={formStatus !== 'idle'}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:bg-slate-50" 
                      placeholder="Wie können wir Ihnen helfen?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus !== 'idle'}
                    className={`w-full font-bold py-4 rounded-lg transition-all shadow-lg flex justify-center items-center gap-2
                      ${formStatus === 'success' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-primary hover:bg-blue-700 text-white'}
                      ${formStatus === 'loading' ? 'opacity-75 cursor-wait' : ''}
                    `}
                  >
                    {formStatus === 'loading' && <Icon name="Sparkles" className="animate-spin w-5 h-5" />}
                    {formStatus === 'success' ? 'Nachricht gesendet!' : (formStatus === 'loading' ? 'Wird gesendet...' : 'Nachricht senden')}
                    {formStatus === 'success' && <Icon name="Check" className="w-5 h-5" />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
           <div className="h-10 w-auto bg-white rounded p-1">
             <img src="/images/logo.png" alt="L.O.M.M Clean" className="h-full w-auto" />
           </div>
                <span className="text-xl font-bold text-white">L.O.M.M Clean</span>
              </div>
              <p className="max-w-sm mb-4">
                Ihr Partner für professionelle Sauberkeit in Nürnberg. Wir stehen für Qualität, Zuverlässigkeit und faire Preise.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="hover:text-white transition-colors cursor-pointer">Startseite</a></li>
                <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-white transition-colors cursor-pointer">Leistungen</a></li>
                <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-white transition-colors cursor-pointer">Über Uns</a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-white transition-colors cursor-pointer">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Rechtliches</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} L.O.M.M Clean. Alle Rechte vorbehalten.</p>
            <p>Made in Nürnberg</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;