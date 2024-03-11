'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import { Offcanvas, Dropdown } from 'react-bootstrap';

// import Nouislider from "nouislider-react";
// import "nouislider/distribute/nouislider.css";

import filter from '../../../public/icons/filter.svg';

import styles from './filter.module.scss';

const make = ['Porshe', 'Rols', 'Ferarri', 'Audi'];
const model = ['N240', 'N340', 'N440', 'N540'];


const DropDown = ( { options }: { options: string[] } ) => {
  const [value, setValue] = useState(options[0])

  const handleDropdownChange = (option: string) => {
    setValue(option);
  }

  return (
    <Dropdown className='d-flex align-items-center'>
      <Dropdown.Toggle className={styles.dropdown__button}>
        {value}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => handleDropdownChange(option)}
          >
            {option}
          </Dropdown.Item>
        ))}

      </Dropdown.Menu>
    </Dropdown>
  )
}

const Filter = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className='d-flex align-items-center me-2'>
      <span onClick={handleShow} className={styles.button}>
        Filter <Image height={20} src={filter} alt='filter' />
      </span>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header>
          <Offcanvas.Title>
            Filter
            {/* <span>Reset everything</span> */}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='p-3'>
          <div className="d-flex justify-content-between pb-4 border-bottom mb-4">
            <div className='w-50 d-flex flex-column align-items-start gap-2'>
              <label htmlFor="Featured" className={styles.filter__title}>Featured</label>
              <input type="checkbox" id="Featured" name="Featured" className={styles.checkbox} />
            </div>
            <div className='w-50 d-flex flex-column align-items-start gap-2'>
              <label htmlFor="VAT" className={styles.filter__title}>VAT Included</label>
              <input type="checkbox" id="VAT" name="VAT" className={styles.checkbox} />
            </div>
          </div>
          <div className="pb-4 border-bottom mb-4">
            <p className={styles.filter__title}>Make</p>
            <DropDown options={make} />
          </div>
          <div className="mb-4">
            <p className={styles.filter__title}>Make</p>
            <DropDown options={model} />
          </div>
        </Offcanvas.Body>
        <button className={styles.submit}>Apply</button>
      </Offcanvas>
    </section>
  );
};

export default Filter;
