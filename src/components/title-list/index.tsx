import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import TitleListItem from "../title-list-item";
import Spinner from "../spinner";
import { mock } from "../../constants/mock";
import { IFilm } from "../../types/data";
import { useAppDispatch } from "../../hooks/hooks";
import { setCurrentTitleAction } from "../../services/actions/films";
import Button from "../button";
import { ButtonType } from "../button/types";

const TitleList: FC = () => {
  const [charList, setCharList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(260);
  const [charEnded, setCharEnded] = useState(false);
  const [char, setChar] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();

  // const { loading, error, getAllCharacters } = useMarvelService();

  useEffect(() => {
    loadInitialList();
  }, []);

  const loadInitialList = () => {
    //   getAllCharacters().then((char) => {
    //     setCharList(char);
    //   });
  };

  const onRequest = (offset) => {
    //   setNewItemLoading(true);
    //   getAllCharacters(offset).then(onCharListLoaded);
  };

  const onCharListLoaded = (newCharList) => {
    //   let ended = false;
    //   if (newCharList.length < 3) {
    //     ended = true;
    //   }
    //   setCharList((charList) => [...charList, ...newCharList]);
    //   setNewItemLoading((newItemLoading) => false);
    //   setOffset((offset) => offset + 9);
    //   setCharEnded((charEnded) => ended);
  };

  const itemRefs = useRef([]);

  const focusOnItem = (id: number) => {
    itemRefs.current[id].focus();
  };

  const onCharSelected = (id: number) => {
    console.log("id", id);
    dispatch(setCurrentTitleAction(id));
  };

  const renderItems = (arr: IFilm[]) => {
    const items = arr.map((item, i) => {
      return (
        <CSSTransition
          key={item.id}
          timeout={500}
          classNames={{
            enter: styles.char__item_enter,
            enterActive: styles.char__item_enter_active,
          }}
        >
          <TitleListItem
            key={item.id}
            ref={(el) => (itemRefs.current[i] = el)}
            onClickItem={() => {
              onCharSelected(item.id);
              focusOnItem(i);
            }}
            // onKeyPress={(e) => {
            //   if (e.key === " " || e.key === "Enter") {
            //     onCharSelected(char.id);
            //     focusOnItem(i);
            //   }
            // }}
            titleItem={item}
          />
        </CSSTransition>
      );
    });

    return (
      <ul className={styles.charlist__list}>
        <TransitionGroup component={null}>{items}</TransitionGroup>
      </ul>
    );
  };

  const items = renderItems(mock);

  const errorMessage = error ? "error" : null;
  const spinner = isLoading && !newItemLoading ? <Spinner /> : null;
  return (
    <div className={styles.charlist}>
      {errorMessage}
      {spinner}
      {items}
      <Button
        type={ButtonType.Button}
        onClick={() => {
          onRequest(offset);
        }}
        buttonText="Загрузить еще"
        disabled={newItemLoading}
      />
      {/* style={{ display: charEnded ? "none" : "block" }} */}
    </div>
  );
};

export default TitleList;
