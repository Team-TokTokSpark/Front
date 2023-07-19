import React from "react";
import { BigStickerPage, StickerPage } from "../../Styles/HomePageStyle";
import { RemoveButton } from "../../Styles/EditPageStyle";

type Props = {
  message: string;
  stickerNum: number;
  even_item: string;
};

const EditStickerImg = ({ message, stickerNum, even_item }: Props) => {
  if (stickerNum % 2 === 0) {
    return (
      <>
        <StickerPage
          style={{
            backgroundImage: `url(/img/sticker/sticker${stickerNum}.png)`,
          }}
          className={even_item}
        >
          <RemoveButton>-</RemoveButton>
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
          <RemoveButton>-</RemoveButton>
        </BigStickerPage>
      </>
    );
  }
};

export default EditStickerImg;
