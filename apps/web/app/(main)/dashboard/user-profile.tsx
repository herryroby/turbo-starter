// apps/web/app/(main)/dashboard/user-profile.tsx
'use client';

import { useProfilesCollectionQuery } from '@/lib/graphql/generated/graphql';

// This component demonstrates using a generated hook to fetch user data.
export const UserProfile = () => {
  const { data, loading, error } = useProfilesCollectionQuery();

  if (loading) {
    return <div className="h-24 w-full animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-800" />;
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-red-600">
        <p className="font-bold">Error loading profile:</p>
        <p className="text-sm">{error.message}</p>
      </div>
    );
  }

  const profile = data?.profilesCollection?.edges[0]?.node;

  return (
    <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
      <h2 className="text-xl font-semibold">Your Profile</h2>
      <div className="mt-4 space-y-2">
        <p>
          <span className="font-medium text-muted-foreground">Full Name:</span> {profile?.full_name}
        </p>
        <p>
          <span className="font-medium text-muted-foreground">User ID:</span> {profile?.id}
        </p>
      </div>
    </div>
  );
};
