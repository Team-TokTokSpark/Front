import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { dotsIndexSelect } from "../../atom";

const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 8px;
  background-color: transparent;
`;

const Dots = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 0px 3px;
  background: rgba(255, 255, 255, 0.3);
  &.click {
    background: white;
  }
`;

const SwiperDots = () => {
  const dotsNum = [1, 2, 3];
  const [select, setSelect] = useRecoilState(dotsIndexSelect);

  return (
    <DotsWrapper>
      {dotsNum.map((e, index) => {
        if (select === dotsNum[index]) {
          return (
            <Dots
              key={index} // Provide a unique key for each element
              className="click"
              onClick={() => {
                setSelect(e);
              }}
            />
          );
        } else {
          return (
            <Dots
              key={index} // Provide a unique key for each element
              onClick={() => {
                setSelect(e);
              }}
            />
          );
        }
      })}
    </DotsWrapper>
  );
};

export default SwiperDots;
