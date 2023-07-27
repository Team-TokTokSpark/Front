import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MainBody } from "../Styles/HomePageStyle";
import { useRecoilState, useRecoilValue } from "recoil";
import { PlaylistInformation, authTokenState } from "../atom";
import { getPlaylistapi } from "../Services/PlayList/api";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading/Loading";

function MusicPage() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const playlistId = location.state?.userId;
  const token = useRecoilValue(authTokenState);
  const [playlist, setPlaylist] = useRecoilState(PlaylistInformation);
  const navigate = useNavigate();
  const getPlaylistInfo = async (token: string, playlistId: number) => {
    setIsLoading(true);
    const result = await getPlaylistapi(token, playlistId);
    setIsLoading(false);
    setPlaylist(result.data);
  };
  useEffect(() => {
    if (token === "") {
      alert("로그인을 진행해주세요");
      navigate("/");
    } else {
      getPlaylistInfo(token, playlistId);
    }
  }, [playlist.playlistSongs.length]);
  return isLoading ? (
    <Loading />
  ) : (
    <MainBody>
      <div className={`pageTheme${playlist.backgroundIdx}`}>
        <Outlet />
      </div>
    </MainBody>
  );
}

export default MusicPage;
