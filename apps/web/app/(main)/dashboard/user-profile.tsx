'use client';

import { useProfilesCollectionQuery } from '@/lib/graphql/generated/graphql';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui';

export const UserProfile = () => {
  const { data, loading, error } = useProfilesCollectionQuery({ fetchPolicy: 'network-only' });

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div>Error loading profile: {error.message}</div>;
  }

  // Since RLS ensures we only get the current user's profile, we can take the first one.
  const profile = data?.profilesCollection?.edges[0]?.node;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
      </CardHeader>
      <CardContent>
        {profile ? (
          <div className="space-y-2">
            <p>
              <span className="font-medium">Full Name:</span> {profile.full_name}
            </p>
            <p>
              <span className="font-medium">User ID:</span> {profile.id}
            </p>
          </div>
        ) : (
          <p>No profile data found.</p>
        )}
      </CardContent>
    </Card>
  );
};
