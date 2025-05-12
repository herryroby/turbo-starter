'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' })
});

const LoginForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleSubmit = () => {
    router.push('/');
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...form.register('email')} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...form.register('password')} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
