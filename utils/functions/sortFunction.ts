import { Vessel } from "@/interfaces/vessel.interface";

export const sortFunction = (
  yachts: Vessel[],
  sortParams: string = 'Price: High to Low',
): Vessel[] => {
  return yachts.sort((a, b) => {
    switch (sortParams) {
      case 'priceDecrease':
        return +b.yacht_price - +a.yacht_price;
      
      case 'priceIncrease':
        return +a.yacht_price - +b.yacht_price;
      
      case 'yearIncrease':
        return a.yacht_year - b.yacht_year;

      case 'yearDecrease':
        return b.yacht_year - a.yacht_year;

      case 'leastPopular': 
        return +a.yacht_favourites_count - +b.yacht_favourites_count;

      case 'mostPopular': 
        return +b.yacht_favourites_count - +a.yacht_favourites_count;
      
      default:
        return 0;
    }
  });
};
