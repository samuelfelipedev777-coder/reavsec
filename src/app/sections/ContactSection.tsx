"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection () {
    const [sent, setSent] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!email.trim()) {
            setError("Insira um e-mail.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            setError("Insira um e-mail válido.");
            return;
        }

        setError("");
        setSent(true);

        setTimeout(() => {
            setSent(false);
            setEmail("");
        }, 2000);
    }

    return (
        <motion.section
            id="suporte"
            className="w-full bg-[#18181B] py-10 px-6 mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                <motion.div
                    className="max-w-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-white text-3xl font-semibold max-md:text-2xl">
                        Fique na frente da curva
                    </h2>

                    <p className="text-[#7d7d85] mt-3 max-md:text-base">
                        Deixe seu e-mail e avance na experiência ReavSec.
                    </p>
                </motion.div>

                <motion.div
                    className="w-full max-w-md"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <form onSubmit={handleSubmit} className="relative w-full">

                        <motion.input 
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="seuemail@exemplo.com"
                            className={`w-full bg-transparent border text-white px-4 py-3 pr-32 rounded-full placeholder-white/40 outline-none transition-all
                                ${error ? "border-red-500" : "border-white/15 focus:border-[#8E51FF]"}`}
                            whileFocus={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                        />

                        <motion.button 
                            type="submit"
                            className={`absolute top-1/2 -translate-y-1/2 right-2 px-6 py-2 rounded-full font-medium cursor-pointer transition-all
                                ${sent 
                                    ? "bg-[#8E51FF] text-white scale-105" 
                                    : "bg-white text-black hover:bg-gray-200"}`}
                            whileTap={{ scale: 0.95 }}
                        >
                            {sent ? "Enviado!" : "Enviar"}
                        </motion.button>
                    </form>

                    {error && (
                        <motion.p
                            className="text-red-500 text-sm mt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {error}
                        </motion.p>
                    )}
                </motion.div>

            </div>
        </motion.section>
    );
}