import { useRecoilValue } from "recoil";
import { PlaylistInformation } from "../../atom";
import {
  MusicBoxWrapper,
  MusicPlaylistWrapper,
} from "../../Styles/PlaylistStyle";

const PlaylistMusic = () => {
  const playMusiclist = useRecoilValue(PlaylistInformation);

  return (
    <>
      <div className="blackSpace"></div>
      {playMusiclist.playlistSongs.map((e, index) => (
        <MusicPlaylistWrapper key={index}>
          <img className="albumImg" src={e.albumImageUrl} alt="albumImg" />
          <MusicBoxWrapper>
            <div className="title">{e.title}</div>
            <div className="artist">{e.artist}</div>
          </MusicBoxWrapper>
        </MusicPlaylistWrapper>
      ))}
    </>
  );
};

export default PlaylistMusic;
