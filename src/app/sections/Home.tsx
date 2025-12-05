"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <motion.section
      id="inicio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full text-white py-14 md:py-20 min-h-screen md:min-h-[60vh] md:max-h-[86vh] relative overflow-hidden"
      style={{
        background: `
          radial-gradient(
            circle at center,
            rgba(34, 23, 58, 0.55) 0%,
            rgba(34, 23, 58, 0.35) 35%,
            rgba(34, 23, 58, 0.18) 55%,
            rgba(14, 14, 17, 1) 85%
          )
        `,
      }}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-[140px_1fr_140px]">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block h-20 border-t border-b border-white/10"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 relative h-20 flex md:block justify-center items-end"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:transform-none w-[60%] md:w-[25%] h-12 border-l border-r border-t border-white/10 flex items-center px-4 bg-black/20 md:bg-transparent">
            <Image src="/Persons.png" alt="avatar" width={56} height={56} className="object-cover" />
            <p className="ml-3 text-xs md:text-sm text-white/60">Junte se a mentes brilhantes!</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block h-20 border-t border-b border-white/10"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block h-80 border-t border-b border-white/10"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 flex flex-col justify-center items-center text-center px-6 py-10 md:px-20 md:h-80"
        >
          <h2 className="text-3xl md:text-6xl font-semibold leading-tight bg-linear-to-r from-white/20 via-white to-white/20 bg-clip-text text-transparent">
            ReavSec — Onde mentes criam o que o mundo ainda não viu.
          </h2>

          <p className="text-sm md:text-lg text-white/60 max-w-prose mt-4">
            Bem-vindo à ReavSec: onde curiosos viram criadores, ideias viram projetos e cada clique te aproxima de dominar o jogo digital.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block h-80 border-t border-b border-white/10"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block h-48 border-t border-b border-white/10"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 relative md:h-48 flex justify-center items-start"
        >
          <div className="w-[85%] md:w-[40%]">

            <Link
              href="#comunidade"
              className="block text-center bg-transparent text-white w-full py-3 text-sm md:text-base border-x border-white/10 md:border-x-2 hover:bg-white/10 transition cursor-pointer"
            >
              Explorar mais
            </Link>

            <Link href="/signup" id="link-signup">
            <button
              className="bg-linear-to-b from-[#8049E5] to-[#8166b4] text-white w-full py-3 text-sm md:text-base hover:from-[#721FE3] hover:to-[#721FE3]/20 transition cursor-pointer"
            >
              Começar agora
            </button>
            </Link>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block h-48 border-t border-b border-white/10"
        />

      </div>
    </motion.section>
  );
}