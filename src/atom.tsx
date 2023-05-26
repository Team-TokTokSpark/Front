import { atom } from "recoil";

export const popUpModal = atom({
  key: "popUpModal",
  default: false,
});

export const nextPopUpModal = atom({
  key: "nextPopUpModal",
  default: false,
});

//지금 테스트용이라 location으로 일일이 할수가 없다..
export const MusicColor = atom<number>({
  key: "musicPageBackground",
  default: 1,
});
