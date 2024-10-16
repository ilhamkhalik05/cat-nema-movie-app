'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../@shadcn-ui/form';
import { Input } from '../@shadcn-ui/input';
import { z } from 'zod';
import { Button } from '../@shadcn-ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { usePassword } from '@/hooks/usePassword';
import { signIn } from 'next-auth/react';
import { useContext } from 'react';
import { LoginModalContext } from '@/context/login-modal-context';
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
  const { closeLoginModal } = useContext(LoginModalContext);

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
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)} className="space-y-5">
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
          className="tracking-widest font-[700] select-none disabled:opacity-80 disabled:cursor-not-allowed"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 'WAIT A SEC...' : 'LOGIN'}
        </Button>
      </form>
    </Form>
  );
}
