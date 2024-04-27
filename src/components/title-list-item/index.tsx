import { FC, forwardRef } from "react";
import style from "./style.module.css";
import { IFilm } from "../../types/data";

interface ITitleListItemProps {
  titleItem: IFilm;
  onClickItem: () => void;
}

const TitleListItem: FC<ITitleListItemProps> = forwardRef(
  ({ titleItem, onClickItem }, ref) => {
    return (
      <li
        tabIndex={0}
        onClick={onClickItem}
        className={style.char__item}
        ref={ref}
      >
        <img
          className={style.charlist__img}
          src={titleItem.poster.url}
          alt={titleItem.name}
        />
        <p className={style.charlist__name}>{titleItem.name}</p>
      </li>
    );
  }
);

export default TitleListItem;
