import React from "react";
import { Instagram, MapPin, ShieldCheck, FileText, HeartPulse } from "lucide-react";

interface FooterProps {
  onOpenPolicy: () => void;
  onOpenTerms: () => void;
}

export function Footer({ onOpenPolicy, onOpenTerms }: FooterProps) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand/About */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-blue text-white flex items-center justify-center font-extrabold text-base">
                <HeartPulse className="w-5 h-5 text-white animate-pulse" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                Drogaria Menor Preço
              </span>
            </div>
            <p className="text-sm text-slate-300/70 leading-relaxed max-w-sm">
              Sua saúde em primeiro lugar. Há 6 anos oferecendo o menor preço de Taguatinga e região, com medicamentos originais e atendimento de excelência.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-brand-red">Navegação</h5>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              {/* <li>
                <button 
                  onClick={() => handleScrollTo("promo-section")} 
                  className="hover:text-brand-red transition-colors cursor-pointer text-left"
                >
                  Super Promoções
                </button>
              </li> */}
              <li>
                <button 
                  onClick={() => handleScrollTo("instagram-section")} 
                  className="hover:text-brand-red transition-colors cursor-pointer text-left"
                >
                  Instagram Feed
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("location-section")} 
                  className="hover:text-brand-red transition-colors cursor-pointer text-left"
                >
                  Onde Estamos
                </button>
              </li>
            </ul>
          </div>

          {/* Policies & Institutional Links */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-brand-blue">Institucional</h5>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li>
                <a 
                  href="https://www.instagram.com/men0rpreco/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 hover:text-brand-red transition-colors"
                >
                  <Instagram className="w-4 h-4 text-brand-red shrink-0" />
                  <span>Instagram Oficial</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenPolicy} 
                  className="flex items-center gap-2 hover:text-brand-red transition-colors text-left cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Política de Privacidade</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenTerms} 
                  className="flex items-center gap-2 hover:text-brand-red transition-colors text-left cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Termos de Uso</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("location-section")} 
                  className="flex items-center gap-2 hover:text-brand-red transition-colors text-left cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Localização e Horários</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row: copyright */}
        <div className="border-t border-slate-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© 2025 Drogaria Menor Preço. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Taguatinga, Brasília - DF</span>
            <span>•</span>
            <span>CNPJ: 27.397.190/0001-89</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
