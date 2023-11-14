export default async function getData(): Promise<any> {
  const response = await fetch('https://nyb-project-production.up.railway.app/vessels')

  return response.json();
}
