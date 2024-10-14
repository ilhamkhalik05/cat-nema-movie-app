import { AiOutlineLogin } from 'react-icons/ai';
import { Button } from '../@shadcn-ui/button';
import { cn } from '@/lib/utils';

export function LoginButton({ className }: { className?: string }) {
  return (
    <>
      <Button
        variant={'primary'}
        className={cn('flex items-center gap-1.5 font-[600] lg:rounded-xl tracking-widest px-5', className)}
      >
        LOGIN
        <AiOutlineLogin size={24} />
      </Button>
    </>
  );
}
