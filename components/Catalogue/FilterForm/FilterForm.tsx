import { FormEvent, useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Close from '@/public/icons/close.svg';
import { getSearchWith } from '@/utils/functions/getSearchWith';
import { FilterProps } from '@/interfaces/filterProps.interface';
import Featured from './components/Featured/Featured';

import { FeaturedType } from './types';

import { Range } from './components/Range/Range';
import { DropDown } from './components/DropDown/DropDown';
import classes from './filterForm.module.scss';
import {BASE_FILTER, FEATURED} from './constants';
import {Model} from '@/interfaces/model.interface';

type Props = {
  yachtsParams: FilterProps,
  closeForm: () => void;
}

// export const BASE_FILTER = {
//   minPrice: 0,
//   maxPrice: 5000000,
//   make: null,
//   model: null,
//   minYear: 1930,
//   maxYear: 2025,
//   country: null,
//   town: null,
// } as const;

export const FilterForm: React.FC<Props> = ({ closeForm, yachtsParams }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  
  const formRef = useRef<HTMLFormElement>(null);
  const [formHeight, setFormHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (formRef.current) {
        const currentHeight = formRef.current.offsetHeight;
        const rect = formRef.current.getBoundingClientRect();
        const maxFormHight = Math.trunc(window.innerHeight - rect.top - 10);

        setFormHeight(currentHeight > maxFormHight ? maxFormHight : currentHeight)
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const [featured, setFeatured] = useState<FeaturedType>({
    top: !!searchParams.get('top'),
    hotPrice: !!searchParams.get('hotPrice'),
    vat: !!searchParams.get('vat'),
  });

  const handleFeatured = (value: keyof FeaturedType) =>
    setFeatured({ ...featured, [value]: !featured[value] });


  const baseDropDowns = {
    makes: yachtsParams.makes,
    models: yachtsParams.models.map(el => el.model).filter((el, i, arr) => arr.indexOf(el) === i),
    countries: yachtsParams.countries.map(item => item.country_name),
    towns: yachtsParams.towns.map(item => item.town_name),
  }

  // const [baseFilter, setBeseFilter] = useState<BaseFilterType>(BASE_FILTER);

  // const [make, setMake] = useState<string | null>(null);
  // const [makes, setMakes] = useState<string[]>([]);

  // const [model, setModel] = useState<string | null>(null);
  // const [models, setModels] = useState<string[]>([]);

  const [town, setTown] = useState<string | null>(null);
  const [towns, setTowns] = useState<string[]>([]);
 
  const [country, setCountry] = useState<string | null>(null);
  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    setCountries(baseDropDowns.countries);
    setTowns(baseDropDowns.towns)
  }, [])

  const handleReset = () => {
    setFeatured(FEATURED);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const params = getSearchWith(searchParams, featured);
    replace(`${pathname}?${params}`);
  };

  return (
    <Form
      ref={formRef}
      className={classes.form}
      style={{ height: formHeight ? formHeight : 'min-content' }}
      noValidate
      onSubmit={handleSubmit}
    >
      <div className={classes.header}>
        <span>Filter</span>
        <Image src={Close} alt="Close" onClick={closeForm} />
      </div>
      <div className={classes.content}>
        <Featured values={featured} changeValue={handleFeatured} />
        
        <Range title="Price Range" r1={BASE_FILTER.minPrice} r2={BASE_FILTER.maxPrice} />
        {/* <DropDown
          title="Manufacturer"
          defaultValue='Make'
          options={makes}
          active={make}
          selectItem={setMake}
        />
        <DropDown
          title="Model"
          defaultValue='Model'
          options={models}
          active={model}
          selectItem={setModel}
        /> */}
        <DropDown
          title="Country"
          defaultValue='Country'
          options={countries}
          active={country}
          selectItem={setCountry}
        />
        <DropDown
          title="Town"
          defaultValue='Town'
          options={towns}
          active={town}
          selectItem={setTown}
        />
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
