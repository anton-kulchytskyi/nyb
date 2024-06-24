
import { FilterProps } from "@/interfaces/filterProps.interface";
import { DropDown } from "../DropDown/DropDown";
import { Range } from "../Range/Range";
import { BASE_FILTER } from "../../constants";

interface ComponentProps {
  yachtsParams: FilterProps;
}

export const BaseFilter: React.FC<ComponentProps> = ({ yachtsParams }) => {
  const makeArray = yachtsParams.models
    .map(item => item.make)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const countriesArray = yachtsParams.countries.map(item => item.country_name);
  const townArray = yachtsParams.towns.map(item => item.town_name);

  return (
    <>
      <Range title="Price Range" r1={BASE_FILTER.minPrice} r2={BASE_FILTER.maxPrice} />
      <DropDown title="Manufacturer" options={yachtsParams.make} />
      <DropDown title="Model" options={makeArray} />
      <Range title="Year Built" r1={BASE_FILTER.minYear} r2={BASE_FILTER.maxYear} />
      <DropDown title="Country" options={countriesArray} />
      <DropDown title="Town" options={townArray} />
    </>
  );
}
