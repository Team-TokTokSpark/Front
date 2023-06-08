import { useState } from "react";
import { isNextModalView, isModalView, modalData } from "../../atom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import * as M from "./ModalStyle";
import ModalStickerList from "./ModalStickerList";
const SecondStepModal = () => {
  const [m, setM] = useState("");
  const setPopupModal = useSetRecoilState(isModalView);
  const setNextPopupModal = useSetRecoilState(isNextModalView);
  const setMessage = useSetRecoilState(modalData);

  const modal = useRecoilValue(modalData);

  const clearAllPopup = () => {
    setNextPopupModal(false);
    setPopupModal(false);
  };

  const sendModalData = () => {
    clearAllPopup();
    console.log("첫번째+두번째 모달의 데이터:", modal);
  };

  const abc = (e: any) => {
    setM(e.target.value);
  };

  const save = () => {
    setMessage((prevModalData) => ({
      ...prevModalData,
      message: m,
    }));
  };

  return (
    <>
      <M.StickerSelectBox>
        <p>스티커 디자인</p>
        <div>
          <ModalStickerList />
        </div>
      </M.StickerSelectBox>
      <M.MessageRecommend
        placeholder="추천 메시지 입력하기"
        value={m}
        onChange={abc}
        onBlur={save}
      />
      <M.ButtonBox>
        <button onClick={clearAllPopup}>취소</button>
        <button onClick={sendModalData}>붙이기</button>
      </M.ButtonBox>
    </>
  );
};

export default SecondStepModal;
