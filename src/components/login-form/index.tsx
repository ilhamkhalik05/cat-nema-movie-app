'use client';

import { useLoginModal } from '@/hooks/useLoginModal';
import { useSidenav } from '@/hooks/useSidenav';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../@shadcn-ui/ui/form';
import { Input } from '../@shadcn-ui/ui/input';
import { z } from 'zod';
import { Button } from '../@shadcn-ui/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { usePassword } from '@/hooks/usePassword';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { LOGIN_SUCCESS_MESSAGE, PASSWORD_INPUT_MIN_VALUE, USERNAME_INPUT_MIN_VALUE } from '@/lib/const';

const LoginFormSchema = z.object({
  username: z
    .string()
    .min(USERNAME_INPUT_MIN_VALUE, `Username must contain atleast ${USERNAME_INPUT_MIN_VALUE} characters long`),
  password: z
    .string()
    .min(PASSWORD_INPUT_MIN_VALUE, `Password must contain atleast ${PASSWORD_INPUT_MIN_VALUE} characters long`),
});

type TLoginFormSchema = z.infer<typeof LoginFormSchema>;

export default function LoginForm() {
  const { showPassword, togglePasswordHandler } = usePassword();
  const { closeLoginModal } = useLoginModal();
  const { closeSidenav } = useSidenav();

  const form = useForm<TLoginFormSchema>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmitHandler: SubmitHandler<TLoginFormSchema> = async ({ username, password }) => {
    const res = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    if (!res?.ok) {
      toast.error('Please input valid username and password');
    } else {
      toast.success(LOGIN_SUCCESS_MESSAGE);
      closeLoginModal();
      closeSidenav();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)} className="flex flex-col gap-5">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Type username here" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Type password here" type={showPassword ? 'text' : 'password'} {...field} />
              </FormControl>

              <FormMessage />

              <div className="absolute right-4 top-8 cursor-pointer" onClick={togglePasswordHandler}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </FormItem>
          )}
        />

        <Button
          className="self-start w-full sm:w-auto mt-2 tracking-widest font-[700] select-none disabled:opacity-80 disabled:cursor-not-allowed"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 'WAIT A SEC...' : 'LOGIN'}
        </Button>
      </form>
    </Form>
  );
}
