import { useState } from 'react';

type Post = { id: string; title: string; tag: string; likes: number };
const MOCK_POSTS: Post[] = [
  { id: 'p1', title: 'Best ramen spots in Kyoto?', tag: 'food', likes: 42 },
  { id: 'p2', title: 'Family-friendly beaches in Bali', tag: 'family', likes: 31 },
  { id: 'p3', title: 'Is Lisbon safe for solo travellers at night?', tag: 'safety', likes: 28 },
];

export function CommunityPage() {
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState<'all' | 'food' | 'family' | 'safety'>('all');
  const results = MOCK_POSTS.filter(p => (tag==='all' || p.tag===tag) && p.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <div className="flex gap-3">
          <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search posts" className="px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 flex-1" />
          <select value={tag} onChange={(e)=>setTag(e.target.value as any)} className="px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700">
            <option value="all">All</option>
            <option value="food">Food</option>
            <option value="family">Family</option>
            <option value="safety">Safety</option>
          </select>
        </div>
        <div className="mt-6 space-y-4">
          {results.map(p => (
            <div key={p.id} className="rounded-xl border border-gray-200 dark:border-gray-800 p-5">
              <div className="flex items-center justify-between">
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{p.likes} likes</div>
              </div>
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">Tag: #{p.tag}</div>
              <div className="mt-4 flex gap-3">
                <button className="px-3 py-1.5 rounded-md bg-brand text-white">Like</button>
                <button className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700">Comment</button>
                <button className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700">Follow</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <aside className="space-y-4">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="font-medium">Create post</div>
          <div className="mt-3 space-y-3">
            <input placeholder="Title" className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700" />
            <textarea placeholder="Ask a question or share tips" className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 h-24" />
            <button className="w-full py-2 rounded-md bg-brand text-white">Submit for review</button>
            <div className="text-xs text-gray-600 dark:text-gray-400">Admin review required before publishing.</div>
          </div>
        </div>
      </aside>
    </div>
  );
}


