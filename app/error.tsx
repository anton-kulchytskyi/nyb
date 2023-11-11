'use client'

import Link from "next/link";

type Props = {
  error: Error;
  reset: () => void;
}

const error = ({ error, reset }: Props) => {
  return (
    <>
      <span>{error.message}</span>
      <button onClick={reset}>Try again</button>
      <Link href='/'>Go home</Link>
    </>
  )
}

export default error