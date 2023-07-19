import { useRecoilValue } from "recoil";
import { PlaylistInformation } from "../../atom";
import { MusicPlaylistWrapper } from "../../Styles/PlaylistStyle";
import { BodyWrapper } from "../../Styles/HomePageStyle";

const PlaylistMusic = () => {
  const playMusiclist = useRecoilValue(PlaylistInformation);
  return (
    <>
      <div className="blackSpace"></div>
      {playMusiclist.playlistSongs.map((e) => {
        return (
          <MusicPlaylistWrapper className="blankSpace">
            <img className="albumImg" src={e.albumImgsrc} alt="albumImg" />
            <BodyWrapper>
              <div className="title">{e.title}</div>
              <div className="artist">{e.artist}</div>
            </BodyWrapper>
          </MusicPlaylistWrapper>
        );
      })}
    </>
  );
};

export default PlaylistMusic;
