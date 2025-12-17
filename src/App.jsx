import { Routes, Route, Navigate } from "react-router-dom";

import Wealth from "./pages/Wealth";
import Charm from "./pages/Charm";
import Game from "./pages/Game";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/wealth" />} />
      <Route path="/wealth" element={<Wealth />} />
      <Route path="/charm" element={<Charm />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}
