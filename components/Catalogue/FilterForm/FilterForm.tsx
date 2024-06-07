import { FormEvent, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import Close from '@/public/icons/close.svg';

import { Country } from '@/interfaces/country.interface';
import { Town } from '@/interfaces/town.interface';
import { getYachtMakes } from '@/utils/api/getAllVessels';
import { getCountries, getModels, getTowns } from '@/utils/api/getFilterProps';
import { Model } from '@/interfaces/model.interface';
import { FeaturedType, FormType } from './types';
import classes from './filterForm.module.scss';
import Featured from './components/Featured/Featured';
import { DropDown } from './components/DropDown/DropDown';
import { Range } from './components/Range/Range';

const initialFeatured = {
  top: false,
  hotPrice: false,
  vat: false,
};

const baseFilter = {
  minPrice: 0,
  maxPrice: 5000000,
  make: null,
  model: null,
  minYear: 1930,
  maxYear: 2025,
  country: null,
  town: null,
};

const advancedFilter = {
  minLengthOverall: 2.5,
  maxLengthOverall: 300,
  minBeamWidth: 1,
  maxBeamWidth: 25,
  minDraftDepth: 0.3,
  maxDraftDepth: 16,
  keelType: null,
  fuelType: null,
  minCabinNumber: 0,
  maxCabinNumber: 10,
  minBerthNumber: 0,
  maxBerthNumber: 20,
  minHeadsNumber: 0,
  maxHeadsNumber: 10,
  minShowerNumber: 0,
  maxShowerNumber: 10,
};

type FilterProps = {
  make: string[],
  countries: Country[],
  towns: Town[],
  models: Model[],
}

function FilterForm({ closeForm }: FormType ) {
  const [validated, setValidated] = useState(false);
  const [featured, setFeatured] = useState<FeaturedType>(initialFeatured);

  const [filterProps, setFilterProps] = useState<FilterProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [make, countries, towns, models] = await Promise.all([
          getYachtMakes(),
          getCountries(),
          getTowns(),
          getModels(),
        ]);

        setFilterProps({ make, countries, towns, models });
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const models = filterProps?.models.map(item => item.model);
  const countries = filterProps?.countries.map(item => item.country_name);
  const towns = filterProps?.towns.map(item => item.town_name);

  const handleFeatured = (value: keyof FeaturedType) =>
    setFeatured({ ...featured, [value]: !featured[value] });

  const handleReset = () => {
    setFeatured(initialFeatured);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  if (!filterProps) {
    return null;
  }

  return (
    <Form
      className={classes.form}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <div className={classes.header}>
        <span>Filter</span>
        <Image src={Close} alt="Close" onClick={closeForm} />
      </div>

      <div className={classes.content}>
        <Featured
          title="Featured"
          values={featured}
          changeValue={handleFeatured}
        />

        <Range title="Price Range" r1={baseFilter.minPrice} r2={baseFilter.maxPrice} />
        <DropDown title="Manufacturer" options={filterProps.make} />
        <DropDown title="Model" options={models} />
        <Range title="Year Built" r1={baseFilter.minYear} r2={baseFilter.maxYear} />
        <DropDown title="Country" options={countries} />
        <DropDown title="Town" options={towns} />

        <div>Advanced filter</div>

        <Range title="Length Overall" r1={advancedFilter.minLengthOverall} r2={advancedFilter.maxLengthOverall} />
        <Range title="Beam Width" r1={advancedFilter.minBeamWidth} r2={advancedFilter.maxBeamWidth} />
        <Range title="Draft Depth" r1={advancedFilter.minDraftDepth} r2={advancedFilter.maxDraftDepth} />

      </div>

      <div className={classes.buttons}>
        <button
          className={classes.button}
          type="button"
          onClick={() => handleReset()}
        >
          Reset
        </button>

        <button
          className={classes.button}
          type="submit"
        >
          Apply
        </button>
      </div>
    </Form>
  );
}

export default FilterForm;
