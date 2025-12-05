"use client";

import { ReactNode } from "react";

interface IterfaceContentProps {
  children?: ReactNode;
  image?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ItemsContent({
  image = "/frameicon-arrows.svg",
  title = "Compartilhamento Seguro",
  subtitle = "Envie arquivos e insights com criptografia reforçada e acesso controlado.",
  className,
}: IterfaceContentProps) {
  return (
    <div
      className={`flex items-start gap-3 bg-[#1C1C1E] border border-white/10 rounded-lg p-5 min-h-[190px] ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-[#27272A] flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-5 h-5 object-contain invert"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-white text-lg font-semibold mb-2">
          {title}
        </h3>
        <p className="text-white/60 text-base leading-relaxed tracking-wide">
          {subtitle}
        </p>
      </div>
    </div>
  );
}