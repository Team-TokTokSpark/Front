import StickerShow from "../Components/StickerShow";
import { EditStickerButton } from "../Styles/HomePageStyle";

function MymusicPage() {
  return (
    <div>
      <StickerShow />
      <EditStickerButton>
        스티커
        <br />
        편집
      </EditStickerButton>
    </div>
  );
}

export default MymusicPage;
