import PageShow from "../Components/PageShow";
import {
  FriendButton,
  HeaderWrapper,
  MainBody,
  PageMakeButton,
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
