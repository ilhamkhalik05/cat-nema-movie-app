import logo from '@/assets/logo.png';
import Image from 'next/image';

export function BrandLogo() {
  return (
    <div className="flex items-center gap-5">
      <div className="rounded-3xl p-2 shadow-md shadow-zinc-800">
        <Image className="size-12 object-contain" src={logo.src} alt={'Logo'} width={1000} height={1000} />
      </div>
      <h1 className="text-3xl text-foreground font-[900]">CatNema</h1>
    </div>
  );
}
