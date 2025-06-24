// This is a protected Server Component that performs server-side GraphQL fetching.

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { UserProfile } from './user-profile';

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/login');
  }

  return (
    <div className="flex flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <UserProfile />
    </div>
  );
}
