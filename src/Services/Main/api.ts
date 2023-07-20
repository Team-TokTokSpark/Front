import axios from "axios";
import { SERVER_URL } from "../../Constants/jsonURL";

export const getMainApi = async (useridx: string, token: string) => {
  const response = await axios.get(
    `${SERVER_URL}/playlists/${parseInt(useridx)}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response;
};

export const MakePlaylistApi = async (
  userIdx: number,
  type: string,
  playlistName: string,
  backgroundIdx: number,
  token: string
) => {
  if (playlistName.length < 3) {
    return false;
  } else {
    const imageIdx = Math.floor(Math.random() * 12) + 1;
    const response = await axios.post(
      `${SERVER_URL}/playlists/page/${userIdx}`,
      {
        playlistName: playlistName,
        backgroundIdx: backgroundIdx,
        type: type,
        imageIdx: imageIdx,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response;
  }
};
