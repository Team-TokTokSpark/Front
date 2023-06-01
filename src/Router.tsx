import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import KakaoLoginPage from "./Pages/KakaoLoginPage";
import SignUpPage from "./Pages/SignUpPage";
import NotFoundPage from "./Pages/NotFound";
import HomePage from "./Pages/main";
import MusicPage from "./Pages/page";
import MymusicPage from "./Pages/myMusicPage";
import OthermusicPage from "./Pages/otherMusicPage";
import FriendsListPage from "./Pages/FrinedsListPage";
import SettingPage from "./Pages/SettingPage";
import EditPage from "./Pages/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "login", element: <LoginPage /> },
  { path: "kakaoLogin", element: <KakaoLoginPage /> },
  { path: "signup", element: <SignUpPage /> },
  { path: "setting", element: <SettingPage /> },
  { path: "friendsList", element: <FriendsListPage /> },
  {
    path: "page",
    element: <MusicPage />,
    children: [
      { path: "myMusic/:idx", element: <MymusicPage /> },
      { path: "otherMusic/:idx", element: <OthermusicPage /> },
    ],
  },
  { path: "edit", element: <EditPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
