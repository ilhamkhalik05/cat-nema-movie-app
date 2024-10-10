import Image from 'next/image';
import exampleBanner from '@/assets/movie-banner-mock.jpg';
import Navbar from '@/components/navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <div className="relative">
        <Image
          className="brightness-50 object-cover size-full"
          src={exampleBanner.src}
          alt={'Example'}
          width={1000}
          height={1000}
        />
      </div>
    </>
  );
}
