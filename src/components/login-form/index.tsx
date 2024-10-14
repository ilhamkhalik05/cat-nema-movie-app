'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../@shadcn-ui/form';
import { Input } from '../@shadcn-ui/input';
import { z } from 'zod';
import { Button } from '../@shadcn-ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { usePassword } from '@/hooks/usePassword';

const LoginFormSchema = z.object({
  username: z.string().min(3, 'Username must contain atleast 3 characters long'),
  password: z.string().min(6, 'Password must contain atleast 6 characters long'),
});

type TLoginFormSchema = z.infer<typeof LoginFormSchema>;

export default function LoginForm() {
  const { showPassword, togglePasswordHandler } = usePassword();

  const form = useForm<TLoginFormSchema>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmitHandler: SubmitHandler<TLoginFormSchema> = async (input) => {
    alert('Login Submitted');
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

        <Button className="tracking-widest font-[700] select-none" type="submit">
          LOGIN
        </Button>
      </form>
    </Form>
  );
}
