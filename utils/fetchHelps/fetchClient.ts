import { UserInterface } from '@/interfaces/user.interface';

const BASE_URL = 'https://nyb-project-production.up.railway.app';

export function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

function request<T>(
  url: string,
  user: UserInterface,
  method: RequestMethod = 'POST'
): Promise<T> {
  const options: RequestInit = { method };
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  if (user) {
    // We add body and Content-Type only for the requests with data
    const { firstName, lastName, userEmail, password } = user;
    options.body = JSON.stringify({
      user_first_name: firstName,
      user_last_name: lastName,
      user_email: userEmail,
      user_password: password,
    });

    options.headers = {
      'Content-Type': 'application/json',
    };
  }

  return wait(300)
    .then(() => fetch(BASE_URL + url, options))
    .then(async (response) => {
      if (!response.ok) {
        const errorMessage = await response.json();

        throw new Error(`Network response was not ok: ${errorMessage.message}`);
      }

      return response.json();
    });
}

export const client = {
  userSignUp: <T>(url: string, user: UserInterface) =>
    request<T>(url, user, 'POST'),
  userSignIn: <T>(url: string, user: UserInterface) =>
    request<T>(url, user, 'POST'),
};
