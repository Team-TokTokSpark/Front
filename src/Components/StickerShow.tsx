import { useState } from "react";
import {
  ContainerPage,
  ContainerWrapper,
  LongContainerWrapper,
  MainBody,
  MessageBox,
  SpecialMessageBox,
} from "../Styles/HomePageStyle";

function StickerShow() {
  const [select, setSelect] = useState<String>("");
  const [sticker, setSticker] = useState([
    ["my1", "이건테스트용"],
    ["my2", "그래서 모든내용이 같음"],
    ["nina", "나중에 서버에 받으면 달라질거임"],
    ["emily", "일일이 쓰는게 어렵다"],
    ["other3", "이건테스트용"],
    ["brandon", "이것도테스트용"],
    ["emily23", "메시지확인"],
    ["my8", "안녕"],
    ["other9", "다른사람꺼"],
    ["my10", "힘들군"],
    ["other11", "지금현재는이런상태"],
    ["hailey", "이렇게 받아와야함"],
    ["my13", "계속해서 이럴예정"],
    ["my14", "흐음...well..."],
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
          {sticker.map((e, index) => {
            if (index % 3 === 0) {
              return (
                <>
                  <ContainerPage
                    onClick={() => handleClick(e[0])}
                    className={`${select === e[0] ? "sticker-select" : ""}`}
                  >
                    {e[0]}
                    {select === e[0] ? (
                      <SpecialMessageBox>{e[1]}</SpecialMessageBox>
                    ) : null}
                  </ContainerPage>
                </>
              );
            } else {
              return (
                <>
                  <ContainerPage
                    onClick={() => handleClick(e[0])}
                    className={`${select === e[0] ? "sticker-select" : ""}`}
                  >
                    {e[0]}
                    {select === e[0] ? <MessageBox>{e[1]}</MessageBox> : null}
                  </ContainerPage>
                </>
              );
            }
          })}
        </LongContainerWrapper>
      ) : (
        <ContainerWrapper>
          {sticker.map((e, index) => {
            if (index % 3 === 0) {
              return (
                <>
                  <ContainerPage
                    onClick={() => handleClick(e[0])}
                    className={`${select === e[0] ? "sticker-select" : ""}`}
                  >
                    {e[0]}
                    {select === e[0] ? (
                      <SpecialMessageBox>{e[1]}</SpecialMessageBox>
                    ) : null}
                  </ContainerPage>
                </>
              );
            } else {
              return (
                <>
                  <ContainerPage
                    onClick={() => handleClick(e[0])}
                    className={`${select === e[0] ? "sticker-select" : ""}`}
                  >
                    {e[0]}
                    {select === e[0] ? <MessageBox>{e[1]}</MessageBox> : null}
                  </ContainerPage>
                </>
              );
            }
          })}
        </ContainerWrapper>
      )}
    </MainBody>
  );
}

export default StickerShow;
