"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CompaniesSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full h-70 py-15 flex flex-col items-center text-center gap-15"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-md text-[#9c9ca3]"
      >
        Algumas das empresas que apostam no poder do nosso hub.
      </motion.h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-15 place-items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/logocompany1.svg"
            alt="company1"
            width={150}
            height={150}
            className="object-cover opacity-60 hover:opacity-100 transition"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <Image
            src="/logocompany2.svg"
            alt="company2"
            width={150}
            height={150}
            className="object-cover opacity-60 hover:opacity-100 transition"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/logocompany3.svg"
            alt="company3"
            width={150}
            height={150}
            className="object-cover opacity-60 hover:opacity-100 transition"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <Image
            src="/logocompany4.svg"
            alt="company4"
            width={150}
            height={150}
            className="object-cover opacity-60 hover:opacity-100 transition"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/logocompany5.svg"
            alt="company5"
            width={150}
            height={150}
            className="object-cover opacity-60 hover:opacity-100 transition"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <Image
            src="/logocompany6.svg"
            alt="company6"
            width={150}
            height={150}
            className="object-cover opacity-60 hover:opacity-100 transition"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}