export default async function getData() {
  const response = await fetch('https://nyb-project-production.up.railway.app/vessels')

  return response.json();
}
