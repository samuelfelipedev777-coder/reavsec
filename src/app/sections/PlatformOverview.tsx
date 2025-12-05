"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../components/Button";

export default function PlatformOverview() {
  return (
    <>
      <motion.div
        id="OverviewSection"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center max-w-3xl mx-auto space-y-3 mt-16 px-6"
      >
        <p className="bg-white/10 px-3 py-1 rounded-full text-md text-white/50 w-fit">
          O que você encontra
        </p>

        <h2 className="text-white text-4xl font-semibold text-center max-lg:text-2xl">
          Conhecimento Sem Limites
        </h2>

        <p className="text-[#9b9b9b] leading-relaxed text-justify max-lg:text-sm">
          Eleve sua experiência com ferramentas integradas que conectam pessoas, aceleram trocas de conhecimento e mantêm o fluxo natural de aprendizado — da ideia ao projeto concluído.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12 px-6">
        {[...Array(6)].map((_, i) => {
          const data = [
            {
              icon: "/frameicon-arrows.svg",
              title: "Comunicação Tática",
              text: "Troque informações rápido e mantenha a comunidade alinhada com conversas pontuais e objetivas.",
            },
            {
              icon: "/frameicon-track.svg",
              title: "Execução Real",
              text: "Transforme estratégias em ação com visibilidade e foco total no que importa.",
            },
            {
              icon: "/frameicon-asterisco.svg",
              title: "Compartilhamento Seguro",
              text: "Envie arquivos e insights com criptografia reforçada e acesso controlado.",
            },
            {
              icon: "/frameicon-star.svg",
              title: "Aprendizado Integrado",
              text: "Cada troca vira conhecimento aplicado com evolução contínua e colaboração real.",
            },
            {
              icon: "/frameicon-cubes.svg",
              title: "Ambiente Profissional",
              text: "Operações como no mundo real, com dinâmica clara e estrutura eficiente.",
            },
            {
              icon: "/frameicon-chart.svg",
              title: "Escalando Juntos",
              text: "Cresça lado a lado com a comunidade, trocando experiência e construindo soluções.",
            },
          ][i];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[radial-gradient(circle_at_75%_25%,#1a1a1c_0%,#0c0c0e_100%)] border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#18181B] border border-white/20 flex items-center justify-center mb-3">
                <img src={data.icon} alt={data.title} className="w-6 h-6 object-contain invert" />
              </div>
              <h3 className="text-white text-xl font-semibold">{data.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{data.text}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-5 mt-10 mb-30 px-6"
      >

        <Link href="/signup" id="link-signup">
        <Button
          name="Junte-se ao Hub"
          className="min-w-[120px] px-6 py-2 rounded-full bg-[#8E51FF] hover:bg-[#7F22FE] transition cursor-pointer"
        />
        </Link>

        <Link href="#funcionalidades">
          <Button
            name="Nossas Funcionalidades"
            className="min-w-[120px] px-6 py-2 rounded-full border border-[#343438] bg-white/10 hover:bg-white/20 transition cursor-pointer"
          />
        </Link>
      </motion.div>
    </>
  );
}