import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { ChangeMusicColor, MusicColor } from "../atom";
import { MainBody } from "../Styles/HomePageStyle";
import EditStickerShow from "../Components/Sticker/EditStickerShow";
import { InputTitle, RemoveTextButton } from "../Styles/EditPageStyle";
import CancleComplete from "../Components/Utils/CancleComplete";
import ColorChange from "../Components/Utils/ColorChange";

const EditPage = () => {
  const backGroundColorNum = useRecoilValue(MusicColor);
  const changeBackGroundColorNum = useRecoilValue(ChangeMusicColor);
  const [colorNum, setColorNum] = useState(backGroundColorNum);
  const [text, setText] = useState("일단은 이렇게라도 하자");
  const displayText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const removeText = (e: React.MouseEvent<HTMLButtonElement>) => {
    setText("");
  };
  return (
    <MainBody>
      <div className={`pageTheme${backGroundColorNum}`}>
        <CancleComplete
          colorNum={changeBackGroundColorNum}
          userIdx={-1}
          type={""}
          playlistName={""}
          backgroundIdx={-1}
          token={""}
        />
        <div className="editTitle-part">
          <InputTitle type="text" value={text} onChange={displayText} />
          <RemoveTextButton onClick={removeText}>X</RemoveTextButton>
        </div>
        <ColorChange colorNumber={colorNum} />
        <EditStickerShow />
      </div>
    </MainBody>
  );
};

export default EditPage;
