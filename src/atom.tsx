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
  userId: number;
  nickname: string;
  playlistId: number;
  playlistName: string;
  backgroundIdx: number;
  playlistSongs: Array<playlistSongsProps>;
}

export interface playlistSongsProps {
  stickerId: number;
  title: string;
  albumImgsrc: string;
  artist: string;
  message: string;
}

export interface ListInfoProps {
  introduce: string;
  nickname: string;
  playlists: Array<mainPlaylistProps>;
}

export interface mainPlaylistProps {
  type: string;
  postIdx: number;
  playlistName: string;
  backgroudIdx: number;
  userIdx: number;
  imgIdx: number;
}

export const UserListInfo = atom<ListInfoProps>({
  key: "userListInfo",
  default: {
    introduce: "자기소개 한 줄",
    nickname: "몰랑이",
    playlists: [
      {
        type: "playlist",
        postIdx: 1,
        playlistName: "hello",
        backgroudIdx: 0,
        userIdx: 2,
        imgIdx: 12,
      },
      {
        type: "playlist",
        postIdx: 2,
        playlistName: "niceTo",
        backgroudIdx: 3,
        userIdx: 1,
        imgIdx: 8,
      },
      {
        type: "playlist",
        postIdx: 3,
        playlistName: "music",
        backgroudIdx: 2,
        userIdx: 4,
        imgIdx: 2,
      },
      {
        type: "playlist",
        postIdx: 4,
        playlistName: "music",
        backgroudIdx: 3,
        userIdx: 5,
        imgIdx: 3,
      },
      {
        type: "playlist",
        postIdx: 5,
        playlistName: "muzik",
        backgroudIdx: 1,
        userIdx: 5,
        imgIdx: 4,
      },
      {
        type: "playlist",
        postIdx: 6,
        playlistName: "왜 많이 만들었지",
        backgroudIdx: 0,
        userIdx: 6,
        imgIdx: 5,
      },
      {
        type: "playlist",
        postIdx: 7,
        playlistName: "great",
        backgroudIdx: 1,
        userIdx: 8,
        imgIdx: 6,
      },
      {
        type: "playlist",
        postIdx: 8,
        playlistName: "내꺼",
        backgroudIdx: 2,
        userIdx: 1,
        imgIdx: 8,
      },
      {
        type: "playlist",
        postIdx: 9,
        playlistName: "샌디의 음악",
        backgroudIdx: 3,
        userIdx: 7,
        imgIdx: 10,
      },
      {
        type: "playlist",
        postIdx: 10,
        playlistName: "Nina의 취향",
        backgroudIdx: 1,
        userIdx: 4,
        imgIdx: 1,
      },
      {
        type: "playlist",
        postIdx: 11,
        playlistName: "비 올때 듣는",
        backgroudIdx: 0,
        userIdx: 11,
        imgIdx: 3,
      },
      {
        type: "playlist",
        postIdx: 12,
        playlistName: "Happy",
        backgroudIdx: 2,
        userIdx: 1,
        imgIdx: 4,
      },
      {
        type: "playlist",
        postIdx: 13,
        playlistName: "피곤해",
        backgroudIdx: 1,
        userIdx: 11,
        imgIdx: 11,
      },
      {
        type: "playlist",
        postIdx: 14,
        playlistName: "이제 마지막",
        backgroudIdx: 2,
        userIdx: 6,
        imgIdx: 6,
      },
    ],
  },
});

export const PlaylistInformation = atom<PlaylistProps>({
  key: "playlistInfo",
  default: {
    userId: 0,
    nickname: "",
    playlistId: 0,
    playlistName: "",
    backgroundIdx: -1,
    playlistSongs: [
      {
        stickerId: 1,
        title: "Hype boy",
        albumImgsrc: "/img/playlistTest.png",
        artist: "newJeans",
        message: "이건테스트용",
      },
      {
        stickerId: 2,
        title: "Cookie",
        albumImgsrc: "/img/playlistTest.png",
        artist: "newJeans",
        message: "그래서 모든내용이 같음",
      },
      {
        stickerId: 8,
        title: "Attention",
        albumImgsrc: "/img/playlistTest.png",
        artist: "newJeans",
        message: "나중에 서버에 받으면 달라질거임",
      },
      {
        stickerId: 7,
        title: "Hype boy",
        albumImgsrc: "/img/playlistTest.png",
        artist: "newJeans",
        message: "일일이 쓰는게 어렵다",
      },
      {
        stickerId: 11,
        title: "Hype boy",
        albumImgsrc: "/img/playlistTest.png",
        artist: "newJeans",
        message: "이건테스트용",
      },
      {
        stickerId: 12,
        title: "Hype boy",
        albumImgsrc: "/img/playlistTest.png",
        artist: "newJeans",
        message: "이것도테스트용",
      },

      {
        stickerId: 11,
        title: "Hype boy",
        albumImgsrc: "/img/playlistTest.png",
        artist: "newJeans",
        message: "메시지확인",
      },
      {
        stickerId: 1,
        title: "Hype boy",
        albumImgsrc: "/img/playlistTest.png",
        artist: "newJeans",
        message: "안녕",
      },
      {
        stickerId: 3,
        title: "Hype boy",
        albumImgsrc: "/img/playlistTest.png",
        artist: "newJeans",
        message: "다른사람꺼",
      },
      {
        stickerId: 5,
        title: "Hype boy",
        albumImgsrc: "/img/playlistTest.png",
        artist: "newJeans",
        message: "힘들군",
      },
      {
        stickerId: 4,
        title: "Hype boy",
        albumImgsrc: "/img/playlistTest.png",
        artist: "newJeans",
        message: "지금현재는이런상태",
      },
      {
        stickerId: 6,
        title: "Hype boy",
        albumImgsrc: "/img/playlistTest.png",
        artist: "newJeans",
        message: "이렇게 받아와야함 아니 근ㅔ 이거 엄청 길면 ",
      },
      {
        stickerId: 7,
        title: "Cookie",
        albumImgsrc: "/img/playlistTest.png",
        artist: "newJeans",
        message: "계속해서 이럴예정",
      },
      {
        stickerId: 2,
        title: "Attention",
        albumImgsrc: "/img/playlistTest.png",
        artist: "newJeans",
        message: "계속해서 이럴예정",
      },
    ],
  },
});
