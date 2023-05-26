import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ExportButton,
  ShareButton,
  StickerMakeButton,
} from "../Styles/HomePageStyle";
import StickerShow from "./StickerShow";
import icons from "../Css/icons";
import StickerModal from "./ModalPage";
import { useRecoilState } from "recoil";
import { popUpModal } from "../atom";

const MusicPageShow = () => {
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
      <StickerMakeButton onClick={StickerAdd}>{icons.plus}</StickerMakeButton>
      {modalOpen && <StickerModal modalClose={closeModal} />}
      <ExportButton>{icons.spotify}</ExportButton>
    </>
  );
};

export default MusicPageShow;
