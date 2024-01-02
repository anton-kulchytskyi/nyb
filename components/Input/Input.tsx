import styles from './input.module.scss';

type Props = {
  title: string;
  inputType?: string;
  textarea?: boolean;
}

const Input = ({ title, inputType, textarea }: Props) => {
  return (
    <div className={styles.form_group}>
      {textarea ? (
        <textarea
          id={title}
          className={styles.input}
        />
      ) : (
        <input
          id={title}
          type={inputType}
          className={styles.input}
          required
        />
      )}
      <label className={styles.label} htmlFor={title}>{`Your ${title}`}</label>
    </div>
  )
}

export default Input;
