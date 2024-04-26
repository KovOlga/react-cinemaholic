import { Route, Routes } from "react-router";
import { MainPage } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}
