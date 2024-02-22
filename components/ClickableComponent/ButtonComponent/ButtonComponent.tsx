import { ButtonProps } from '@/interfaces/clickable.interface';

const ButtonComponent = ({ style, text, type, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={style}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
