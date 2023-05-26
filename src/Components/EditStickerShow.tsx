import React, { useState } from "react";
import {
  ContainerPage,
  LongContainerWrapper,
  MiniSticker,
  PlayMusic,
} from "../Styles/HomePageStyle";
import { RemoveButton } from "../Styles/EditPageStyle";

const EditStickerShow = () => {
  const [sticker, setSticker] = useState([
    ["", "이건테스트용", 1],
    ["", "그래서 모든내용이 같음", 2],
    ["", "나중에 서버에 받으면 달라질거임", 2],
    ["", "일일이 쓰는게 어렵다", 1],
    ["", "이건테스트용", 1],
    ["", "이것도테스트용", 2],
    ["", "메시지확인", 2],
    ["", "안녕", 1],
    ["", "다른사람꺼", 2],
    ["", "힘들군", 1],
    ["", "지금현재는이런상태", 2],
    ["", "이렇게 받아와야함 ", 1],
    ["", "계속해서 이럴예정", 1],
    ["", "흐음...well...", 2],
  ]);
  return (
    <div>
      <LongContainerWrapper>
        <div className="playMusic"></div>
        {sticker.map((e, index) => {
          if (index % 5 === 3 || index % 5 === 4) {
            return (
              <>
                <ContainerPage
                  style={{
                    backgroundImage: `url(/img/sticker/sticker${e[2]}.png)`,
                  }}
                  className="even-item"
                >
                  <RemoveButton>-</RemoveButton>
                </ContainerPage>
              </>
            );
          } else {
            return (
              <>
                <ContainerPage
                  style={{
                    backgroundImage: `url(/img/sticker/sticker${e[2]}.png)`,
                  }}
                  className="item"
                >
                  <RemoveButton>-</RemoveButton>
                </ContainerPage>
              </>
            );
          }
        })}
      </LongContainerWrapper>
    </div>
  );
};

export default EditStickerShow;
