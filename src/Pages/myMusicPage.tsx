import { useState } from "react";
import { useLocation } from "react-router-dom";
import { EditStickerButton } from "../Styles/HomePageStyle";

function MymusicPage() {
  return (
    <div>
      <EditStickerButton>
        스티커
        <br />
        편집
      </EditStickerButton>
    </div>
  );
}

export default MymusicPage;
