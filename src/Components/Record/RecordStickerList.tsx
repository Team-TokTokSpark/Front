import React, { useState } from "react";
import { recordModalData } from "../../atom";
import { useSetRecoilState } from "recoil";
import Sticker from "../Modal/ModalStickerItem";

const RecordStickerList = () => {
  const [selectedSticker, setSelectedSticker] = useState<string>("");
  const setStickerModal = useSetRecoilState(recordModalData);
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

export default RecordStickerList;
