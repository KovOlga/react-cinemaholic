import { Route, Routes } from "react-router";
import { LayoutPage, MainPage, SingleFilmPage } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index path="/" element={<MainPage />} />
        <Route path="/films/:filmId" element={<SingleFilmPage />} />
      </Route>
    </Routes>
  );
}
