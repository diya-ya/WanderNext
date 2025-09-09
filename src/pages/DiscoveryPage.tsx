import { useState } from 'react';
import { Link } from 'react-router-dom';

const MOCK_RECS = [
  { id: 'lisbon', title: 'Lisbon for Cafes & Culture', tag: 'couple', price: '$$', score: 4.8 },
  { id: 'kyoto', title: 'Kyoto Temples & Tea', tag: 'solo', price: '$$', score: 4.9 },
  { id: 'bali', title: 'Bali Beaches & Wellness', tag: 'family', price: '$', score: 4.6 },
  { id: 'reykjavik', title: 'Icelandic Adventures', tag: 'solo', price: '$$$', score: 4.7 },
];

export function DiscoveryPage() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'solo' | 'family' | 'couple'>('all');

  const results = MOCK_RECS.filter(r => (filter==='all' || r.tag===filter) && r.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search destinations" className="px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 w-full md:w-80" />
        <div className="flex gap-2">
          {(['all','solo','family','couple'] as const).map(t => (
            <button key={t} onClick={()=>setFilter(t)} className={`px-3 py-1.5 rounded-full border ${filter===t? 'bg-brand text-white border-brand' : 'border-gray-300 dark:border-gray-700'}`}>{t}</button>
          ))}
        </div>
      </div>

      <h2 className="mt-8 text-lg font-medium">Personalized for you</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map(item => (
          <Link key={item.id} to={`/destination/${item.id}`} className="group">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
              <div className="absolute bottom-0 inset-x-0 p-4 flex items-center justify-between">
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{item.price} • {item.score}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


