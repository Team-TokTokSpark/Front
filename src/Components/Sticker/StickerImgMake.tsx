import { BigStickerPage, StickerPage } from "../../Styles/HomePageStyle";
import { useSetRecoilState } from "recoil";
import { MessageModalData, messageModalAtom } from "../../atom";

type Props = {
  name: string;
  message: string;
  artist: string;
  stickerNum: number;
  even_item: string;
};

const StickerImgMake = ({
  name,
  message,
  artist,
  stickerNum,
  even_item,
}: Props) => {
  const setMessageModal = useSetRecoilState(messageModalAtom);
  const setMessageData = useSetRecoilState(MessageModalData);
  const handleClick = (title: string, artist: string, message: string) => {
    setMessageData({
      title: title,
      artist: artist,
      message: message,
    });
  };
  return (
    <>
      {stickerNum % 2 === 0 ? (
        <>
          <StickerPage
            onClick={() => {
              handleClick(name, artist, message);
              setMessageModal(true);
            }}
            style={{
              backgroundImage: `url(/img/sticker/sticker${stickerNum}.png)`,
            }}
            className={`${even_item}`}
          ></StickerPage>
        </>
      ) : (
        <>
          <BigStickerPage
            onClick={() => {
              handleClick(name, artist, message);
              setMessageModal(true);
            }}
            style={{
              backgroundImage: `url(/img/sticker/sticker${stickerNum}.png)`,
            }}
            className={` ${even_item}`}
          ></BigStickerPage>
        </>
      )}
    </>
  );
};

export default StickerImgMake;
