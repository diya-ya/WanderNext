import { useState, useEffect } from 'react';
import { useAppStore } from '@/state/store';

export function ProfilePage() {
  const pref = useAppStore(s => s.preferences);
  const setPreferences = useAppStore(s => s.setPreferences);
  const [username, setUsername] = useState(pref.username);
  const [travelType, setTravelType] = useState<'solo' | 'family' | 'couple'>(pref.travelType);
  const [interests, setInterests] = useState<string[]>(pref.interests);
  const [budget, setBudget] = useState<[number, number]>(pref.budget);

  useEffect(() => {
    setUsername(pref.username);
    setTravelType(pref.travelType);
    setInterests(pref.interests);
    setBudget(pref.budget);
  }, [pref]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold">Your profile</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-4">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Username</label>
              <input value={username} onChange={(e)=>setUsername(e.target.value)} className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Travel type</label>
              <select value={travelType} onChange={(e)=>setTravelType(e.target.value as any)} className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700">
                <option value="solo">Solo</option>
                <option value="family">Family</option>
                <option value="couple">Couple</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Interests</label>
              <div className="flex flex-wrap gap-2">
                {['nature','cafes','museums','nightlife','beaches','hiking'].map(tag => {
                  const active = interests.includes(tag);
                  return (
                    <button key={tag} onClick={()=> setInterests(active? interests.filter(t=>t!==tag) : [...interests, tag])} className={`px-3 py-1.5 rounded-full border ${active? 'bg-brand text-white border-brand' : 'border-gray-300 dark:border-gray-700'}`}>
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Budget range (USD)</label>
              <div className="grid grid-cols-2 gap-3">
                <input type="number" value={budget[0]} onChange={(e)=> setBudget([Number(e.target.value), budget[1]])} className="px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700" />
                <input type="number" value={budget[1]} onChange={(e)=> setBudget([budget[0], Number(e.target.value)])} className="px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700" />
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={()=> setPreferences({ username, travelType, interests, budget })} className="px-4 py-2 rounded-md bg-brand text-white">Save changes</button>
            </div>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-brand/20 to-brand/40" />
            <div className="mt-3 font-medium">{username}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{travelType} traveller</div>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 text-sm text-gray-600 dark:text-gray-400">
            Your preferences power personalized recommendations across Discover and Listings.
          </div>
        </aside>
      </div>
    </div>
  );
}


