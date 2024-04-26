export interface IFilm {
  id: number;
  name: string;
  alternativeName: string;
  type: string;
  year: number;
  description: string;
  shortDescription: string;
  rating: {
    imdb: number;
  };
  poster: {
    url: string;
  };
  genres: {
    name: string;
  }[];
  countries: {
    name: string;
  }[];
}
