import { useState } from "react";
import {
  ContainerPage,
  ContainerWrapper,
  LongContainerWrapper,
  MainBody,
} from "../Styles/HomePageStyle";

function StickerShow() {
  const [select, setSelect] = useState<String>("");
  const [sticker, setSticker] = useState([
    "my1",
    "my2",
    "nina",
    "emily",
    "other3",
    "brandon",
    "emily23",
    "my8",
    "other9",
    "my10",
    "other11",
    "hailey",
    "my13",
    "my14",
  ]);
  const handleClick = (type: string) => {
    if (select === type) {
      setSelect("");
    } else {
      setSelect(type);
    }
  };
  return (
    <MainBody>
      {sticker.length > 9 ? (
        <LongContainerWrapper>
          {sticker.map((e) => {
            return (
              <ContainerPage
                onClick={() => handleClick(e)}
                className={`${select === e ? "sticker-select" : ""}`}
              >
                {e}
              </ContainerPage>
            );
          })}
        </LongContainerWrapper>
      ) : (
        <ContainerWrapper>
          {sticker.map((e) => {
            return (
              <ContainerPage
                onClick={() => handleClick(e)}
                className={`${select === e ? "" : "sticker-select"}`}
              >
                {e}
              </ContainerPage>
            );
          })}
        </ContainerWrapper>
      )}
    </MainBody>
  );
}

export default StickerShow;
