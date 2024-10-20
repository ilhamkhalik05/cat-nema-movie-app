import Loader from '@/components/utils/loader';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <Loader />
    </div>
  );
}
