import { FC, forwardRef } from "react";
import style from "./style.module.css";

interface ITitleListItem {
  poster: {
    url: string;
  };
  name: string;
}

const TitleListItem: FC<{ titleItem: ITitleListItem }> = forwardRef(
  ({ titleItem: title }, ref) => {
    console.log("char", title.poster.url);
    return (
      <li
        tabIndex={0}
        // onClick={props.onClickItem}
        className={style.char__item}
        // ref={ref}
      >
        <img
          className={style.charlist__img}
          src={title.poster.url}
          alt={title.name}
          // style={props.style}
        />
        <p className={style.charlist__name}>{title.name}</p>
      </li>
    );
  }
);

export default TitleListItem;
