"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const rules = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /\d/.test(password),
    symbol: /[!@#$%^&*(),.?"':;{}|<>]/.test(password),
  };

  const allPassed = Object.values(rules).every(Boolean);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] p-6">
      <div className="w-full max-w-md bg-[#111118] rounded-3xl shadow-xl border border-[#242438] p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 bg-[#3b3b55] rounded-full mb-4" />
          <h1 className="text-2xl font-semibold text-center text-white">Criar uma conta</h1>
          <p className="text-gray-400 text-center text-sm mt-2">
            Entre para a ReavSec e acesse o futuro da tecnologia.
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
            <label className="block text-sm font-medium text-gray-300">Telefone</label>
            <input
              type="tel"
              className="mt-1 w-full p-3 bg-[#0d0d14] border border-[#2a2a44] text-white rounded-xl focus:outline-none focus:ring-1 focus:ring-[#8E51FF] hover:border-[#8E51FF] hover:border-opacity-30"
            />
            <p className="text-xs text-gray-500 mt-1">
              Recomendamos adicionar um número para manter sua conta segura.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-300">Senha</label>
              <button
                type="button"
                onClick={() => setPasswordVisible((s) => !s)}
                className="text-sm text-gray-400 hover:text-white cursor-pointer"
              >
                {passwordVisible ? "Ocultar" : "Mostrar senha"}
              </button>
            </div>

            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full p-3 bg-[#0d0d14] border border-[#2a2a44] text-white rounded-xl focus:outline-none focus:ring-1 focus:ring-[#8E51FF] hover:border-[#8E51FF] hover:border-opacity-30"
              aria-describedby="pw-rules"
              required
            />

            <div id="pw-rules" className="grid grid-cols-2 gap-2 text-xs text-gray-500 mt-3">
              <p className={rules.length ? "text-[#8E51FF]" : ""}>• Use 8 ou mais caracteres</p>
              <p className={rules.upper ? "text-[#8E51FF]" : ""}>• Letras maiúsculas</p>
              <p className={rules.lower ? "text-[#8E51FF]" : ""}>• Letras minúsculas</p>
              <p className={rules.number ? "text-[#8E51FF]" : ""}>• Use um número</p>
              <p className={rules.symbol ? "text-[#8E51FF] col-span-2" : "col-span-2"}>• Use um símbolo (!@#$)</p>
            </div>
          </div>

          <button
            type="submit"
            disabled={!allPassed}
            className={`w-full py-3 rounded-xl font-medium transition ${allPassed ? "bg-[#8E51FF] text-white hover:bg-[#7a45dd]" : "bg-[#3a3550] text-gray-400 cursor-not-allowed"}`}
          >
            Criar conta
          </button>

          <Link href="/login" id="link-login">
          <p className="text-center text-gray-500 text-xs mt-2 cursor-pointer">
            Já tem uma conta?
            <a className="underline"> Faça Login</a>
          </p>
          </Link>

          <p className="text-center text-gray-500 text-xs mt-2 cursor-pointer">
            Ao criar uma conta, você concorda com os <a className="underline">Termos de uso</a> e <a className="underline">Política de Privacidade</a>.
          </p>
        </form>
      </div>
    </div>
  );
}