import { UserInterface } from '@/interfaces/user.interface';
import { client } from '../fetchHelps/fetchClient';

export const userPostSignUp = (user: UserInterface) => {
  return client.userSignUp('/auth/register', user);
};

type UserForSignIn = Omit<UserInterface, 'firstName' | 'lastName'>;

export const userPostSignIn = (user: UserForSignIn) => {
  return client.userSignIn('/auth/login', user as UserInterface);
};
