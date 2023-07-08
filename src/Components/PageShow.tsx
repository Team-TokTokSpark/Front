import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerPage, ContainerWrapper } from "../Styles/HomePageStyle";
import { MusicColor } from "../atom";
import { useSetRecoilState } from "recoil";

function PageShow() {
  //제목, 이용자, 배경컬러, 스티커랜덤(일단은 지정으로 어차피 넘길 때 랜덤으로 줄 것이기 때문)
  const [test, setTest] = useState([
    ["hello", "mingle", "0", "12"],
    ["niceTo", "my", "3", "8"],
    ["music", "nina", "2", "2"],
    ["music", "emily", "3", "3"],
    ["music1", "emily", "1", "4"],
    ["music", "brandon", "0", "5"],
    ["great", "hailey", "1", "6"],
    ["music", "my", "2", "8"],
    ["wow", "sandy", "3", "10"],
    ["music", "nina", "1", "1"],
    ["Happy", "mike", "0", "3"],
    ["music", "my", "2", "4"],
    ["music", "mike", "1", "11"],
    ["musicmusicmus", "brandon", "2", "6"],
  ]);
  const navigate = useNavigate();
  const pageColorNum = useSetRecoilState(MusicColor);
  return (
    <>
      <ContainerWrapper>
        <div className="blackSpace">
          <div></div>
        </div>
        {test.map((e) => {
          if (e[1].includes("my")) {
            return (
              <ContainerPage
                onClick={() => {
                  navigate(`/page/myMusic/${e[0]}`, {
                    state: {
                      userId: e[1],
                      pageName: e[0],
                    },
                  });
                  pageColorNum(parseInt(e[2]));
                }}
                className={`containerTheme${e[2]}`}
              >
                {e[0]}
                <div
                  className="imgInput"
                  style={{
                    backgroundImage: `url(/img/sticker/sticker${e[3]}.png)`,
                  }}
                />
              </ContainerPage>
            );
          } else {
            return (
              <ContainerPage
                onClick={() => {
                  navigate(`/page/otherMusic/${e[0]}`, {
                    state: {
                      userId: e[1],
                      pageName: e[0],
                    },
                  });
                  pageColorNum(parseInt(e[2]));
                }}
                className={`containerTheme${e[2]}`}
              >
                {e[0]}
                <div
                  className="imgInput"
                  style={{
                    backgroundImage: `url(/img/sticker/sticker${e[3]}.png)`,
                  }}
                ></div>
              </ContainerPage>
            );
          }
        })}
      </ContainerWrapper>
    </>
  );
}

export default PageShow;
