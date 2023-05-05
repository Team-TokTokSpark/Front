import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  ExportButton,
  MainBody,
  ShareButton,
  StickerMakeButton,
} from "../Styles/HomePageStyle";
import { useRecoilState } from "recoil";
import { popUpModal } from "../atom";
import StickerModal from "../Components/ModalPage";
import icons from "../Css/icons";

function MusicPage() {
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
      <div className="setting-part">
        <img src="/img/Setting_5.png" alt="setting" />
      </div>
      <div className="nickname-part">
        <img src="/img/Arrow_Left_5.png" alt="backbutton" />
        <div className="user_name">{userId}</div>
        님의 보관함
      </div>
      <div className="title-part">
        {pageName} page
        <ShareButton>링크 공유</ShareButton>
      </div>
      <Outlet />
      <StickerMakeButton onClick={StickerAdd}>{icons.plus}</StickerMakeButton>
      {modalOpen && <StickerModal modalClose={closeModal} />}
      <ExportButton>{icons.spotify}</ExportButton>
    </MainBody>
  );
}

export default MusicPage;
