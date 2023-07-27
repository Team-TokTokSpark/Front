import { useState } from "react";
import {
  isNextModalView,
  isModalView,
  modalData,
  PlaylistInformation,
  authTokenState,
} from "../../atom";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import * as M from "./ModalStyle";
import ModalStickerList from "./ModalStickerList";
import Swal from "sweetalert2";
import { stickerMakeApi } from "../../Services/PlayList/api";
import { useNavigate } from "react-router-dom";

const SecondStepModal = () => {
  const [recommendMessage, setRecommendMessage] = useState("");
  const setPopupModal = useSetRecoilState(isModalView);
  const setNextPopupModal = useSetRecoilState(isNextModalView);
  const [modalDataObject, setModalDataObject] = useRecoilState(modalData);
  const { song, sticker, message } = modalDataObject;
  const modal = useRecoilValue(modalData);
  const [playlist, setPlaylist] = useRecoilState(PlaylistInformation);
  const token = useRecoilValue(authTokenState);
  const navigate = useNavigate();

  const clearAllPopup = () => {
    setNextPopupModal(false);
    setPopupModal(false);
  };

  const stickerNumber: any = modal.sticker.match(/\d+/);
  console.log(Number(stickerNumber[0]), "dlrj");
  const sendModalData = async () => {
    if (song.title && song.singer && sticker && message) {
      //전송 데이터
      console.log("첫번째+두번째 모달의 데이터:", modal);
      const result = await stickerMakeApi({
        playlistId: playlist.playlistId,
        userId: playlist.userId,
        token: token,
        artistName: song.singer,
        title: song.title,
        imageUrl: song.imageUrl,
        imageIdx: Number(stickerNumber),
        message: message,
      });
      if (result.status === 200) {
        clearAllPopup();
        setModalDataObject((prevModalData) => ({
          ...prevModalData,
          message: "",
          sticker: "",
        }));
        navigate(`/page/${playlist.playlistId}`);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "오류가 떴습니다 다시 한 번 시도해주세요",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "스티커와 메시지를 올바르게 입력 해주세요!",
      });
    }
  };

  const messageChangeHandler = (e: any) => {
    setRecommendMessage(e.target.value);
  };

  const save = () => {
    setModalDataObject((prevModalData) => ({
      ...prevModalData,
      message: recommendMessage,
    }));
  };

  return (
    <>
      <M.StickerSelectBox>
        <p>스티커 디자인</p>
        <ModalStickerList />
        <M.MessageRecommend
          placeholder="추천 메시지 입력하기"
          value={recommendMessage}
          onChange={messageChangeHandler}
          onBlur={save}
        />
      </M.StickerSelectBox>
      <M.ButtonBox>
        <button onClick={clearAllPopup}>취소</button>
        <button onClick={sendModalData}>붙이기</button>
      </M.ButtonBox>
    </>
  );
};

export default SecondStepModal;
