"use client";

import { useRef } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";
import SlideBox from "../components/SlideBox";

export default function SlideShow() {

  const sliderRef = useRef<HTMLDivElement>(null!);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  const slides = [
    {
      text: "A ReavSec virou meu ambiente oficial de estudos. Finalmente encontrei um lugar onde tudo é organizado, visual, prático e com caminhos que fazem sentido. Hoje eu sei exatamente o que estudar e onde estou evoluindo.",
      userImage: "/Person-image1.avif",
      userName: "Camila Rodrigues (Brasil)",
      userRole: "Estudante de Pentest e Segurança Ofensiva",
      companyLogo: "/logocompany1.svg"
    },
    {
      text: "Como pesquisadora, sempre precisei de referências rápidas e objetivas. A ReavSec me surpreendeu porque não entrega apenas conteúdo, mas fluxo de aprendizado real e uma comunidade ativa que compartilha insights diariamente.",
      userImage: "/Person-image2.avif",
      userName: "Sofia Müller (Alemanha)",
      userRole: "Pesquisadora em IA aplicada à Cibersegurança",
      companyLogo: "/logocompany5.svg"
    },
    {
      text: "Nunca consegui manter uma rotina consistente, sempre estudava de forma caótica. Com a ReavSec eu abro a plataforma e já sei para onde ir, o que fazer e no que focar. É como se eu tivesse um mentor ao lado.",
      userImage: "/Person-image3.avif",
      userName: "João Henrique Silva (Brasil)",
      userRole: "Desenvolvedor Full Stack focado em aplicações seguras",
      companyLogo: "/logocompany4.svg"
    },
    {
      text: "Trabalhando com redes e infraestrutura, a ReavSec virou o meu ponto de referência para materiais diretos, profundos e úteis. Nada de enrolação, apenas conhecimento prático que realmente faz diferença no campo.",
      userImage: "/Person-image2.avif",
      userName: "Ethan Johnson (EUA)",
      userRole: "Engenheiro de Redes especializado em Nuvem Híbrida",
      companyLogo: "/logocompany5.svg"
    }
  ];

  return (
    <motion.section
      className="w-full px-10 md:px-25 py-16 overflow-visible"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >

      <motion.div
        className="w-full flex items-center justify-between"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl md:text-4xl font-semibold">
          O que os nossos Reavers dizem
        </h1>

        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <button
            onClick={scrollLeft}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            <MdArrowBackIosNew size={18} />
          </button>

          <button
            onClick={scrollRight}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            <MdArrowForwardIos size={18} />
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full mt-10"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <SlideBox items={slides} sliderRef={sliderRef} />
      </motion.div>

    </motion.section>
  );
}