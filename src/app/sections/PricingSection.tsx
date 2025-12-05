"use client";

import PricingCard from "../components/PricingCards";
import Button from "../components/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingSection() {

  const commonFeatures = [
    "Acesso à comunidade",
    "Materiais base",
    "Progresso salvo",
    "Interface responsiva",
    "Suporte por e-mail"
  ];

  const popularFeatures = [
    "Todos os recursos do plano Free",
    "Materiais intermediários",
    "Desafios e missões práticas",
    "Acesso antecipado a conteúdos",
    "Suporte por e-mail e chat prioritário",
    "Badge PRO na comunidade"
  ]

  const ultimateFeatures = [
    "Todos os recursos do plano Pro",
    "Transmissões de parcerias ao vivo",
    "Downloads premium (templates, códigos, checklists)",
    "Roadmaps completos de carreira",
    "Badge Ultimate (elite da comunidade)",
    "Conteúdos avançados e exclusivos"
  ]

  return (
    <motion.section
      id="planos"
      className="w-full px-6 py-20 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >

      <motion.div
        className="flex flex-col items-center max-w-3xl mx-auto space-y-3 mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="bg-white/10 px-3 py-1 rounded-full text-md text-white/50 w-fit">
          Planos e Preços
        </p>

        <h2 className="text-white text-4xl font-semibold text-center max-lg:text-2xl">
          Escolha o plano ideal para sua evolução
        </h2>

        <p className="text-[#9b9b9b] leading-relaxed text-center max-lg:text-sm">
          Investir no seu conhecimento é o primeiro passo para dominar tecnologia e cibersegurança.
          Selecione o plano que combina com seus objetivos e comece agora mesmo sua jornada.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <PricingCard
            price="Gratuito"
            title="Free"
            billing="Comece agora."
            features={commonFeatures}
            button={
              <Link href="/signup" id="link-signup">
              <Button
                name="Começar agora"
                className="w-full bg-white/10 hover:bg-white/20 rounded-full py-2 transition cursor-pointer"
              />
              </Link>
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <PricingCard
            price="R$29/mês"
            title="Pro"
            billing="Cobrado mensalmente."
            features={popularFeatures}
            highlight
            tag="Mais popular"
            button={
              <Button
                name="Quero ser Pro"
                className="w-full bg-[#8E51FF] hover:bg-[#7F22FE] rounded-full py-2 transition cursor-pointer"
              />
            }
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <PricingCard
            price="R$59/mês"
            title="Ultimate"
            billing="Cobrado mensalmente."
            features={ultimateFeatures}
            button={
              <Button
                name="Começar agora"
                className="w-full bg-white/10 hover:bg-white/20 rounded-full py-2 transition cursor-pointer"
              />
            }
          />
        </motion.div>

      </motion.div>
    </motion.section>
  );
}