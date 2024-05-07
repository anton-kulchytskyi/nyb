import { Vessel } from '@/interfaces/vessel.interface';

// export enum SortType {
//   Price = 'yacht_price',
//   Date = 'yacht_created_at',
// }

// export type SortOrder = 'asc' | 'desc';

export const sortYachts = (
  yachtsArray: Vessel[],
  sortBy?: string,
  order?: string
) => {
  switch (sortBy) {
    case 'yacht_price':
      return yachtsArray.sort((a, b) => {
        return order === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
      });
    case 'yacht_created_at':
      return yachtsArray.sort((a, b) => {
        return order === 'asc'
          ? dateToNumber(a[sortBy]) - dateToNumber(b[sortBy])
          : dateToNumber(b[sortBy]) - dateToNumber(a[sortBy]);
      });
  }
};

function dateToNumber(dateString: string): number {
  return Date.parse(dateString);
}
