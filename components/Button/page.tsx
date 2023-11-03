import styles from './button.module.css'
import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '500', subsets: ['latin'] })

type Props = {
  text: string;
  onClick: () => void;
}

function Button({ text, onClick }: Props) {
  return (
    <button
      type="button"
      className={`${styles.button} ${roboto.className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button