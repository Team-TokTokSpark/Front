import { useState } from "react";
import {
  LongContainerWrapper,
  MessageBox,
  PlayMusic,
  StickerPage,
} from "../Styles/HomePageStyle";

function StickerShow() {
  const [select, setSelect] = useState<String>("");
  const [sticker, setSticker] = useState([
    ["my1", "이건테스트용", 1],
    ["my2", "그래서 모든내용이 같음", 2],
    ["nina", "나중에 서버에 받으면 달라질거임", 2],
    ["emily", "일일이 쓰는게 어렵다", 1],
    ["other3", "이건테스트용", 1],
    ["brandon", "이것도테스트용", 2],
    ["emily23", "메시지확인", 2],
    ["my8", "안녕", 1],
    ["other9", "다른사람꺼", 2],
    ["my10", "힘들군", 1],
    ["other11", "지금현재는이런상태", 2],
    ["hailey", "이렇게 받아와야함 아니 근ㅔ 이거 엄청 길면 ", 1],
    ["my13", "계속해서 이럴예정", 1],
    ["my14", "흐음...well...", 2],
  ]);
  const handleClick = (type: string | number) => {
    if (select === type) {
      setSelect("");
    } else {
      setSelect(`${type}`);
    }
  };
  return (
    <div>
      <LongContainerWrapper>
        <div className="playMusic">
          <PlayMusic>재생중인 음악</PlayMusic>
        </div>
        {sticker.map((e, index) => {
          if (index % 5 === 3 || index % 5 === 4) {
            return (
              <>
                <StickerPage
                  onClick={() => handleClick(e[0])}
                  style={{
                    backgroundImage: `url(/img/sticker/sticker${e[2]}.png)`,
                  }}
                  className={`${
                    select === e[0] ? "sticker-select" : ""
                  } ${"even-item"}`}
                >
                  {select === e[0] ? <MessageBox>{e[1]}</MessageBox> : null}
                </StickerPage>
              </>
            );
          } else {
            return (
              <>
                <StickerPage
                  onClick={() => handleClick(e[0])}
                  style={{
                    backgroundImage: `url(/img/sticker/sticker${e[2]}.png)`,
                  }}
                  className={`${
                    select === e[0] ? "sticker-select" : ""
                  } ${"item"}`}
                >
                  {select === e[0] ? <MessageBox>{e[1]}</MessageBox> : null}
                </StickerPage>
              </>
            );
          }
        })}
      </LongContainerWrapper>
    </div>
  );
}

export default StickerShow;
