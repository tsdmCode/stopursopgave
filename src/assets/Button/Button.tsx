import style from './button.module.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button className={style.buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
}
