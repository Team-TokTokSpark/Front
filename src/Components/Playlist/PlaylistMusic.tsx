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
      {playMusiclist.playlistSongs.map((e) => {
        return (
          <MusicPlaylistWrapper className="blankSpace">
            <img className="albumImg" src={e.albumImgsrc} alt="albumImg" />
            <MusicBoxWrapper>
              <div className="title">{e.title}</div>
              <div className="artist">{e.artist}</div>
            </MusicBoxWrapper>
          </MusicPlaylistWrapper>
        );
      })}
    </>
  );
};

export default PlaylistMusic;
