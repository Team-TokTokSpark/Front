import { useNavigate } from "react-router-dom";

import PageShow from "../Components/PageShow";
import icons from "../Css/icons";
import {
  EditStickerButton,
  MainBody,
  ShareButton,
} from "../Styles/HomePageStyle";
import { userInformationState } from "../atom";
import { useRecoilValue } from "recoil";

function HomePage() {
  const navigate = useNavigate();

  const information = useRecoilValue(userInformationState);

  console.log(information);

  return (
    <MainBody>
      <div className="setting-part">
        <img
          src="/img/Setting_5.png"
          alt="editing"
          onClick={() => {
            navigate("/setting");
          }}
        />
      </div>
      <div
        className="nickname-part"
        style={{ fontSize: "14px", fontWeight: "300" }}
      >
        <div className="music_note"> {icons.musicnote}</div>
        자기소개 한줄~
      </div>
      <div className="title-part">
        이름(닉네임)
        <ShareButton
          onClick={() => {
            navigate("/friendsList");
          }}
        >
          친구 목록
        </ShareButton>
      </div>
      <PageShow />
      <div>
        <EditStickerButton>{icons.plus}</EditStickerButton>
      </div>
    </MainBody>
  );
}

export default HomePage;
