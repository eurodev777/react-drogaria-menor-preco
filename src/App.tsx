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
  const DISPLAY_PHONE = "(61) 99999-9999";

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans selection:bg-brand-blue selection:text-white pb-16">
      {/* 1. Urgent Countdown Bar */}
      <CountdownTimer />

      {/* 2. Main Logo & Trust Header */}
      <Header />

      {/* Main Linktree Centered Content */}
      <main className="max-w-xl mx-auto px-4 pt-8 pb-12 space-y-8">
        
        {/* Linktree Profile Card Container */}
        <div className="bg-white rounded-3xl border-2 border-slate-200/80 p-6 sm:p-8 shadow-xl shadow-slate-100 space-y-7 relative overflow-hidden text-center">
          
          {/* Subtle colorful backing glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-brand-red/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl -z-10" />

          {/* Profile Logo Badge (Linktree Style) */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-brand-blue to-brand-blue-hover p-1 shadow-lg shadow-brand-blue/15">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-black text-brand-blue text-2xl tracking-tighter border-2 border-slate-50">
                MP
              </div>
            </div>
            
            <div className="space-y-1">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Drogaria <span className="text-brand-red">Menor Preço</span>
              </h2>
              <p className="text-base font-extrabold text-brand-blue leading-relaxed">
                Há 6 anos cuidando da sua saúde em Taguatinga
              </p>
            </div>
          </div>

          {/* High-Contrast Quick Status Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-4.5 py-2 rounded-2xl text-xs sm:text-sm font-black border border-emerald-200 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Aberto agora 08:00 - 22:00
            </span>
            <span className="inline-flex items-center gap-1.5 bg-brand-red/5 text-brand-red px-4.5 py-2 rounded-2xl text-xs sm:text-sm font-black border border-brand-red/10 shadow-sm">
              🛵 Entrega Super Rápida
            </span>
          </div>

          {/* Direct CTA hook */}
          <div className="bg-amber-50/75 border border-amber-200/80 rounded-2xl p-4.5 text-center shadow-inner">
            <p className="text-sm sm:text-base font-black text-amber-950 leading-snug">
              Peça agora e receba em casa! <span className="block sm:inline text-brand-red underline decoration-2">Entrega gratuita a partir de R$ 25,00</span>
            </p>
          </div>

          {/* Clean Stack of Primary Linktree Buttons (Highly Visible / Elderly-Friendly) */}
          <div className="space-y-3.5 pt-1">
            
            {/* Button 1: Pedir no WhatsApp */}
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20pelo%20WhatsApp.`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-teal-950 py-4.5 px-6 rounded-2xl font-black text-lg transition-all flex justify-center items-center gap-2.5 shadow-lg shadow-emerald-500/20 active:scale-[0.98] cursor-pointer border border-emerald-400/30"
            >
              <span className="text-xl sm:text-2xl">🟢</span>
              <span>Clique e Peça no WhatsApp</span>
            </a>

            {/* Button 2: WhatsApp Receita (Double placement for high compliance/ease) */}
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20enviar%20uma%20foto%20da%20minha%20receita%20para%20fazer%20um%20pedido.`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-teal-950 py-4.5 px-6 rounded-2xl font-black text-lg transition-all flex justify-center items-center gap-2.5 shadow-lg shadow-emerald-500/20 active:scale-[0.98] cursor-pointer border border-emerald-400/30"
            >
              <span className="text-xl sm:text-2xl">📸</span>
              <span>Clique e Peça no WhatsApp</span>
            </a>

            {/* Direct Phone Call Button (Crucial helper for seniors) */}
            <a 
              href={`tel:${WHATSAPP_NUMBER}`}
              className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-4 px-6 rounded-2xl font-black text-base transition-all flex justify-center items-center gap-2.5 shadow-md shadow-brand-blue/15 active:scale-[0.98] cursor-pointer border border-brand-blue/20"
            >
              <PhoneCall className="w-5 h-5 text-white" />
              <span>Ligar Direto: {DISPLAY_PHONE}</span>
            </a>

          </div>

          {/* High-Contrast Structured Address Container */}
          <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl space-y-2 text-center group">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">📍 Endereço da Drogaria</p>
            <div className="space-y-0.5 text-slate-800">
              <p className="text-base font-extrabold leading-snug">Colônia Agrícola Samambaia</p>
              <p className="text-sm font-bold">CH 131 LOTE 2A LOJA 4</p>
              <p className="text-xs font-semibold text-slate-500">Taguatinga, Brasília - DF</p>
            </div>
            
            <a 
              href="https://maps.google.com/?q=Drogaria+Menor+Preço+Colônia+Agrícola+Samambaia+Taguatinga"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-blue hover:underline pt-2 cursor-pointer"
            >
              🗺️ Ver localização no mapa do celular
            </a>
          </div>

          {/* Simple Senior Assist Badge */}
          <div className="text-center pt-1 border-t border-slate-100">
            <p className="text-[11px] text-slate-400 font-extrabold uppercase tracking-wider">
              👴👵 Ideal para idosos • Sem cadastros complicados • Atendimento rápido
            </p>
          </div>

        </div>

      </main>

      {/* 3. Instagram Integrated Feed (Rendered right below) */}
      <InstagramSection />

      {/* 4. Full Catalog / Offers Section (Scroll target for catalog) */}
      <PromoOffers />

      {/* 5. Address, Opening Hours & Location Preview */}
      <LocationSection />

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

      {/* 8. Pulsing Floating WhatsApp Button (Desktop Only) */}
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
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-teal-950 p-4 rounded-full shadow-2xl shadow-emerald-500/30 hidden sm:flex items-center justify-center cursor-pointer border border-emerald-400/20 group"
        title="Falar no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-20 group-hover:scale-125 transition-transform animate-ping" />
        <MessageCircle className="w-7 h-7 fill-teal-950 text-emerald-500" />
      </motion.a>

      {/* 9. Sticky Mobile Footer Bar for Elderly/Google Ads (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-4 py-3.5 shadow-[0_-8px_24px_rgba(0,0,0,0.15)] sm:hidden flex items-center justify-between gap-3 animate-[slideUp_0.3s_ease-out]">
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20pelo%20WhatsApp.`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-teal-950 font-black py-3.5 px-4 rounded-2xl text-center text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-md shadow-emerald-500/10"
        >
          <span className="w-2.5 h-2.5 bg-white rounded-full animate-ping" />
          <span>🟢 PEDIR PELO WHATSAPP AGORA</span>
        </a>
        <a 
          href={`tel:${WHATSAPP_NUMBER}`}
          className="bg-brand-blue hover:bg-brand-blue-hover text-white p-3.5 rounded-2xl flex items-center justify-center border border-brand-blue shadow-md shadow-brand-blue/10 shrink-0"
          title="Ligar para a Farmácia"
        >
          <PhoneCall className="w-5.5 h-5.5" />
        </a>
      </div>
    </div>
  );
}
