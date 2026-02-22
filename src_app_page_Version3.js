'use client';

import React, { useState } from 'react';
import { Mail, Phone, Euro, Truck, ShieldCheck, MapPin, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-slate-900/80 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide">NordMaterial</h1>
        <nav className="space-x-8 hidden md:block text-sm">
          <a href="#home" className="hover:text-amber-400 transition">Úvod</a>
          <a href="#vyhody" className="hover:text-amber-400 transition">Výhody</a>
          <a href="#reference" className="hover:text-amber-400 transition">Reference</a>
          <a href="#kontakt" className="hover:text-amber-400 transition">Kontakt</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex items-center justify-center px-6 py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Nakupujeme elektromateriál v EU
            <br />
            <span className="text-amber-400">Vy šetříte náklady v ČR</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Zajišťujeme výhodné nákupy elektromateriálu napříč EU a jeho dovoz do České republiky.
            Pomáháme investorům, developerům i realizačním firmám snížit náklady bez kompromisu v kvalitě.
          </p>
          <a href="#kontakt">
            <button className="text-lg px-10 py-6 rounded-2xl shadow-2xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold transition">
              Nezávazná kalkulace úspory
            </button>
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="vyhody" className="px-6 py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Proč spolupracovat s NordMaterial</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Optimalizujeme nákupní proces, využíváme cenové rozdíly v rámci EU a zajišťujeme kompletní logistiku až na stavbu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="rounded-2xl bg-slate-800 border border-slate-700 shadow-xl p-8 text-center space-y-4 hover:border-amber-400 transition">
            <Euro className="w-10 h-10 mx-auto text-amber-400" />
            <h4 className="text-xl font-semibold">Maximální úspora</h4>
            <p className="text-slate-400 text-sm">
              Vyhledáváme nejvýhodnější nabídky výrobců a distributorů v rámci EU.
              Díky tomu dosahujeme výrazných úspor oproti běžným cenám v ČR.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800 border border-slate-700 shadow-xl p-8 text-center space-y-4 hover:border-amber-400 transition">
            <Truck className="w-10 h-10 mx-auto text-amber-400" />
            <h4 className="text-xl font-semibold">Kompletní logistika</h4>
            <p className="text-slate-400 text-sm">
              Zajišťujeme dopravu, koordinaci dodávek i časování podle harmonogramu stavby.
              Vy se soustředíte na realizaci projektu.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800 border border-slate-700 shadow-xl p-8 text-center space-y-4 hover:border-amber-400 transition">
            <ShieldCheck className="w-10 h-10 mx-auto text-amber-400" />
            <h4 className="text-xl font-semibold">Garance kvality</h4>
            <p className="text-slate-400 text-sm">
              Spolupracujeme pouze s ověřenými evropskými dodavateli.
              Materiál splňuje všechny normy a požadavky pro použití v ČR.
            </p>
          </div>
        </div>
      </section>

      {/* Reference Section */}
      <section id="reference" className="px-6 py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Na NordMaterial se můžete spolehnout</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Nechte nás Vám ušetřit čas a peníze.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700">
            <CheckCircle className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">5+ let zkušeností</h4>
            <p className="text-slate-400 text-sm">S evropskými dodavateli</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700">
            <CheckCircle className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">250+ projektů</h4>
            <p className="text-slate-400 text-sm">Úspěšně realizováno</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700">
            <CheckCircle className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Až 40% úspory</h4>
            <p className="text-slate-400 text-sm">Oproti místním cenám</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 text-center border border-slate-700">
            <CheckCircle className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">24/7 podpora</h4>
            <p className="text-slate-400 text-sm">Během realizace</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="px-6 py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Zjistěte, kolik můžete ušetřit</h3>
            <p className="text-slate-400">
              Pošlete nám poptávku nebo rozpočet projektu.
              Připravíme vám cenové srovnání a návrh řešení.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:info@nordmaterial.com" className="text-slate-400 hover:text-amber-400 transition">
                    info@nordmaterial.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Telefon</h4>
                  <a href="tel:+420776007689" className="text-slate-400 hover:text-amber-400 transition">
                    +420 776 007 689
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Sídlo</h4>
                  <p className="text-slate-400">
                    Havířov, Česká republika<br />
                    <span className="text-sm">Síť partnerů v EU</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {submitted && (
                <div className="bg-green-900/30 border border-green-700 rounded-lg p-4 text-green-400 text-sm">
                  ✓ Vaše zpráva byla odeslána! Brzy se vám ozveme.
                </div>
              )}

              <input
                type="text"
                name="name"
                placeholder="Vaše jméno *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Váš email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
              />

              <input
                type="text"
                name="company"
                placeholder="Název firmy"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
              />

              <textarea
                name="message"
                placeholder="Popis projektu a požadavků..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold py-3 rounded-lg transition disabled:opacity-50"
              >
                {loading ? 'Odesílám...' : 'Odeslat poptávku'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 px-6 py-8 text-center text-slate-500 text-sm">
        <p>&copy; 2026 NordMaterial. Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
}