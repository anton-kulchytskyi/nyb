import { FormEvent, useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Close from '@/public/icons/close.svg';

import { FilterProps } from '@/interfaces/filterProps.interface';
import { FEATURED } from './constants';
import { FeaturedType } from './types';
import Featured from './components/Featured/Featured';

import classes from './filterForm.module.scss';

type Props = {
  yachtsParams: FilterProps;
  closeForm: () => void;
}

export type SearchParams = {
  [key: string]: string | string[] | null | boolean;
};

export function getSearchWith(
  currentParams: URLSearchParams,
  paramsToUpdate: SearchParams
): string {
  const newParams = new URLSearchParams(currentParams.toString());

  Object.entries(paramsToUpdate).forEach(([key, value]) => {
    if (value === null || value === false) {
      newParams.delete(key);
    } else if (Array.isArray(value)) {
      newParams.delete(key);
      value.forEach((part) => newParams.append(key, part));
    } else if (value === true) {
      newParams.set(key, 'true');
    } else {
      newParams.set(key, value);
    }
  });

  return newParams.toString();
}

export const FilterForm: React.FC<Props> = ({ closeForm }) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [featured, setFeatured] = useState<FeaturedType>(FEATURED);

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
