import { useEffect, useState } from "react";

import {
  isNextModalView,
  isModalView,
  authTokenState,
  SongProps,
} from "../../atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import * as M from "./ModalStyle";
import icons from "../../Css/icons";
import { MusicBoxWrapper } from "../../Styles/PlaylistStyle";
import { searchMusicFunction } from "../../Services/PlayList/api";

const FirstStepModal = () => {
  const setPopupModal = useSetRecoilState(isModalView);
  const setNextPopupModal = useSetRecoilState(isNextModalView);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMusic, setSearchMusic] = useState<Array<SongProps>>([]);
  const [click, setClick] = useState(-1);
  const token = useRecoilValue(authTokenState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const getResultList = async (title: string) => {
    const result = await searchMusicFunction(title, token);
    setSearchMusic(result.data);
    setClick(-1);
  };
  const onClick = (index: number) => {
    if (click === index) {
      setClick(-1);
    } else {
      setClick(index);
    }
  };
  useEffect(() => {
    getResultList(searchTerm);
  }, [searchTerm]);
  return (
    <>
      <M.SongSearchBox>
        <input
          type="text"
          placeholder="검색"
          value={searchTerm}
          onChange={handleInputChange}
        />
        {icons.search}
      </M.SongSearchBox>
      <div style={{ marginTop: "30px" }} />
      <M.SongSearchListWrapper>
        {searchMusic.map((e, index) => {
          if (click === index) {
            return (
              <M.SongSearchList
                className="click"
                onClick={() => {
                  onClick(index);
                }}
              >
                <img src={e.imageUrl} alt="albumImg" />
                <MusicBoxWrapper>
                  <div className="title">{e.title}</div>
                  <div className="artist">{e.artistName}</div>
                </MusicBoxWrapper>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12.5L9.667 17L19 8"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </M.SongSearchList>
            );
          } else {
            return (
              <M.SongSearchList
                onClick={() => {
                  onClick(index);
                }}
              >
                <img className="albumImg" src={e.imageUrl} alt="albumImg" />
                <MusicBoxWrapper>
                  <div className="title">{e.title}</div>
                  <div className="artist">{e.artistName}</div>
                </MusicBoxWrapper>
              </M.SongSearchList>
            );
          }
        })}
      </M.SongSearchListWrapper>
      <M.ButtonBox>
        <button onClick={() => setPopupModal(false)}>취소</button>
        <button onClick={() => setNextPopupModal(true)}>다음</button>
      </M.ButtonBox>
    </>
  );
};

export default FirstStepModal;
