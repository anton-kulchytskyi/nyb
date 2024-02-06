import { ButtonProps } from '@/interfaces/clickable.interface';

const ButtonComponent = ({ style, text, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={style}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
