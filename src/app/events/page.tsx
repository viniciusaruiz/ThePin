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
    listType: "LISTA VIP"
  },
  {
    id: 2,
    title: "Aldeia",
    date: "Mar 22",
    description: "LISTA VIP ATÉ 23:30 HORAS",
    location: "Rio de Janeiro",
    venue: "Aldeia Lagoa",
    code: "CEBOLA",
    listType: "LISTA VIP"
  },
  {
    id: 3,
    title: "D-Edge Rio",
    date: "Mar 22",
    description: "VENDAS ABERTAS",
    location: "Rio de Janeiro",
    venue: "D-Edge Rio",
    code: "CEBOLA",
    listType: "Link de Desconto"
  },
  {
    id: 4,
    title: "Vertigo",
    date: "Mar 23",
    description: "LISTA VIP ATÉ 23:00 HORAS",
    location: "São Paulo",
    venue: "Vertigo Club",
    code: "CEBOLA",
    listType: "LISTA VIP"
  },
  {
    id: 5,
    title: "Vila JK",
    date: "Mar 23",
    description: "LISTA VIP ATÉ 22:00 HORAS",
    location: "São Paulo",
    venue: "Vila JK Club",
    code: "CEBOLA",
    listType: "LISTA VIP"
  },
  {
    id: 6,
    title: "Chalezinho",
    date: "Mar 23",
    description: "LISTA VIP ATÉ 23:00 HORAS",
    location: "Belo Horizonte",
    venue: "Chalezinho BH",
    code: "CEBOLA",
    listType: "LISTA VIP"
  }
];

export default function EventsPage() {
  const [selectedCity, setSelectedCity] = useState('');

  const filteredEvents = selectedCity 
    ? events.filter(event => event.location === selectedCity)
    : events;

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Eventos</h1>
          <div className="flex items-center gap-4">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="p-2 border rounded-md min-w-[200px]"
            >
              <option value="">Todas as cidades</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Belo Horizonte">Belo Horizonte</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredEvents.map((event) => (
            <Link 
              href={`/events/${event.id}`} 
              key={event.id}
              className="block bg-white border rounded-lg hover:shadow-lg transition-all"
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold">{event.title}</h2>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                    {event.date}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{event.venue}</p>
                <p className="text-sm font-medium mb-4">{event.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Código: {event.code}</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {event.listType}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 