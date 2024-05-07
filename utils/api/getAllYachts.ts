import { client } from '@/utils/api/getData';
import { Vessel } from '@/interfaces/vessel.interface';

export async function getAllYachts() {
  return client.get<Vessel[]>('/yachts');
}

export async function getAllFilteredYachts(search: string) {
  return client.get<Vessel[]>(`/yachts/search?${search}`);
}
