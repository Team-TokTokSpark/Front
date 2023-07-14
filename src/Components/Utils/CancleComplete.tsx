import React from "react";
import { EditButtonDiv } from "../../Styles/EditPageStyle";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { MusicColor } from "../../atom";

type Props = {
  colorNum: number;
};

//완료일 떄 Make냐 아니냐에 따라 api를 다르게 가져갈 예정! 그러므로 아직 완성되기 전!
const CancleComplete = ({ colorNum }: Props) => {
  const setBackGroundColorNum = useSetRecoilState(MusicColor);
  const navigate = useNavigate();
  return (
    <>
      <EditButtonDiv>
        <div
          onClick={() => {
            navigate(-1);
          }}
        >
          취소
        </div>
        <div
          onClick={() => {
            if (colorNum !== -1) {
              setBackGroundColorNum(colorNum);
              navigate(-1);
            } else {
              navigate(-1);
            }
          }}
        >
          완료
        </div>
      </EditButtonDiv>
    </>
  );
};

export default CancleComplete;
