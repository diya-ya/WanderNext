import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

type Listing = {
  id: string;
  name: string;
  type: 'stay' | 'cafe' | 'attraction';
  price: number;
  rating: number;
  location: string;
};

const MOCK_LISTINGS: Listing[] = [
  { id: 'st1', name: 'Seaside Villa', type: 'stay', price: 180, rating: 4.7, location: 'Bali' },
  { id: 'cf1', name: 'Azulejo Cafe', type: 'cafe', price: 12, rating: 4.6, location: 'Lisbon' },
  { id: 'at1', name: 'Fushimi Inari Shrine', type: 'attraction', price: 0, rating: 4.9, location: 'Kyoto' },
  { id: 'st2', name: 'Nordic Loft', type: 'stay', price: 220, rating: 4.8, location: 'Reykjavik' },
];

export function ListingsPage() {
  const [type, setType] = useState<'all' | Listing['type']>('all');
  const [sortBy, setSortBy] = useState<'price' | 'rating'>('rating');
  const [maxPrice, setMaxPrice] = useState<number>(300);

  const items = useMemo(() => {
    let list = [...MOCK_LISTINGS];
    if (type !== 'all') list = list.filter(i => i.type === type);
    list = list.filter(i => i.price <= maxPrice);
    list.sort((a,b) => sortBy==='price' ? a.price-b.price : b.rating-a.rating);
    return list;
  }, [type, sortBy, maxPrice]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-4 gap-8">
      <aside className="lg:col-span-1 space-y-4">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-4">
          <div className="font-medium">Filters</div>
          <div className="space-y-2">
            <label className="block text-sm text-gray-600 dark:text-gray-400">Type</label>
            <select value={type} onChange={(e)=> setType(e.target.value as any)} className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700">
              <option value="all">All</option>
              <option value="stay">Stays</option>
              <option value="cafe">Cafes</option>
              <option value="attraction">Attractions</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm text-gray-600 dark:text-gray-400">Max price</label>
            <input type="range" min={0} max={500} value={maxPrice} onChange={(e)=> setMaxPrice(Number(e.target.value))} className="w-full" />
            <div className="text-sm">Up to ${maxPrice}</div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm text-gray-600 dark:text-gray-400">Sort by</label>
            <select value={sortBy} onChange={(e)=> setSortBy(e.target.value as any)} className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700">
              <option value="rating">Rating</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
      </aside>
      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(i => (
            <Link key={i.id} to={`/listings/${i.id}`} className="group">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900" />
              <div className="mt-3">
                <div className="font-medium">{i.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{i.location} • ${i.price} • {i.rating}⭐</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


