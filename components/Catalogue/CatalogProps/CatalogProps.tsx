'use client'

import { useState } from 'react'

import { FilterProps } from '@/interfaces/filterProps.interface';
import Sorting from '../Sorting/Sorting';
import Filtering from '../Filtering/Filtering';
import { FilterForm } from '../FilterForm/FilterForm';

import styles from './catalogProps.module.scss';

interface ComponentProps {
  yachtsParams: FilterProps;
}

const CatalogProps: React.FC<ComponentProps> = ({ yachtsParams }) => {
  const [showFilterForm, setShowFilterForm] = useState(false);

  return (
    <div>
      <div className={styles.catalogProps__buttons}>
        <Filtering showFilter={() => setShowFilterForm(!showFilterForm)}/>
        <Sorting />
      </div>

      {showFilterForm && (
        <aside className={styles['catalogProps__filter-form']}
        >
          <FilterForm
            closeForm={() => setShowFilterForm(false)}
            yachtsParams={yachtsParams}
          />
        </aside>
      )}

    </div>
  );
};

export default CatalogProps;
