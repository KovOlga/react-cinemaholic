import { FC, forwardRef } from "react";
import style from "./style.module.css";
import { IFilm } from "../../types/data";

interface ITitleListItemProps {
  titleItem: IFilm;
  onClickItem: () => void;
}

const TitleListItem: FC<ITitleListItemProps> = forwardRef((props, ref) => {
  return (
    <li
      tabIndex={0}
      onClick={props.onClickItem}
      className={style.char__item}
      ref={ref}
    >
      <img
        className={style.charlist__img}
        src={props.titleItem.poster.url}
        alt={props.titleItem.name}
      />
      <p className={style.charlist__name}>{props.titleItem.name}</p>
    </li>
  );
});

export default TitleListItem;
