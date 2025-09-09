import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { AppLayout } from './ui/AppLayout';
import { LandingPage } from './pages/LandingPage';
import { AuthPage } from './pages/AuthPage';
import { ProfilePage } from './pages/ProfilePage';
import { DiscoveryPage } from './pages/DiscoveryPage';
import { ListingsPage } from './pages/ListingsPage';
import { ListingDetailPage } from './pages/ListingDetailPage';
import { CommunityPage } from './pages/CommunityPage';
import { DestinationUtilitiesPage } from './pages/DestinationUtilitiesPage';
import { ItineraryPage } from './pages/ItineraryPage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/auth', element: <AuthPage /> },
      { path: '/profile', element: <ProfilePage /> },
      { path: '/discover', element: <DiscoveryPage /> },
      { path: '/listings', element: <ListingsPage /> },
      { path: '/listings/:id', element: <ListingDetailPage /> },
      { path: '/community', element: <CommunityPage /> },
      { path: '/destination/:slug', element: <DestinationUtilitiesPage /> },
      { path: '/itinerary', element: <ItineraryPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


