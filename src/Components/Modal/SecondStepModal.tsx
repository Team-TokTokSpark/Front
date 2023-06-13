import { useState } from "react";
import { isNextModalView, isModalView, modalData } from "../../atom";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import * as M from "./ModalStyle";
import ModalStickerList from "./ModalStickerList";
import Swal from "sweetalert2";

const SecondStepModal = () => {
  const [recommendMessage, setRecommendMessage] = useState("");
  const setPopupModal = useSetRecoilState(isModalView);
  const setNextPopupModal = useSetRecoilState(isNextModalView);
  const [modalDataObject, setModalDataObject] = useRecoilState(modalData);
  const { song, sticker, message } = modalDataObject;
  const modal = useRecoilValue(modalData);

  const clearAllPopup = () => {
    setNextPopupModal(false);
    setPopupModal(false);
  };

  const sendModalData = () => {
    if (song.title && song.singer && sticker && message) {
      //전송 데이터
      console.log("첫번째+두번째 모달의 데이터:", modal);
      clearAllPopup();
      setModalDataObject((prevModalData) => ({
        ...prevModalData,
        message: "",
        sticker: "",
      }));
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
