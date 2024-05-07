'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dropdown } from 'react-bootstrap';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import styles from './sorting.module.scss';

const options = [
  'Price: Low to High',
  'Price: High to Low',
  'Newest Arrivals',
  'Latest Additions',
];

const Sorting = () => {
  const router = useRouter();
  const [desktopScreen, setDesktopScreen] = useState(false);
  const [value, setValue] = useState('Price: Low to High');
  const { width } = useWindowDimensions();

  const handleDropdownChange = (option: string) => {
    setValue(option);
    let sort = '';
    let order = '';
    switch (option) {
      case 'Price: Low to High':
        sort = 'yacht_price';
        order = 'asc';
        break;
      case 'Price: High to Low':
        sort = 'yacht_price';
        order = 'desc';
        break;
      case 'Newest Arrivals':
        sort = 'yacht_created_at';
        order = 'asc';
        break;
      case 'Latest Additions':
        sort = 'yacht_created_at';
        order = 'desc';
        break;
    }
    router.push(`/catalogue?sort=${sort}&order=${order}`);
  };

  useEffect(() => {
    const screen = (width as number) < 1200;
    setDesktopScreen(!screen);
  }, [width]);

  return (
    <section className="d-flex align-items-center">
      <Dropdown>
        <Dropdown.Toggle
          as="div"
          className={styles.button}
        >
          <span className="text-dark me-2">Sorting by: </span>{' '}
          {desktopScreen && (
            <span className={styles.button__value}>{value}</span>
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu
          align="end"
          className={styles.menu}
        >
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
