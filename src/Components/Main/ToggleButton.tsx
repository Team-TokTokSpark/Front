import {
  ToggleButtonUnClick,
  ToggleButtonClick,
  ToggleWrapper,
} from "../../Styles/HomePageMakeStyle";
import { useRecoilState } from "recoil";
import { MakePageState } from "../../atom";

const ToggleButton = () => {
  const [makePage, setMakePage] = useRecoilState(MakePageState);
  return (
    <>
      <ToggleWrapper>
        {makePage.type === "playlist" ? (
          <>
            {" "}
            <ToggleButtonClick
              onClick={() => setMakePage({ ...makePage, type: "playlist" })}
            >
              플레이리스트
            </ToggleButtonClick>
            <ToggleButtonUnClick
              onClick={() => setMakePage({ ...makePage, type: "record" })}
            >
              나의 기록
            </ToggleButtonUnClick>
          </>
        ) : (
          <>
            {" "}
            <ToggleButtonUnClick
              onClick={() => setMakePage({ ...makePage, type: "playlist" })}
            >
              플레이리스트
            </ToggleButtonUnClick>
            <ToggleButtonClick
              onClick={() => setMakePage({ ...makePage, type: "record" })}
            >
              나의 기록
            </ToggleButtonClick>
          </>
        )}
      </ToggleWrapper>
    </>
  );
};

export default ToggleButton;
