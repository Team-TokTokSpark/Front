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

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />}></Route>
//         <Route path="/kakaoLogin" element={<KakaoLoginPage />}></Route>
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route path="/setting" element={<SettingPage />}></Route>
//         <Route
//           path="/friendsList"
//           element={<FriendsListPage />}
//           loader={loader}
//         />
//         <Route path="/page/*" element={<MusicPage />}>
//           <Route path={"myMusic/:idx"} element={<MymusicPage />} />
//           <Route path={"otherMusic/:idx"} element={<OthermusicPage />} />
//         </Route>
//         <Route path="*" element={<NotFoundPage />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

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
      {
        path: "myMusic/:idx",
        element: <MymusicPage />,
      },
      {
        path: "myMusic/:idx/edit",
        element: <EditPage />,
      },
      { path: "otherMusic/:idx", element: <OthermusicPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
