import axios from "axios";
import { SERVER_URL } from "../../Constants/jsonURL";

export const editStickApi = async (
  useridx: string,
  playlistId: number,
  token: string,
  playlistName: string,
  backgroundIdx: number
) => {
  const response = await axios.put(
    `${SERVER_URL}/playlist/${parseInt(useridx)}/${playlistId}`,
    {
      playlistName: playlistName,
      backgroundIdx: backgroundIdx,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response;
};

export const deletePlaylistSongApi = async (
  playlistid: number,
  playlistsongid: number,
  token: string
) => {
  const response = await axios.delete(
    `${SERVER_URL}/playlists/${playlistid}/${playlistsongid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response;
};

export const deletePlaylistApi = async (playlistid: number, token: string) => {
  const response = await axios.delete(`${SERVER_URL}/playlists/${playlistid}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
