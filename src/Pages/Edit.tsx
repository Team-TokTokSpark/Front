import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ChangeMusicColor, PlaylistInformation } from "../atom";
import { MainBody } from "../Styles/HomePageStyle";
import EditStickerShow from "../Components/Sticker/EditStickerShow";
import { InputTitle, RemoveTextButton } from "../Styles/EditPageStyle";
import CancleComplete from "../Components/Utils/CancleComplete";
import ColorChange from "../Components/Utils/ColorChange";

const EditPage = () => {
  const [playlist, setPlaylist] = useRecoilState(PlaylistInformation);
  const [colorNum, setColorNum] = useState(playlist.backgroundIdx);
  const [text, setText] = useState(playlist.playlistName);
  const colorChange = useRecoilValue(ChangeMusicColor);
  const displayText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const removeText = (e: React.MouseEvent<HTMLButtonElement>) => {
    setText("");
  };
  return (
    <MainBody>
      <div className={`pageTheme${playlist.backgroundIdx}`}>
        <CancleComplete
          colorNum={colorChange}
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
