import { Route, Routes } from "react-router";
import { LayoutPage, MainPage } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}
