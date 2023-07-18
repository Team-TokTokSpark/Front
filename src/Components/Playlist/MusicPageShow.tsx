import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BodyWrapper,
  ExportButton,
  LongContainerWrapper,
  PlayMusic,
  ShareButton,
  StickerMakeButton,
} from "../../Styles/HomePageStyle";
import StickerShow from "../Sticker/StickerShow";
import icons from "../../Css/icons";
import StickerModal from "../Modal/ModalPage";
import { useRecoilState, useRecoilValue } from "recoil";
import { dotsIndexSelect, isModalView } from "../../atom";
import SwiperDots from "./SwiperDots";
import PlaylistMusic from "./PlaylistMusic";
import PlaylistMessage from "./PlaylistMessage";

const MusicPageShow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userId, setUserId] = useState(location.state?.userId);
  const [popupModal, setPopupModal] = useRecoilState(isModalView);
  const dotsSelect = useRecoilValue(dotsIndexSelect);

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
      <BodyWrapper>
        <PlayMusic>00 Attention-NewJeans</PlayMusic>
        <SwiperDots />
        <LongContainerWrapper>
          {dotsSelect === 1 ? (
            <StickerShow />
          ) : dotsSelect === 2 ? (
            <PlaylistMusic />
          ) : (
            <PlaylistMessage />
          )}
        </LongContainerWrapper>
      </BodyWrapper>
      <StickerMakeButton onClick={() => setPopupModal(true)}>
        {icons.plus}
      </StickerMakeButton>
      <ExportButton>{icons.spotify}</ExportButton>
      {popupModal && <StickerModal />}
    </>
  );
};

export default MusicPageShow;
