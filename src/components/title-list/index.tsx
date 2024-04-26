import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import TitleListItem from "../title-list-item";
import Spinner from "../spinner";
import { mock } from "../../constants/mock";

const TitleList: FC = () => {
  const [charList, setCharList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(260);
  const [charEnded, setCharEnded] = useState(false);
  const [char, setChar] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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

  const focusOnItem = (id) => {
    itemRefs.current[id].focus();
  };

  const renderItems = (arr) => {
    const items = arr.map((char, i) => {
      return (
        <CSSTransition
          key={char.id}
          timeout={500}
          classNames={{
            enter: styles.char__item_enter,
            enterActive: styles.char__item_enter_active,
          }}
        >
          <TitleListItem
            key={char.id}
            ref={(el) => (itemRefs.current[i] = el)}
            onClickItem={() => {
              //   onCharSelected(char.id);
              focusOnItem(i);
            }}
            // onKeyPress={(e) => {
            //   if (e.key === " " || e.key === "Enter") {
            //     onCharSelected(char.id);
            //     focusOnItem(i);
            //   }
            // }}
            titleItem={char}
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
      <button
        disabled={newItemLoading}
        style={{ display: charEnded ? "none" : "block" }}
        onClick={() => {
          onRequest(offset);
        }}
        className={`${styles.button} ${styles.button__main} ${styles.button__long}`}
      >
        <p className={`${styles.inner} ${styles.inner__main}`}>load more</p>
      </button>
    </div>
  );
};

export default TitleList;
