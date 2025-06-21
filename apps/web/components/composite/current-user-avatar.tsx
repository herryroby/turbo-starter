'use client';

import { useCurrentUser } from '@/hooks/use-current-user';
import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui';
import * as React from 'react';

export const CurrentUserAvatar = React.forwardRef<
  React.ElementRef<typeof Avatar>,
  React.ComponentPropsWithoutRef<typeof Avatar>
>((props, ref) => {
  const user = useCurrentUser();
  const initials =
    user?.name
      ?.split(' ')
      ?.map((word) => word[0])
      ?.join('')
      .toUpperCase() || 'U';

  return (
    <Avatar ref={ref} {...props}>
      {user?.image && (
        <AvatarImage
          src={user.image}
          alt={user.name || 'User Avatar'}
          referrerPolicy="no-referrer"
        />
      )}
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
});

CurrentUserAvatar.displayName = 'Current User Avatar';
