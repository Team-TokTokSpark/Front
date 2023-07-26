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
