import axios from "axios";
import { SERVER_URL } from "../../Constants/jsonURL";

export const getUserInformation = async (token: string) => {
  const response = await axios.get(`${SERVER_URL}/users/info`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.data;
  return data;
};

export const putUserProfile = async (
  token: string,
  nickname: string,
  introduce: string,
  userId: string
) => {
  const response = await axios.put(
    `${SERVER_URL}/settings/${userId}`,
    {
      nickname: nickname,
      introduce: introduce,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await response.data;
  return data;
};

export const postUserProfile = async (
  userId: string,
  nickname: string,
  introduce: string,
  token: string
) => {
  const response = await axios.put(
    `${SERVER_URL}/users/description/${userId}`,
    {
      nickname: nickname,
      introduce: introduce,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await response.data;
  return data;
};

export const WithdrawalUser = async (token: string, userId: string) => {
  const response = await axios.delete(`${SERVER_URL}/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.data;
  return data;
};
