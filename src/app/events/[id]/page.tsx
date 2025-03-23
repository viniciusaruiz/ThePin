'use client';

import { useState } from 'react';
import Link from 'next/link';

const events = [
  {
    id: 1,
    title: "Bosque Bar",
    date: "Mar 22",
    description: "LISTA VIP ATÉ 22:00 HORAS",
    location: "Rio de Janeiro",
    venue: "Bosque Bar",
    code: "CEBOLA",
    listType: "LISTA VIP",
    attendees: []
  },
  {
    id: 2,
    title: "Aldeia",
    date: "Mar 22",
    description: "LISTA VIP ATÉ 23:30 HORAS",
    location: "Rio de Janeiro",
    venue: "Aldeia Lagoa",
    code: "CEBOLA",
    listType: "LISTA VIP",
    attendees: []
  },
  {
    id: 3,
    title: "D-Edge Rio",
    date: "Mar 22",
    description: "VENDAS ABERTAS",
    location: "Rio de Janeiro",
    venue: "D-Edge Rio",
    code: "CEBOLA",
    listType: "Link de Desconto",
    attendees: []
  },
  {
    id: 4,
    title: "Vertigo",
    date: "Mar 23",
    description: "LISTA VIP ATÉ 23:00 HORAS",
    location: "São Paulo",
    venue: "Vertigo Club",
    code: "CEBOLA",
    listType: "LISTA VIP",
    attendees: []
  },
  {
    id: 5,
    title: "Vila JK",
    date: "Mar 23",
    description: "LISTA VIP ATÉ 22:00 HORAS",
    location: "São Paulo",
    venue: "Vila JK Club",
    code: "CEBOLA",
    listType: "LISTA VIP",
    attendees: []
  },
  {
    id: 6,
    title: "Chalezinho",
    date: "Mar 23",
    description: "LISTA VIP ATÉ 23:00 HORAS",
    location: "Belo Horizonte",
    venue: "Chalezinho BH",
    code: "CEBOLA",
    listType: "LISTA VIP",
    attendees: []
  }
];

export default function EventPage({ params }: { params: { id: string } }) {
  const [newName, setNewName] = useState('');
  const [attendees, setAttendees] = useState<string[]>([]);
  
  const event = events.find(e => e.id === parseInt(params.id));

  if (!event) {
    return <div>Evento não encontrado</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newName.trim()) {
      setAttendees([...attendees, newName.trim()]);
      setNewName('');
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <Link 
          href="/events" 
          className="inline-block mb-8 text-blue-600 hover:text-blue-800"
        >
          ← Voltar para Eventos
        </Link>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
              <p className="text-gray-600">{event.venue}</p>
            </div>
            <div className="text-right">
              <span className="block text-lg font-semibold">{event.date}</span>
              <span className="text-gray-600">{event.location}</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium mb-2">{event.description}</p>
              <p className="text-sm text-gray-600">Código: {event.code}</p>
              <span className="inline-block mt-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {event.listType}
              </span>
            </div>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-2xl font-semibold mb-4">Lista de Presença</h2>
            
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Digite seu nome"
                  className="flex-1 p-2 border rounded"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Adicionar
                </button>
              </div>
            </form>

            {attendees.length > 0 ? (
              <ul className="space-y-2">
                {attendees.map((name, index) => (
                  <li 
                    key={index}
                    className="p-2 bg-gray-50 rounded flex justify-between items-center"
                  >
                    <span>{name}</span>
                    <span className="text-sm text-gray-500">#{index + 1}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-center py-4">
                Nenhum nome na lista ainda
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 