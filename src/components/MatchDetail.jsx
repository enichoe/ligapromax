import React from 'react';

export default function MatchDetail({ match, teamA, teamB, playersA, playersB, onBack }) {
  return (
    <div className="p-4 md:p-6">
      <button onClick={onBack} className="btn-secondary mb-4">
        &larr; Volver a la lista
      </button>
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-800">🏀 Detalles del Juego</h1>
        <p className="text-lg text-600">{match.fecha} - {match.horario}</p>
        <p className="text-md text-500">{match.ubicacion}</p>
      </header>
      <div className="card">
        <div className="flex justify-around items-center mb-8">
          <div className="text-center">
            <img src={teamA.logo} alt={`${teamA.nombre} logo`} className="w-24 h-24 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">{teamA.nombre}</h2>
          </div>
          <div className="text-5xl font-bold">
            {match.estado === 'finalizado' ? `${match.puntosA} - ${match.puntosB}` : 'VS'}
          </div>
          <div className="text-center">
            <img src={teamB.logo} alt={`${teamB.nombre} logo`} className="w-24 h-24 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">{teamB.nombre}</h2>
          </div>
        </div>

        {match.estado === 'finalizado' && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Roster del Juego</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-2 text-center">{teamA.nombre}</h4>
                {playersA.map(p => (
                  <div key={p.id} className="flex justify-between items-center border-b py-1">
                    <span>{p.nombre}</span>
                    <span className="text-sm text-gray-400">{p.posicion}</span>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-bold mb-2 text-center">{teamB.nombre}</h4>
                {playersB.map(p => (
                  <div key={p.id} className="flex justify-between items-center border-b py-1">
                    <span>{p.nombre}</span>
                    <span className="text-sm text-gray-400">{p.posicion}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
