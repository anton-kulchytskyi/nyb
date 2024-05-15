import { client } from '@/utils/api/getData';
import { Vessel } from '@/interfaces/vessel.interface';

export async function getAllYachts(search?: string) {
  return client.get<Vessel[]>(`/yachts${search}`);
}

// export async function getAllYachts(search?: string) {
//   return client.get<Vessel[]>(`/yachts/search?${search}`);
// }

// export async function getAllFilteredYachts(search: string) {
//   return client.get<Vessel[]>(`/yachts/search?${search}`);
// }
