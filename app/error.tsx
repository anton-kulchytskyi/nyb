'use client';

import Link from "next/link";

type Props = {
  error: Error;
}

const error = ({ error }: Props) => {
  // eslint-disable-next-line no-console
  console.log(error.name);
  return (
    <>
      <h2>{error.message}</h2>
      {/* <h2>{error.name}</h2>
      <h2>{error.stack}</h2> */}
      <Link href='/'>Go home</Link>
    </>
  )
}

export default error
