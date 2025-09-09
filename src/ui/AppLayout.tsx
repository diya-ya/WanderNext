import { Outlet, NavLink } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export function AppLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-full flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-gray-950/60 border-b border-gray-200/60 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              <Bars3Icon className="h-6 w-6" />
            </button>
            <NavLink to="/" className="text-xl font-semibold tracking-tight">
              Wander<span className="text-brand">Next</span>
            </NavLink>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink to="/discover" className={({isActive})=> isActive? 'text-brand' : 'hover:text-brand'}>Discover</NavLink>
            <NavLink to="/listings" className={({isActive})=> isActive? 'text-brand' : 'hover:text-brand'}>Listings</NavLink>
            <NavLink to="/community" className={({isActive})=> isActive? 'text-brand' : 'hover:text-brand'}>Community</NavLink>
            <NavLink to="/itinerary" className={({isActive})=> isActive? 'text-brand' : 'hover:text-brand'}>Itinerary</NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <NavLink to="/auth" className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">Sign in</NavLink>
            <NavLink to="/profile" className="hidden sm:inline-flex px-3 py-2 rounded-md bg-brand text-white hover:bg-brand-dark">Profile</NavLink>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-3 flex flex-col gap-3">
              <NavLink to="/discover" onClick={()=>setOpen(false)}>Discover</NavLink>
              <NavLink to="/listings" onClick={()=>setOpen(false)}>Listings</NavLink>
              <NavLink to="/community" onClick={()=>setOpen(false)}>Community</NavLink>
              <NavLink to="/itinerary" onClick={()=>setOpen(false)}>Itinerary</NavLink>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800 py-10 text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <div className="text-lg font-semibold">Wander<span className="text-brand">Next</span></div>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md">Plan smarter, travel further. Discover destinations, curate itineraries, and connect with fellow explorers.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="font-medium mb-2">Explore</div>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li><NavLink to="/discover">Discover</NavLink></li>
                <li><NavLink to="/listings">Listings</NavLink></li>
                <li><NavLink to="/community">Community</NavLink></li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2">Account</div>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li><NavLink to="/auth">Sign in</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2">Company</div>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


