import axios from "axios";
import { jsonURL } from "../../Constants/jsonURL";

export const getFriendsList = async () => {
  try {
    const response = await axios(`${jsonURL}/friends`);
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

export const FollowToggle = async (userId: number, followerId: number) => {
  try {
    const response = await axios.post(`/users/follow/${userId}`, {
      followerId: followerId,
    });
    const data = await response.data;
    console.log(data);
  } catch (error) {
    throw error;
  }
};
