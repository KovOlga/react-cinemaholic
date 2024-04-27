import { IFilm } from "../types/data";

interface IOptions {
  method: string;
  headers: {
    "Content-Type": "application/json";
    "X-API-KEY": "D8K67KE-8F9M6D5-K40CBW6-QHHZMY1";
  };
  body?: string;
}

const getResponse = async (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(await res.json());
};

const request = (url: string, options: IOptions) => {
  return fetch(url, options).then(getResponse);
};

export const getTopFilmsList = (
  page: number
): Promise<{
  docs: IFilm[];
}> => {
  return request(
    `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=6&selectFields=name&selectFields=top250&selectFields=poster&selectFields=shortDescription&selectFields=year&selectFields=genres&selectFields=countries&selectFields=id&notNullFields=poster.url`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "D8K67KE-8F9M6D5-K40CBW6-QHHZMY1",
      },
    }
  );
};

export const getFilmByName = (name: string): Promise<any> => {
  return request(
    `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${name}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "D8K67KE-8F9M6D5-K40CBW6-QHHZMY1",
      },
    }
  );
};

export const getFilmById = (id: number): Promise<any> => {
  return request(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "D8K67KE-8F9M6D5-K40CBW6-QHHZMY1",
    },
  });
};

export const getRandomFilm = (): Promise<any> => {
  return request(
    `'https://api.kinopoisk.dev/v1.4/movie/random?notNullFields=poster.url&notNullFields=rating.imdb`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "D8K67KE-8F9M6D5-K40CBW6-QHHZMY1",
      },
    }
  );
};
