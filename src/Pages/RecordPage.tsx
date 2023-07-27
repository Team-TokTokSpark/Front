import React from "react";
import * as S from "../Styles/RecordPageStyle";
import icons from "../Css/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInformationState, SongProps, authTokenState } from "../atom";
import { useState, useEffect } from "react";
import RecordStickerList from "../Components/Record/RecordStickerList";
import { postRecordContent } from "../Services/Record/api";
import { searchMusicFunction } from "../Services/PlayList/api";
const RecordPage = () => {
  const navigate = useNavigate();
  const userInformation = useRecoilValue(userInformationState);
  console.log(userInformation);
  const token = useRecoilValue(authTokenState);
  const [content, setContent] = useState("");
  const [modalView, setModalView] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMusic, setSearchMusic] = useState<Array<SongProps>>([]);
  const [stickerId, setStickerId] = useState<any>();
  const { idx } = useParams();
  const stringIdx: string = idx!;
  const sendAllData = async () => {
    console.log(token, stringIdx, content);
    const result = await postRecordContent(token, stringIdx, content);
    console.log("잘되었니", result);
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

  console.log(searchMusic);
  useEffect(() => {
    getResultList(searchTerm);
  }, [searchTerm]);

  interface songProps {
    stickerId: any;
    imgIdx: any;
    message: any;
  }
  const [sendData, setSendData] = useState({
    stickers: [
      { stickerId: null, imgIdx: null, message: "뭐지이건" },
      { stickerId: null, imgIdx: null, message: "뭐지이건" },
      { stickerId: null, imgIdx: null, message: "뭐지이건" },
    ],
  });

  const [sticker1, setSticker1] = useState({
    stickerId: null,
    imgIdx: null,
    message: "뭐지이건",
  });
  const [sticker2, setSticker2] = useState<songProps>({
    stickerId: null,
    imgIdx: null,
    message: "뭐지이건",
  });
  const [sticker3, setSticker3] = useState({
    stickerId: null,
    imgIdx: null,
    message: "뭐지이건",
  });

  const a = () => {
    setModalView(() => true);
    setSticker2((prevData) => ({
      stickerId: 2,
      imgIdx: null,
      message: "뭐지이건",
    }));
  };

  console.log(sendData.stickers);

  const modalInput = (num: number) => {
    setModalView(() => true);
    setStickerId((idx: any) => 2);
    setSendData((prevData) => ({
      ...prevData,
      stickers: prevData.stickers.map((sticker, index) =>
        index === num ? { ...sticker, stickerId: stickerId } : sticker
      ),
    }));
  };

  const abc = () => {};

  return (
    <S.PageContainer>
      <S.RecordHeader>
        <button onClick={() => navigate(`/main/${userInformation.userId}`)}>
          {icons.back} <p>{userInformation.nickname}</p>의 보관함
        </button>
        <div onClick={sendAllData}>완료</div>
      </S.RecordHeader>
      <S.RecordWrapper>
        <h2>오늘의 기분을 음악과 함께 기록해주세요.</h2>
        <S.RecordProps>
          <textarea
            placeholder="오늘의 기분을 기록해주세요!"
            value={content}
            onChange={changeContentHandler}
          ></textarea>
          <S.StickerBoard>
            <p>스티커 붙이기</p>
            <S.BoardItems>
              <label onClick={() => a()}>
                {sticker2.stickerId ? (
                  <img src={`/img/sticker/sticker1.png`} alt="" />
                ) : (
                  <div>{icons.plus}</div>
                )}
              </label>
              <label onClick={() => a}>
                {sendData.stickers[0].stickerId ? (
                  <img src={`/img/sticker/sticker1.png`} alt="" />
                ) : (
                  <div>{icons.plus}</div>
                )}
              </label>
              <label onClick={() => modalInput(2)}>
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
          <S.StickerSelectBox>
            <p>스티커 디자인</p>
            <RecordStickerList />
          </S.StickerSelectBox>
          <S.ButtonBox>
            <button onClick={() => setModalView(false)}>취소</button>
            <button onClick={() => abc()}>붙이기</button>
          </S.ButtonBox>
        </S.ModalPage>
      ) : null}
    </S.PageContainer>
  );
};

export default RecordPage;
