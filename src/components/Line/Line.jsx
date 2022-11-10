import s from './Line.module.css';

export const Line = ({ width, height, top, right }) => {
  return (
    <div
      style={{ top: `${top}px`, right: `${right}px` }}
      className={s.lineContainer}
    >
      <div style={{ width, height }} className={s.content}>
        <div className={s.lineH}></div>
        <div className={s.lineV}></div>
      </div>
    </div>
  );
};
