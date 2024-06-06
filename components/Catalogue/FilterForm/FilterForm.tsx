import { FormEvent, useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import Close from '@/public/icons/close.svg';

import { getYachtMakes } from '@/utils/api/getAllVessels';
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

function FilterForm({ closeForm }: FormType) {
  const [validated, setValidated] = useState(false);
  const [featured, setFeatured] = useState<FeaturedType>(initialFeatured);
  const [make, setMake] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getYachtMakes();
        setMake(result);  // Populate make state with fetched data
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log('2', make);

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
        <Range
          title="Price Range"
          r1={baseFilter.minPrice}
          r2={baseFilter.maxPrice}
        />
        <DropDown options={make} title="Manufacturer" />
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
