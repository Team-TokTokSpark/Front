import { useRecoilValue } from "recoil";
import { isNextModalView } from "../../atom";
import * as M from "./ModalStyle";
import FirstStepModal from "./FirstStepModal";
import SecondStepModal from "./SecondStepModal";

function StickerModal() {
  const nextPopupModal = useRecoilValue(isNextModalView);

  //붙이기에서 결국 첫번째모달 노래정보, 두번째모달 스티커,메모정보를 줘야하므로
  //리객체하나 만들어놓고 첫번째모달에서 두번째모달 넘어갈때 거기다가 리코일을통해 정보 넣어서 같이 사용하는 방향으로 설계함

  return (
    <M.BackgroundModal>
      <M.ModalPage>
        {!nextPopupModal ? <FirstStepModal /> : <SecondStepModal />}
      </M.ModalPage>
    </M.BackgroundModal>
  );
}

export default StickerModal;
