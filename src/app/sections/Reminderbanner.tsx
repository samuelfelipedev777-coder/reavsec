"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../components/Button";

export default function Reminderbanner() {
  return (
    <motion.section
      id="ReminderSection"
      className="flex items-center justify-center rounded-xl px-6 relative overflow-hidden bg-[#111] py-10 md:border border-[#343438] mx-5 md:mx-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 w-full h-px bg-linear-to-r from-transparent via-white/40 to-transparent animate-lineOne"></div>
        <div className="absolute top-1/2 w-full h-px bg-linear-to-r from-transparent via-white/35 to-transparent animate-lineTwo"></div>
        <div className="absolute top-[70%] w-full h-px bg-linear-to-r from-transparent via-white/30 to-transparent animate-lineThree"></div>
      </div>

      <motion.div
        className="relative max-w-4xl mx-auto px-4 text-white flex flex-col gap-7 items-center text-center"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl font-semibold leading-snug"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Estude melhor, com mais foco e sem distrações.
          </motion.h2>

          <motion.p
            className="text-white/70 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Mantenha seu progresso organizado, troque conhecimento com outros alunos
            e evolua com um ambiente de estudo simples, bonito e eficiente.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >

          <Link href="/signup" id="link-signup">
          <Button
            name="Comece agora"
            className="cursor-pointer max-w-40 px-5 py-2 rounded-full bg-[#8E51FF] hover:bg-[#7F22FE] transition"
          />
          </Link>

          <Link href="#planos">
          <Button
            name="Explorar mais"
            className="cursor-pointer px-5 py-2 rounded-full border border-[#343438] bg-white/10 hover:bg-white/20 transition"
          />
          </Link>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes lineOne {
          0% { transform: translateX(-100%); opacity: 0.25; }
          50% { opacity: 0.5; }
          100% { transform: translateX(100%); opacity: 0.25; }
        }

        @keyframes lineTwo {
          0% { transform: translateX(-100%); opacity: 0.22; }
          50% { opacity: 0.42; }
          100% { transform: translateX(100%); opacity: 0.22; }
        }

        @keyframes lineThree {
          0% { transform: translateX(-100%); opacity: 0.20; }
          50% { opacity: 0.40; }
          100% { transform: translateX(100%); opacity: 0.20; }
        }

        .animate-lineOne {
          animation: lineOne 3.2s linear infinite;
        }

        .animate-lineTwo {
          animation: lineTwo 3.2s linear infinite;
        }

        .animate-lineThree {
          animation: lineThree 3.2s linear infinite;
          animation-delay: 0.8s;
        }
      `}</style>
    </motion.section>
  );
}