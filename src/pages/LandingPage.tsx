import { Link, NavLink } from 'react-router-dom';

export function LandingPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/10 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
            Discover your next adventure with <span className="text-brand">WanderNext</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A high-fidelity prototype for planning trips, exploring destinations, and connecting with a community of travellers.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <NavLink to="/discover" className="px-6 py-3 rounded-lg bg-brand text-white hover:bg-brand-dark">Start Exploring</NavLink>
            <NavLink to="/auth" className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700">Sign in</NavLink>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">What’s Trending</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Kyoto', 'Lisbon', 'Bali', 'Reykjavik'].map((city) => (
              <Link key={city} to={`/destination/${city.toLowerCase()}`} className="group">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="font-medium">{city}</div>
                  <div className="text-sm text-gray-500">Popular now</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-semibold">Personalized discovery</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">Tailored recommendations using your interests, budget, and travel style.</p>
            <div className="mt-6 flex gap-3">
              <NavLink to="/profile" className="px-4 py-2 rounded-md bg-brand text-white">Set preferences</NavLink>
              <NavLink to="/discover" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Explore</NavLink>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <div className="h-64 rounded-lg bg-gradient-to-br from-brand/10 to-brand/20" />
          </div>
        </div>
      </section>
    </div>
  );
}


