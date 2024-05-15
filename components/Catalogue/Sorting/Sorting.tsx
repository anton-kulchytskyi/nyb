'use client';

import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import useWindowDimensions from '@/hooks/useWindowDimensions';

import { SORT_PARAMS } from '@/utils/constants/sortParans';

import styles from './sorting.module.scss';

const Sorting = () => {
  const router = useRouter();

  const [desktopScreen, setDesktopScreen] = useState(false);
  const [value, setValue] = useState<string>(SORT_PARAMS.preceIncrease);

  const { width } = useWindowDimensions();

  const handleDropdownChange = (key: string, option: string) => {
    setValue(option);
    router.push(`/catalogue?sort=${key}`);
  }

  useEffect(() => {
    const screen = (width as number) < 1200;
    setDesktopScreen(!screen);
  }, [width]);

  return (
    <section className='d-flex align-items-center'>
      <Dropdown>
        <Dropdown.Toggle as='div' className={styles.button} >
          <span className='text-dark me-2'>Sorting by: </span> {desktopScreen && (<span className={styles.button__value}>{value}</span>)}
        </Dropdown.Toggle>

        <Dropdown.Menu align='end' className={styles.menu}>
          {Object.entries(SORT_PARAMS).map(([key, value]) => (
            <Dropdown.Item
              key={key}
              onClick={() => handleDropdownChange(key, value)}
              className={styles.item}
            >
              {value}
            </Dropdown.Item>
          ))}

        </Dropdown.Menu>
      </Dropdown>
    </section>
  );
};

export default Sorting;
