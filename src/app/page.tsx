'use client';

import dynamic from 'next/dynamic';

const RouterProvider = dynamic(() => import('./Components/RouterProvider'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Page() {
  return <RouterProvider />;
}
