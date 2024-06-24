import { Country } from "./country.interface";
import { Model } from "./model.interface";
import { Town } from "./town.interface";

export interface FilterProps {
  make: string[];
  countries: Country[];
  towns: Town[];
  models: Model[];
};

