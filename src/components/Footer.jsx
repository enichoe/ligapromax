import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 p-4 text-center shadow-md mt-8">
      <p className="mb-2">&copy; {new Date().getFullYear()} 🏀 BasketballProApp Todos los derechos reservados.</p>
      <p className="mb-4">Creado por ERNESTO NICHO ESPINOZA</p>
      <a href="https://netoweb.vercel.app/" target='blank' className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 mb-4">
        Visita Nuestra Página Principal
      </a>
      {/* 
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Facebook</a>
        <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Twitter</a>
        <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Instagram</a>
      </div>
      */}
    </footer>
  );
}