import React from 'react';
import Wallpaper from '../img/wllpaper.png';
import Logo from '../img/reagentia.png'

export default function LoginPage() {
  return (
    <main className="h-screen w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${Wallpaper})` }}>
      <section className="bg-white w-full max-w-md p-6 flex flex-col items-center justify-center rounded-lg shadow-lg gap-4">
  <img src={Logo} alt="Logo Reagentia" className="w-[100px]" />

  <label htmlFor="email" className="self-start text-sm text-gray-700">Email</label>
  <input
    id="email"
    name="email"
    type="email"
    placeholder="Insira seu e-mail"
    autoComplete="email"
    required
    className="w-full px-4 py-2 border border-gray-500 rounded-[7px] transition duration-200 hover:ring-2 hover:ring-[#3cd4b2] outline-none"
  />

  <label htmlFor="password" className="self-start text-sm text-gray-700">Senha</label>
  <input
    id="password"
    name="password"
    type="password"
    placeholder="Insira sua senha"
    autoComplete="current-password"
    required
    className="w-full px-4 py-2 border border-gray-500 rounded-[7px] transition duration-200 hover:ring-2 hover:ring-[#3cd4b2] outline-none"
  />

  <button
    type="button"
    className="w-full bg-[#3cd4b2] p-2 rounded text-[#13235a] font-semibold text-[1.1rem] transition duration-300 ease-in-out hover:bg-[#163755] hover:text-white active:scale-[0.98]"
  >
    Entrar
  </button>
</section>
    </main>
  );
}