'use client';

import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import styles from './sorting.module.scss'

const options = ['Price: Low to High', 'Price: High to Low', 'Newest Arrivals', 'Latest Additions'];

const Sorting = () => {
  const [desktopScreen, setDesktopScreen] = useState(false);
  const [value, setValue] = useState('Price: Low to High')
  const { width } = useWindowDimensions();
  
  const handleDropdownChange = (option: string) => {
    setValue(option);
  }

  useEffect(() => {
    const screen = (width as number) < 1200;
    setDesktopScreen(!screen);
  }, [width]);

  return (
    <section className='d-flex align-items-center'>
      <Dropdown className='d-flex align-items-center'>
        
        <Dropdown.Toggle as='div' className={styles.button} >
          <span className='text-dark'>Sorting by: </span>{' '}{desktopScreen && value}
        </Dropdown.Toggle>

        <Dropdown.Menu align='end' className={styles.menu}>
          {options.map((option, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => handleDropdownChange(option)}
              className={styles.item}
            >
              {option}
            </Dropdown.Item>
          ))}

        </Dropdown.Menu>
      </Dropdown>
    </section>
  );
};

export default Sorting;
