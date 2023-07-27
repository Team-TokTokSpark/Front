import { useNavigate } from "react-router-dom";
import {
  BodyWrapper,
  LongContainerWrapper,
  PlayMusic,
  StickerMakeButton,
} from "../../Styles/HomePageStyle";
import StickerShow from "../Sticker/StickerShow";
import icons from "../../Css/icons";
import StickerModal from "../Modal/ModalPage";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import {
  PlaylistInformation,
  dotsIndexSelect,
  isModalView,
  playlistBoxAtom,
} from "../../atom";
import SwiperDots from "./SwiperDots";
import PlaylistMusic from "./PlaylistMusic";
import PlaylistMessage from "./PlaylistMessage";

const MusicPageShow = () => {
  const navigate = useNavigate();
  const [popupModal, setPopupModal] = useRecoilState(isModalView);
  const dotsSelect = useRecoilValue(dotsIndexSelect);
  const playlistInfo = useRecoilValue(PlaylistInformation);
  const playlistBoxProp = useRecoilValue(playlistBoxAtom);
  const resetPlaylistBox = useResetRecoilState(playlistBoxAtom);
  return (
    <>
      <div className="nickname-part">
        <img
          src="/img/Arrow_Left_5.png"
          alt="backbutton"
          onClick={() => {
            resetPlaylistBox();
            navigate(-1);
          }}
        />
        <div className="user_name">{playlistInfo.nickname}</div>
        님의 보관함
      </div>
      <div className="playlistname">{playlistInfo.playlistName} page</div>
      <BodyWrapper>
        <PlayMusic>
          {playlistBoxProp.title}-{playlistBoxProp.artist}
        </PlayMusic>
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
      {popupModal && <StickerModal />}
    </>
  );
};

export default MusicPageShow;
