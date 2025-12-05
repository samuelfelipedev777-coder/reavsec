"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../components/Button";

export default function JoinusSection() {
  return (
    <section className="px-5 md:px-25 pb-15">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-10 rounded-2xl bg-[#150B23] p-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          <h1 className="text-4xl">Eleve sua produtividade no Hub ReavSec</h1>
          <p className="text-xl max-w-[800px] text-gray-400">
            Colabore, troque ideias participe de aprendizados e desafios de ranking mensais
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-row md:flex-col items-center gap-2"
        >

          <Link href="/signup" id="link-signup">
          <Button
            name="Começe agora"
            className="max-w-40 px-4 py-1 rounded-full bg-[#8E51FF] hover:bg-[#7F22FE] transition cursor-pointer"
          />
          </Link>
          
          <Link href="/login" id="link-login">
          <Button
            name="Login"
            className="max-w-20 px-4 py-1 rounded-full border border-[#343438] bg-white/10 hover:bg-white/20 transition cursor-pointer"
          />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}