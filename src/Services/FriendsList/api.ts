import axios from "axios";
import { SERVER_URL } from "../../Constants/jsonURL";

export const getFriendsList = async (userId: string, token: string) => {
  try {
    const response = await axios.get(
      `${SERVER_URL}/users/myfriends/${userId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.data;

    return data;
  } catch (error) {
    throw error;
  }
};

// 이걸로 추후변경
// export const getFriendsList = async (userId: number) => {
//   try {
//     const response = await axios.get(`/users/myfriends/${userId}`);
//     const data = await response.data;
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

export const FollowToggle = async (
  userId: number,
  token: string,
  followerId: number
) => {
  try {
    const response = await axios.post(
      `${SERVER_URL}/users/follow/${userId}`,
      {
        followerId: followerId,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.data;
    console.log(data);
  } catch (error) {
    throw error;
  }
};
