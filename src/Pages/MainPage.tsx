import { Outlet } from "react-router-dom";

import { MainBody } from "../Styles/HomePageStyle";

function MainPage() {
  return (
    <MainBody>
      <Outlet />
    </MainBody>
  );
}

export default MainPage;
