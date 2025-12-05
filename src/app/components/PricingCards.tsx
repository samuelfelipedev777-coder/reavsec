"use client";

import { ReactNode } from "react";
import { FiCheck } from "react-icons/fi";

interface PricingCardProps {
    price: string;
    title: string;
    billing: string;
    features: string[];
    highlight?: boolean;
    tag?: string;
    button?: ReactNode;
}

export default function PricingCard({
    price,
    title,
    billing,
    features,
    highlight = false,
    tag,
    button
}: PricingCardProps) {
    return (
        <div
            className={`relative w-[330px] md:w-[360px] h-[500px] rounded-2xl border border-white/15 bg-[#0c0c0e] p-8 flex flex-col items-center text-center overflow-hidden ${
                highlight ? "scale-[1.02] border-[#8E51FF]" : ""
            }`}
        >
            {highlight && (
                <div className="absolute -bottom-30 left-1/2 -translate-x-1/2 w-44 h-44 bg-[#8E51FF]/30 rounded-full blur-3xl" />
            )}

            {tag && (
                <p className="text-xs text-[#CDA3FF] font-medium tracking-wide mb-1">
                    {tag}
                </p>
            )}

            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold">{price}</h1>
                <h2 className="text-lg mt-1 font-semibold">{title}</h2>
                <p className="text-sm opacity-70">{billing}</p>

                <ul className="mt-10 flex flex-col gap-4 text-left w-full">
                    {features.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <FiCheck className="mt-1" size={20} />
                            <span className="text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto w-full pt-6">
                {button}
            </div>
        </div>
    );
}