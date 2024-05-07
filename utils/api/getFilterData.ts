import { client } from '@/utils/api/getData';
import { Country } from '@/interfaces/country.interface';
import { Town } from '@/interfaces/town.interface';

export async function getAllCountries() {
  return client.get<Country[]>('/countries');
}

export async function getAllTowns() {
  return client.get<Town[]>('/towns');
}
