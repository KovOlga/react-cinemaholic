import style from "./style.module.css";
import { useState, useEffect } from "react";
import Spinner from "../spinner";
// import ErrorMessage from "../error-message/error-message";
import Skeleton from "../skeleton";
// import CharSearchForm from "../char-search-form/char-search-form";

const TitleInfo = () => {
  const [char, setChar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    updateChar();
  }, []);

  const updateChar = () => {
    // if (!charId) {
    //   return;
    // }
    // clearError();
    // getCharacter(charId).then((char) => {
    //   setChar(char);
    // });
  };

  const skeleton = char || error || isLoading ? null : <Skeleton />;
  // const errorMessage = error ? "error" : null;
  // const spinner = loading ? <Spinner /> : null;
  // const content = !(loading || error || !char) ? (
  //   <CharView char={char} />
  // ) : null;

  return (
    <div className={style.oneChar}>
      <div className={style.charInfo}>
        {skeleton}
        {/* {errorMessage} */}
        {/* {spinner} */}
        {/* {content} */}
      </div>
      {/* <CharSearchForm /> */}
    </div>
  );
};

const CharView = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;

  let imageStyle = { objectFit: "cover" };
  if (
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    imageStyle = { objectFit: "contain" };
  }
  return (
    <>
      <div className={style.charinfo__basics}>
        <img
          className={style.charinfo__img}
          src={thumbnail}
          alt={name}
          style={imageStyle}
        />
        <div className={style.charinfo__mini}>
          <h2 className={style.charinfo__name}>{name}</h2>
          <div className={style.charinfo__btns}>
            <a
              href={homepage}
              className={`${style.button} ${style.button__main}`}
            >
              <p className={`${style.inner} ${style.inner__main}`}>homepage</p>
            </a>
            <a
              href={wiki}
              className={`${style.button} ${style.button__secondary}`}
            >
              <p className={`${style.inner} ${style.inner__secondary}`}>Wiki</p>
            </a>
          </div>
        </div>
      </div>
      <p className={style.charinfo__descr}>{description}</p>
      <div>
        <p className={style.comics}>Comics:</p>
        <ul className={style.comics__list}>
          {comics.length > 0 ? null : "No comics with this character"}
          {comics.map((comic, i) => {
            return (
              <li key={i} className={style.comics__item}>
                {comic.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TitleInfo;
