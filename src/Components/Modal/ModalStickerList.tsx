import React, { useState } from "react";
import Sticker from "./ModalStickerItem";
import { modalData } from "../../atom";
import { useSetRecoilState } from "recoil";

const ModalStickerList = () => {
  const [selectedSticker, setSelectedSticker] = useState<string>("");
  const setStickerModal = useSetRecoilState(modalData);
  const handleStickerSelection = (sticker: string) => {
    setSelectedSticker(sticker);
    setStickerModal((prevModalData) => ({
      ...prevModalData,
      sticker: sticker,
    }));
  };

  const stickerGroups = [
    ["sticker1", "sticker3", "sticker2"],
    ["sticker4", "sticker5", "sticker7"],
    ["sticker9", "sticker11", "sticker6"],
    ["sticker8", "sticker10", "sticker12"],
  ];

  return (
    <>
      {stickerGroups.map((stickerGroup, index) => (
        <div key={index}>
          {stickerGroup.map((sticker) => (
            <Sticker
              key={sticker}
              alt={sticker}
              isSelected={selectedSticker === sticker}
              onClick={() => handleStickerSelection(sticker)}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default ModalStickerList;
