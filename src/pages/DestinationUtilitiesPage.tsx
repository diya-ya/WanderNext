import { useParams } from 'react-router-dom';

export function DestinationUtilitiesPage() {
  const { slug } = useParams();
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <h1 className="text-2xl font-semibold capitalize">{slug?.replace('-', ' ')} guide</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="font-medium">Real-time weather</div>
          <div className="mt-3 h-24 rounded-lg bg-gradient-to-br from-brand/10 to-brand/20 flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">Weather widget placeholder</div>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="font-medium">Visa requirements</div>
          <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <select className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-300 dark:border-gray-700">
              <option>United States</option>
              <option>India</option>
              <option>United Kingdom</option>
            </select>
            <div>Guidelines vary by nationality — placeholder content.</div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="font-medium">Local transport</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Metro: approx $2-4/trip</li>
            <li>Cabs: approx $1.5/km</li>
            <li>Rentals: scooters from $15/day</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 md:col-span-2">
          <div className="font-medium">Cultural & safety tips</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Respect local customs and dress codes at places of worship.</li>
            <li>Keep emergency contacts saved offline.</li>
            <li>Learn basic phrases for smoother interactions.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="font-medium">Local guides & tours</div>
          <ul className="mt-3 space-y-2 text-sm text-brand">
            <li><a href="#">City walking tour</a></li>
            <li><a href="#">Food exploration experience</a></li>
            <li><a href="#">Hiking day trip</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}


