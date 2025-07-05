import React from 'react';

export default function ErrorPage() {
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-blue-50 via-sky-100 to-indigo-100 relative overflow-hidden">

      {/* Função Decorativa - Bolhas Químicas no fundo */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-sky-200 rounded-full opacity-30 blur-2xl animate-ping"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-indigo-300 rounded-full opacity-20 blur-2xl animate-pulse"></div>

      {/* CONTAINER PRINCIPAL */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">

        {/* CÓDIGO DE ERRO */}
        <div className="text-[120px] md:text-[160px] font-extrabold text-indigo-600 drop-shadow-xl leading-none">
          404
        </div>

        {/* MENSAGEM */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
          Página não encontrada
        </h1>
        <p className="mt-4 max-w-xl text-gray-500 text-md md:text-lg">
          O caminho que você tentou acessar não existe no sistema <strong>Reagentia</strong>. Isso pode ter acontecido por um link quebrado ou erro de digitação.
        </p>
      </div>
    </div>
  );
}