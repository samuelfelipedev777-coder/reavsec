"use client";

import { motion } from "framer-motion";

export default function SupportSection() {
  return (
    <section 
    id="funcionalidades"
    className="px-5 pb-15 md:px-25">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center max-w-3xl mx-auto space-y-3 mt-16 px-6 pb-15"
      >
        <p className="bg-white/10 px-3 py-1 rounded-full text-md text-white/50 w-fit">
          O que você encontra
        </p>

        <h2 className="text-white text-4xl font-semibold text-center max-lg:text-2xl">
          Conhecimento Sem Limites
        </h2>

        <p className="text-[#9b9b9b] leading-relaxed text-justify max-lg:text-sm">
          Comunique-se e colabore com sua equipe em tempo real, mantendo todos alinhados e produtivos durante cada fase do projeto.
        </p>
      </motion.div>

      <div className="flex flex-wrap p-6 md:flex-nowrap gap-5">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-transparent border-none md:flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="w-10 h-10 rounded-full bg-[#18181B] border border-white/20 flex items-center justify-center mb-3">
            <img
              src="/frameicon-arrows.svg"
              alt="Mensagens em Tempo Real"
              className="w-6 h-6 object-contain invert"
            />
          </div>
          <h3 className="text-white text-xl font-semibold">Mensagens em Tempo Real</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Troque mensagens e informações imediatamente com sua equipe para acelerar decisões e manter o fluxo de trabalho constante.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-transparent border-none md:flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="w-10 h-10 rounded-full bg-[#18181B] border border-white/20 flex items-center justify-center mb-3">
            <img
              src="/frameicon-track.svg"
              alt="Gestão de Tarefas"
              className="w-6 h-6 object-contain invert"
            />
          </div>
          <h3 className="text-white text-xl font-semibold">Gestão de Tarefas</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Organize tarefas, atribua responsáveis e acompanhe prazos, mantendo clareza e produtividade dentro do time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-transparent border-none md:flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="w-10 h-10 rounded-full bg-[#18181B] border border-white/20 flex items-center justify-center mb-3">
            <img
              src="/frameicon-asterisco.svg"
              alt="Compartilhamento Seguro"
              className="w-6 h-6 object-contain invert"
            />
          </div>
          <h3 className="text-white text-xl font-semibold">Compartilhamento Seguro</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Envie arquivos e materiais com criptografia e controle de acesso, garantindo segurança e agilizando o fluxo de trabalho.
          </p>
        </motion.div>

      </div>
    </section>
  );
}