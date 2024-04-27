import { API_KEY } from "../constants/api-key";
import { baseURL, limit } from "../constants/constants";
import { IFilm } from "../types/data";

interface IOptions {
  method: string;
  headers: {
    "Content-Type": "application/json";
    "X-API-KEY": typeof API_KEY;
  };
}
const options: IOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": API_KEY,
  },
};

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
    `${baseURL}?page=${page}&limit=${limit}&selectFields=name&selectFields=top250&selectFields=poster&selectFields=shortDescription&selectFields=year&selectFields=genres&selectFields=countries&selectFields=id&notNullFields=poster.url`,
    options
  );
};

export const getFilmByName = (
  name: string
): Promise<{
  docs: IFilm[];
}> => {
  return request(
    `${baseURL}/search?page=1&limit=${limit}&query=${name}`,
    options
  );
};

export const getFilmById = (id: number): Promise<IFilm> => {
  return request(`${baseURL}/${id}`, options);
};

export const getRandomFilm = (): Promise<IFilm> => {
  return request(
    `${baseURL}/random?notNullFields=name&notNullFields=poster.url&notNullFields=shortDescription&notNullFields=id`,
    options
  );
};
