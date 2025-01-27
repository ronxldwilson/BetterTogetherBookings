import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AdminDashboard() {
  // Initialize Supabase client with cookies
  const supabase = createServerComponentClient({ cookies });

  // Fetch session from Supabase
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Redirect to login if no session exists
  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome to the Admin Dashboard</h1>
        <p className="text-lg mt-4">
          You are logged in as {session.user.email}
        </p>
      </div>
    </div>
  );
}

