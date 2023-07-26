import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  ChangeMusicColor,
  MusicColor,
  PlaylistInformation,
  authTokenState,
} from "../atom";
import { MainBody } from "../Styles/HomePageStyle";
import EditStickerShow from "../Components/Sticker/EditStickerShow";
import { InputTitle, RemoveTextButton } from "../Styles/EditPageStyle";
import CancleComplete from "../Components/Utils/CancleComplete";
import ColorChange from "../Components/Utils/ColorChange";

const EditPage = () => {
  const [playlist, setPlaylist] = useRecoilState(PlaylistInformation);
  const colorNum = playlist.backgroundIdx;
  const [text, setText] = useState(playlist.playlistName);
  const colorChange = useRecoilValue(MusicColor);
  const token = useRecoilValue(authTokenState);
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
          userIdx={playlist.playlistId}
          type={""}
          playlistName={text}
          backgroundIdx={colorChange}
          token={token}
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
