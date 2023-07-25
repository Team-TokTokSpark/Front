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

export const messageModalAtom = atom({
  key: "messageModal",
  default: false,
});

export const MessageModalData = atom({
  key: "messageModalData",
  default: {
    title: "",
    artist: "",
    message: "",
  },
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
  playlistSongId: number;
  stickers: Array<stickerProps>;
  title: string;
  albumImageUrl: string;
  artist: string;
}

export interface stickerProps {
  stickerId: number;
  imgIdx: number;
  message: string;
}

export interface ListInfoProps {
  introduce: string;
  nickname: string;
  playlists: Array<mainPlaylistProps>;
}

export interface SongProps {
  artistName: string;
  title: string;
  albumName: string;
  imageUrl: string;
}

export interface mainPlaylistProps {
  type: string;
  playlistIdx: number;
  playlistName: string;
  backgroundIdx: number;
  userIdx: number;
  imageIdx: number;
}

export const UserListInfo = atom<ListInfoProps>({
  key: "userListInfo",
  default: {
    introduce: "자기소개 한 줄",
    nickname: "몰랑이",
    playlists: [
      {
        type: "playlist",
        playlistIdx: 1,
        playlistName: "hello",
        backgroundIdx: 0,
        userIdx: 2,
        imageIdx: 12,
      },
    ],
  },
});

export const PlaylistInformation = atom<PlaylistProps>({
  key: "playlistInfo",
  default: {
    userId: 0,
    nickname: "몰랑이",
    playlistId: 0,
    playlistName: "테스트",
    backgroundIdx: -1,
    playlistSongs: [
      {
        playlistSongId: 1,
        stickers: [
          {
            stickerId: 1,
            imgIdx: 4,
            message: "이건 테스트용",
          },
        ],
        title: "Hype boy",
        albumImageUrl: "/img/playlistTest.png",
        artist: "newJeans",
      },
      {
        playlistSongId: 2,
        stickers: [
          {
            stickerId: 2,
            imgIdx: 7,
            message: "그래서 모든내용이 같음",
          },
        ],
        title: "Cookie",
        albumImageUrl: "/img/playlistTest.png",
        artist: "newJeans",
      },
      {
        playlistSongId: 3,
        stickers: [
          {
            stickerId: 3,
            imgIdx: 8,
            message: "나중에 서버에 받으면 달라질거임",
          },
        ],
        title: "Attention",
        albumImageUrl: "/img/playlistTest.png",
        artist: "newJeans",
      },
      {
        playlistSongId: 4,
        stickers: [
          {
            stickerId: 4,
            imgIdx: 7,
            message: "일일이 쓰는게 어렵다",
          },
        ],
        title: "Hype boy",
        albumImageUrl: "/img/playlistTest.png",
        artist: "newJeans",
      },
      {
        playlistSongId: 5,
        stickers: [
          {
            stickerId: 5,
            imgIdx: 11,
            message: "이건테스트용",
          },
        ],
        title: "Hype boy",
        albumImageUrl: "/img/playlistTest.png",
        artist: "newJeans",
      },
    ],
  },
});
