import { cn } from '@/lib/utils';

export function PageSectionTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return <h1 className={cn(`text-xl font-[500] tracking-wider mb-5 `, className)}>{children}</h1>;
}
