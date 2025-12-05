"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BannerSection () {
  return (
    <section className="px-10 md:px-25">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full pb-25"
      >
        <Image
          src="/grid-banner.png"
          width={1920}
          height={1080}
          alt="Banner ilustrativo"
          className="w-full h-auto border border-white/20 rounded-xl"
        />
      </motion.div>
    </section>
  );
}