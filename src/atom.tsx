import { atom } from "recoil";

export const popUpModal = atom({
  key: "popUpModal",
  default: false,
});

export const nextPopUpModal = atom({
  key: "nextPopUpModal",
  default: false,
});
