'use client';

import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../@shadcn-ui/form';
import { Input } from '../@shadcn-ui/input';
import { z } from 'zod';
import { Button } from '../@shadcn-ui/button';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginFormSchema = z.object({
  email: z.string().email('Email should contain "@" character').min(8, 'Email must contain atleast 8 characters long'),
  password: z.string().min(6, 'Password must contain atleast 6 characters long'),
});

type TLoginFormSchema = z.infer<typeof LoginFormSchema>;

export default function LoginForm() {
  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmitHandler = () => {
    alert('Login Submitted');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitHandler)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email here" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password here" type="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="tracking-widest font-[700]" type="submit">
          LOGIN
        </Button>
      </form>
    </Form>
  );
}
