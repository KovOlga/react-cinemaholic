import { forwardRef } from "react";
import style from "./style.module.css";
import { IFilm } from "../../types/data";

interface ITitleListItemProps {
  titleItem: IFilm;
  onClickItem: () => void;
}

const TitleListItem = forwardRef<HTMLLIElement, ITitleListItemProps>(
  ({ titleItem, onClickItem }, ref) => {
    return (
      <li tabIndex={0} onClick={onClickItem} className={style.item} ref={ref}>
        <img
          className={style.img}
          src={titleItem.poster.url}
          alt={titleItem.name}
        />
        <p className={style.name}>{titleItem.name}</p>
      </li>
    );
  }
);

export default TitleListItem;
