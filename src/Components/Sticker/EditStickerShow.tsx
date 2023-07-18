import { BodyWrapper, LongContainerWrapper } from "../../Styles/HomePageStyle";
import EditStickerImg from "./EditStickerImg";
import { useRecoilValue } from "recoil";
import { PlaylistInformation } from "../../atom";

const EditStickerShow = () => {
  const sticker = useRecoilValue(PlaylistInformation);
  return (
    <BodyWrapper>
      <LongContainerWrapper>
        <div className="blackSpace"></div>
        {sticker.map((e, index) => {
          if (index % 5 === 3 || index % 5 === 4) {
            return (
              <EditStickerImg
                name={e.userName}
                message={e.message}
                stickerNum={e.imgIndex}
                even_item="even-item"
              />
            );
          } else {
            return (
              <>
                <EditStickerImg
                  name={e.userName}
                  message={e.message}
                  stickerNum={e.imgIndex}
                  even_item="item"
                />
              </>
            );
          }
        })}
      </LongContainerWrapper>
    </BodyWrapper>
  );
};

export default EditStickerShow;
