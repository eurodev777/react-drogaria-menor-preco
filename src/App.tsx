import React, { useState } from "react";
import { MessageCircle, PhoneCall, Award, HelpCircle, Heart, Star, Sparkles } from "lucide-react";
import { CountdownTimer } from "./components/CountdownTimer";
import { Header } from "./components/Header";
import { PromoOffers } from "./components/PromoOffers";
import { InstagramSection } from "./components/InstagramSection";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";
import { motion } from "motion/react";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"policy" | "terms" | null>(null);

  const openModal = (type: "policy" | "terms") => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
  };

  const WHATSAPP_NUMBER = "5561999999999";

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-800 font-sans selection:bg-teal-500 selection:text-white">
      {/* 1. Urgent Countdown Bar */}
      <CountdownTimer />

      {/* 2. Main Logo & Trust Header */}
      <Header />

      {/* 3. Hero, Special Promotion & Interactive Shopping Cart */}
      <main className="pb-16 space-y-6">
        
        {/* Geometric Balance Hero Section */}
        <div className="bg-white border-b border-slate-200 py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Hero branding from the theme */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                  Há <span className="text-brand-red">6 anos</span> cuidando da sua saúde em Taguatinga
                </h2>
                <p className="text-lg sm:text-xl text-slate-500 font-medium">
                  Qualidade, confiança e os menores preços da região com entrega rápida e segura.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-left">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-red-50 text-brand-red rounded-xl flex items-center justify-center mb-4 border border-red-100 font-extrabold">
                    ✓
                  </div>
                  <h3 className="font-bold text-slate-900">Entrega Grátis</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">A partir de R$ 25,00 em toda Taguatinga e Colônia Agrícola Samambaia.</p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-4 border border-blue-100 font-extrabold">
                    📍
                  </div>
                  <h3 className="font-bold text-slate-900">Localização Fácil</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">Colônia Agrícola Samambaia, CH 131 LOTE 2A LOJA 4, Brasília - DF.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => {
                    const el = document.getElementById("promo-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue-hover text-white py-4 px-8 rounded-xl font-bold text-base transition-all flex justify-center items-center gap-3 shadow-lg shadow-brand-blue/10 cursor-pointer hover:-translate-y-0.5"
                >
                  <span>Ver Promoções do Dia</span>
                  <span className="text-lg">↓</span>
                </button>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Drogaria%20Menor%20Pre%C3%A7o.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-teal-950 py-4 px-8 rounded-xl font-bold text-base transition-all flex justify-center items-center gap-2 shadow-md hover:-translate-y-0.5"
                >
                  <span>Falar no WhatsApp</span>
                  <span className="text-lg">➔</span>
                </a>
              </div>
            </div>

            {/* Right side: Modern interactive display or trust panel */}
            <div className="lg:col-span-5 bg-gradient-to-tr from-slate-50 to-slate-100 p-8 rounded-3xl border border-slate-200 shadow-inner flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl -z-10" />
              
              <div className="space-y-4">
                <span className="bg-brand-blue/15 text-brand-blue text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-md">
                  Diferenciais Drogaria Menor Preço
                </span>
                <h4 className="text-xl font-extrabold text-slate-800">Cuidado de Verdade</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Oferecemos medicamentos originais com procedência garantida. Nosso compromisso é aliar o menor preço com o melhor atendimento da região.
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-brand-red rounded-full" />
                  <span className="text-sm font-bold text-slate-700 font-sans">100% Medicamentos de Procedência</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-brand-blue rounded-full" />
                  <span className="text-sm font-bold text-slate-700 font-sans">Atendimento Humanizado no WhatsApp</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-brand-red rounded-full" />
                  <span className="text-sm font-bold text-slate-700 font-sans">Entrega Expressa Todos os Dias</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between shadow-sm">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Aberto Hoje até</p>
                  <p className="text-sm font-extrabold text-slate-800">22:00 da Noite</p>
                </div>
                <div className="bg-emerald-50 text-emerald-700 font-extrabold px-3 py-1 rounded-lg text-xs border border-emerald-100">
                  Aberto agora
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Catalog and ordering engine */}
        <PromoOffers />

        {/* 4. Instagram Integrated and curated feed */}
        <InstagramSection />

        {/* 5. Address, Opening Hours & Location Preview */}
        <LocationSection />

      </main>

      {/* 6. Legal / Smooth Scrolling Footer */}
      <Footer 
        onOpenPolicy={() => openModal("policy")} 
        onOpenTerms={() => openModal("terms")} 
      />

      {/* 7. Animated legal modals */}
      <Modal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        type={modalType} 
      />

      {/* 8. Pulsing Floating WhatsApp Button */}
      <motion.a
        id="floating-whatsapp"
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Drogaria%20Menor%20Pre%C3%A7o.`}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-teal-950 p-4 rounded-full shadow-2xl shadow-emerald-500/30 flex items-center justify-center cursor-pointer border border-emerald-400/20 group"
        title="Falar no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-20 group-hover:scale-125 transition-transform animate-ping" />
        <MessageCircle className="w-7 h-7 fill-teal-950 text-emerald-500" />
      </motion.a>
    </div>
  );
}
