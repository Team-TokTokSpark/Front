import React from "react";
import { useRecoilValue } from "recoil";
import { PlaylistInformation } from "../../atom";
import { MusicMessageWrapper } from "../../Styles/PlaylistStyle";

const PlaylistMessage = () => {
  const Messagelist = useRecoilValue(PlaylistInformation);

  return (
    <>
      <div className="blackSpace"></div>
      {Messagelist.playlistSongs.map((e, index) => (
        <MusicMessageWrapper key={index}>
          {e.stickers[0].message}
        </MusicMessageWrapper>
      ))}
    </>
  );
};

export default PlaylistMessage;
