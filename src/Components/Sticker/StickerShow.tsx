import React from "react";
import StickerImgMake from "./StickerImgMake";
import { useRecoilValue } from "recoil";
import {
  MessageModalData,
  PlaylistInformation,
  messageModalAtom,
} from "../../atom";
import MessageModalPage from "../Modal/MessageModalPage";

function StickerShow() {
  const sticker = useRecoilValue(PlaylistInformation);
  const messageModal = useRecoilValue(messageModalAtom);
  const messageInfo = useRecoilValue(MessageModalData);

  return (
    <>
      <div className="blackSpace"></div>
      {sticker.playlistSongs.map((e, index) => {
        if (index % 5 === 3 || index % 5 === 4) {
          return (
            <StickerImgMake
              key={index} // Provide a unique key for each child element
              name={e.title}
              artist={e.artist}
              message={e.stickers[0].message}
              stickerNum={e.stickers[0].imgIdx}
              even_item="even-item"
            />
          );
        } else {
          return (
            <StickerImgMake
              key={index} // Provide a unique key for each child element
              name={e.title}
              artist={e.artist}
              message={e.stickers[0].message}
              stickerNum={e.stickers[0].imgIdx}
              even_item="item"
            />
          );
        }
      })}
      {messageModal && (
        <MessageModalPage
          title={messageInfo.title}
          artist={messageInfo.artist}
          message={messageInfo.message}
        />
      )}
    </>
  );
}

export default StickerShow;
