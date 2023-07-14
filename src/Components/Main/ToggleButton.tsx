import React, { useState } from "react";
import {
  ToggleButtonUnClick,
  ToggleButtonClick,
  ToggleWrapper,
} from "../../Styles/HomePageMakeStyle";

const ToggleButton = () => {
  const [select, SetSelect] = useState("playlist");
  return (
    <>
      <ToggleWrapper>
        {select === "playlist" ? (
          <>
            {" "}
            <ToggleButtonClick onClick={() => SetSelect("playlist")}>
              플레이리스트
            </ToggleButtonClick>
            <ToggleButtonUnClick onClick={() => SetSelect("record")}>
              나의 기록
            </ToggleButtonUnClick>
          </>
        ) : (
          <>
            {" "}
            <ToggleButtonUnClick onClick={() => SetSelect("playlist")}>
              플레이리스트
            </ToggleButtonUnClick>
            <ToggleButtonClick onClick={() => SetSelect("record")}>
              나의 기록
            </ToggleButtonClick>
          </>
        )}
      </ToggleWrapper>
    </>
  );
};

export default ToggleButton;
