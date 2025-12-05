"use client";

import { motion } from "framer-motion";

export default function FaqSection () {
    return (
        <motion.section
            className="w-full max-w-7xl mx-auto px-6 py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >

            <motion.div
                className="flex flex-col items-center max-w-3xl mx-auto space-y-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <p className="bg-white/10 px-3 py-1 rounded-full text-md text-white/50 w-fit">
                    FAQs
                </p>

                <h2 className="text-white text-4xl font-semibold text-center max-lg:text-2xl">
                    Dúvidas frequentes
                </h2>

                <p className="text-[#9b9b9b] leading-relaxed text-center max-lg:text-sm">
                    Informações diretas, sem enrolação. Tudo que você precisa saber antes de entrar na ReavSec.
                </p>
            </motion.div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* COLUNA 1 */}
                <div className="flex flex-col gap-6">
                    <motion.div
                        className="h-48 flex flex-col justify-center px-4"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-white text-lg font-semibold">
                            A ReavSec é para quem?
                        </h2>
                        <p className="text-gray-400 text-sm mt-2 line-clamp-5">
                            Para quem quer aprender tecnologia e cibersegurança de verdade e colocar a mão na massa.
                            Iniciantes, autodidatas, estudantes e profissionais que não querem só conteúdo… querem evolução real,
                            comunidade forte e aprendizado aplicado no dia a dia.
                        </p>
                    </motion.div>

                    <motion.div
                        className="h-48 flex flex-col justify-center px-4"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-white text-lg font-semibold">
                            Preciso já saber programar ou hackear?
                        </h2>
                        <p className="text-gray-400 text-sm mt-2 line-clamp-5">
                            Não. A ReavSec começa do zero e te guia até o avançado, com trilhas montadas para quem quer
                            aprender sem depender de fórmulas mágicas. Aqui o foco é evolução constante, com erros,
                            acertos e prática real – do jeito que um profissional aprende de verdade.
                        </p>
                    </motion.div>
                </div>

                {/* COLUNA 2 */}
                <div className="flex flex-col gap-6">
                    <motion.div
                        className="h-48 flex flex-col justify-center px-4"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-white text-lg font-semibold">
                            Como funciona a comunidade?
                        </h2>
                        <p className="text-gray-400 text-sm mt-2 line-clamp-5">
                            Uma comunidade viva, acessível e colaborativa, onde cada membro tem voz.
                            Compartilhamos códigos, resolvemos desafios, ajudamos uns aos outros e
                            trocamos experiências que não se encontram em curso gravado.
                            Aqui ninguém caminha sozinho.
                        </p>
                    </motion.div>

                    <motion.div
                        className="h-48 flex flex-col justify-center px-4 md:flex"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-white text-lg font-semibold">
                            A plataforma funciona no celular?
                        </h2>
                        <p className="text-gray-400 text-sm mt-2 line-clamp-5">
                            Sim. A ReavSec foi desenhada para acompanhar sua rotina – PC, notebook, tablet ou celular.
                            Conteúdos rápidos, limpos e responsivos para estudar no ônibus, no intervalo,
                            na pausa do trabalho ou onde e quando quiser.
                        </p>
                    </motion.div>
                </div>

                {/* COLUNA 3 */}
                <div className="flex flex-col gap-6">
                    <motion.div
                        className="h-48 flex flex-col justify-center px-4"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-white text-lg font-semibold">
                            O que eu ganho ao evoluir aqui?
                        </h2>
                        <p className="text-gray-400 text-sm mt-2 line-clamp-5">
                            Além de certificações digitais, você ganha habilidades reais, experiência prática,
                            networking com pessoas da área, material para portfólio e uma visão de tecnologia
                            que vai além do básico que todo mundo ensina. Aqui você constrói sua versão 2.0.
                        </p>
                    </motion.div>

                    <div className="h-48 hidden md:flex" />
                </div>

            </div>

        </motion.section>
    );
}