import axios from "axios";
import { SERVER_URL } from "../../Constants/jsonURL";

export const postRecordContent = async (
  token: string,
  playlistId: string,
  content: string
) => {
  const response = await axios.patch(
    `${SERVER_URL}/playlists/record/${playlistId}/content`,
    {
      content: content,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await response.data;
  return data;
};
