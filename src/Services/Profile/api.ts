import axios from "axios";
import { jsonURL } from "../../Constants/jsonURL";

export const getUserProfile = async () => {
  const response = await axios.get(`${jsonURL}/users`);
  const data = await response.data;
  return data;
};

//나중에  두개로 분리해서 만들어야함
// 1.설정에서 url:/settings/`${userid}
// 2.회원가입에서 url /users/description/{userid}
export const patchUserProfile = async (nickname: string, introduce: string) => {
  const response = await axios.patch(`${jsonURL}/users/1`, {
    nickname: nickname,
    introduce: introduce,
  });
  const data = await response.data;
  return data;
};

export const accountWithdrawal = async () => {
  const response = await axios.delete("/users/delete");
  const data = await response.data;
  return data;
};
