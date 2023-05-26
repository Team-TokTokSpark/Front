import { Outlet } from "react-router-dom";
import { MainBody } from "../Styles/HomePageStyle";
import { useRecoilValue } from "recoil";
import { MusicColor } from "../atom";

function MusicPage() {
  const backGroundColorNum = useRecoilValue(MusicColor);
  return (
    <MainBody>
      <div className={`pageTheme${backGroundColorNum}`}>
        <Outlet />
      </div>
    </MainBody>
  );
}

export default MusicPage;
