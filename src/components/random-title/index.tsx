import { Link } from "react-router-dom";
import style from "./style.module.css";
import { useState, useEffect, FC } from "react";
import Spinner from "../spinner";
// import ErrorMessage from "../error-message/error-message";

const random = {
  status: null,
  externalId: {
    kpHD: null,
    imdb: "tt3781434",
    tmdb: 652427,
  },
  rating: {
    kp: 0,
    imdb: 6.5,
    filmCritics: 0,
    russianFilmCritics: 0,
    await: 0,
  },
  votes: {
    kp: 5,
    imdb: 35,
    filmCritics: 0,
    russianFilmCritics: 0,
    await: 0,
  },
  backdrop: {
    url: null,
    previewUrl: null,
  },
  movieLength: 9,
  images: {
    postersCount: 1,
    backdropsCount: 0,
    framesCount: 0,
  },
  productionCompanies: [],
  spokenLanguages: [],
  id: 874082,
  type: "movie",
  name: null,
  description: "",
  distributors: {
    distributor: null,
    distributorRelease: null,
  },
  premiere: {
    world: "2014-06-04T00:00:00.000Z",
  },
  slogan: "",
  year: 2014,
  poster: {
    url: "https://image.openmoviedb.com/kinopoisk-images/1946459/b7515046-27c3-4532-ab47-4c7df78e0b52/orig",
    previewUrl:
      "https://image.openmoviedb.com/kinopoisk-images/1946459/b7515046-27c3-4532-ab47-4c7df78e0b52/x1000",
  },
  facts: [],
  genres: [
    {
      name: "короткометражка",
    },
    {
      name: "драма",
    },
    {
      name: "мелодрама",
    },
    {
      name: "семейный",
    },
  ],
  countries: [
    {
      name: "США",
    },
  ],
  seasonsInfo: [],
  persons: [
    {
      id: 129214,
      photo:
        "https://st.kp.yandex.net/images/actor_iphone/iphone360_129214.jpg",
      name: "Анджела ДиМарко",
      enName: "Angela DiMarco",
      profession: "актеры",
      enProfession: "actor",
    },
    {
      id: 1936074,
      photo:
        "https://st.kp.yandex.net/images/actor_iphone/iphone360_1936074.jpg",
      name: "Кэроллани Сэндберг",
      enName: "Carollani Sandberg",
      profession: "актеры",
      enProfession: "actor",
    },
    {
      id: 2709353,
      photo:
        "https://st.kp.yandex.net/images/actor_iphone/iphone360_2709353.jpg",
      name: null,
      enName: "Kristen Bonnalie",
      profession: "художники",
      enProfession: "designer",
    },
    {
      id: 1893247,
      photo:
        "https://st.kp.yandex.net/images/actor_iphone/iphone360_1893247.jpg",
      name: null,
      enName: "Kris Boustedt",
      profession: "режиссеры",
      enProfession: "director",
    },
    {
      id: 1893248,
      photo:
        "https://st.kp.yandex.net/images/actor_iphone/iphone360_1893248.jpg",
      name: null,
      enName: "Lindy Boustedt",
      profession: "режиссеры",
      enProfession: "director",
    },
    {
      id: 1893247,
      photo:
        "https://st.kp.yandex.net/images/actor_iphone/iphone360_1893247.jpg",
      name: null,
      enName: "Kris Boustedt",
      profession: "монтажеры",
      enProfession: "editor",
    },
    {
      id: 963798,
      photo:
        "https://st.kp.yandex.net/images/actor_iphone/iphone360_963798.jpg",
      name: "Джонатан Хаузер",
      enName: "Jonathan Houser",
      profession: "операторы",
      enProfession: "operator",
    },
    {
      id: 1893247,
      photo:
        "https://st.kp.yandex.net/images/actor_iphone/iphone360_1893247.jpg",
      name: null,
      enName: "Kris Boustedt",
      profession: "продюсеры",
      enProfession: "producer",
    },
    {
      id: 1893248,
      photo:
        "https://st.kp.yandex.net/images/actor_iphone/iphone360_1893248.jpg",
      name: null,
      enName: "Lindy Boustedt",
      profession: "продюсеры",
      enProfession: "producer",
    },
    {
      id: 1893247,
      photo:
        "https://st.kp.yandex.net/images/actor_iphone/iphone360_1893247.jpg",
      name: null,
      enName: "Kris Boustedt",
      profession: "редакторы",
      enProfession: "writer",
    },
    {
      id: 1893248,
      photo:
        "https://st.kp.yandex.net/images/actor_iphone/iphone360_1893248.jpg",
      name: null,
      enName: "Lindy Boustedt",
      profession: "редакторы",
      enProfession: "writer",
    },
  ],
  lists: [],
  typeNumber: 1,
  alternativeName: "Together Forever",
  enName: null,
  names: [
    {
      name: "Together Forever",
    },
  ],
  ratingMpaa: null,
  shortDescription: null,
  technology: {
    hasImax: false,
    has3D: false,
  },
  ticketsOnSale: false,
  updatedAt: "2024-04-26T03:59:48.631Z",
  fees: {
    world: {},
    russia: {},
    usa: {},
  },
  similarMovies: [],
  sequelsAndPrequels: [],
  ageRating: null,
  logo: {
    url: null,
    previewUrl: null,
  },
  budget: {},
  watchability: {
    items: [],
  },
  top10: null,
  top250: null,
  deletedAt: null,
  isSeries: false,
  seriesLength: null,
  totalSeriesLength: null,
  networks: null,
  videos: {
    trailers: [],
  },
};

const RandomTitle = () => {
  const [char, setChar] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // updateChar();
  }, []);

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const updateChar = () => {
    // clearError();
    // const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    // getCharacter(id).then(onCharLoaded);
  };

  const errorMessage = error ? "error" : null;
  const spinner = isLoading ? <Spinner /> : null;
  const content = !(isLoading || error) ? (
    <ChangableContent title={random} />
  ) : null;

  return (
    <div className={style.randomchar}>
      {errorMessage}
      {spinner}
      {content}
      <div className={style.randomchar__static}>
        <div className={style.randomchar__textContainer}>
          <p className={style.randomchar__text}>
            Попробовать другой рандомный тайтл
          </p>
        </div>
        <button
          type="button"
          onClick={updateChar}
          className={`${style.button} ${style.button__main}`}
        >
          <p className={`${style.inner} ${style.inner__main}`}>
            Волшебный рандомайзер
          </p>
        </button>
      </div>
    </div>
  );
};

const ChangableContent: FC<{ title: ReturnType<typeof random> }> = ({
  title,
}) => {
  return (
    <div className={style.randomchar__changeable}>
      <img
        src={title.poster.url}
        alt="Random character"
        className={style.randomchar__img}
      />
      <div className={style.randomchar__info}>
        <p className={style.randomchar__name}>{title.rating.imdb}</p>
        <p className={style.randomchar__descr}>{title.names[0].name}</p>
        <Link to="/" className={`${style.button} ${style.button__main}`}>
          <p className={`${style.inner} ${style.inner__main}`}>Подробнее</p>
        </Link>
      </div>
    </div>
  );
};

export default RandomTitle;
