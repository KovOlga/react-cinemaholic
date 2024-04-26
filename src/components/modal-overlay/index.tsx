import { FC, ReactNode } from "react";
import style from "./style.module.css";

const ModalOverlay: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={style.overlay}>{children}</div>;
};

export default ModalOverlay;
