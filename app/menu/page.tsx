// import Link from 'next/link';
// // import styles from './menuMobileModal.module.scss'

// // import dynamic from 'next/dynamic';


// const MenuMobileModal = () => {
//   return (
//     <div className='modal'>
//       <Link href="/catalog" className='modal__link'>Yachts</Link>
//       <Link href="/" className='modal__link'>How it works?</Link>
//       <Link href="/" className='modal__link'>Change Units</Link>
//       <Link href="/" className='modal__link'>Reviews</Link>
//       <Link href="/" className='modal__link'>Contact</Link>
//     </div>
//   )
// }

// // const lazyModal = dynamic(() => import(MenuMobileModal));

// export default MenuMobileModal

// pages/index.tsx
// import { NextPage } from "next";
// import React from "react";
// 1. Import the dynamic module
import dynamic from "next/dynamic";
// 2. Import the component using dynamic module
const ComponentA = dynamic(() => import('../../components/MenuMobileModal/MenuMobileModal'));

const LazyModal = () => {
  return (
    <ComponentA />
  );
};

export default LazyModal;
