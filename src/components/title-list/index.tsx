import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import TitleListItem from "../title-list-item";
import Spinner from "../spinner";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  getTopFilmsThunk,
  setCurrentTitleAction,
} from "../../services/actions/films";
import { RootState } from "../../types";
import Pagination from "@mui/material/Pagination";

const TitleList: FC = () => {
  const dispatch = useAppDispatch();
  const itemRefs = useRef([]);
  const [page, setPage] = useState(1);
  const filmsArr = useAppSelector((store: RootState) => store.films.films);
  const isLoading = useAppSelector(
    (store: RootState) => store.films.reqInProccess
  );
  const error = useAppSelector((store: RootState) => store.films.reqFailed);

  useEffect(() => {
    dispatch(getTopFilmsThunk(page));
  }, []);

  const selectFilm = (id: number) => {
    dispatch(setCurrentTitleAction(id));
  };

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(getTopFilmsThunk(value));
  };

  const focusOnItem = (id: number) => {
    itemRefs.current[id].focus();
  };

  return (
    <section className={style.section}>
      {error && "error"}
      {isLoading && <Spinner />}
      {!error && !isLoading && (
        <ul className={style.list}>
          <TransitionGroup component={null}>
            {filmsArr.length > 0 &&
              filmsArr.map((item, i) => {
                return (
                  <CSSTransition
                    key={item.id}
                    timeout={500}
                    classNames={{
                      enter: style.list__item_enter,
                      enterActive: style.list__item_enter_active,
                    }}
                  >
                    <TitleListItem
                      key={item.id}
                      ref={(el) => (itemRefs.current[i] = el)}
                      onClickItem={() => {
                        selectFilm(item.id);
                        focusOnItem(i);
                      }}
                      titleItem={item}
                    />
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </ul>
      )}
      <div className={style.btn}>
        <Pagination
          page={page}
          onChange={handlePageChange}
          count={10}
          color="secondary"
        />
      </div>
    </section>
  );
};

export default TitleList;
