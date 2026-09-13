import { redirect } from 'next/navigation';
import { LoginForm } from '@/components/auth/login-form';
import { getSession } from '@/lib/auth';

export default async function LoginPage() {
  const session = await getSession();
  if (session) redirect('/dashboard');

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-peach-50 to-white px-4">
      <LoginForm />
    </div>
  );
}
