import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/main";
import MusicPage from "./Pages/page";
import MymusicPage from "./Pages/myMusicPage";
import OthermusicPage from "./Pages/otherMusicPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page/*" element={<MusicPage />}>
          <Route path={"myMusic/:idx"} element={<MymusicPage />} />
          <Route path={"otherMusic/:idx"} element={<OthermusicPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
