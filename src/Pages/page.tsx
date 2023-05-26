import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  ExportButton,
  MainBody,
  ShareButton,
  StickerMakeButton,
} from "../Styles/HomePageStyle";
import { useRecoilState, useRecoilValue } from "recoil";
import { MusicColor, popUpModal } from "../atom";
import StickerModal from "../Components/ModalPage";
import icons from "../Css/icons";
import StickerShow from "../Components/StickerShow";

function MusicPage() {
  const backGroundColorNum = useRecoilValue(MusicColor);
  const navigate = useNavigate();
  const location = useLocation();
  const [userId, setUserId] = useState(location.state?.userId);
  const [modalOpen, setModalOpen] = useRecoilState(popUpModal);
  const pageName = location.state?.pageName;
  const StickerAdd = () => {
    setModalOpen(!modalOpen);
  };
  const closeModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <MainBody>
      <div className={`pageTheme${backGroundColorNum}`}>
        <Outlet />
        <div className="nickname-part">
          <img
            src="/img/Arrow_Left_5.png"
            alt="backbutton"
            onClick={() => {
              navigate(-1);
            }}
          />
          <div className="user_name">{userId}</div>
          님의 보관함
        </div>
        <div className="title-part">
          {pageName} page
          <ShareButton>링크 공유</ShareButton>
        </div>
        <StickerShow />
        <StickerMakeButton onClick={StickerAdd}>{icons.plus}</StickerMakeButton>
        {modalOpen && <StickerModal modalClose={closeModal} />}
        <ExportButton>{icons.spotify}</ExportButton>
      </div>
    </MainBody>
  );
}

export default MusicPage;
