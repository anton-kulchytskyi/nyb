import { DefaultError } from '@/utils/errors/defaultError';
/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = 'https://nyb-project-production.up.railway.app';

// To have autocompletion and avoid mistypes
type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

async function request<T>(
  url: string = '',
  // search: string = '',
  method: RequestMethod = 'GET',
  data: any = null // we can send any data to the server
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    // We add body and Content-Type only for the requests with data
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    next: { revalidate: 10800 },
  });

  if (!response.ok) {
    throw new DefaultError();
  }

  return response.json();
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  patch: <T>(url: string, data: any) => request<T>(url, 'PATCH', data),
  delete: (url: string) => request(url, 'DELETE'),
};
