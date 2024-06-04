import { FormEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import Close from '@/public/icons/close.svg'

import { FeaturedType, FormType } from './types';
import classes from './filterForm.module.scss'
import Featured from './components/Featured/Featured';
import { DropDown } from './components/DropDown/DropDown';
import { Range } from './components/Range/Range';

const initialFeatured = {
  top: false,
  hotPrice: false,
  vat: false,
}

const make = ['Porshe', 'Rols', 'Ferarri', 'Audi'];

function FilterForm({ closeForm }: FormType) {
  const [validated, setValidated] = useState(false);
  const [featured, setFeatured] = useState<FeaturedType>(initialFeatured);

  const handleFeatured = (value: keyof FeaturedType) =>
    setFeatured({ ...featured, [value]: !featured[value] });

  // console.log(featured)

  const handleReset = () => {
    setFeatured(initialFeatured);
  }

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
          title='Featured'
          values={featured}
          changeValue={handleFeatured}
        />
        <Range r1={2000} r2={20000} title='Price Range' />
        <DropDown options={make} title='Manufacturer' />
        



      </div>

      <div className={classes.buttons}>
        <button 
          className={classes.button} 
          type='button'
          onClick={() => handleReset()}
        >
          Reset
        </button>

        <button 
          className={classes.button} 
          type='button'
        >
          Apply
        </button>
      </div>

        
    </Form>
  );
}

export default FilterForm;
