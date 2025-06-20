import { Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';

@Resolver(() => User)
export class UserResolver {}
