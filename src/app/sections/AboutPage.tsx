"use client";

import ContentBox from "../components/ContentBox";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.section
      id="comunidade"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-14 px-25 max-lg:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center max-w-3xl mx-auto space-y-3"
      >
        <p className="bg-white/10 px-3 py-1 rounded-full text-md text-white/50 w-fit">
          Conheça a ReavSec
        </p>

        <h2 className="text-white text-4xl font-semibold text-center max-lg:text-2xl">
          Seu Hub de Tecnologia e Cibersegurança
        </h2>

        <p className="text-[#9b9b9b] leading-relaxed text-justify max-lg:text-sm">
          Um espaço onde curiosos se tornam criadores, compartilhando ideias,
          resolvendo desafios reais e fortalecendo o grupo com respeito, ética e
          tecnologia consciente.
        </p>
      </motion.div>

      <div className="flex flex-col gap-5 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <ContentBox
            subtitle="Comunicação Inteligente"
            paragraph="Na ReavSec Hub, os membros trocam informações como times profissionais: rápido, claro e com foco no que realmente importa. Aqui a prioridade é transformar conversa em ação – e evolução contínua."
            checks={[
              "Mensagens instantâneas para decisões e alinhamento rápidos.",
              "Indicadores de presença para ver quem está ativo e pronto.",
              "Canais dedicados para estudo, missões, dúvidas e cooperação.",
            ]}
            image="/messages.png"
            className="border border-white/10 h-[400px] w-full max-lg:h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContentBox
            subtitle="Gestão de Conteúdo Integrada"
            paragraph="A ReavSec Hub transforma a forma como você organiza tarefas e acompanha projetos. Com gestão integrada, discussões, decisões e ações são centralizadas, garantindo clareza, velocidade e produtividade."
            checks={[
              "Integração total de tarefas e projetos para visão completa do time.",
              "Alertas automáticos e acompanhamento de cada etapa do workflow.",
              "Centralização de informações para decisões rápidas e precisas.",
            ]}
            image="/blog-post.png"
            reverse
            className="border border-white/10 h-[400px] w-full max-lg:h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <ContentBox
            subtitle="Execução Eficiente e Segura"
            paragraph="Transforme planos em ação com clareza e eficiência. Cada tarefa é acompanhada, cada membro cumpre seu papel, e o progresso é visível para toda a equipe, com total segurança nas comunicações."
            checks={[
              "Canais de comunicação seguros com criptografia de ponta a ponta.",
              "Proteção de informações sensíveis mantendo a colaboração ativa.",
              "Monitoramento e alertas para garantir que nada seja perdido ou exposto.",
            ]}
            image="/task.png"
            className="border border-white/10 h-[400px] w-full max-lg:h-auto"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}