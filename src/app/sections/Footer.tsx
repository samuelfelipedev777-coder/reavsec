"use client";

import { FiGithub, FiYoutube, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer () {
    return (
        <motion.footer
            className="w-full border-t border-white/10 mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-10">

                <div
                    className="
                        flex flex-col 
                        md:flex-row 
                        justify-between 
                        items-start 
                        gap-10
                    "
                >

                    {/* Logo + frase */}
                    <motion.div
                        className="flex flex-col gap-3 w-full md:w-auto text-center md:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Image 
                            src="/reavsec-logo.svg" 
                            alt="ReavSec Logo" 
                            width={120} 
                            height={120} 
                            className="opacity-90 mx-auto md:mx-0"
                        />
                        <p className="text-white/60 text-sm">
                            Obrigado pela visita 💜
                        </p>
                    </motion.div>

                    {/* Links */}
                    <motion.div
                        className="
                            flex 
                            flex-wrap 
                            gap-4 
                            text-gray-400 
                            text-sm 
                            justify-center 
                            md:justify-start
                        "
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        viewport={{ once: true }}
                    >
                        <a href="#" className="hover:text-white transition">Documentação</a>
                        <a href="#" className="hover:text-white transition">Ajuda</a>
                        <a href="#" className="hover:text-white transition">Política de Privacidade</a>
                        <a href="#" className="hover:text-white transition">Termos e Condições</a>
                    </motion.div>

                    {/* Ícones sociais */}
                    <motion.div
                        className="
                            flex 
                            items-center 
                            gap-5 
                            text-white/50 
                            text-xl 
                            justify-center 
                            md:justify-start 
                            w-full md:w-auto
                        "
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65 }}
                        viewport={{ once: true }}
                    >
                        <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-white transition"><FiGithub /></motion.a>
                        <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-white transition"><FaXTwitter /></motion.a>
                        <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-white transition"><FiYoutube /></motion.a>
                        <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-white transition"><FiLinkedin /></motion.a>
                    </motion.div>

                </div>

                <motion.div
                    className="text-center md:text-left text-white/40 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    © 2025 ReavSec Corp. All rights reserved.
                </motion.div>

            </div>
        </motion.footer>
    );
}