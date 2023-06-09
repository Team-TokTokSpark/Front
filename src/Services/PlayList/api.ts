import axios from "axios";
import { SERVER_URL } from "../../Constants/jsonURL";

export const searchSong = async (token: string) => {
  const response = await axios.get(`${SERVER_URL}/search/hypeboy`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.data;
  console.log(data);
};
