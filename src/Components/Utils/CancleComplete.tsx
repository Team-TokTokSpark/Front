import React from "react";
import { EditButtonDiv } from "../../Styles/EditPageStyle";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { MusicColor, userInformationState } from "../../atom";
import { MakePlaylistApi } from "../../Services/Main/api";
import { editStickApi } from "../../Services/Edit/api";
import Swal from "sweetalert2";

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
  const information = useRecoilValue(userInformationState);
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
        navigate(`/main/${userIdx}`);
      } else {
        Swal.fire({
          title: "Error",
          text: "오류가 떴습니다 다시 한 번 시도해주세요",
        });
      }
    }
  };
  const editPlaylist = async (
    userIdx: string,
    postIdx: number,
    token: string,
    playlistName: string,
    backgroundIdx: number
  ) => {
    const result = await editStickApi(
      userIdx,
      postIdx,
      token,
      playlistName,
      backgroundIdx
    );
    if (result.status === 200) {
      alert("수정이 완료되었습니다");
      navigate(`/page/${postIdx}`);
    } else {
      alert("에러가 발생하였습니다");
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
              makePlaylist(userIdx, type, playlistName, backgroundIdx, token);
            }}
          >
            완료
          </div>
        ) : (
          <div
            onClick={() => {
              editPlaylist(
                information.userId,
                userIdx,
                token,
                playlistName,
                backgroundIdx
              );
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
