import { useState } from "react";

import { isNextModalView, isModalView } from "../../atom";
import { useSetRecoilState } from "recoil";
import * as M from "./ModalStyle";
import icons from "../../Css/icons";

const FirstStepModal = () => {
  const setPopupModal = useSetRecoilState(isModalView);
  const setNextPopupModal = useSetRecoilState(isNextModalView);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <M.SongSearchBox>
        <input
          type="text"
          placeholder="검색"
          value={searchTerm}
          onChange={handleInputChange}
        />
        {icons.search}
      </M.SongSearchBox>
      <M.ButtonBox>
        <button onClick={() => setPopupModal(false)}>취소</button>
        <button onClick={() => setNextPopupModal(true)}>다음</button>
      </M.ButtonBox>
    </>
  );
};

export default FirstStepModal;
