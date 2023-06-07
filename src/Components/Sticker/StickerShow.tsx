import { useState } from "react";
import { LongContainerWrapper, PlayMusic } from "../../Styles/HomePageStyle";
import StickerImgMake from "./StickerImgMake";

function StickerShow() {
  const [sticker, setSticker] = useState([
    ["my1", "이건테스트용", "1"],
    ["my2", "그래서 모든내용이 같음", "2"],
    ["nina", "나중에 서버에 받으면 달라질거임", "8"],
    ["emily", "일일이 쓰는게 어렵다", "7"],
    ["other3", "이건테스트용", "11"],
    ["brandon", "이것도테스트용", "12"],
    ["emily23", "메시지확인", "2"],
    ["my8", "안녕", "1"],
    ["other9", "다른사람꺼", "3"],
    ["my10", "힘들군", "5"],
    ["other11", "지금현재는이런상태", "4"],
    ["hailey", "이렇게 받아와야함 아니 근ㅔ 이거 엄청 길면 ", "6"],
    ["my13", "계속해서 이럴예정", "7"],
    ["my14", "흐음...well...", "2"],
  ]);
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
                <StickerImgMake
                  name={e[0]}
                  message={e[1]}
                  stickerNum={e[2]}
                  even_item="even-item"
                />
              </>
            );
          } else {
            return (
              <>
                <StickerImgMake
                  name={e[0]}
                  message={e[1]}
                  stickerNum={e[2]}
                  even_item="item"
                />
              </>
            );
          }
        })}
      </LongContainerWrapper>
    </div>
  );
}

export default StickerShow;
