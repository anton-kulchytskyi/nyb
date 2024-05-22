import { Vessel } from "@/interfaces/vessel.interface";

export const sortFunction = (
  yachts: Vessel[],
  sortParams: string = 'Price: High to Low',
): Vessel[] => {
  return yachts.sort((yacht1, yacht2) => {
    switch (sortParams) {
      case 'preceDecrease':
        return +yacht2.yacht_price - +yacht1.yacht_price;
      
      case 'preceIncrease':
        return +yacht1.yacht_price - +yacht2.yacht_price;
      
      case 'year':
        return yacht1.yacht_year - yacht2.yacht_year;

      case 'popularity': 
        return +yacht2.yacht_favourites_count - +yacht1.yacht_favourites_count;
      
      case 'newest': {
        const dateObj1 = new Date(yacht1.yacht_created_at);
        const dateObj2 = new Date(yacht2.yacht_created_at);

        if (dateObj1 < dateObj2) {
          return -1;
        } else if (dateObj1 > dateObj2) {
          return 1;
        }

        return 0;
      }
      
      default:
        return 0;
    }
  });
};
