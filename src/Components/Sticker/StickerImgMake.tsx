import React, { useState } from "react";
import {
  BigStickerPage,
  MessageBox,
  StickerPage,
} from "../../Styles/HomePageStyle";

type Props = {
  name: string;
  message: string;
  stickerNum: number;
  even_item: string;
};

const StickerImgMake = ({ name, message, stickerNum, even_item }: Props) => {
  const [select, setSelect] = useState<String>("");
  const handleClick = (type: string | number) => {
    if (select === type) {
      setSelect("");
    } else {
      setSelect(`${type}`);
    }
  };
  if (stickerNum % 2 === 0) {
    return (
      <StickerPage
        onClick={() => handleClick(name)}
        style={{
          backgroundImage: `url(/img/sticker/sticker${stickerNum}.png)`,
        }}
        className={`${select === name ? "sticker-select" : ""} ${even_item}`}
      >
        {select === name ? <MessageBox>{message}</MessageBox> : null}
      </StickerPage>
    );
  } else {
    return (
      <BigStickerPage
        onClick={() => handleClick(name)}
        style={{
          backgroundImage: `url(/img/sticker/sticker${stickerNum}.png)`,
        }}
        className={`${select === name ? "sticker-select" : ""} ${even_item}`}
      >
        {select === name ? <MessageBox>{message}</MessageBox> : null}
      </BigStickerPage>
    );
  }
};

export default StickerImgMake;
