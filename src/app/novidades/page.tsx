"use client";
import { useRouter } from "next/navigation";

export default function NovidadesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <img
        src="https://cdn-icons-png.flaticon.com/512/7486/7486816.png"
        alt="404"
        className="w-36 h-36 opacity-90 mb-8 select-none"
      />

      <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-3">
        Nada por aqui… ainda.
      </h1>

      <p className="text-white/60 max-w-md leading-relaxed mb-8">
        Nenhuma novidade foi postada até o momento.
        Estamos preparando atualizações que vão explodir sua mente — volte em breve!
      </p>

      <button
        onClick={() => router.push("/")}
        className="px-6 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition backdrop-blur-sm text-white font-medium cursor-pointer"
      >
        Voltar ao início
      </button>
    </div>
  );
}