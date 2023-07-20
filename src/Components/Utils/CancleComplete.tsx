import React from "react";
import { EditButtonDiv } from "../../Styles/EditPageStyle";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { MusicColor } from "../../atom";
import { MakePlaylistApi } from "../../Services/Main/api";

type Props = {
  colorNum: number;
  userIdx: number;
  type: string;
  playlistName: string;
  backgroundIdx: number;
  token: string;
};

//완료일 떄 Make냐 아니냐에 따라 api를 다르게 가져갈 예정! 그러므로 아직 완성되기 전!
const CancleComplete = ({
  colorNum,
  userIdx,
  type,
  playlistName,
  backgroundIdx,
  token,
}: Props) => {
  const setBackGroundColorNum = useSetRecoilState(MusicColor);
  const navigate = useNavigate();
  const makePlaylist = async (
    userIdx: number,
    type: string,
    playlistName: string,
    backgroundIdx: number,
    token: string
  ) => {
    const result = await MakePlaylistApi(
      userIdx,
      type,
      playlistName,
      backgroundIdx,
      token
    );
    if (result === false) {
      alert("조건에 맞게 생성해주세요");
    } else {
      if (result.status === 200) {
        alert("완료되었습니다");
        navigate(`/main/${userIdx}`);
      } else {
        alert("에러가 발생했습니다");
      }
    }
  };
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
        {type === "playlist" ? (
          <div
            onClick={() => {
              makePlaylist(userIdx, type, playlistName, backgroundIdx, token);
            }}
          >
            완료
          </div>
        ) : type === "record" ? (
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
        ) : (
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
        )}
      </EditButtonDiv>
    </>
  );
};

export default CancleComplete;
