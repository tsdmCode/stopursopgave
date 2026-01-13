import style from './buttonwrapper.module.scss';

interface ButtonWrapperProps {
  children: React.ReactNode;
}

export function ButtonWrapper({ children }: ButtonWrapperProps) {
  return <div className={style.buttonWrapperStyle}>{children}</div>;
}
