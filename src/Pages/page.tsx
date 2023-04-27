import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  EditButton,
  ExportButton,
  MainBody,
  PlayMusic,
  ShareButton,
  StickerMakeButton,
} from "../Styles/HomePageStyle";

function MusicPage() {
  const location = useLocation();
  const [userId, setUserId] = useState(location.state?.userId);
  const pageName = location.state?.pageName;
  return (
    <MainBody>
      <div className="nickname-part">{userId}</div>
      <div style={{ display: "flex", margin: "20px" }}>
        <EditButton>수정</EditButton>
        <div style={{ marginLeft: "10px" }}>{pageName} page</div>
        <ShareButton>share</ShareButton>
      </div>
      <PlayMusic>재생중인 음악</PlayMusic>
      <Outlet />
      <StickerMakeButton>
        스티커 <br />
        추가
      </StickerMakeButton>
      <ExportButton>
        내보 <br />
        내기
      </ExportButton>
    </MainBody>
  );
}

export default MusicPage;
