import { atom, selector } from "recoil";
import { jsonURL } from "./Constants/jsonURL";

export const popUpModal = atom({
  key: "popUpModal",
  default: false,
});

export const nextPopUpModal = atom({
  key: "nextPopUpModal",
  default: false,
});

export const authTokenState = atom({
  key: "authTokenState",
  default: null,
});

export const friendsListSelector = selector({
  key: "friendsListSelector",
  get: async () => {
    try {
      const response = await fetch(`${jsonURL}/frineds.json`);
      const data = await response.json();

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
