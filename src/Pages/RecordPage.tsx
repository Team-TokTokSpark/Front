import React from "react";
import * as S from "../Styles/RecordPageStyle";
import icons from "../Css/icons";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import {
  userInformationState,
  SongProps,
  authTokenState,
  recordModalData,
} from "../atom";
import { useState, useEffect } from "react";
import RecordStickerList from "../Components/Record/RecordStickerList";
import { MusicBoxWrapper } from "../Styles/PlaylistStyle";
import { searchMusicFunction } from "../Services/PlayList/api";

const RecordPage = () => {
  const navigate = useNavigate();
  const userInformation = useRecoilValue(userInformationState);
  const token = useRecoilValue(authTokenState);
  const [content, setContent] = useState("");
  const [modalView, setModalView] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMusic, setSearchMusic] = useState<Array<SongProps>>([]);
  const [isSend, setIsSend] = useState(false);
  const [click, setClick] = useState(-1);
  const [clickSong, setClickSong] = useRecoilState(recordModalData);
  const [hoverView, setHoverView] = useState(false);
  const resetSong = useResetRecoilState(recordModalData);

  const onClick = (index: number) => {
    if (click === index) {
      setClick(-1);
    } else {
      setClick(index);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const changeContentHandler = (e: any) => {
    setContent(e.target.value);
  };

  const getResultList = async (title: string) => {
    const result = await searchMusicFunction(title, token);
    setSearchMusic(result.data);
  };

  useEffect(() => {
    getResultList(searchTerm);
  }, [searchTerm]);

  const submit = () => {
    setIsSend((state) => !state);
  };

  return (
    <S.PageContainer>
      {hoverView ? (
        <S.HoverDiv>
          <img src={clickSong.song.imageUrl} alt="" />
          <div>
            <p>{clickSong.song.title}</p>
            <p>{clickSong.song.singer}</p>
          </div>
        </S.HoverDiv>
      ) : null}
      <S.RecordHeader>
        <button onClick={() => navigate(`/main/${userInformation.userId}`)}>
          {icons.back} <p>{userInformation.nickname}</p>의 보관함
        </button>
        {isSend ? (
          <>
            <img src="/img/Pencil_Edit.png" alt="" />
          </>
        ) : (
          <div onClick={submit}>완료</div>
        )}
      </S.RecordHeader>
      <S.RecordWrapper>
        <h2>오늘의 기분을 음악과 함께 기록해주세요.</h2>
        <S.RecordProps>
          {isSend ? (
            <p>{content}</p>
          ) : (
            <textarea
              placeholder="오늘의 기분을 기록해주세요!"
              value={content}
              onChange={changeContentHandler}
            ></textarea>
          )}

          <S.StickerBoard>
            <p>스티커 붙이기</p>
            <S.BoardItems>
              <label>
                {clickSong.sticker ? (
                  <img
                    src={`/img//sticker/${clickSong.sticker}.png`}
                    alt="sticker"
                    onMouseOver={() => setHoverView(true)}
                    onMouseOut={() => setHoverView(false)}
                  />
                ) : (
                  <div onClick={() => setModalView(true)}>{icons.plus}</div>
                )}
              </label>
              <label>
                <div>{icons.plus}</div>
              </label>
              <label>
                <div>{icons.plus}</div>
              </label>
            </S.BoardItems>
          </S.StickerBoard>
        </S.RecordProps>
      </S.RecordWrapper>
      {modalView ? (
        <S.ModalPage>
          <S.SongSearchBox>
            <input
              type="text"
              placeholder="검색"
              value={searchTerm}
              onChange={handleInputChange}
            />
            {icons.search}
          </S.SongSearchBox>
          <S.SongSearchListWrapper>
            {searchMusic.map((e, index) => {
              if (click === index) {
                return (
                  <S.SongSearchList
                    className="click"
                    onClick={() => {
                      onClick(-1);
                      resetSong();
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
                  </S.SongSearchList>
                );
              } else {
                return (
                  <S.SongSearchList
                    onClick={() => {
                      onClick(index);
                      setClickSong((prevModal) => ({
                        ...prevModal,
                        song: {
                          title: e.title,
                          singer: e.artistName,
                          imageUrl: e.imageUrl,
                        },
                      }));
                    }}
                  >
                    <img className="albumImg" src={e.imageUrl} alt="albumImg" />
                    <MusicBoxWrapper>
                      <div className="title">{e.title}</div>
                      <div className="artist">{e.artistName}</div>
                    </MusicBoxWrapper>
                  </S.SongSearchList>
                );
              }
            })}
          </S.SongSearchListWrapper>
          <S.StickerSelectBox>
            <p>스티커 디자인</p>
            <RecordStickerList />
          </S.StickerSelectBox>
          <S.ButtonBox>
            <button onClick={() => setModalView(false)}>취소</button>
            <button onClick={() => setModalView(false)}>붙이기</button>
          </S.ButtonBox>
        </S.ModalPage>
      ) : null}
    </S.PageContainer>
  );
};

export default RecordPage;
