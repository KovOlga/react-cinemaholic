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

export const getTopFilmsList = (): Promise<any> => {
  console.log("njnjn");
  return request(
    "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&rating.imdb=10",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "D8K67KE-8F9M6D5-K40CBW6-QHHZMY1",
      },
    }
  );
};
