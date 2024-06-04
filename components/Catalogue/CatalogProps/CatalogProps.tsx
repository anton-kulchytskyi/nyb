'use client'

import { useState } from 'react'

import Sorting from '../Sorting/Sorting';
import Filtering from '../Filtering/Filtering';
import FilterForm from '../FilterForm/FilterForm';

import styles from './catalogProps.module.scss';

const CatalogProps = () => {
  const [showFilterForm, setShowFilterForm] = useState(false);
  // const handleCloseFilter = () => setShowFilterForm(false);

  return (
    <div>
      <div className={styles.catalogProps__buttons}>
        <Filtering showFilter={() => setShowFilterForm(true)}/>
        <Sorting />
      </div>

      {showFilterForm && (
        <aside className={styles['catalogProps__filter-form']}
        >
          <FilterForm closeForm={() => setShowFilterForm(false)} />
        </aside>
      )}

    </div>
  );
};

export default CatalogProps;
