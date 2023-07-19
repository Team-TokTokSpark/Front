import { useNavigate } from "react-router-dom";
import { ContainerPage, ContainerWrapper } from "../../Styles/HomePageStyle";
import { MusicColor, mainPlaylistProps } from "../../atom";
import { useSetRecoilState } from "recoil";

function PageShow({ listInfo }: { listInfo: Array<mainPlaylistProps> }) {
  //제목, 이용자, 배경컬러, 스티커랜덤(일단은 지정으로 어차피 넘길 때 랜덤으로 줄 것이기 때문)
  const navigate = useNavigate();
  const pageColorNum = useSetRecoilState(MusicColor);
  return (
    <>
      <ContainerWrapper>
        <div className="blackSpace">
          <div></div>
        </div>
        {listInfo.map((e) => {
          if (e.userIdx === 1) {
            return (
              <ContainerPage
                onClick={() => {
                  navigate(`/page/myMusic/${e.userIdx}+${e.playlistName}`, {
                    state: {
                      userId: e.userIdx,
                      pageName: e.playlistName,
                    },
                  });
                  pageColorNum(e.backgroudIdx);
                }}
                className={`containerTheme${e.backgroudIdx}`}
              >
                {e.playlistName}
                <div
                  className="imgInput"
                  style={{
                    backgroundImage: `url(/img/sticker/sticker${e.imgIdx}.png)`,
                  }}
                />
              </ContainerPage>
            );
          } else {
            return (
              <ContainerPage
                onClick={() => {
                  navigate(`/page/otherMusic/${e.userIdx}+${e.playlistName}`, {
                    state: {
                      userId: e.userIdx,
                      pageName: e.playlistName,
                    },
                  });
                  pageColorNum(e.backgroudIdx);
                }}
                className={`containerTheme${e.backgroudIdx}`}
              >
                {e.playlistName}
                <div
                  className="imgInput"
                  style={{
                    backgroundImage: `url(/img/sticker/sticker${e.imgIdx}.png)`,
                  }}
                />
              </ContainerPage>
            );
          }
        })}
      </ContainerWrapper>
    </>
  );
}

export default PageShow;
