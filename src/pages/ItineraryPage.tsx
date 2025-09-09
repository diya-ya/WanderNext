import { useAppStore } from '@/state/store';

export function ItineraryPage() {
  const items = useAppStore(s => s.saved);
  const remove = useAppStore(s => s.removeSaved);
  const changeDate = useAppStore(s => s.updateSavedDate);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold">Your itinerary</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {items.map(i => (
            <div key={i.id} className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 flex items-center justify-between">
              <div>
                <div className="font-medium">{i.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{i.type} {i.date ? `• ${i.date}` : ''}</div>
              </div>
              <div className="flex items-center gap-3">
                <input type="date" value={i.date || ''} onChange={(e)=>changeDate(i.id, e.target.value)} className="px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700" />
                <button onClick={()=>remove(i.id)} className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <aside className="space-y-4">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 text-sm text-gray-600 dark:text-gray-400">
            Organize by date or destination. Drag-and-drop can be added later.
          </div>
        </aside>
      </div>
    </div>
  );
}


