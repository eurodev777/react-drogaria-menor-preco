import React from "react";
import { X, ShieldCheck, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "policy" | "terms" | null;
}

export function Modal({ isOpen, onClose, type }: ModalProps) {
  if (!isOpen || !type) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-h-[85vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-red-50/20">
            <div className="flex items-center gap-2.5 text-brand-blue">
              {type === "policy" ? (
                <>
                  <ShieldCheck className="w-5.5 h-5.5 text-brand-red" />
                  <h3 className="font-display font-extrabold text-lg">Política de Privacidade</h3>
                </>
              ) : (
                <>
                  <FileText className="w-5.5 h-5.5 text-brand-blue" />
                  <h3 className="font-display font-extrabold text-lg">Termos de Uso</h3>
                </>
              )}
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 text-gray-500 flex items-center justify-center border border-gray-200/50 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto text-sm text-gray-600 space-y-4 leading-relaxed font-sans">
            {type === "policy" ? (
              <>
                <p className="font-bold text-gray-800">1. Compromisso com a Segurança e Privacidade</p>
                <p>
                  A <strong>Drogaria Menor Preço</strong> respeita a sua privacidade e garante a segurança dos dados pessoais fornecidos em nosso site e em nosso atendimento via WhatsApp. Em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), coletamos apenas as informações estritamente necessárias para a realização e entrega segura dos seus pedidos.
                </p>
                
                <p className="font-bold text-gray-800">2. Quais dados coletamos?</p>
                <p>
                  Para a entrega de produtos farmacêuticos e contato de pós-venda, podemos solicitar através dos nossos canais autorizados de WhatsApp: Nome completo, endereço completo de entrega, número de telefone com WhatsApp e dados necessários para faturamento e emissão de cupom fiscal de medicamentos.
                </p>

                <p className="font-bold text-gray-800">3. Uso das Informações</p>
                <p>
                  Seus dados são utilizados exclusivamente para processar pedidos, calcular fretes, realizar a entrega em domicílio em Taguatinga/Brasília e enviar promoções periódicas de medicamentos ou perfumarias, caso previamente autorizado por você. Seus dados nunca serão compartilhados, vendidos ou alugados para terceiros.
                </p>

                <p className="font-bold text-gray-800">4. Direitos do Usuário</p>
                <p>
                  Você pode, a qualquer momento, solicitar a exclusão definitiva de seus dados de nosso banco de contatos de WhatsApp, bastando enviar uma mensagem para nossa equipe de atendimento manifestando seu desejo.
                </p>
              </>
            ) : (
              <>
                <p className="font-bold text-gray-800">1. Aceitação dos Termos</p>
                <p>
                  Ao navegar pelo site da <strong>Drogaria Menor Preço</strong> ou realizar pedidos através de nossos botões integrados de WhatsApp, você declara estar de acordo com as condições de serviço estabelecidas neste termo.
                </p>

                <p className="font-bold text-gray-800">2. Pedidos, Valores e Promoções</p>
                <p>
                  As promoções exibidas neste site são por tempo limitado (conforme indicado pelo nosso cronômetro ativo). Os valores e ofertas dos produtos podem ser atualizados diariamente de acordo com a disponibilidade de estoque ou alterações de tabelas de preços farmacêuticos. A compra será efetivada e confirmada diretamente através de nosso canal oficial de WhatsApp.
                </p>

                <p className="font-bold text-gray-800">3. Política de Entrega</p>
                <p>
                  Oferecemos entrega gratuita em Taguatinga, Brasília - DF, exclusivamente para pedidos cujo valor total de produtos atinja ou ultrapasse <strong>R$ 25,00</strong>. Para pedidos com valor inferior a R$ 25,00, será aplicada uma taxa fixa de entrega de R$ 7,00, a ser confirmada com o atendente antes do envio.
                </p>

                <p className="font-bold text-gray-800">4. Atendimento Farmacêutico</p>
                <p>
                  Em conformidade com as normas da ANVISA, certos medicamentos exigem a apresentação de receita médica física ou digital para a liberação da entrega. A foto da receita deverá ser enviada no WhatsApp durante o atendimento, e a receita física original será coletada pelo nosso entregador no ato do recebimento.
                </p>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end">
            <button 
              onClick={onClose}
              className="bg-brand-blue hover:bg-brand-blue-hover text-white font-bold px-6 py-2 rounded-xl text-sm transition-colors cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
