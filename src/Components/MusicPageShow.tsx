import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ExportButton,
  ShareButton,
  StickerMakeButton,
} from "../Styles/HomePageStyle";
import StickerShow from "./Sticker/StickerShow";
import icons from "../Css/icons";
import StickerModal from "./Modal/ModalPage";
import { useRecoilState } from "recoil";
import { isModalView } from "../atom";

const MusicPageShow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userId, setUserId] = useState(location.state?.userId);
  const [popupModal, setPopupModal] = useRecoilState(isModalView);

  const pageName = location.state?.pageName;

  return (
    <>
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
      <StickerMakeButton onClick={() => setPopupModal(true)}>
        {icons.plus}
      </StickerMakeButton>
      <ExportButton>{icons.spotify}</ExportButton>
      {popupModal && <StickerModal />}
    </>
  );
};

export default MusicPageShow;
