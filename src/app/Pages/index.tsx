import dynamic from 'next/dynamic';
import Image from 'next/image';
import PngEgg from '../img/pngegg.png'; // Make sure this is working correctly

const RouterProvider = dynamic(() => import('../Components/RouterProvider'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen gap-5 text-center">
      <Image src={PngEgg} alt="load" width={60} height={60} />
      <p>Loading...</p>
    </div>
  ),
});

export default function IndexPage() {
  return <RouterProvider />;
}
