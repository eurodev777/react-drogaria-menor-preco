import React, { useState } from "react";
import { MapPin, Compass, Copy, Check, ExternalLink, Calendar, Map } from "lucide-react";
import { motion } from "motion/react";

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  const addressText = "Colônia Agrícola Samambaia, CH 131 LOTE 2A LOJA 4, Taguatinga, Brasília - DF";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mapUrl = "https://maps.app.goo.gl/f93BaeqxRMuCk1pT7";

  return (
    <section id="location-section" className="max-w-6xl mx-auto px-4 py-16 space-y-10">
      
      {/* Title */}
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-display font-extrabold text-gray-900 tracking-tight">
          Nossa Localização
        </h3>
        <p className="text-gray-500 max-w-lg mx-auto text-sm sm:text-base">
          Venha nos fazer uma visita e garanta o melhor atendimento presencial de Taguatinga.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Card: Full Address & Operating Hours Info */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-8">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center border border-blue-100">
                <MapPin className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Visite nossa loja física</h4>
                <p className="text-xs text-gray-400">Estacionamento fácil e gratuito</p>
              </div>
            </div>

            {/* Structured Address */}
            <div className="space-y-2 bg-gray-50 p-5 rounded-2xl border border-gray-200/60 relative group">
              <p className="text-sm font-extrabold text-brand-blue uppercase tracking-wider">Endereço Oficial</p>
              <div className="space-y-1.5">
                <p className="text-base font-bold text-gray-800 leading-snug">
                  Colônia Agrícola Samambaia
                </p>
                <p className="text-sm font-semibold text-gray-600">
                  CH 131 LOTE 2A LOJA 4
                </p>
                <p className="text-sm font-semibold text-gray-600">
                  Taguatinga, Brasília - DF
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={handleCopyAddress}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-200/80 text-gray-700 font-bold py-3.5 px-4 rounded-xl text-sm transition-all border border-gray-200/40"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-brand-red" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Endereço</span>
                </>
              )}
            </button>
            
            <a 
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md shadow-brand-blue/10"
            >
              <Compass className="w-4 h-4" />
              <span>Abrir no GPS</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>

          {/* Hours Card */}
          <div className="border-t border-gray-100 pt-6 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
              <Calendar className="w-4 h-4 text-brand-blue" />
              <span>Horário de Funcionamento</span>
            </div>
            <div className="flex items-center justify-between bg-red-50/50 px-4 py-2.5 rounded-xl border border-red-100/50">
              <span className="text-sm font-medium text-brand-blue">Segunda a Domingo</span>
              <span className="text-sm font-bold text-brand-red">08:00 às 22:00</span>
            </div>
          </div>

        </div>

        {/* Right: Immersive Styled Map Card */}
        <div className="lg:col-span-7 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between overflow-hidden group">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-full bg-slate-100 border border-gray-100">
            
            {/* Custom high fidelity styled map graphic with marker */}
            <div className="absolute inset-0 bg-red-50/10 flex flex-col items-center justify-center p-8 text-center space-y-4">
              {/* Map grid aesthetic */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#2723B6_1px,transparent_1px),linear-gradient(to_bottom,#2723B6_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Fake road networks for maps feel */}
              <div className="absolute top-1/3 left-0 right-0 h-4 bg-brand-blue/10 -rotate-6" />
              <div className="absolute bottom-1/4 left-0 right-0 h-4 bg-brand-red/10 rotate-12" />
              <div className="absolute top-0 bottom-0 left-1/3 w-6 bg-brand-blue/10 rotate-45" />

              {/* Real Marker Card */}
              <div className="relative bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3.5 max-w-sm z-10 hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow-md shrink-0">
                  <MapPin className="w-5.5 h-5.5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-extrabold text-brand-red uppercase tracking-wider leading-none">Drogaria Menor Preço</p>
                  <p className="text-sm font-bold text-gray-800 leading-tight mt-1">Colônia Agrícola Samambaia</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">CH 131 Lote 2A Loja 4</p>
                </div>
              </div>

              {/* Directions Prompt overlay */}
              <a 
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-brand-blue border border-gray-100 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md hover:bg-white transition-all z-10"
              >
                <Map className="w-3.5 h-3.5" />
                Ver no Mapa Interativo
              </a>
            </div>

            {/* Google Map real responsive iframe fallback - provides incredible real world utility */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.631824924747!2d-48.03948782475215!3d-15.823355823669054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a33f2a680b1f3%3A0xa9e50389df31226!2sDrogaria%20Menor%20Pre%C3%A7o!5e0!3m2!1spt-BR!2sbr!4v1782847035374!5m2!1spt-BR!2sbr" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>

          </div>
        </div>

      </div>

    </section>
  );
}
