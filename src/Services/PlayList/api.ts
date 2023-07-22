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

export const getPlaylistapi = async (token: string) => {
  const response = await axios.get(``, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
