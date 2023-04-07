import { useState } from "react";
import {
  ContainerWrapper,
  HeaderWrapper,
  MainBody,
  PageMakeButton,
} from "../Styles/HomePageStyle";

function HomePage() {
  const [test, setTest] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ]);
  return (
    <MainBody>
      <div className="setting-part">설정</div>
      <HeaderWrapper>
        <div>
          <div>이름(닉네임)</div>
          <div>자기소개 한줄~</div>
        </div>
        <div>친구 목록</div>
      </HeaderWrapper>
      <ContainerWrapper>
        {test.map((e) => {
          return <div>{e}</div>;
        })}
      </ContainerWrapper>
      <div>
        <PageMakeButton>
          페이지
          <br />
          생성
        </PageMakeButton>
      </div>
    </MainBody>
  );
}

export default HomePage;
