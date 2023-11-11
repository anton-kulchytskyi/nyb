const BASE_URL = 'https://nyb-project-production.up.railway.app/vessels';

export async function getData() {
  const response = await fetch(BASE_URL);

  return response.json();
}

export async function getOneVes(id: string) {
  const response = await fetch(BASE_URL + id);

  return response.json();
}
