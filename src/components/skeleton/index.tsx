import { FC } from "react";
import style from "./style.module.css";

const Skeleton: FC = () => {
  return (
    <>
      <p className={style.title}>Выберете тайтд, чтобы увидеть информацию</p>
      <div className={style.skeleton}>
        <div className={`${style.pulse} ${style.skeleton__header}`}>
          <div className={`${style.pulse} ${style.skeleton__circle}`}></div>
          <div className={`${style.pulse} ${style.skeleton__mini}`}></div>
        </div>
        <div className={`${style.pulse} ${style.skeleton__block}`}></div>
        <div className={`${style.pulse} ${style.skeleton__block}`}></div>
        <div className={`${style.pulse} ${style.skeleton__block}`}></div>
      </div>
    </>
  );
};

export default Skeleton;
