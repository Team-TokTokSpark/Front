import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { getFriendsList } from "./Services/FriendsList/api";

const { persistAtom } = recoilPersist();

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
//modal 영역 종료

export const authTokenState = atom({
  key: "authTokenState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

// export const friendsListSelector = selector({
//   key: "friendsListSelector",
//   get: async ({ get }) => {
//     try {
//       const friendsList = await getFriendsList();
//       return friendsList;
//     } catch (error) {
//       throw error;
//     }
//   },
//   set: ({ set }, newValue) => {
//     set(frinedsListState, newValue);
//   },
// });

export const userInformationState = atom({
  key: "userInformationState",
  default: {
    userId: null,
    nickname: null,
    introduce: null,
  },

  effects_UNSTABLE: [persistAtom],
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

export const ChangeMusicColor = atom<number>({
  key: "ChangeOrMakeMusicPageBackground",
  default: 1,
});

export const MakePageState = atom({
  key: "makePageState",
  default: {
    type: "playlist",
    title: "",
    background: 1,
  },
});

export const dotsIndexSelect = atom<number>({
  key: "dotsIndexSelect",
  default: 1,
});

export interface PlaylistProps {
  userName: string;
  message: string;
  imgIndex: string;
  song: {
    title: string;
    singer: string;
  };
}

export const PlaylistInformation = atom<PlaylistProps[]>({
  key: "playlistInfo",
  default: [
    {
      userName: "my1",
      message: "이건테스트용",
      imgIndex: "1",
      song: {
        title: "Hype boy",
        singer: "newJeans",
      },
    },
    {
      userName: "my2",
      message: "그래서 모든내용이 같음",
      imgIndex: "2",
      song: {
        title: "Hype boy",
        singer: "newJeans",
      },
    },
    {
      userName: "nina",
      message: "나중에 서버에 받으면 달라질거임",
      imgIndex: "8",
      song: {
        title: "Hype boy",
        singer: "newJeans",
      },
    },
    {
      userName: "emily",
      message: "일일이 쓰는게 어렵다",
      imgIndex: "7",
      song: {
        title: "Hype boy",
        singer: "newJeans",
      },
    },
    {
      userName: "other3",
      message: "이건테스트용",
      imgIndex: "11",
      song: {
        title: "Hype boy",
        singer: "newJeans",
      },
    },
    {
      userName: "brandon",
      message: "이것도테스트용",
      imgIndex: "12",
      song: {
        title: "Hype boy",
        singer: "newJeans",
      },
    },
    {
      userName: "emily23",
      message: "메시지확인",
      imgIndex: "2",
      song: {
        title: "Hype boy",
        singer: "newJeans",
      },
    },
    {
      userName: "my8",
      message: "안녕",
      imgIndex: "1",
      song: {
        title: "Hype boy",
        singer: "newJeans",
      },
    },
    {
      userName: "other9",
      message: "다른사람꺼",
      imgIndex: "3",
      song: {
        title: "Hype boy",
        singer: "newJeans",
      },
    },
    {
      userName: "my10",
      message: "힘들군",
      imgIndex: "5",
      song: {
        title: "Hype boy",
        singer: "newJeans",
      },
    },
    {
      userName: "other11",
      message: "지금현재는이런상태",
      imgIndex: "4",
      song: {
        title: "Hype boy",
        singer: "newJeans",
      },
    },
    {
      userName: "hailey",
      message: "이렇게 받아와야함 아니 근ㅔ 이거 엄청 길면 ",
      imgIndex: "6",
      song: {
        title: "Hype boy",
        singer: "newJeans",
      },
    },
    {
      userName: "my13",
      message: "계속해서 이럴예정",
      imgIndex: "7",
      song: {
        title: "Hype boy",
        singer: "newJeans",
      },
    },
    {
      userName: "my14",
      message: "흐음...well...",
      imgIndex: "2",
      song: {
        title: "Hype boy",
        singer: "newJeans",
      },
    },
  ],
});
