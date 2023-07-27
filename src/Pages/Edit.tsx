import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { MusicColor, PlaylistInformation, authTokenState } from "../atom";
import { MainBody } from "../Styles/HomePageStyle";
import EditStickerShow from "../Components/Sticker/EditStickerShow";
import { InputTitle, RemoveTextButton } from "../Styles/EditPageStyle";
import CancleComplete from "../Components/Utils/CancleComplete";
import ColorChange from "../Components/Utils/ColorChange";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { deletePlaylistApi } from "../Services/Edit/api";

const EditPage = () => {
  const navigate = useNavigate();
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
  const removePageFunc = async () => {
    const result = await deletePlaylistApi(playlist.playlistId, token);
    if (result.status === 200) {
      Swal.fire("삭제되었습니다!");
      navigate(`/main/${playlist.userId}`);
    } else {
      Swal.fire("에러가 났네요 다시 시도해주세요.");
    }
  };
  const removePage = (e: React.MouseEvent<HTMLDivElement>) => {
    Swal.fire({
      title: "페이지를 삭제하시겠습니까?",
      text: "페이지 삭제 후 복구가 불가능합니다.",
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await removePageFunc();
      }
    });
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
        <div className="nickname-part" onClick={removePage}>
          페이지 삭제
        </div>
      </div>
    </MainBody>
  );
};

export default EditPage;
