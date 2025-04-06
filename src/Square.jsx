import style from './Square.module.css';

export function Square({ value, onClick }) {
  return (
    <button className={style.square} onClick={onClick}>
      {value}
    </button>
  );
}
