import React, { useState, useEffect } from "react";
import { Clock, ShieldCheck, HeartPulse, Sparkles, Heart } from "lucide-react";
import { motion } from "motion/react";

export function Header() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Determine if open now based on 08:00 to 22:00 hours
    const checkOpenStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      if (hours >= 8 && hours < 22) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header id="main-header" className="relative bg-white border-b border-slate-200 px-4 py-5 shrink-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and title */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="bg-brand-red p-2 rounded-xl shadow-md shrink-0">
            <Heart color="blue" size={30} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-brand-blue leading-none tracking-tight">
              Drogaria <span className="text-brand-red">Menor Preço</span>
            </h1>
          </div>
        </div>

        {/* Operating hours & badges */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="text-center md:text-right">
            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Aberto agora</p>
            <p className="text-base font-extrabold text-slate-800">08:00 - 22:00</p>
          </div>

          <div className="flex items-center gap-2">
            {isOpen ? (
              <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl text-xs font-bold border border-emerald-200 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Aberto agora
              </span>
            ) : (
              <span className="flex items-center gap-1.5 bg-amber-50 text-amber-700 px-4 py-2 rounded-xl text-xs font-bold border border-amber-200 shadow-sm">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                Fechado agora
              </span>
            )}

            <div className="flex items-center gap-1 bg-slate-50 text-slate-500 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-brand-blue" />
              <span>Todos os dias</span>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
