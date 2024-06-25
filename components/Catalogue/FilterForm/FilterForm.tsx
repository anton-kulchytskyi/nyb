import { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import { Accordion } from 'react-bootstrap';
import Close from '@/public/icons/close.svg';

import { FilterProps } from '@/interfaces/filterProps.interface';
import { ADVANCED_FILTER, BASE_FILTER, FEATURED } from './constants';
import { FeaturedType } from './types';
import Featured from './components/Featured/Featured';
import { DropDown } from './components/DropDown/DropDown';
import { Range } from './components/Range/Range';

import classes from './filterForm.module.scss';

type Props = {
  yachtsParams: FilterProps;
  closeForm: () => void;
}

export const FilterForm: React.FC<Props> = ({ yachtsParams, closeForm }) => {
  // const [validated, setValidated] = useState(false);
  const [featured, setFeatured] = useState<FeaturedType>(FEATURED);

  const makeArray = yachtsParams.models
    .map(item => item.make)
    .filter((item, index, arr) => arr.indexOf(item) === index);
  
  const countriesArray = yachtsParams.countries.map(item => item.country_name);
  const townArray = yachtsParams.towns.map(item => item.town_name);

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

  const handleFeatured = (value: keyof FeaturedType) =>
    setFeatured({ ...featured, [value]: !featured[value] });

  const handleReset = () => {
    setFeatured(FEATURED);
  };

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  // if (!filterProps) {
  //   return null;
  // }

  return (
    <Form
      ref={formRef}
      className={classes.form}
      style={{ height: formHeight ? formHeight : 'min-content' }}
      noValidate
      // validated={validated}
      // onSubmit={handleSubmit}
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

        <Range title="Price Range" r1={BASE_FILTER.minPrice} r2={BASE_FILTER.maxPrice} />
        <DropDown title="Manufacturer" options={yachtsParams.make} />
        <DropDown title="Model" options={makeArray} />
        <Range title="Year Built" r1={BASE_FILTER.minYear} r2={BASE_FILTER.maxYear} />
        <DropDown title="Country" options={countriesArray} />
        <DropDown title="Town" options={townArray} />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" className={classes.accordion}>
            <Accordion.Header className={classes.accordionHeader}>
              Advanced filter
            </Accordion.Header>

            <Accordion.Body className={classes.accordionBody}>
              <Range 
                title="Length Overall" 
                r1={ADVANCED_FILTER.minLengthOverall} 
                r2={ADVANCED_FILTER.maxLengthOverall} 
              />

              <Range 
                title="Beam Width" 
                r1={ADVANCED_FILTER.minBeamWidth} 
                r2={ADVANCED_FILTER.maxBeamWidth} 
              />

              <Range 
                title="Draft Depth" 
                r1={ADVANCED_FILTER.minDraftDepth} 
                r2={ADVANCED_FILTER.maxDraftDepth} 
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
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
