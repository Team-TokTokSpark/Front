import { useState } from "react";
import StickerImgMake from "./StickerImgMake";
import { useRecoilValue } from "recoil";
import { PlaylistInformation } from "../../atom";

function StickerShow() {
  const sticker = useRecoilValue(PlaylistInformation);
  return (
    <>
      <div className="blackSpace"></div>
      {sticker.map((e, index) => {
        if (index % 5 === 3 || index % 5 === 4) {
          return (
            <>
              <StickerImgMake
                name={e.userName}
                message={e.message}
                stickerNum={e.imgIndex}
                even_item="even-item"
              />
            </>
          );
        } else {
          return (
            <>
              <StickerImgMake
                name={e.userName}
                message={e.message}
                stickerNum={e.imgIndex}
                even_item="item"
              />
            </>
          );
        }
      })}
    </>
  );
}

export default StickerShow;
