"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../components/Button";
import ItemsContent from "../components/ItemsContent";

export default function ProductivitySection() {
  return (
    <motion.section
      className="px-6 md:px-40 py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row gap-10 items-start">

        <motion.div
          className="flex-1 space-y-4 w-full md:w-1/2 md:sticky md:top-24 self-start"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="bg-white/10 px-3 py-1 rounded-full text-md text-white/50 w-fit"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Produtividade
          </motion.p>

          <motion.h2
            className="text-white text-4xl font-semibold max-lg:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Aumente a sua produtividade ou a da sua equipe
          </motion.h2>

          <motion.p
            className="text-[#9b9b9b] leading-relaxed max-lg:text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Mantenha seu time operando com foco total, eliminando gargalos,
            acelerando entregas e garantindo comunicação eficiente e contínua.
          </motion.p>

          <motion.div
            className="flex gap-3 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          > 

            <Link href="/signup" id="link-signup">
            <Button
              name="Comece agora"
              className="cursor-pointer max-w-40 px-4 py-2 rounded-full bg-[#8E51FF] hover:bg-[#7F22FE] transition"
            />
            </Link>

            <Link href="#ReminderSection">
            <Button
              name="Veja mais"
              className="cursor-pointer px-4 py-2 rounded-full border border-[#343438] bg-white/10 hover:bg-white/20 transition"
            />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 w-full md:w-1/2 flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {[
            {
              image: "/frameicon-email.svg",
              title: "Mensagens em Tempo Real",
              subtitle:
                "Comunique-se instantaneamente com sua equipe, mantendo decisões rápidas e colaboração fluida entre tarefas, discussões e atualizações do projeto.",
            },
            {
              image: "/frameicon-energy.svg",
              title: "Gestão de Tarefas",
              subtitle:
                "Organize, priorize e atribua responsabilidades enquanto acompanha o progresso de cada atividade para manter o projeto dentro do prazo e do escopo.",
            },
            {
              image: "/frameicon-bars-chart.svg",
              title: "Compartilhamento de Arquivos",
              subtitle:
                "Envie documentos, imagens e materiais essenciais para sua equipe com acesso simples, seguro e centralizado.",
            },
            {
              image: "/frameicon-smile.svg",
              title: "Informações em Tempo Real",
              subtitle:
                "Obtenha insights úteis instantaneamente com dados apresentados de forma clara, permitindo ajustes e decisões mais precisas.",
            },
            {
              image: "/frameicon-command.svg",
              title: "Notificações Inteligentes",
              subtitle:
                "Receba só o que importa, com alertas personalizáveis que mantêm você informado sem poluir sua produtividade.",
            },
            {
              image: "/frameicon-message-circle.svg",
              title: "Análise de Equipe",
              subtitle:
                "Acompanhe desempenho, comunicação e evolução da equipe com métricas integradas para melhorar processos e resultados.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ItemsContent
                image={item.image}
                className="py-5"
                title={item.title}
                subtitle={item.subtitle}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}