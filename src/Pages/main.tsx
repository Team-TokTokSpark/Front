import PageShow from "../Components/PageShow";
import {
  ExportButton,
  FriendButton,
  HeaderWrapper,
  MainBody,
} from "../Styles/HomePageStyle";

function HomePage() {
  return (
    <MainBody>
      <div className="setting-part">설정</div>
      <HeaderWrapper>
        <div>
          <div
            style={{
              fontSize: "24px",
              marginBottom: "10px",
            }}
          >
            이름(닉네임)
          </div>
          <div style={{ fontSize: "15px" }}>자기소개 한줄~</div>
        </div>
        <FriendButton>친구 목록</FriendButton>
      </HeaderWrapper>
      <PageShow />
      <div>
        <ExportButton>
          페이지
          <br />
          생성
        </ExportButton>
      </div>
    </MainBody>
  );
}

export default HomePage;
