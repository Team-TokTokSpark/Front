import { useNavigate, useParams } from "react-router-dom";

import PageShow from "../Components/Main/PageShow";
import icons from "../Css/icons";
import { EditStickerButton, ShareButton } from "../Styles/HomePageStyle";
import { UserListInfo, userInformationState, authTokenState } from "../atom";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { gohome } from "../Components/KakaoLogin/gohome";

function HomePage() {
  const navigate = useNavigate();
  const listInfo = useRecoilValue(UserListInfo);
  const { idx } = useParams();
  const information = useRecoilValue(userInformationState);
  const token = useRecoilValue(authTokenState);
  console.log(information);

  return (
    <>
      <div className="setting-part">
        <img
          src="/img/Setting_5.png"
          alt="editing"
          onClick={() => {
            if (gohome(token, information)) {
              navigate("/setting");
            } else {
              navigate("/");
            }
          }}
        />
      </div>
      <div
        className="nickname-part"
        style={{ fontSize: "14px", fontWeight: "300" }}
      >
        <div className="music_note"> {icons.musicnote}</div>
        {listInfo.introduce}
      </div>
      <div className="title-part">
        {listInfo.nickname}
        <ShareButton
          onClick={() => {
            if (gohome(token, information)) {
              navigate("/friendsList");
            } else {
              navigate("/");
            }
          }}
        >
          친구 목록
        </ShareButton>
      </div>
      <PageShow listInfo={listInfo.playlists} />
      <div>
        {/* 여기가 변경 될 부분! 현재 userId가 안나와있기 때문! */}
        {`${information.userId}` === idx ? (
          <Link to="makePage">
            <EditStickerButton>{icons.plus}</EditStickerButton>
          </Link>
        ) : null}
      </div>
    </>
  );
}

export default HomePage;
