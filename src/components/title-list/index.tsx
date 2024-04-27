import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ChangeEvent, FC, useEffect, useRef } from "react";
import style from "./style.module.css";
import TitleListItem from "../title-list-item";
import Spinner from "../spinner";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getTopFilmsThunk } from "../../services/thunks";
import { RootState } from "../../types";
import Pagination from "@mui/material/Pagination";
import {
  setCurrentPageAction,
  setCurrentTitleAction,
} from "../../services/action-creators";

const TitleList: FC = () => {
  const dispatch = useAppDispatch();
  const itemRefs = useRef<HTMLLIElement[]>([]);
  const filmsArr = useAppSelector((store: RootState) => store.films.topFilms);
  const isLoading = useAppSelector(
    (store: RootState) => store.films.topFilmsLoading
  );
  const error = useAppSelector(
    (store: RootState) => store.films.topFilmsReqFailed
  );
  const currentPage = useAppSelector(
    (store: RootState) => store.films.currentPage
  );

  useEffect(() => {
    dispatch(getTopFilmsThunk(currentPage));
  }, []);

  const selectFilm = (id: number) => {
    dispatch(setCurrentTitleAction(id));
  };

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPageAction(value));
    dispatch(getTopFilmsThunk(value));
  };

  const focusOnItem = (id: number) => {
    if (itemRefs.current) {
      itemRefs.current[id].focus();
    }
  };

  return (
    <section className={style.section}>
      {error && "error"}
      {isLoading && <Spinner />}
      {!error && !isLoading && (
        <>
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
                        ref={(el: HTMLLIElement) => (itemRefs.current[i] = el)}
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
          <div className={style.btn}>
            <Pagination
              page={currentPage}
              onChange={handlePageChange}
              count={10}
              color="secondary"
            />
          </div>
        </>
      )}
    </section>
  );
};

export default TitleList;
