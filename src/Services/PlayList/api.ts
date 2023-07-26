import axios from "axios";
import { SERVER_URL } from "../../Constants/jsonURL";

// export const searchSong = async (token: string) => {
//   const response = await axios.get(`${SERVER_URL}/search/hypeboy`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   const data = await response.data;
//   console.log(data);
// };

export const searchMusicFunction = async (title: string, token: string) => {
  const response = await axios.get(`${SERVER_URL}/search/${title}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const getPlaylistapi = async (token: string, userid: number) => {
  const response = await axios.get(
    `${SERVER_URL}/playlists/playlist/all/${userid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response;
};

export type StickerProps = {
  playlistId: number;
  userId: number;
  token: string;
  artistName: string;
  title: string;
  imageUrl: string;
  imageIdx: number;
  message: string;
};

export const stickerMakeApi = async ({
  playlistId,
  userId,
  token,
  artistName,
  title,
  imageUrl,
  imageIdx,
  message,
}: StickerProps) => {
  const response = await axios.post(
    `${SERVER_URL}/playlists/${playlistId}/songs/${userId}`,
    {
      artistName,
      title,
      imageIdx,
      imageUrl,
      message,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response;
};
