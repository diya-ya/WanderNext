import { useParams } from 'react-router-dom';

export function ListingDetailPage() {
  const { id } = useParams();
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900" />
      <div className="mt-6 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-2xl font-semibold">Listing {id}</h1>
          <p className="text-gray-600 dark:text-gray-400">High-fidelity mock of a listing with photos, description, and details.</p>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <div className="font-medium mb-2">Ratings & reviews</div>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <div>“Great location and clean rooms.” — Alex</div>
              <div>“Loved the vibe and coffee nearby.” — Priya</div>
              <div>“Would visit again!” — Chen</div>
            </div>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <div className="font-medium">Contact</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">+1 234-567-890 • hello@example.com</div>
            <a className="text-sm text-brand" href="#">Website</a>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <div className="font-medium mb-2">Map</div>
            <div className="h-48 rounded-lg bg-gradient-to-br from-brand/10 to-brand/20" />
          </div>
        </aside>
      </div>
    </div>
  );
}


