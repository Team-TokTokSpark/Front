import StickerImgMake from "./StickerImgMake";
import { useRecoilValue } from "recoil";
import { PlaylistInformation } from "../../atom";

function StickerShow() {
  const sticker = useRecoilValue(PlaylistInformation);
  return (
    <>
      <div className="blackSpace"></div>
      {sticker.playlistSongs.map((e, index) => {
        if (index % 5 === 3 || index % 5 === 4) {
          return (
            <>
              <StickerImgMake
                name={e.stickers[0].message}
                message={e.stickers[0].message}
                stickerNum={e.stickers[0].imgIdx}
                even_item="even-item"
              />
            </>
          );
        } else {
          return (
            <>
              <StickerImgMake
                name={e.stickers[0].message}
                message={e.stickers[0].message}
                stickerNum={e.stickers[0].imgIdx}
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
