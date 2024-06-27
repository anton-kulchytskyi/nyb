'use client'

import { createContext, useState } from 'react'

import { FilterProps } from '@/interfaces/filterProps.interface';
import Sorting from '../Sorting/Sorting';
import Filtering from '../Filtering/Filtering';
import { FilterForm } from '../FilterForm/FilterForm';

import styles from './catalogProps.module.scss';

interface ComponentProps {
  yachtsParams: FilterProps;
}

const YachtsParamsContext = createContext<FilterProps | null>(null);

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
          <YachtsParamsContext.Provider value={yachtsParams} >
            <FilterForm
              closeForm={() => setShowFilterForm(false)}
            />
          </YachtsParamsContext.Provider>
        </aside>
      )}
    </div>
  );
};

export default CatalogProps;
