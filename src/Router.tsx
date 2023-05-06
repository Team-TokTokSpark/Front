import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import KakaoLoginPage from "./Pages/KakaoLoginPage";
import NotFoundPage from "./Pages/NotFound";
import HomePage from "./Pages/main";
import MusicPage from "./Pages/page";
import MymusicPage from "./Pages/myMusicPage";
import OthermusicPage from "./Pages/otherMusicPage";
import FriendsListPage from "./Pages/FrinedsListPage";
import SettingPage from "./Pages/SettingPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/kakaoLogin" element={<KakaoLoginPage />}></Route>
        <Route path="/setting" element={<SettingPage />}></Route>
        <Route path="/friendsList" element={<FriendsListPage />}></Route>
        <Route path="/page/*" element={<MusicPage />}>
          <Route path={"myMusic/:idx"} element={<MymusicPage />} />
          <Route path={"otherMusic/:idx"} element={<OthermusicPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
