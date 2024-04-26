import { FC } from "react";
import style from "./style.module.css";

const Spinner: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.cssload__loader}>
        <div className={`${style.cssload__inner} ${style.cssload__one}`}></div>
        <div className={`${style.cssload__inner} ${style.cssload__two}`}></div>
        <div
          className={`${style.cssload__inner} ${style.cssload__three}`}
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
