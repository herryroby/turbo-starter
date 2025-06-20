// apps/web/components/auth/logout-button.tsx
'use client';

import { createClient } from '@/lib/supabase/client';
import { Button } from '@repo/ui/components/ui/button';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
    router.refresh(); // Ensure the session state is cleared on the client
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}
