import React, { useState } from "react";
import { Truck, ShoppingBag, Plus, Minus, Send, Check, AlertCircle, ShoppingCart, TicketPercent, ShoppingBasket, Pill } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface OfferItem {
  id: string;
  name: string;
  category: string;
  oldPrice: number;
  newPrice: number;
  imageColor: string; // Tailwind colors to render beautiful clean vector graphics
  iconText: string;
  description: string;
}

export function PromoOffers() {
  const WHATSAPP_NUMBER = "556133518138"; // Placeholder, standard Brasília (61) DDD

  const offers: OfferItem[] = [
    {
      id: "1",
      name: "3 Caixas de Nimesulida",
      category: "Medicamentos",
      oldPrice: 12.43,
      newPrice: 9.99,
      imageColor: "from-amber-400 to-orange-500",
      iconText: <Pill />,
      description: "Alívio da dor e inflamação",
    },
    {
      id: "2",
      name: "3 Caixas de Neosoro",
      category: "Medicamentos",
      oldPrice: 19.60,
      newPrice: 11.99,
      imageColor: "from-amber-400 to-orange-500",
      iconText: <Pill />,
      description: "Alívio na congestão nasal",
    },
    {
      id: "3",
      name: "3 Caixas de Losartana",
      category: "Medicamentos",
      oldPrice: 17.97,
      newPrice: 9.99,
      imageColor: "from-amber-400 to-orange-500",
      iconText: <Pill />,
      description: "Auxilia no controle da pressão alta",
    },
  ];

  // Cart state: Record of itemId -> quantity
  const [cart, setCart] = useState<Record<string, number>>({});
  const [typedAddress, setTypedAddress] = useState("");

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] <= 1) {
        delete updated[id];
      } else {
        updated[id] -= 1;
      }
      return updated;
    });
  };

  const getCartTotal = () => {
    return (Object.entries(cart) as [string, number][]).reduce((total, [id, qty]) => {
      const item = offers.find((o) => o.id === id);
      return total + (item ? item.newPrice * qty : 0);
    }, 0);
  };

  const getCartCount = () => {
    return (Object.values(cart) as number[]).reduce((a, b) => a + b, 0);
  };

  const isFreeDelivery = getCartTotal() >= 25.00;

  const formatPrice = (value: number) =>
    value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const handleSendOrder = () => {
      const total = getCartTotal();
      if (total === 0) return;
    
      const frete = isFreeDelivery ? 0 : 7;
    
      const items = (Object.entries(cart) as [string, number][])
        .map(([id, qty]) => {
          const item = offers.find((o) => o.id === id);
          if (!item) return "";
    
          return [
            `• ${qty}x ${item.name}`,
            `  R$ ${formatPrice(item.newPrice * qty)}`,
          ].join("\n");
        })
        .filter(Boolean)
        .join("\n\n");
    
      const message = [
        "*NOVO PEDIDO - Drogaria Menor Preço*",
        "",
        "*Itens do pedido*",
        "",
        items,
        "",
        "------------------------------",
        "*RESUMO*",
        `Subtotal: R$ ${formatPrice(total)}`,
        `Frete: ${isFreeDelivery ? "Grátis" : "R$ 7,00"}`,
        `Total: R$ ${formatPrice(total + frete)}`,
        "",
        "*Endereço*",
        typedAddress.trim() || "A combinar no atendimento.",
        "",
        "_Pedido enviado pelo site._",
      ].join("\n");
    
      console.log(message);
    
      window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;
    };

  return (
    <section id="promo-section" className="max-w-6xl mx-auto px-4 py-12 space-y-12">

      {/* Delivery Call-To-Action Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-r from-brand-blue to-brand-blue-hover rounded-3xl p-6 sm:p-10 text-white shadow-xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-20 -translate-y-20 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-red/20 rounded-full -translate-x-10 translate-y-10 blur-xl" />

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 z-10">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 bg-white/20 text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Truck className="w-4 h-4 animate-bounce" /> Entrega Expressa
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
              Peça agora e receba em casa!
            </h2>
            <p className="text-blue-50 text-base sm:text-lg font-medium leading-relaxed">
              Entrega totalmente <span className="font-extrabold text-white underline underline-offset-4">GRATUITA</span> em toda Taguatinga para pedidos a partir de <span className="font-extrabold text-white">R$ 25,00</span>!
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Drogaria%20Menor%20Pre%C3%A7o.%20Vi%20as%20promo%C3%A7%C3%B5es%20no%20site.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-teal-950 font-extrabold px-8 py-4 rounded-2xl shadow-lg hover:shadow-emerald-400/20 transition-all text-center group"
            >
              <Send className="w-5 h-5 fill-current group-hover:translate-x-1 transition-transform" />
              Clique e Peça no WhatsApp
            </a>
          </div>
        </div>
      </motion.div>

      {/* Offers Catalog & Cart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Grid of Product Offers */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-2xl font-display font-bold text-gray-900 flex items-center gap-2">
                <ShoppingBasket size={34} /> Super Promoções do Dia
              </h3>
              <p className="text-sm text-gray-500">
                Economia de verdade com frete grátis facilitado.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {offers.map((item) => {
              const qtyInCart = cart[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Item Image & Badge Container */}
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.imageColor} flex items-center justify-center text-3xl shadow-sm`}>
                        {item.iconText}
                      </div>
                      {/* <span className="bg-rose-50 text-rose-600 px-2.5 py-1 rounded-full text-xs font-bold">
                        50% OFF
                      </span> */}
                    </div>

                    {/* <span className="text-[10px] uppercase font-extrabold tracking-wider text-brand-red bg-red-50 px-2 py-0.5 rounded-md">
                      {item.category}
                    </span> */}
                    <h4 className="font-bold text-gray-800 text-lg mt-2 group-hover:text-brand-blue transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Pricing and CTA */}
                  <div className="mt-5 pt-4 border-t border-gray-50">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-xs text-gray-400 line-through">
                        R$ {item.oldPrice.toFixed(2)}
                      </span>
                      <span className="text-xl font-extrabold text-brand-red">
                        R$ {item.newPrice.toFixed(2)}
                      </span>
                    </div>

                    {qtyInCart > 0 ? (
                      <div className="flex items-center justify-between bg-red-50 rounded-xl p-1.5 border border-red-100">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand-red font-extrabold hover:bg-red-100 transition-colors shadow-sm"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-bold text-brand-blue text-sm">{qtyInCart} no carrinho</span>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-brand-red font-extrabold hover:bg-red-100 transition-colors shadow-sm"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item.id)}
                        className="w-full bg-brand-blue hover:bg-brand-blue-hover active:bg-brand-blue text-white font-bold py-2 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Adicionar ao Carrinho
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* WhatsApp Checkout Box (Cart) */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-gray-50 rounded-3xl p-6 border border-gray-200/60 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Seu Pedido</h4>
                  <p className="text-xs text-gray-500">Enviar para WhatsApp</p>
                </div>
              </div>
              {getCartCount() > 0 && (
                <span className="bg-brand-blue/15 text-brand-blue text-xs font-extrabold px-2.5 py-1 rounded-full">
                  {getCartCount()} itens
                </span>
              )}
            </div>

            <AnimatePresence mode="popLayout">
              {getCartCount() === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-3"
                >
                  <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-500">Adicione ofertas para montar seu carrinho!</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {/* List of items */}
                  <div className="max-h-48 overflow-y-auto divide-y divide-gray-100 pr-1 space-y-2">
                    {(Object.entries(cart) as [string, number][]).map(([id, qty]) => {
                      const item = offers.find((o) => o.id === id);
                      if (!item) return null;
                      return (
                        <div key={id} className="flex items-center justify-between pt-2 first:pt-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-brand-blue bg-blue-50 px-1.5 py-0.5 rounded">
                              {qty}x
                            </span>
                            <span className="text-sm font-medium text-gray-700 line-clamp-1">{item.name}</span>
                          </div>
                          <span className="text-sm font-bold text-gray-800">
                            R$ {(item.newPrice * qty).toFixed(2)}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Delivery Threshold Alert */}
                  <div className={`p-3 rounded-2xl flex items-start gap-2.5 text-xs ${isFreeDelivery ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' : 'bg-amber-50 text-amber-800 border border-amber-100'}`}>
                    {isFreeDelivery ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <p className="font-medium">
                          Parabéns! Você atingiu o valor de <b>R$ 25,00</b>. Sua entrega em Taguatinga será <b>GRATUITA</b>!
                        </p>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">
                            Faltam apenas <b>R$ {(25.00 - getCartTotal()).toFixed(2)}</b> para ganhar <b>Entrega Gratuita</b>!
                          </p>
                          <p className="text-[10px] text-amber-600 mt-0.5">Fixo de R$ 7,00 para frete abaixo de R$ 25.</p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Address input */}
                  <div className="space-y-1.5 pt-2">
                    <label htmlFor="address-input" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                      Endereço de Entrega (Opcional)
                    </label>
                    <textarea
                      id="address-input"
                      value={typedAddress}
                      onChange={(e) => setTypedAddress(e.target.value)}
                      placeholder="Ex: Quadra 3, Lote 12, Taguatinga..."
                      rows={2}
                      className="w-full bg-white border border-gray-200 rounded-xl p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all placeholder:text-gray-400"
                    />
                  </div>

                  {/* Pricing Total Breakdown */}
                  <div className="bg-white rounded-2xl p-4 border border-gray-200/60 space-y-2 text-sm shadow-inner">
                    <div className="flex justify-between text-gray-500">
                      <span>Subtotal</span>
                      <span>R$ {getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Frete</span>
                      <span>{isFreeDelivery ? "Grátis" : "R$ 7,00"}</span>
                    </div>
                    <div className="flex justify-between text-base font-extrabold text-gray-900 border-t border-gray-100 pt-2">
                      <span>Total</span>
                      <span>R$ {(getCartTotal() + (isFreeDelivery ? 0 : 7)).toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Send CTA */}
                  <button
                    onClick={handleSendOrder}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-teal-950 font-extrabold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/10 hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4 fill-current" />
                    Enviar Pedido no WhatsApp
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

    </section>
  );
}
