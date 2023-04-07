import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  ExportButton,
  MainBody,
  PageMakeButton,
} from "../Styles/HomePageStyle";

function MusicPage() {
  const location = useLocation();
  const [userId, setUserId] = useState(location.state?.userId);
  return (
    <MainBody>
      <div>이름(닉네임)</div>
      <div style={{ display: "flex" }}>
        <button>수정</button>
        <div>{userId} page</div>
        <button>share</button>
      </div>
      <Outlet />
      <PageMakeButton>
        스티커 <br />
        추가
      </PageMakeButton>
      <ExportButton>
        내보 <br />
        내기
      </ExportButton>
    </MainBody>
  );
}

export default MusicPage;
