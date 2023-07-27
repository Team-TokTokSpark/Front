import { useNavigate } from "react-router-dom";
import { ContainerPage, ContainerWrapper } from "../../Styles/HomePageStyle";
import { MusicColor, mainPlaylistProps } from "../../atom";
import { useSetRecoilState } from "recoil";

function PageShow({ listInfo }: { listInfo: Array<mainPlaylistProps> }) {
  const navigate = useNavigate();
  const pageColorNum = useSetRecoilState(MusicColor);

  return (
    <>
      <ContainerWrapper>
        <div className="blackSpace">
          <div></div>
        </div>
        {listInfo === undefined
          ? null
          : listInfo.map((e) => (
              <ContainerPage
                key={e.playlistIdx} // Provide a unique key for each element
                onClick={() => {
                  if (e.type === "playlist") {
                    navigate(`/page/${e.playlistIdx}`, {
                      state: {
                        userId: e.userIdx,
                        playlistIdx: e.playlistIdx,
                      },
                    });
                    pageColorNum(e.backgroundIdx);
                  } else {
                    navigate(`/record/${e.playlistIdx}`, {
                      state: {
                        userId: e.userIdx,
                        playlistIdx: e.playlistIdx,
                      },
                    });
                  }
                }}
                className={`containerTheme${e.backgroundIdx}`}
              >
                {e.playlistName}
                <div
                  className="imgInput"
                  style={{
                    backgroundImage: `url(/img/sticker/sticker${e.imageIdx}.png)`,
                  }}
                />
              </ContainerPage>
            ))}
      </ContainerWrapper>
    </>
  );
}

export default PageShow;
