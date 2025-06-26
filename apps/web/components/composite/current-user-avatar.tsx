'use client';

import { useUser } from '@/hooks/use-user';
import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui';
import * as React from 'react';

export const CurrentUserAvatar = React.forwardRef<
  React.ComponentRef<typeof Avatar>,
  React.ComponentProps<typeof Avatar>
>((props, ref) => {
  const { user } = useUser();
  const initials =
    user?.name
      ?.split(' ')
      ?.map((word) => word[0])
      ?.join('')
      .toUpperCase() || 'U';

  return (
    <Avatar ref={ref} {...props}>
      {user?.image && <AvatarImage src={user.image} alt={user.name || 'User Avatar'} referrerPolicy="no-referrer" />}
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
});

CurrentUserAvatar.displayName = 'CurrentUserAvatar';
