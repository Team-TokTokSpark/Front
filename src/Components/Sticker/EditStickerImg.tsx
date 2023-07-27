import React from "react";
import { BigStickerPage, StickerPage } from "../../Styles/HomePageStyle";
import { RemoveButton } from "../../Styles/EditPageStyle";
import Swal from "sweetalert2";
import { deletePlaylistSongApi } from "../../Services/Edit/api";
import { useRecoilValue } from "recoil";
import { authTokenState } from "../../atom";

type Props = {
  playlistid: number;
  playlistSongid: number;
  stickerNum: number;
  even_item: string;
};

const EditStickerImg = ({
  playlistid,
  playlistSongid,
  stickerNum,
  even_item,
}: Props) => {
  const token = useRecoilValue(authTokenState);
  const removePlaylistSong = (e: React.MouseEvent<HTMLButtonElement>) => {
    Swal.fire({
      title: "해당 스티커를 삭제하시겠습니까?",
      text: "해당 스티커 삭제 후 복구가 불가능합니다.",
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deletePlaylistSongApi(
          playlistid,
          playlistSongid,
          token
        );
        if (result.status === 200) {
          Swal.fire("삭제되었습니다!");
        } else {
          Swal.fire("에러가 났네요 다시 시도해주세요.");
        }
      }
    });
  };
  if (stickerNum % 2 === 0) {
    return (
      <>
        <StickerPage
          style={{
            backgroundImage: `url(/img/sticker/sticker${stickerNum}.png)`,
          }}
          className={even_item}
        >
          <RemoveButton onClick={removePlaylistSong}>-</RemoveButton>
        </StickerPage>
      </>
    );
  } else {
    return (
      <>
        <BigStickerPage
          style={{
            backgroundImage: `url(/img/sticker/sticker${stickerNum}.png)`,
          }}
          className={even_item}
        >
          <RemoveButton onClick={removePlaylistSong}>-</RemoveButton>
        </BigStickerPage>
      </>
    );
  }
};

export default EditStickerImg;
