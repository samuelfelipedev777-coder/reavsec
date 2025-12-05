"use client";

import Link from "next/link";
import { useState } from "react";

export default function ReavSecLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] p-6">
      <div className="w-full max-w-md bg-[#111118] rounded-3xl shadow-xl border border-[#242438] p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 bg-[#3b3b55] rounded-full mb-4" />
          <h1 className="text-2xl font-semibold text-center text-white">Entrar na ReavSec</h1>
          <p className="text-gray-400 text-center text-sm mt-2">
            Bem-vindo de volta. Acesse seu painel seguro.
          </p>
        </div>

        <form className="flex flex-col space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              className="mt-1 w-full p-3 bg-[#0d0d14] border border-[#2a2a44] text-white rounded-xl focus:outline-none focus:ring-1 focus:ring-[#8E51FF] hover:border-[#8E51FF] hover:border-opacity-30"
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-300">Senha</label>
              <button
                type="button"
                onClick={() => setPasswordVisible((s) => !s)}
                className="text-sm text-gray-400 hover:text-white cursor-pointer"
              >
                {passwordVisible ? "Ocultar" : "Mostrar"}
              </button>
            </div>

            <input
              type={passwordVisible ? "text" : "password"}
              className="mt-1 w-full p-3 bg-[#0d0d14] border border-[#2a2a44] text-white rounded-xl focus:outline-none focus:ring-1 focus:ring-[#8E51FF] hover:border-[#8E51FF] hover:border-opacity-30"
              required
            />

            <div className="text-right mt-2">
              <a className="text-xs text-gray-400 hover:text-white cursor-pointer">Esqueceu a senha?</a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-medium bg-[#8E51FF] text-white hover:bg-[#7a45dd] transition"
          >
            Entrar
          </button>

          <Link href="/signup" id="link-signup">
          <p className="text-center text-gray-500 text-xs mt-2">
            Não possui conta? <a className="underline cursor-pointer">Criar conta</a>
          </p>
          </Link>
        </form>
      </div>
    </div>
  );
}