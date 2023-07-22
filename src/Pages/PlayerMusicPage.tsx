import { Link, useLocation } from "react-router-dom";
import MusicPageShow from "../Components/Playlist/MusicPageShow";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userInformationState } from "../atom";

function PlayermusicPage() {
  const location = useLocation();
  const userIdx = useState(location.state?.userId);
  const information = useRecoilValue(userInformationState);
  return (
    <>
      {userIdx[0] === information.userId ? (
        <>
          <div className="setting-part">
            <Link to="edit">
              <img src="/img/Pencil_Edit.png" alt="editing" />
            </Link>
          </div>
          <MusicPageShow />
        </>
      ) : (
        <>
          {" "}
          <div className="setting-part"></div> <MusicPageShow />
        </>
      )}
    </>
  );
}

export default PlayermusicPage;
