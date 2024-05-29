import { UserInterface } from '@/interfaces/user.interface';
import { client } from '../fetchHelps/fetchClient';

export const userPostSignUp = (user: UserInterface) => {
  return client.userSignUp('/auth/register', {
    user_first_name: user.firstName,
    user_last_name: user.lastName,
    user_email: user.userEmail,
    user_password: user.password,
  });
};

type UserForSignIn = Omit<UserInterface, 'firstName' | 'lastName'>;

export const userPostSignIn = (user: UserForSignIn) => {
  return client.userSignIn('/auth/login', {
    user_email: user.userEmail,
    user_password: user.password,
  });
};

export const confirmUserAuth = (
  userEmail: string | null,
  userPassword: string | null,
  confirmationCode: number
) => {
  return client.confirmUser(
    `/auth/confirm?email=${userEmail}&password=${userPassword}&confirmationCode=${confirmationCode}`
  );
};
