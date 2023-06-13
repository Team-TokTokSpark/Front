import { atom, selector } from "recoil";
import { jsonURL } from "./Constants/jsonURL";
import axios from "axios";

//modal영역
export const isModalView = atom({
  key: "modalView",
  default: false,
});

export const isNextModalView = atom({
  key: "nextModalView",
  default: false,
});

export const modalData = atom({
  key: "modalData",
  default: {
    song: {
      title: "Hype boy",
      singer: "newJeans",
    },
    sticker: "",
    message: "",
  },
});

export const authTokenState = atom({
  key: "authTokenState",
  default: null,
});

export const friendsListSelector = selector({
  key: "friendsListSelector",
  get: async () => {
    try {
      const response = await axios(`${jsonURL}/friends`);
      const data = await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  },
  set: ({ set }, newValue) => {
    set(frinedsListState, newValue);
  },
});

export const frinedsListState = atom<Array<object>>({
  key: "friendsList",
  default: [],
});

//지금 테스트용이라 location으로 일일이 할수가 없다..
export const MusicColor = atom<number>({
  key: "musicPageBackground",
  default: 1,
});
