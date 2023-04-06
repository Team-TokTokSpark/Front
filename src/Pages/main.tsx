import {
  ContainerWrapper,
  HeaderWrapper,
  MainBody,
} from "../Styles/HomePageStyle";

function HomePage() {
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
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </ContainerWrapper>
      <button>페이지 생성</button>
    </MainBody>
  );
}

export default HomePage;
