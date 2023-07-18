import { useRecoilValue } from "recoil";
import { PlaylistInformation } from "../../atom";
import { MusicPlaylistWrapper } from "../../Styles/PlaylistStyle";
import { BodyWrapper } from "../../Styles/HomePageStyle";

const PlaylistMusic = () => {
  const playMusiclist = useRecoilValue(PlaylistInformation);
  return (
    <>
      <div className="blackSpace"></div>
      {playMusiclist.map((e) => {
        return (
          <MusicPlaylistWrapper className="blankSpace">
            <img
              className="albumImg"
              src="/img/playlistTest.png"
              alt="albumImg"
            />
            <BodyWrapper>
              <div className="title">{e.song.title}</div>
              <div className="artist">{e.song.singer}</div>
            </BodyWrapper>
          </MusicPlaylistWrapper>
        );
      })}
    </>
  );
};

export default PlaylistMusic;
